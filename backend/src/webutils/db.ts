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
    async addUser(username: string, password: string, age: number, phone: number) {
        try {
            await this.User.create({
                username,
                password,
                age,
                phone
            });

            console.log('User added successfully.');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    }

    async checkUser(username: string, password: string) {
        const user = await this.User.findOne({ username, password });
        return (user) ? true : false;
    }
}