import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/jsonstore/games';

const getAll = async () => {
    const result = await request.get(BASE_URL);
    const games = Object.values(result);
    return games;
};

const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);



const create = async (gameData) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            "Content-type": 'Application/json'
        },
        body: JSON.stringify(gameData)
    });
    const result = await response.json();
    return result;

};

const gamesAPI = {
    getAll,
    getOne,
    create
};

export default gamesAPI;