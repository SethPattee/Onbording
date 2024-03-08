import axios from 'axios';

export const fetchPeople = async (page: number) => {
    const response = await axios.get(`https://www.swapi.tech/api/people?page=${page}`);
    return response.data;
};

export const fetchShips = async (page: number) => {
    const response = await axios.get(`https://www.swapi.tech/api/starships?page=${page}`);
    return response.data;
};
