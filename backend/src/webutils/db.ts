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
            data: {
                balance: Number,
                credit: Number,
            }
        });
        this.User = mongoose.model('User', userSchema);
    }
    async checkUser(username: string, password: string) {
        const user = await this.User.findOne({ username, password });
        return (user) ? true : false;
    }
    
}