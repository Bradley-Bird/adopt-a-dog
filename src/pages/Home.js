import { useState, useEffect } from 'react';
import { getDogs } from '../services/dogs';

function Home() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogs();
      setDogs(data);
    };
    fetchData();
  }, []);

  return <div>Home</div>;
}

export default Home;
