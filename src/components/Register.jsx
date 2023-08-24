import React, { useState } from 'react';
import { apiClient } from '../Services/api-client';

const Register = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();

  
   
    const RegData= { email, password, name };
   try{
    console.log('Registration data',RegData);
    const response= await apiClient.post(process.env.REACT_APP_REGISTER, RegData);
    console.log('response',response); 
    console.log('Registration data',RegData);
   } catch(err){
    console.log('err',err);
   }
    
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
