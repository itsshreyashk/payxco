"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./webutils/db"));
const secure_1 = __importDefault(require("./webutils/secure"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const SMANAGER = new secure_1.default();
const MDB = new db_1.default();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http:localhost:3000",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
