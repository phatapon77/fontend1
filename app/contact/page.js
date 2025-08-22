'use client';

import { useState } from 'react';


export default function ContactPage() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Simulate sending
    setStatus('loading');
    setTimeout(() => {
      console.log('Form submitted', data);
      setStatus('success');
      form.reset();
    }, 900);
  }

  return (
    <main className="container py-5" style={{maxWidth: 900}}>
      <h1 className="display-6 fw-bold mb-1">
        <i className="bi bi-chat-dots me-2"></i>
        ติดต่อ/แจ้งปัญหา
      </h1>
      <p className="text-secondary mb-4">กรุณากรอกแบบฟอร์มด้านล่าง ทีมงานจะตอบกลับโดยเร็วที��สุด</p>

      <div className="row g-4">
        <div className="col-lg-7 order-2 order-lg-1">
          <form onSubmit={handleSubmit} className="p-4 border rounded-4" style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03))',
            borderColor: 'rgba(255,255,255,.14)'
          }}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">ชื่อ</label>
                <input name="firstName" type="text" required className="form-control neon-input" placeholder="กรอกชื่อ" />
              </div>
              <div className="col-md-6">
                <label className="form-label">นามสกุล</label>
                <input name="lastName" type="text" required className="form-control neon-input" placeholder="กรอกนามสกุล" />
              </div>
              <div className="col-12">
                <label className="form-label">อีเมล</label>
                <input name="email" type="email" required className="form-control neon-input" placeholder="name@example.com" />
              </div>
              <div className="col-md-6">
                <label className="form-label">ประเภท</label>
                <select name="type" className="form-select neon-input" defaultValue="support">
                  <option value="support">แจ้งปัญหา</option>
                  <option value="suggestion">เสนอแนะ</option>
                  <option value="other">อื่น ๆ</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">ความเร่งด่วน</label>
                <select name="priority" className="form-select neon-input" defaultValue="normal">
                  <option value="low">ต่ำ</option>
                  <option value="normal">ปกติ</option>
                  <option value="high">สูง</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">หัวข้อ</label>
                <input name="subject" type="text" required className="form-control neon-input" placeholder="พูดคุยเรื่องอะไร" />
              </div>
              <div className="col-12">
                <label className="form-label">รายละเอียด</label>
                <textarea name="message" required rows={5} className="form-control neon-input" placeholder="อธิบายปัญหาหรือข้อความของคุณ"></textarea>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 mt-4">
              <button disabled={status==='loading'} className="btn btn-neo btn-neo-accent" type="submit">
                {status==='loading' ? (
                  <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> กำลังส่ง...</>
                ) : (
                  <><i className="bi bi-send me-1"></i> ส่งข้อความ</>
                )}
              </button>
              {status==='success' && <span className="text-success"><i className="bi bi-check-circle me-1"></i>ส่งข้อความเรียบร้อย ขอบคุณครับ</span>}
            </div>
          </form>
        </div>

        <div className="col-lg-5 order-1 order-lg-2">
          <div className="p-4 border rounded-4 mb-4" style={{
            background: 'linear-gradient(180deg, rgba(0,229,255,.14), rgba(41,121,255,.12))',
            borderColor: 'rgba(255,255,255,.14)'
          }}>
            <h5 className="mb-2"><i className="bi bi-telephone me-2"></i>ช่องทางติดต่อ</h5>
            <ul className="list-unstyled mb-0 text-secondary">
              <li className="mb-1"><i className="bi bi-envelope me-2"></i>support@daily.example</li>
              <li className="mb-1"><i className="bi bi-discord me-2"></i>community/DAILY</li>
              <li className="mb-1"><i className="bi bi-geo-alt me-2"></i>Bangkok, Thailand</li>
            </ul>
          </div>

          <div className="p-4 border rounded-4" style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03))',
            borderColor: 'rgba(255,255,255,.14)'
          }}>
            <h6 className="text-uppercase text-secondary mb-2">คำแนะนำ</h6>
            <p className="mb-0 text-secondary">ระบุรายละเอียด อุปกรณ์ เบราว์เซอร์ และขั้นตอ���ที่ทำให้เกิดปัญหา เพื่อให้เราช่วยได้เร็วขึ้น</p>
          </div>
        </div>
      </div>
    </main>
  );
}
