import { useEffect, useState } from 'react';
import { getDogById, updateDog } from '../services/dogs';
import { useParams } from 'react-router-dom';
import DogForm from '../components/DogForm';

function Edit() {
  const params = useParams();
  const [dog, setDog] = useState({ name: '', bio: '', age: '', breed: '', image: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
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
    setSuccess(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {error && <p>{error}</p>}
      {success && <p>Update successfully saved!</p>}
      <DogForm {...{ dog, setDog, handleUpdate }} edit={true} />
    </div>
  );
}

export default Edit;
