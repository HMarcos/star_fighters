import fighterRepository from "../repositories/fighterRepository.js";
import { getAllStargazersCount, registerNewFighter } from "../utils/battleUtils.js";

async function battle(firstUser: string, secondUser: string) {
    const firstUserStargazersCount = await getAllStargazersCount(firstUser);
    const secondUserStargazersCount = await getAllStargazersCount(secondUser);
    
    await registerNewFighter(firstUser);
    await registerNewFighter(secondUser);

    const firstUserStargazersSum = firstUserStargazersCount.reduce(
        (partialSum: number, num: number) => partialSum + num, 0) || 0;

    const secondUserStargazersSum = secondUserStargazersCount.reduce(
        (partialSum: number, num: number) => partialSum + num, 0) || 0;

    let winner = null;
    let loser = null;
    let draw = false;

    if (firstUserStargazersSum > secondUserStargazersSum) {
        winner = firstUser;
        loser = secondUser;
        await fighterRepository.incrementUserWins(firstUser);
        await fighterRepository.incrementUserLosses(secondUser);
    }
    else if (secondUserStargazersSum > firstUserStargazersSum ) {
        winner = secondUser;
        loser = firstUser;
        await fighterRepository.incrementUserWins(secondUser);
        await fighterRepository.incrementUserLosses(firstUser);
    }
    else {
        draw = true;
        await fighterRepository.incrementUserDraws(firstUser);
        await fighterRepository.incrementUserDraws(secondUser);
    }

    const result = {
        winner,
        loser,
        draw
    }

    return result;
}

const battleService = {
    battle
}

export default battleService;