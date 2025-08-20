'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [status, setStatus] = useState('checking'); // 'checking' | 'authorized' | 'unauthorized'

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        setStatus('authorized');
      } else {
        setStatus('unauthorized');
        router.replace('/login');
      }
    } catch (e) {
      setStatus('unauthorized');
      router.replace('/login');
    }
  }, [router]);

  if (status !== 'authorized') {
    return (
      <div className="text-center" style={{ padding: '4rem 1rem' }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
}
