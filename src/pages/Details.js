import { useEffect, useState } from 'react';
import DogDetail from '../components/DogDetail';
import { getDodById } from '../services/dogs';
import { useParams } from 'react-router-dom';

function Details() {
  const [dog, setDog] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDodById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params]);

  return (
    <div>
      <DogDetail {...{ dog }} />
    </div>
  );
}

export default Details;
