import express from "express";
import { Server as WebSocketServer } from "socket.io";

import http from "http";
import path from "path";

import socket from "./socket.js";

export default class Servidor {
    constructor() {
        this.port = process.env.PORT || 4000;

        this.app = express();
        this.server = http.createServer(this.app);
        this.io = new WebSocketServer(this.server);
        socket(this.io);

        this.middlewares()
    }

    middlewares(){
        this.app.use(express.static(path.resolve('src/public')));
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log(`Servidor a su servicio en el puerto ${this.port}`);
        });
    }
}