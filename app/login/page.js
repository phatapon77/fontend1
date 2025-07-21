'use client';

import { useState, useEffect, useRef } from 'react';

export default function Login ({ backgroundColor = '#181818ff' }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const borderRef = useRef(null);

  // ทำให้ขอบกรอบ Login วิ่งไล่เฉดสี RGB
  useEffect(() => {
    let hue = 0;
    const interval = setInterval(() => {
      hue = (hue + 3) % 360;
      if (borderRef.current) {
        borderRef.current.style.borderImage = `linear-gradient(90deg, 
          hsl(${hue}, 100%, 50%), 
          hsl(${(hue + 120) % 360}, 100%, 50%), 
          hsl(${(hue + 240) % 360}, 100%, 50%)
        )`;
        borderRef.current.style.borderImageSlice = 1;
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);

    if (username === 'admin' && password === '1234') {
      alert('Login success!');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <div
        ref={borderRef}
        style={{
          maxWidth: 400,
          width: '100%',
          padding: 30,
          border: '5px solid',
          borderRadius: 20,
          borderImageSlice: 1,
          backgroundColor: 'white',
          boxShadow: '0 4px 20px rgba(26, 115, 232, 0.3)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: 30, color: '#1a73e8' }}>Login</h2>

        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: 12,
              fontSize: 16,
              borderRadius: 10,
              border: '2px solid #1a73e8',
              outlineColor: '#1a73e8',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: 30 }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: 12,
              fontSize: 16,
              borderRadius: 10,
              border: '2px solid #1a73e8',
              outlineColor: '#1a73e8',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: 14,
            borderRadius: 12,
            border: 'none',
            backgroundColor: '#1a73e8',
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Login
        </button>

        <div style={{ marginTop: 24, textAlign: 'center', fontSize: 14 }}>
          Don't have an account?{' '}
          <a href="/signup" style={{ color: '#1a73e8', fontWeight: '500', textDecoration: 'underline' }}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
