import { Request, Response } from "express";
import battleService from "../services/battleService.js";

export async function battle(req: Request, res: Response) {
    const { firstUser, secondUser }: { firstUser: string, secondUser: string } = req.body;
    const battleResult = await battleService.battle(firstUser, secondUser);
    res.status(200).send(battleResult);
}