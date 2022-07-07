import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import HttpError from "./../utils/errors.js";

function valiteSchema(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log('executando...');
        const battle = req.body;
        const schemaValidation = schema.validate(battle, { abortEarly: false });
        if (schemaValidation.error) {
            const validationErros = schemaValidation.error.details.map(detail => detail.message);
            const validationErrosFormated = validationErros.join('\n');
            throw new HttpError(422, validationErrosFormated);
        }
        next();
    }
};

export default valiteSchema;