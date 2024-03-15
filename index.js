import dotenv from "dotenv/config";
if(process.env.NODE_ENV === "production") { dotenv}

import { dbconnection } from "./src/config/database.js";
import Servidor from "./src/server.js";

async function main() {
    const server = new Servidor()
    server.listen()
    await dbconnection()
}; main()