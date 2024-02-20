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
            data: {
                creds: {
                    balance: Number,
                    credit: Number,
                }
            }
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
        } catch (error) {
            console.error('Error adding user:', error);
        }
    }

    async checkUser(username: string, password: string) {
        const user: any = await this.User.findOne({ username, password });
        return (user) ? true : false;
    }
}