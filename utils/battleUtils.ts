import { string } from "joi";
import fighterRepository from "../repositories/fighterRepository.js";
import HttpError from "./errors.js";
import GitHubApi from "./gitHubApi.js";

export async function getAllStargazersCount(username: string) {
    try {
        const promise = await GitHubApi.getUserRepositoriesInfo(username);
        const userRepositoresInfo = promise.data;
        const stargazersCounts = userRepositoresInfo.map(repo => Number(repo.stargazers_count) || 0);
        return stargazersCounts;
    } catch (error) {
        throw new HttpError(error.response.status, error.response.statusText);
    }
}

export async function registerNewFighter(fighter: string) {
    const result = await fighterRepository.selectFighterByUsername(fighter);
    if (result.rowCount === 0) {
        await fighterRepository.insertNewFighter(fighter);
    }
}