import dotenv from "dotenv/config";
if(process.env.NODE_ENV === "production") { dotenv }

import { dbconnection } from "./src/config/database.js";
import Servidor from "./src/server.js";

const server = new Servidor()

async function main() {
    await server.listen()
    await dbconnection()
}; main()