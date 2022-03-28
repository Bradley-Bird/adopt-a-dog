import { useEffect, useState } from 'react';
import DogForm from '../components/DogForm';

function New() {
  const [dog, setDog] = useState({ name: '', bio: '', age: null, breed: '', image: '' });
  return (
    <div>
      <DogForm {...{ dog, setDog }} />
    </div>
  );
}

export default New;
