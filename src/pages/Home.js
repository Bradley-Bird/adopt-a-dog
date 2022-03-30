import { useState, useEffect } from 'react';
import { getDogs } from '../services/dogs';
import HomeDog from '../components/HomeDog';

function Home() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDogs();
        setDogs(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error}</p>;
  }
  return <HomeDog {...{ dogs }} />;
}

export default Home;
