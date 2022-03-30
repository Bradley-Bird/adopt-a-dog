import { useState } from 'react';
import { signInUser } from '../services/auth';

function Auth(setCurrentUser) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const resp = await signInUser();
  };
  return (
    <div>
      <h4>
        <span>Sign In</span>
      </h4>
      <form action="">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          name=""
          id=""
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Auth;
