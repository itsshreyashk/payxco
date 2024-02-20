import mongoose from "mongoose";

export default class DB {
    private User;
    constructor() {
        mongoose.connect('mongodb://localhost:27017/payxco');
        const userSchema = new mongoose.Schema({
            username: String,
            password: String,
            age: Number,
            phone: Number,
            email: String,
        });
        this.User = mongoose.model('User', userSchema);
    }
    async addUser(username: string, password: string, age: number, phone: number, email: string) {
        try {
            await this.User.create({
                username: username,
                password: password,
                age: age,
                phone: phone,
                email: email,
            });
        } catch (err: any) {
            console.error('Error adding user:', err);
        }
    }
    async removeUser(username: string, password: string) {
        try {
            if (await this.checkUser(username, password)) {
                await this.User.deleteOne({ username: username });
            } else {
                console.error('User not found.');
            }
        } catch (err: any) {
            console.error('Error removing user:', err);
        }
    }
    async checkUser(username: string, password: string): Promise<boolean> {
        const user: any = await this.User.findOne({ username, password });
        return (user) ? true : false;
    }
    async sendUserData(username: string, password: string): Promise<any> {
        if (await this.checkUser(username, password)) {
            const user = await this.User.findOne({ username, password });
            return { user }
        } else {
            return null;
        }
    }
}