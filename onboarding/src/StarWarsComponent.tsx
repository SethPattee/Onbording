import React from 'react';
import { usePeople, useShips } from './starwarsHook';
import { Person, Ship } from './types';

const StarWarsComponent: React.FC = () => {
  const peopleQuery1 = usePeople(1);
  const peopleQuery2 = usePeople(2);
  const shipsQuery1 = useShips(1);
  const shipsQuery2 = useShips(2);

  if (
    peopleQuery1.isLoading ||
    peopleQuery2.isLoading ||
    shipsQuery1.isLoading ||
    shipsQuery2.isLoading
  ) {
    return <div className="container">Loading...</div>;
  }

  if (
    peopleQuery1.isError ||
    peopleQuery2.isError ||
    shipsQuery1.isError ||
    shipsQuery2.isError
  ) {
    return <div className="container">Error fetching data</div>;
  }

  const allPeople: Person[] = [...(peopleQuery1.data as Person[]), ...(peopleQuery2.data as Person[])].slice(0, 20);
  const allShips: Ship[] = [...(shipsQuery1.data as Ship[]), ...(shipsQuery2.data as Ship[])].slice(0, 20);
  
  return (
    <div className="container mt-5">
      <h2 className="mb-4">People:</h2>
      <div className="row">
        {allPeople.map((person: Person, index: number) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">Height: {person.height}</p>
                <p className="card-text">Mass: {person.mass}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-5 mb-4">Ships:</h2>
      <div className="row">
        {allShips.map((ship: Ship, index: number) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ship.name}</h5>
                <p className="card-text">Model: {ship.model}</p>
                <p className="card-text">Manufacturer: {ship.manufacturer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarWarsComponent;
