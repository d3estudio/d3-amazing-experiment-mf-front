import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  return (
    <div>
      <h1>Página de Login</h1>
      <form onSubmit={() => signIn(email, password)}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">login</button>
      </form>
    </div>
  )
};

export default SignIn;
