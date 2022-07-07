import { Request, Response, Router } from "express";
import valiteSchema from "../middlewares/schemaValidationMiddleware.js";
import battleSchema from "../schemas/battleSchema.js";

const battleRouter = Router();

battleRouter.post("/battle", valiteSchema(battleSchema), (req: Request, res: Response) => {
    console.log('Processando a batalha');
})

export default battleRouter;