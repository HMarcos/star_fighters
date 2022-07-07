import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}...`);
})