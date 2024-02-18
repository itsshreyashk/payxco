"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http:localhost:3000",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
app.get('/', (req, res) => {
    res.send("<h1>Server is up and running</h1>");
});
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
