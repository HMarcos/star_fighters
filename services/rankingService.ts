import fighterRepository from "../repositories/fighterRepository.js";

async function getRanking() {
    const ranking = (await fighterRepository.selectRanking()).rows;

    return {
        fighters: ranking,
    };
}

const rankingService = {
    getRanking
};

export default rankingService;