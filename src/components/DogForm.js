import React from 'react';

function DogForm({ dog, name, bio, age, breed, image, setDog }) {
  const updateDog = (att, val) => {
    const newDog = { ...dog, [att]: val };
    setDog(newDog);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => updateDog('name', e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => updateDog('age', e.target.value)}
        />
        <input
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={(e) => updateDog('bio', e.target.value)}
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => updateDog('breed', e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => updateDog('image', e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default DogForm;
