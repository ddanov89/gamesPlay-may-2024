import { useEffect, useState } from "react";
import gamesAPI from "../api/games-api";



export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // gamesAPI.getAll().then((result) => setGames(result));
        (async () => {
            const result = await gamesAPI.getAll();
            setGames(result);
        })();
    }, []);
    return [games, setGames];
}

export function useGetOneGame(gameId) {
    const [game, setGame] = useState("");

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getOne(gameId);
            setGame(result);
        })();
    }, [gameId]);
    return [game, setGame];
}

export function use(params) {
    
}