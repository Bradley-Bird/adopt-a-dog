import { useState, useEffect } from 'react';
import { getDogs } from '../services/dogs';
import HomeDog from '../components/HomeDog';

function Home() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDogs();
        setDogs(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  error && <p>{error}</p>;
  return <HomeDog {...{ dogs }} />;
}

export default Home;
