import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Logging in with', email, password);
  };

  return (
    <div className="login-container">
      <h1>ABC Bank Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="links">
        <a href="/register" className="register-link">
          Register New Account
        </a>
        <a href="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

export default App;
