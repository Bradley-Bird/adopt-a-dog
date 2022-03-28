import { useState } from 'react';
import { createDog } from '../services/dogs';
import DogForm from '../components/DogForm';

function New() {
  const [dog, setDog] = useState({ name: '', bio: '', age: null, breed: '', image: '' });
  const createNewDog = async (e) => {
    e.preventDefault();
    await createDog(dog);
  };
  return (
    <div>
      <DogForm {...{ dog, setDog, createNewDog }} />
    </div>
  );
}

export default New;
