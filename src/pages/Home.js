import { useState, useEffect } from 'react';
import { getDogs } from '../services/dogs';
import HomeDog from '../components/HomeDog';

function Home() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDogs();
        setDogs(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchData();
  }, []);

  return <HomeDog {...{ dogs }} />;
}

export default Home;
