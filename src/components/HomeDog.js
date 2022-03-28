import React from 'react';

function HomeDog({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <p key={dog.id}>{dog.name}</p>
      ))}
    </div>
  );
}

export default HomeDog;
