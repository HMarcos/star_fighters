import db from "../config/db.js";

function insertNewFighter(fighter: string) {
    const query = `INSERT INTO fighters(username, wins, losses, draws) 
    VALUES ($1, $2, $3, $4);`;

    const values = [fighter, 0, 0, 0];

    return db.query(query, values);
};

function incrementUserWins(fighter: string) {
    const query = `UPDATE fighters
    SET wins = wins + 1
    WHERE username=$1;`;

    const values = [fighter];

    return db.query(query, values);
}

function incrementUserLosses(fighter: string) {
    const query = `UPDATE fighters
    SET losses = losses + 1
    WHERE username=$1;`;

    const values = [fighter];

    return db.query(query, values);
}

function incrementUserDraws(fighter: string) {
    const query = `UPDATE fighters
    SET draws = draws + 1
    WHERE username=$1;`;

    const values = [fighter];

    return db.query(query, values);
}

function selectFighterByUsername(fighter: string) {
    const query = `SELECT * FROM fighters
    WHERE username = $1`;

    const values = [fighter];

    return db.query(query, values);
}

function selectRanking() {
    const query = `SELECT username, wins, losses, draws FROM fighters
    ORDER BY wins DESC, draws DESC;`;

    return db.query(query);
}

const fighterRepository = {
    insertNewFighter,
    incrementUserWins,
    incrementUserLosses,
    incrementUserDraws,
    selectFighterByUsername,
    selectRanking
}

export default fighterRepository;