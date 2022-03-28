import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createDog } from '../services/dogs';
import DogForm from '../components/DogForm';

function New() {
  const [dog, setDog] = useState({ name: '', bio: '', age: null, breed: '', image: '' });
  const [error, setError] = useState('');

  const history = useHistory();

  const createNewDog = async (e) => {
    try {
      e.preventDefault();
      await createDog(dog);
      history.push('/dogs');
    } catch (e) {
      setError(e.message);
    }
  };
  error && <p>{error}</p>;
  return (
    <div>
      <DogForm {...{ dog, setDog, createNewDog }} />
    </div>
  );
}

export default New;
