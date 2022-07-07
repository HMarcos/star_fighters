import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routers/index.js";
import handleErros from "./middlewares/handleErrorsMiddleware.js";
import db from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(handleErros);

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})