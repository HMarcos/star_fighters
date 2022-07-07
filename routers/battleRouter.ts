import { Router } from "express";
import { battle } from "../controllers/battleController.js";
import valiteSchema from "../middlewares/schemaValidationMiddleware.js";
import battleSchema from "../schemas/battleSchema.js";

const battleRouter = Router();

battleRouter.post("/battle", valiteSchema(battleSchema), battle);

export default battleRouter;