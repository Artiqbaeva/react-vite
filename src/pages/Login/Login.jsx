import React, { useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError('Please enter both email and password.');
        return;
      }
      setError('');
      alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
    };
  return (
    <div className="container wrapper-login">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='mb-[10px]' type="submit">Log In</button>
        <button className='mb-[10px]' type="submit" onClick={()=> navigate("/")} >Go Home</button>
      </form>
    </div>
  )
}

export default Login