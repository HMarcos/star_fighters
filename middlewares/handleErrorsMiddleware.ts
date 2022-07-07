import { NextFunction, Request, Response } from "express";
import HttpError from "./../utils/errors.js";

function handleErrors(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    
    if (error instanceof HttpError) {
        return res.status(error.status).send(error.message);
    }

    return res.status(500).send("Internal Server Error!");
}

export default handleErrors;