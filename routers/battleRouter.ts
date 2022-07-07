import { Request, Response, Router } from "express";
import valiteSchema from "../middlewares/schemaValidationMiddleware.js";
import battleSchema from "../schemas/battleSchema.js";

import db from "../config/db.js";

const battleRouter = Router();

battleRouter.post("/battle", valiteSchema(battleSchema), async (req: Request, res: Response) => {
    console.log('Processando a batalha');
    const result = await db.query(`SELECT * FROM fighters`);
    console.log("Resultado: ", result.rows);
    res.sendStatus(200);
})

export default battleRouter;