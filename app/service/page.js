'use client';

import Link from 'next/link';


export default function ServicePage() {
  return (
    <main className="service-wrap">
      {/* HERO */}
      <section className="service-hero">
        <div className="aurora" />
        <div className="grid" />
        <div className="container position-relative">
          <div className="row align-items-center py-5 py-lg-6">
            <div className="col-lg-7">
              <span className="badge neon-badge mb-3"><i className="bi bi-stars me-2"/>OUR SERVICES</span>
              <h1 className="display-5 fw-bold title-gradient mb-3">สอนออกแบบกราฟิก และตกแต่งรูปอย่างมืออาชีพ</h1>
              <p className="lead text-secondary mb-4">
                ครบทั้งพื้นฐาน-ขั้นสูง ตั้งแต่ทฤษฎีการออกแบบ เครื่องมือ Photoshop/Illustrator/Lightroom
                ไปจนถึงรีทัชงานจริง Color Grading, Composite และการทำคอนเทนต์ให้แบรนด์เติบโต
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link href="/register" className="btn btn-neo btn-neo-accent"><i className="bi bi-rocket-takeoff me-1"/>เริ่มต้นเรียน</Link>
                <Link href="/contact" className="btn btn-neo"><i className="bi bi-ui-checks-grid me-1"/>ขอใบเสนอราคา</Link>
              </div>
              <div className="d-flex gap-3 mt-4 small text-secondary flex-wrap">
                <span className="chip"><i className="bi bi-brush me-1"/>Graphic Design</span>
                <span className="chip"><i className="bi bi-magic me-1"/>Retouch</span>
                <span className="chip"><i className="bi bi-palette me-1"/>Color Grading</span>
                <span className="chip"><i className="bi bi-vector-pen me-1"/>Illustration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container py-4 py-lg-5">
        <h2 className="section-title mb-3">บริการของเรา</h2>
        <p className="text-secondary mb-4">ออกแบบคอร์สและงานบริการให้ยืดหยุ่น เหมาะกับทั้งผู้เริ่มต้น ทีมครีเอทีฟ และธุรกิจ</p>
        <div className="row g-4">
          {[
            { icon: 'bi-brush', title: 'พื้นฐานการออกแบบ', desc: 'หลักการจัดวาง ฟอนต์ สี รูปทรง และการเล่าเรื่องผ่านงานกราฟิก' },
            { icon: 'bi-magic', title: 'Photoshop/Lightroom', desc: 'ปรับแสง รีทัชผิว ลบวัตถุ แต่งโทน และ RAW Workflow' },
            { icon: 'bi-vector-pen', title: 'Illustrator/Vector', desc: 'สร้างโลโก้ ไอคอน เวกเตอร์ และอิลัสเตรชัน' },
            { icon: 'bi-person-bounding-box', title: 'รีทัชบุคคล/สินค้า', desc: 'ผิว ผม เสื้อผ้า ฝุ่นรอย ลบรอยยับ ทำไฮไลต์ผลิตภัณฑ์' },
            { icon: 'bi-sliders2', title: 'Color Grading', desc: 'โทนภาพให้ mood & tone ตามแบรนด์/แคมเปญ' },
            { icon: 'bi-layers', title: 'Composite & Manipulation', desc: 'รวมภาพ หลอมแสงเงา ทำงานคอนเซ็ปต์ขั้นสูง' },
          ].map((s, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="glass-card h-100 p-4">
                <div className="icon-wrap"><i className={`bi ${s.icon}`} /></div>
                <h5 className="mt-3 mb-2">{s.title}</h5>
                <p className="text-secondary mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRACKS / CURRICULUM */}
      <section className="container py-4 py-lg-5">
        <h2 className="section-title mb-3">แผนการเรียนรู้</h2>
        <p className="text-secondary mb-4">เลือกเส้นทางที่เหมาะกับเป้าหมายของคุณ</p>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="track-card h-100 p-4">
              <div className="small text-info">TRACK 01</div>
              <h5 className="mt-1 mb-2">Graphic Design Bootcamp</h5>
              <ul className="list-unstyled text-secondary mb-0">
                <li>• พื้นฐานองค์ประกอบศิลป์</li>
                <li>• การจัดวางและลำดับสายตา</li>
                <li>• ระบบสีและการจับคู่สี</li>
                <li>• Typography & Grid System</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="track-card h-100 p-4">
              <div className="small text-info">TRACK 02</div>
              <h5 className="mt-1 mb-2">Photo Editing Mastery</h5>
              <ul className="list-unstyled text-secondary mb-0">
                <li>• RAW to WOW Workflow</li>
                <li>• Retouch ขั้นสูงสำหรับบุคคล</li>
                <li>• Product Highlight & Reflection</li>
                <li>• Color Grading ทางลัดมืออาชีพ</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="track-card h-100 p-4">
              <div className="small text-info">TRACK 03</div>
              <h5 className="mt-1 mb-2">Brand Identity & Social Content</h5>
              <ul className="list-unstyled text-secondary mb-0">
                <li>• ออกแบบโลโก้และระบบแบรนด์</li>
                <li>• Template คอนเทนต์โซเชียล</li>
                <li>• สร้าง Moodboard และ Guideline</li>
                <li>• ประเมินและพัฒนางานจริง</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container py-4 py-lg-5">
        <h2 className="section-title mb-3">แพ็กเกจราคา</h2>
        <p className="text-secondary mb-4">ยืดหยุ่นทั้งแบบตัวต่อตัว กลุ่มเล็ก และองค์กร</p>
        <div className="row g-4 align-items-stretch">
          {[
            { name: 'Starter', price: '1,990', features: ['เวิร์กชอป 3 ชม.', 'โจทย์ฝึกปฏิบัติ', 'ไฟล์เทมเพลตเริ่มต้น'] },
            { name: 'Pro', price: '4,990', features: ['เรียน 2 วัน (รวม 8 ชม.)', 'รีทัช/โทนภาพขั้��กลาง', 'Feedback งานจริง'] },
            { name: 'Team', price: 'ติดต่อเรา', features: ['องค์กร/ทีม 5-20 คน', 'ออกแบบเนื้อหาเฉพาะทาง', 'โครงการและใบเสนอราคา'] },
          ].map((p, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className={`price-card h-100 p-4 ${i===1 ? 'featured' : ''}`}>
                <div className="d-flex align-items-baseline justify-content-between mb-2">
                  <h5 className="mb-0">{p.name}</h5>
                  <span className="badge neon-badge">{i===1 ? 'POPULAR' : 'PLAN'}</span>
                </div>
                <div className="display-6 fw-bold mb-3 title-gradient">{p.price}<span className="fs-6 fw-normal text-secondary"> ฿</span></div>
                <ul className="list-unstyled text-secondary">
                  {p.features.map((f, idx) => <li key={idx}>• {f}</li>)}
                </ul>
                <Link href="/contact" className="btn btn-neo w-100 mt-2"><i className="bi bi-cart-check me-1"/>ขอใบเสนอราคา/ลงทะเบียน</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-4 py-lg-5">
        <h2 className="section-title mb-3">คำถามที่พบบ่อย</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="qa">
              <h6 className="mb-1"><i className="bi bi-question-circle me-1"/>ต้องมีพื้นฐานไหม?</h6>
              <p className="text-secondary mb-0">ไม่จำเป็น เรามีคอร์สตั้งแต่เริ่มต้นพร้อมคู่มือ และแบบฝึกหัดให้ฝึกจริง</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="qa">
              <h6 className="mb-1"><i className="bi bi-question-circle me-1"/>เรียนออนไลน์ได้ไหม?</h6>
              <p className="text-secondary mb-0">มีทั้งออนไลน์ Live/On-demand และออนไซต์แบบกลุ่มเล็ก</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="qa">
              <h6 className="mb-1"><i className="bi bi-question-circle me-1"/>มีประกาศนียบัตรไหม?</h6>
              <p className="text-secondary mb-0">มีแบบดิจิทัล สามารถเพิ่มลงพอร์ตหรือ LinkedIn ได้</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="qa">
              <h6 className="mb-1"><i className="bi bi-question-circle me-1"/>รับงานบริการด้วยไหม?</h6>
              <p className="text-secondary mb-0">รับ ทั้งรีทัช ตกแต่งภาพ สร้างเทมเพลต และออกแบบแบรนด์</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="cta-box p-4 p-lg-5 text-center">
            <h2 className="fw-bold mb-2">อยากยกระดับงานภาพและกราฟิกของคุณ?</h2>
            <p className="text-secondary mb-4">คุยกับเราเพื่อออกแบบคอร์ส/บริการให้ตรงเป้าหมายของคุณมากที่สุด</p>
            <div className="d-flex justify-content-center gap-2">
              <Link href="/contact" className="btn btn-neo btn-neo-accent"><i className="bi bi-chat-dots me-1"/>ติดต่อเรา</Link>
              <Link href="/register" className="btn btn-neo"><i className="bi bi-person-plus me-1"/>ลงทะเบียนเรียน</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(:root){
          --neo-1:#ffffff; --neo-2:#ffffff; --neo-3:#ffffff; --text:#e6edf3; --border:rgba(255,255,255,.25);
        }
        .service-wrap{ color:var(--text); background:linear-gradient(180deg,#060913,#0a0f1a 60%,#0b1120); }
        .service-hero{ position:relative; overflow:clip; }
        .aurora{ position:absolute; inset:-10% -20% auto -20%; height:60vh; filter:blur(46px); opacity:.65; pointer-events:none;
          background:radial-gradient(60rem 14rem at 10% 0%, rgba(255,255,255,.28), transparent 60%),
                     radial-gradient(60rem 14rem at 90% 0%, rgba(255,255,255,.28), transparent 60%); }
        .grid{ position:absolute; inset:0; pointer-events:none; opacity:.18; background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg, rgba(255,255,255,.06) 1px,transparent 1px); background-size:40px 40px; }
        .title-gradient{ background:linear-gradient(90deg,#ffffff 0%,#f5f7ff 50%,#e9eefc 100%); -webkit-background-clip:text; background-clip:text; color:transparent; text-shadow:0 0 22px rgba(255,255,255,.25); }
        .neon-badge{ border:1px solid var(--border); background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03)); color:var(--text); border-radius:999px; padding:.45rem .85rem; }
        .chip{ border:1px solid var(--border); border-radius:999px; padding:.35rem .7rem; background:rgba(255,255,255,.04); }

        .glass-card{ border:1px solid var(--border); border-radius:1rem; background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03)); box-shadow:0 1px 0 rgba(255,255,255,.04) inset,0 10px 30px rgba(0,0,0,.25); transition:transform .14s ease, box-shadow .2s ease; }
        .glass-card:hover{ transform:translateY(-4px); box-shadow:0 0 0 2px rgba(255,255,255,.22),0 20px 46px rgba(0,0,0,.35); }
        .icon-wrap{ font-size:1.6rem; text-shadow:0 0 16px rgba(255,255,255,.25); }

        .track-card{ border:1px solid var(--border); border-radius:1rem; background:linear-gradient(180deg, rgba(18,22,30,.6), rgba(16,19,27,.45)); box-shadow:0 10px 40px rgba(0,0,0,.3); }

        .price-card{ border:1px solid var(--border); border-radius:1rem; background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03)); box-shadow:0 1px 0 rgba(255,255,255,.04) inset, 0 10px 30px rgba(0,0,0,.25); }
        .price-card.featured{ background:linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.16)); box-shadow:0 18px 60px rgba(0,0,0,.35); }

        .cta-section{ position:relative; }
        .cta-box{ border:1px solid var(--border); border-radius:1.2rem; background:linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.14)); box-shadow:0 18px 60px rgba(0,0,0,.35); }

        .btn-neo{ --btn-bg:linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.03)); --btn-brd:var(--border); color:var(--text); border:1px solid var(--btn-brd); background:var(--btn-bg); border-radius:.7rem; padding-inline:.9rem; text-decoration:none; transition:transform .12s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease; }
        .btn-neo:hover{ transform:translateY(-1px); border-color:rgba(255,255,255,.7); box-shadow:0 0 0 2px rgba(255,255,255,.22), 0 10px 28px rgba(0,0,0,.45); color:#fff; }
        .btn-neo-accent{ --btn-bg:linear-gradient(135deg, rgba(255,255,255,.35), rgba(255,255,255,.2)); --btn-brd:rgba(255,255,255,.6); color:#0b0e14; text-shadow:0 1px 0 rgba(255,255,255,.35); }

        .section-title{ font-weight:700; letter-spacing:.2px; }
        .py-lg-6{ padding-top:5rem!important; padding-bottom:5rem!important; }
        @media (max-width: 991.98px){ .py-lg-6{ padding-top:3rem!important; padding-bottom:3rem!important; } }
      `}</style>
    </main>
  );
}
