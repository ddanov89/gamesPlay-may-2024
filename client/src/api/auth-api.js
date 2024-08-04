import requester from "./requester";

const BASE_URL = 'http://localhost:3030/users';


/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const login = (email, password) => {
    const authData = requester.post(`${BASE_URL}/login`, { email, password });

    return authData;
};

export const register = (email, password) => {
    const authData = requester.post(`${BASE_URL}/register`, { email, password });

    return authData;
};