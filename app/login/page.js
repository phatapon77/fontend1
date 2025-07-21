'use client';

import { useState } from 'react';
import './login.css'; // ✅ ใช้ CSS แยกไฟล์

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);

    if (username === 'admin' && password === '1234') {
      alert('login success!');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-background">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <div className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </div>
      </div>
    </div>
  );
}
