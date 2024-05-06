import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="email" 
        placeholder='Email:' 
        value={email} onChange={(e) => setEmail(e.target.value)}
         />

        <input type="password" 
        placeholder='Password:' 
        value={password} onChange={(e) => setPassword(e.target.value)}
         />

         <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
