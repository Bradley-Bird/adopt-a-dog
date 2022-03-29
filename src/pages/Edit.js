import { useEffect, useState } from 'react';
import { getDogById, updateDog } from '../services/dogs';
import { useParams, useHistory } from 'react-router-dom';
import DogForm from '../components/DogForm';

function Edit() {
  const history = useHistory();
  const params = useParams();
  const [dog, setDog] = useState({ name: '', bio: '', age: '', breed: '', image: '' });
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDog(params.id, dog);
    history.push('dogs/:id');
  };

  return (
    <div>
      <DogForm {...{ dog, setDog, handleUpdate }} edit={true} />
    </div>
  );
}

export default Edit;
