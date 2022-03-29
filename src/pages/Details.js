import { useEffect, useState } from 'react';
import DogDetail from '../components/DogDetail';
import { getDogById } from '../services/dogs';
import { useParams, Link } from 'react-router-dom';

function Details() {
  const [dog, setDog] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params]);

  return (
    <div>
      <DogDetail {...{ dog }} />
      <Link to={`${params.id}/edit`}>Edit</Link>
    </div>
  );
}

export default Details;
