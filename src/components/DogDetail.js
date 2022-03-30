import React from 'react';

function DogDetail({ dog: { name, bio, age, breed, image } }) {
  return (
    <>
      <div>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>age:{age}</p>
        <p>breed: {breed}</p>
        <p>{bio}</p>
      </div>
    </>
  );
}

export default DogDetail;
