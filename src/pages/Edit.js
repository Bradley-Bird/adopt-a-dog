import { useEffect, useState } from 'react';
import { getDogById, updateDog } from '../services/dogs';
import { useParams, useHistory } from 'react-router-dom';
import DogForm from '../components/DogForm';

function Edit() {
  const history = useHistory();
  const params = useParams();
  const [dog, setDog] = useState({ name: '', bio: '', age: '', breed: '', image: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDogById(params.id);
        setDog(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [params]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDog(params.id, dog);
    history.push('dogs/:id');
  };
  loading && <p>Loading...</p>;
  error && <p>{error}</p>;
  return (
    <div>
      <DogForm {...{ dog, setDog, handleUpdate }} edit={true} />
    </div>
  );
}

export default Edit;
