'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ตรวจสอบ หรือส่งข้อมูลไป backend ได้ที่นี่
    console.log('Username:', username);
    console.log('Password:', password);

    // ตัวอย่างเงื่อนไขง่ายๆ
    if (username === 'admin' && password === '1234') {
      alert('Login success!');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
      <h2>Login</h2>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: 8 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: 8 }}
        />
      </div>
      <button onClick={handleLogin} style={{ width: '100%', padding: 10 }}>
        Login
      </button>
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
    </div>
  );
}
