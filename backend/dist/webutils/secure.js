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
Object.defineProperty(exports, "__esModule", { value: true });
class SessionManager {
    constructor() {
        this.sessions = [];
    }
    getUniqueId() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
            let ID = '';
            const idealLength = 20;
            for (let i = 0; i < idealLength; i++) {
                ID += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return ID;
        });
    }
    addSession(id, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.sessions.push({
                    id: id,
                    username: username,
                    password: password,
                });
            }
            catch (err) {
                console.log(`Unable to add id : ${id}`);
            }
        });
    }
    getSessionData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const session = this.sessions.find(session => session.id === id);
                if (session) {
                    return { username: session.username, password: session.password };
                }
                else {
                    return null; // Or handle the case where the session is not found
                }
            }
            catch (err) {
                return null;
            }
        });
    }
    removeSession(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.sessions = this.sessions.filter(session => session.id !== id);
            }
            catch (err) {
                console.log(`Unable to delete id : ${id}`);
            }
        });
    }
}
exports.default = SessionManager;
