import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../services/auth';

function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      {error && <p>{error}</p>}
      <div>
        <h4>
          <span>Sign In</span>
        </h4>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
}

export default Auth;
