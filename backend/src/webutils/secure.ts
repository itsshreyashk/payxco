interface Session {
    id: string,
    username: string,
    password: string,
}
export default class SessionManager {
    private sessions: Session[];
    constructor() {
        this.sessions = [];
    }
    async getUniqueId(): Promise<string> {
        const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let ID: string = '';
        const idealLength: number = 30;
        for (let i = 0; i < idealLength; i++) {
            ID += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return ID;
    }
    async addSession(id: string, username: string, password: string): Promise<void> {
        try {
            this.sessions.push({
                id: id,
                username: username,
                password: password,
            });
        } catch (err: any) {
            console.log(`Unable to add id : ${id}`);
        }

    }
    async getSessionData(id: string): Promise<any> {
        try {
            const session: any = this.sessions.find(session => session.id === id);
            if (session) {
                return { username: session.username, password: session.password };
            } else {
                return null; // Or handle the case where the session is not found
            }
        } catch (err: any) {
            return null;
        }
    }
    async removeSession(id: string) {
        try {
            this.sessions = this.sessions.filter(session => session.id !== id);
        } catch (err: any) {
            console.log(`Unable to delete id : ${id}`);
        }
    }
}
