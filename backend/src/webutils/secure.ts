import Redis from 'ioredis';

const redis = new Redis();

export default class SessionManager {
    private id: string;
    private TTL_SECONDS: number = 7 * 24 * 60 * 60; // 7 days in seconds

    constructor(id: string) {
        this.id = id;
    }

    async addSession(username: string, password: string): Promise<boolean> {
        try {
            await redis.hmset(this.id, 'username', username, 'password', password);
            await redis.expire(this.id, this.TTL_SECONDS);
            return true;
        } catch (err: any) {
            console.log(`There is an error ${err.message}`);
            return false;
        }
    }

    async isSessionExist(): Promise<boolean> {
        const exists = await redis.exists(this.id);
        return exists === 1;
    }

    async getSessionData(): Promise<{ username: string, password: string } | null> {
        try {
            const exists = await redis.exists(this.id);
            if (exists === 1) {
                const userData = await redis.hmget(this.id, 'username', 'password');
                if (userData[0] && userData[1]) {
                    return { username: userData[0], password: userData[1] };
                } else {
                    console.log(`Error retrieving user data for session ID "${this.id}" from Redis hash`);
                    return null;
                }
            } else {
                console.log(`Session ID "${this.id}" does not exist in the Redis hash`);
                return null;
            }
        } catch (err: any) {
            console.log(`There is an error ${err.message}`);
            return null;
        }
    }

    async removeSession(): Promise<boolean> {
        try {
            const removed = await redis.del(this.id);
            return true;
        } catch (err: any) {
            console.log(`There is an error ${err.message}`);
            return false;
        }
    }
}