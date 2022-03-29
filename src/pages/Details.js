import { useEffect, useState } from 'react';
import DogDetail from '../components/DogDetail';
import { getDogById, deleteDog } from '../services/dogs';
import { useParams, Link, useHistory } from 'react-router-dom';

function Details() {
  const history = useHistory();
  const [dog, setDog] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params]);

  const handleDelete = async () => {
    await deleteDog(params.id);
    history.push('/dogs');
  };

  return (
    <div>
      <DogDetail {...{ dog }} />
      <Link to={`${params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Details;
