import { useQuery } from '@tanstack/react-query';
import { fetchPeople, fetchShips } from './starwarsService';

export const usePeople = (page: number) => {
  return useQuery(['people', page], () => fetchPeople(page));
};

export const useShips = (page: number) => {
  return useQuery({
    queryKey: ["ships"],
    queryFn: async () => await fetchShips(page) 
  });
};
