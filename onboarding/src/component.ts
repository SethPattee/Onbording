import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPeople, fetchShips } from './apiService';

const MyComponent: React.FC = () => {
    const peopleQuery = useQuery('people', () => fetchPeople(1), {
        staleTime: 60000, // 1 minute
    });

    const shipsQuery = useQuery('ships', () => fetchShips(1), {
        staleTime: 60000, // 1 minute
    });

    if (peopleQuery.isLoading || shipsQuery.isLoading) {
        return <div>Loading...</div>;
    }

    if (peopleQuery.isError || shipsQuery.isError) {
        return <div>Error fetching data</div>;
    }

    const people = peopleQuery.data?.results;
    const ships = shipsQuery.data?.results;

    return (
        <div>
            <h1>People</h1>
            <ul>
                {people?.map((person: any) => (
                    <li key={person.uid}>{person.name}</li>
                ))}
            </ul>
            <h1>Ships</h1>
            <ul>
                {ships?.map((ship: any) => (
                    <li key={ship.uid}>{ship.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
