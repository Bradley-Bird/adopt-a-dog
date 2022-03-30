import { useEffect, useState } from 'react';
import DogDetail from '../components/DogDetail';
import { getDogById, deleteDog } from '../services/dogs';
import { useParams, Link, useHistory } from 'react-router-dom';

function Details({ currentUser }) {
  const history = useHistory();
  const [dog, setDog] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDogById(params.id);
        setDog(data);
        setLoading(true);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [params]);

  const handleDelete = async () => {
    try {
      await deleteDog(params.id);
      history.push('/dogs');
    } catch (e) {
      setError('something went wrong, please try again.');
    }
  };

  loading && <p>Loading...</p>;

  return (
    <div>
      {error && <p>{error}</p>}
      <DogDetail {...{ dog }} />
      {currentUser && (
        <>
          <Link to={`${params.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Details;
