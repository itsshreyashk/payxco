"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DB {
    constructor() {
        mongoose_1.default.connect('mongodb://localhost:27017/payxco');
        const userSchema = new mongoose_1.default.Schema({
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
        this.User = mongoose_1.default.model('User', userSchema);
    }
    addUser(username, password, age, phone, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.User.create({
                    username: username,
                    password: password,
                    age: age,
                    phone: phone,
                    email: email,
                });
            }
            catch (error) {
                console.error('Error adding user:', error);
            }
        });
    }
    checkUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.User.findOne({ username, password });
            return (user) ? true : false;
        });
    }
}
exports.default = DB;
