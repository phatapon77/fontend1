'use client';
import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import './register.css';

export default function Register() {
  const [form, setForm] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Music player state
  const [audioUrl, setAudioUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [errorAudio, setErrorAudio] = useState('');
  const audioRef = useRef(null);
  const ytRef = useRef(null);
  const [isYouTube, setIsYouTube] = useState(false);
  const [ytId, setYtId] = useState('');
  const [collapsed, setCollapsed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: form.firstname,
          fullname: form.fullname,
          lastname: form.lastname,
          username: form.username,
          password: form.password,
        }),
      });

      const result = await res.json();
      console.log(result);

      if (res.ok) {
        setSuccess('Registration successful!');
        setForm({
          firstname: '',
          fullname: '',
          lastname: '',
          username: '',
          password: '',
          confirmPassword: '',
        });
        setError('');
        Swal.fire('Success', 'You have been registered!', 'success');
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  // Music player handlers
  useEffect(() => {
    try {
      const last = localStorage.getItem('lastAudioUrl');
      if (last) setAudioUrl(last);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const c = localStorage.getItem('musicCollapsed');
      if (c === '1') setCollapsed(true);
    } catch {}
  }, []);

  const isYouTubeUrl = (u) => {
    try {
      const url = new URL(u);
      const h = url.hostname.toLowerCase();
      return h.includes('youtube.com') || h.includes('youtu.be');
    } catch { return false; }
  };

  const extractYouTubeId = (u) => {
    try {
      const url = new URL(u);
      if (url.hostname.includes('youtu.be')) {
        return url.pathname.split('/')[1] || '';
      }
      if (url.pathname.startsWith('/shorts/')) {
        return url.pathname.split('/')[2] || '';
      }
      return url.searchParams.get('v') || '';
    } catch { return ''; }
  };

  const buildYTEmbed = (id, autoplay = false) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&controls=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(origin)}`;
  };

  const postYT = (func, args = []) => {
    const iframe = ytRef.current;
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    );
  };

  useEffect(() => {
    const isYT = isYouTubeUrl(audioUrl);
    setIsYouTube(isYT);
    setYtId(isYT ? extractYouTubeId(audioUrl) : '');
  }, [audioUrl]);

  const handlePlay = async () => {
    setErrorAudio('');
    if (!audioUrl) {
      setErrorAudio('โปรดใส่ลิงก์เพลง');
      return;
    }

    // YouTube branch
    if (isYouTube) {
      if (!ytId) {
        setErrorAudio('ลิงก์ YouTube ไม่ถูกต้อง');
        return;
      }
      try {
        const iframe = ytRef.current;
        if (iframe) {
          const hasId = iframe.src && iframe.src.includes(ytId);
          if (!hasId) {
            iframe.src = buildYTEmbed(ytId, true);
          } else {
            postYT('setVolume', [Math.round(volume * 100)]);
            postYT('playVideo');
          }
          // Ensure volume applies even if player initializes slightly later
          setTimeout(() => postYT('setVolume', [Math.round(volume * 100)]), 300);
          setIsPlaying(true);
          try { localStorage.setItem('lastAudioUrl', audioUrl); } catch {}
        }
      } catch (e) {
        setErrorAudio('เล่น YouTube ไม่ได้');
        setIsPlaying(false);
      }
      return;
    }

    // Regular audio branch
    try {
      const audio = audioRef.current;
      if (!audio) return;
      if (audio.src !== audioUrl) {
        audio.src = audioUrl;
      }
      audio.volume = volume;
      await audio.play();
      setIsPlaying(true);
      try { localStorage.setItem('lastAudioUrl', audioUrl); } catch {}
    } catch (e) {
      setErrorAudio('ไม่สามารถเล่นลิงก์นี้ได้');
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    if (isYouTube) {
      postYT('pauseVideo');
      setIsPlaying(false);
      return;
    }
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (isYouTube) {
      postYT('stopVideo');
      setIsPlaying(false);
      return;
    }
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setIsPlaying(false);
  };

  const handleVolume = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (isYouTube) {
      try {
        postYT('setVolume', [Math.round(v * 100)]);
      } catch {}
    } else {
      const a = audioRef.current;
      if (a) a.volume = v;
    }
    try { localStorage.setItem('lastVolume', String(v)); } catch {}
  };

  const toggleCollapse = () => {
    const next = !collapsed;
    setCollapsed(next);
    try { localStorage.setItem('musicCollapsed', next ? '1' : '0'); } catch {}
  };

  const playerStyles = {
    box: {
      position: 'fixed',
      right: '16px',
      bottom: '16px',
      width: '300px',
      background: 'rgba(10,20,40,0.85)',
      border: '1px solid rgba(0,255,255,0.25)',
      borderRadius: '12px',
      padding: '12px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.35), inset 0 0 12px rgba(0,255,255,0.12)',
      backdropFilter: 'blur(6px)',
      color: '#e6f3ff',
      zIndex: 1000,
      fontSize: '12px'
    },
    title: { fontWeight: 700, fontSize: '12px', marginBottom: '8px', color: '#7dd3fc', letterSpacing: '0.4px' },
    input: { width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid rgba(125, 211, 252, 0.35)', outline: 'none', background: 'rgba(0,0,0,0.25)', color: '#e6f3ff', marginBottom: '8px' },
    controls: { display: 'flex', alignItems: 'center', gap: '6px' },
    button: { padding: '6px 8px', borderRadius: '8px', border: '1px solid rgba(125,211,252,0.35)', background: 'rgba(13, 148, 136, 0.15)', color: '#e6f3ff', cursor: 'pointer' },
    range: { flex: 1 },
    error: { color: '#fecaca', marginTop: '6px' },
    collapseBtn: { position: 'absolute', top: '6px', right: '6px', width: '24px', height: '24px', borderRadius: '6px', border: '1px solid rgba(125,211,252,0.35)', background: 'rgba(0,0,0,0.25)', color: '#7dd3fc', cursor: 'pointer' },
    boxCollapsed: { width: '56px', height: '56px', borderRadius: '9999px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    collapsedIcon: { fontSize: '20px', lineHeight: 1, color: '#7dd3fc' },
    mediaHidden: { position: 'absolute', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none', left: '-9999px' },
    mediaFrame: { width: '100%', height: '56px', borderRadius: '8px', border: '1px solid rgba(125,211,252,0.35)', marginTop: '8px' }
  };

  return (
    <div className="register-background">
      <div className="register-box">
        <h2 className="register-title">Membership Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>

      {/* Floating music player (bottom-right) */}
      <div className="music-player" style={collapsed ? { ...playerStyles.box, ...playerStyles.boxCollapsed } : playerStyles.box}>
        {collapsed ? (
          <button type="button" onClick={toggleCollapse} style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Expand music player">
            <span style={playerStyles.collapsedIcon}>♪</span>
          </button>
        ) : (
          <>
            <button type="button" onClick={toggleCollapse} style={playerStyles.collapseBtn} title="ย่อ">—</button>
            <div style={playerStyles.title}>Music Player</div>
            <input
              type="url"
              placeholder="วางลิงก์เพลง (mp3/stream)"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handlePlay(); }}
              style={playerStyles.input}
            />
            <div style={playerStyles.controls}>
              <button type="button" style={playerStyles.button} onClick={handlePlay} disabled={!audioUrl}>▶</button>
              <button type="button" style={playerStyles.button} onClick={handlePause} disabled={!isPlaying}>⏸</button>
              <button type="button" style={playerStyles.button} onClick={handleStop}>⏹</button>
              <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} style={playerStyles.range} title="ปรับระดับเสียง" />
            </div>
            {errorAudio && <div style={playerStyles.error}>{errorAudio}</div>}
          </>
        )}
        {isYouTube ? (
          <iframe
            ref={ytRef}
            title="YouTube Player"
            style={collapsed ? playerStyles.mediaHidden : playerStyles.mediaFrame}
            src={ytId ? buildYTEmbed(ytId, false) : undefined}
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ) : (
          <audio
            ref={audioRef}
            style={collapsed ? playerStyles.mediaHidden : undefined}
            onEnded={() => setIsPlaying(false)}
            onError={() => setErrorAudio('เล่นเพลงล้มเหลว')}
          />
        )}
      </div>
    </div>
  );
}
