import express, { Application, json, Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
//File imports
import DB from './webutils/db';
import SessionManager from './webutils/secure';

dotenv.config();
const app: Application = express();
const server: http.Server = http.createServer(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;
// Middleware
app.use(express.json());
app.use(cors({
    origin: "http:localhost:3000",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Server is up and running</h1>");
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});