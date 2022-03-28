import React from 'react';
import { Link } from 'react-router-dom';

function HomeDog({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <p>{dog.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default HomeDog;
