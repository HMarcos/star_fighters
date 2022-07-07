import { Request, Response } from "express";
import rankingService from "../services/rankingService.js";

export async function getRanking(req: Request, res: Response) {
    const ranking = await rankingService.getRanking();
    res.status(200).send(ranking);
}