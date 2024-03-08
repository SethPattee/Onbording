import axios from 'axios';
import { Person, Ship } from './types';

export const fetchPeople = async (page: number): Promise<any> => {
  const response = await axios.get(`https://swapi.tech/api/people/?page=${page}`);
  return response.data.results as Person[];
};

export const fetchShips = async (page: number): Promise<any> => {
  const response = await axios.get(`https://swapi.tech/api/starships/?page=${page}`);
  return response.data.results as Ship[];
};

