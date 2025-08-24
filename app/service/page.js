'use client';

import Link from 'next/link';

export default function ServicePage() {
  return (
    <main className="service-wrap">
      {/* GLOBAL FUTURISTIC BACKGROUND LAYERS */}
      <div className="bg-layers" aria-hidden="true">
        {/* Subtle starfield parallax */}
        <div className="stars layer" />
        <div className="twinkle layer" />
        {/* Floating neon nebula orbs */}
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        {/* 3D neon grid floor */}
        <div className="grid3d" />
        {/* Soft scanline/glow overlay */}
        <div className="scanline" />
      </div>

      {/* HERO */}
      <section className="service-hero">
        <div className="aurora" />
        <div className="grid" />
        <div className="container position-relative">
          <div className="row align-items-center py-5 py-lg-6">
            <div className="col-lg-7">
              <span className="badge neon-badge mb-3"><i className="bi bi-stars me-2" />OUR SERVICES</span>
              <h1 className="display-5 fw-bold title-gradient mb-3">สอนออกแบบกราฟิก และตกแต่งรูปอย่างมืออาชีพ</h1>
              <p className="lead text-secondary mb-4">
                ครบทั้งพื้นฐาน-ขั้นสูง ตั้งแต่ทฤษฎีการออกแบบ เครื่องมือ Photoshop/Illustrator/Lightroom
                ไปจนถึงรีทัชงานจริง Color Grading, Composite และการทำคอนเทนต์ให้แบรนด์เติบโต
              </p>
              <div className="d-flex flex-wrap gap-2">
                {/* เริ่มต้นเรียน */}
                <Link href="/register" className="btn btn-neo btn-white-to-blue">
                  <i className="bi bi-rocket-takeoff me-1" />
                  เริ่มต้นเรียน
                </Link>
                {/* ขอใบเสนอราคา */}
                <Link href="/contact" className="btn btn-neo btn-white-to-blue">
                  <i className="bi bi-ui-checks-grid me-1" />
                  ขอใบเสนอราคา
                </Link>
              </div>
              <div className="d-flex gap-3 mt-4 small text-secondary flex-wrap">
                <span className="chip"><i className="bi bi-brush me-1" />Graphic Design</span>
                <span className="chip"><i className="bi bi-magic me-1" />Retouch</span>
                <span className="chip"><i className="bi bi-palette me-1" />Color Grading</span>
                <span className="chip"><i className="bi bi-vector-pen me-1" />Illustration</span>
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
            { name: 'Pro', price: '4,990', features: ['เรียน 2 วัน (รวม 8 ชม.)', 'รีทัช/โทนภาพขั้นกลาง', 'Feedback งานจริง'] },
            { name: 'Team', price: 'ติดต่อเรา', features: ['องค์กร/ทีม 5-20 คน', 'ออกแบบเนื้อหาเฉพาะทาง', 'โครงการและใบเสนอราคา'] },
          ].map((p, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className={`price-card h-100 p-4 ${i === 1 ? 'featured' : ''}`}>
                <div className="d-flex align-items-baseline justify-content-between mb-2">
                  <h5 className="mb-0">{p.name}</h5>
                  <span className="badge neon-badge">{i === 1 ? 'POPULAR' : 'PLAN'}</span>
                </div>
                <div className="display-6 fw-bold mb-3 title-gradient">
                  {p.price}
                  <span className="fs-6 fw-normal text-secondary"> ฿</span>
                </div>
                <ul className="list-unstyled text-secondary">
                  {p.features.map((f, idx) => <li key={idx}>• {f}</li>)}
                </ul>
                {/* ขอใบเสนอราคา/ลงทะเบียน */}
                <Link href="/contact" className="btn btn-neo btn-white-to-blue w-100 mt-2">
                  <i className="bi bi-cart-check me-1" />
                  ขอใบเสนอราคา/ลงทะเบียน
                </Link>
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
              <h6 className="mb-1"><i className="bi bi-question-circle me-1" />ต้องมีพื้นฐานไหม?</h6>
              <p className="text-secondary mb-0">ไม่จำเป็น เรามีคอร์สตั้งแต่เริ่มต้นพร้อมคู่มือ และแบบฝึกหัดให้ฝึกจริง</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="qa">
              <h6 className="mb-1"><i className="bi bi-question-circle me-1" />เรียนออนไลน์ได้ไหม?</h6>
              <p className="text-secondary mb-0">มีทั้งออนไลน์ Live/On-demand และออนไซต์แบบกลุ่มเล็ก</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="qa">
              <h6 className="mb-1"><i className="bi bi-question-circle me-1" />มีประกาศนียบัตรไหม?</h6>
              <p className="text-secondary mb-0">มีแบบดิจิทัล สามารถเพิ่มลงพอร์ตหรือ LinkedIn ได้</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="qa">
              <h6 className="mb-1"><i className="bi bi-question-circle me-1" />รับงานบริการด้วยไหม?</h6>
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
              {/* ติดต่อเรา */}
              <Link href="/contact" className="btn btn-neo btn-white-to-blue">
                <i className="bi bi-chat-dots me-1" />
                ติดต่อเรา
              </Link>
              {/* ลงทะเบียนเรียน */}
              <Link href="/register" className="btn btn-neo btn-white-to-blue">
                <i className="bi bi-person-plus me-1" />
                ลงทะเบียนเรียน
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(:root){
          --neo-1:#0b0f1b;
          --neo-2:#0f1424;
          --neo-3:#10172b;
          --text:#ffffff;
          --border:rgba(255,255,255,0.22);

          --accent-1:#70f0ff;  /* cyan */
          --accent-2:#a96cff;  /* purple */
          --accent-3:#ff68d7;  /* magenta */

          --blue:#3b82f6;        /* primary blue when pressed */
          --blue-strong:#2563eb; /* pressed/active stronger */
          --blue-border:#60a5fa; /* border when pressed */
        }

        .service-wrap{
          position:relative;
          color:var(--text);
          overflow:hidden;
          background:
            radial-gradient(120% 90% at 10% 10%, #0b1021 0%, #070c18 45%, #050914 70%, #04070f 100%);
          isolation:isolate;
        }

        /* Force all text to white on this page */
        .service-wrap *{
          color:#ffffff !important;
        }

        /* Make Bootstrap .text-secondary white on this page */
        .service-wrap :global(.text-secondary){
          color:#ffffff !important;
          opacity:1;
        }

        /* Content above bg layers */
        .service-wrap > section,
        .service-hero{
          position:relative;
          z-index:1;
        }

        /* Background layers */
        .bg-layers{ position:absolute; inset:0; z-index:0; pointer-events:none; }
        .layer{ position:absolute; inset:0; }

        .stars{
          opacity:.25;
          background-image:
            radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,.7) 1px, transparent 1px),
            radial-gradient(1px 1px at 76% 12%, rgba(255,255,255,.55) 1px, transparent 1px),
            radial-gradient(1px 1px at 34% 68%, rgba(255,255,255,.65) 1px, transparent 1px),
            radial-gradient(1px 1px at 88% 52%, rgba(255,255,255,.6) 1px, transparent 1px),
            radial-gradient(1px 1px at 54% 30%, rgba(255,255,255,.5) 1px, transparent 1px);
          background-size: 700px 700px, 900px 900px, 800px 800px, 1000px 1000px, 850px 850px;
          animation: drift-1 90s linear infinite;
        }
        .twinkle{
          mix-blend-mode:screen;
          opacity:.18;
          background-image:
            radial-gradient(2px 2px at 22% 42%, rgba(255,255,255,.9) 1px, transparent 2px),
            radial-gradient(2px 2px at 66% 78%, rgba(255,255,255,.9) 1px, transparent 2px);
          background-size:600px 600px, 700px 700px;
          animation: twinkle 3.5s ease-in-out infinite;
        }

        /* Floating neon orbs */
        .orb{
          position:absolute;
          width:48vmax; height:48vmax;
          filter:blur(48px);
          border-radius:50%;
          opacity:.23;
          background: radial-gradient(circle at 30% 30%, var(--accent-1), transparent 60%),
                      radial-gradient(circle at 70% 60%, var(--accent-2), transparent 60%),
                      radial-gradient(circle at 40% 70%, var(--accent-3), transparent 60%);
          mix-blend-mode:screen;
          transform:translateZ(0);
        }
        .orb-1{ top:-20vmax; left:-10vmax; animation: float-1 36s ease-in-out infinite; }
        .orb-2{ top:10vmax; right:-20vmax; animation: float-2 44s ease-in-out infinite; }
        .orb-3{ bottom:-22vmax; left:10vmax; animation: float-3 52s ease-in-out infinite; }

        /* 3D neon perspective grid */
        .grid3d{
          position:absolute; inset:auto -10% -14% -10%;
          height:55vh;
          transform: perspective(700px) rotateX(62deg);
          transform-origin:50% 0%;
          background:
            linear-gradient(transparent, rgba(0,0,0,.5)),
            repeating-linear-gradient(0deg, rgba(112,240,255,.28) 0 1px, transparent 1px 40px),
            repeating-linear-gradient(90deg, rgba(169,108,255,.28) 0 1px, transparent 1px 40px);
          box-shadow: 0 -10px 80px rgba(112,240,255,.15) inset;
          mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%);
          opacity:.45;
          animation: grid-glow 6s ease-in-out infinite;
        }

        /* Soft scanline overlay */
        .scanline{
          position:absolute; inset:0;
          background:
            radial-gradient(60% 100% at 50% 0%, rgba(112,240,255,.05), transparent 60%),
            repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0 2px, transparent 2px 4px);
          mix-blend-mode:soft-light;
          opacity:.35;
          animation: scan 14s linear infinite;
        }

        /* HERO */
        .service-hero{ position:relative; overflow:clip; }
        .aurora{
          position:absolute; inset:-10% -20% auto -20%; height:60vh;
          filter:blur(46px); opacity:.65; pointer-events:none;
          background:
            radial-gradient(60rem 14rem at 10% 0%, rgba(112,240,255,.25), transparent 60%),
            radial-gradient(60rem 14rem at 90% 0%, rgba(169,108,255,.25), transparent 60%);
          animation: aurora-flow 22s ease-in-out infinite alternate;
        }
        .service-hero :global(.grid){ display:none; }

        /* Make gradient title plain white */
        .title-gradient{
          background:none !important;
          -webkit-background-clip: initial !important;
          background-clip: initial !important;
          color:#ffffff !important;
          text-shadow:none !important;
        }

        .neon-badge{
          border:1px solid var(--border);
          background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
          color:var(--text);
          border-radius:999px; padding:.45rem .85rem;
          box-shadow:0 0 18px rgba(112,240,255,.08), 0 0 0 1px rgba(255,255,255,.05) inset;
        }
        .chip{
          border:1px solid var(--border); border-radius:999px; padding:.35rem .7rem;
          background:rgba(255,255,255,.04);
        }

        .glass-card{
          border:1px solid var(--border); border-radius:1rem;
          background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
          box-shadow:0 1px 0 rgba(255,255,255,.04) inset,0 10px 30px rgba(0,0,0,.25);
          transition:transform .14s ease, box-shadow .2s ease;
          backdrop-filter:saturate(120%) blur(10px);
        }
        .glass-card:hover{ transform:translateY(-4px); box-shadow:0 0 0 2px rgba(255,255,255,.22),0 20px 46px rgba(0,0,0,.35); }
        .icon-wrap{ font-size:1.6rem; text-shadow:0 0 16px rgba(255,255,255,.25); }

        .track-card{
          border:1px solid var(--border); border-radius:1rem;
          background:linear-gradient(180deg, rgba(18,22,30,.6), rgba(16,19,27,.45));
          box-shadow:0 10px 40px rgba(0,0,0,.3);
          backdrop-filter:saturate(110%) blur(6px);
        }

        .price-card{
          border:1px solid var(--border); border-radius:1rem;
          background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
          box-shadow:0 1px 0 rgba(255,255,255,.04) inset, 0 10px 30px rgba(0,0,0,.25);
          backdrop-filter:saturate(120%) blur(8px);
        }
        .price-card.featured{
          background:linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.16));
          box-shadow:0 18px 60px rgba(0,0,0,.35), 0 0 40px rgba(169,108,255,.18);
        }

        .cta-section{ position:relative; }
        .cta-box{
          border:1px solid var(--border); border-radius:1.2rem;
          background:linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.14));
          box-shadow:0 18px 60px rgba(0,0,0,.35);
          backdrop-filter:saturate(120%) blur(8px);
        }

        .btn-neo{
          --btn-bg:linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.03));
          --btn-brd:var(--border);
          -webkit-tap-highlight-color: transparent;
          color:var(--text);
          border:1px solid var(--btn-brd);
          background:var(--btn-bg);
          border-radius:.7rem;
          padding-inline:.9rem;
          text-decoration:none;
          transition:transform .12s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease, color .18s ease;
        }
        .btn-neo:hover{
          transform:translateY(-1px);
          border-color:rgba(255,255,255,.7);
          box-shadow:0 0 0 2px rgba(112,240,255,.25), 0 10px 28px rgba(255, 255, 255, 1);
          color:#fff;
        }

        /* White by default; turn blue only when pressed/focused */
        .btn-white-to-blue{
          color:#fff;
          background:transparent;
          border-color:rgba(0, 208, 255, 0.9);
        }
        .btn-white-to-blue:link,
        .btn-white-to-blue:visited{
          color:#fff;
        }
        /* Keep hover white (no blue on hover) */
        .btn-white-to-blue:hover{
          background:transparent;
          color:#fff;
          border-color:#fff;
          box-shadow:0 0 0 2px rgba(255,255,255,.15), 0 8px 24px rgba(0,0,0,.4);
        }
        /* Blue when pressed or keyboard-focused */
        .btn-white-to-blue:active,
        .btn-white-to-blue:focus-visible{
          background:var(--blue);
          border-color:var(--blue-border);
          color:#fff;
          box-shadow:0 0 0 2px rgba(59,130,246,.3), 0 10px 28px rgba(0,0,0,.45);
          transform:translateY(0); /* neutralize hover lift on press */
        }

        .section-title{ font-weight:700; letter-spacing:.2px; }
        .py-lg-6{ padding-top:5rem!important; padding-bottom:5rem!important; }
        @media (max-width: 991.98px){ .py-lg-6{ padding-top:3rem!important; padding-bottom:3rem!important; } }

        /* Animations */
        @keyframes drift-1{
          0%{ background-position: 0 0, 0 0, 0 0, 0 0, 0 0; }
          100%{ background-position: 200px 400px, -300px 200px, 150px -200px, -250px -350px, 350px -150px; }
        }
        @keyframes twinkle{
          0%, 100%{ opacity:.12; }
          50%{ opacity:.35; }
        }
        @keyframes float-1{
          0%{ transform: translate(-6%, -2%) scale(1); }
          50%{ transform: translate(2%, 4%) scale(1.04); }
          100%{ transform: translate(-6%, -2%) scale(1); }
        }
        @keyframes float-2{
          0%{ transform: translate(6%, 0) scale(1); }
          50%{ transform: translate(-2%, 6%) scale(1.06); }
          100%{ transform: translate(6%, 0) scale(1); }
        }
        @keyframes float-3{
          0%{ transform: translate(0, 4%) scale(1); }
          50%{ transform: translate(6%, -2%) scale(1.05); }
          100%{ transform: translate(0, 4%) scale(1); }
        }
        @keyframes grid-glow{
          0%, 100%{ opacity:.42; box-shadow: 0 -10px 80px rgba(112,240,255,.15) inset; }
          50%{ opacity:.52; box-shadow: 0 -10px 80px rgba(169,108,255,.2) inset; }
        }
        @keyframes scan{
          0%{ background-position: 0 -200px, 0 0; }
          100%{ background-position: 0 0, 0 0; }
        }
        @keyframes aurora-flow{
          0%{ transform:translateY(0); opacity:.6; }
          100%{ transform:translateY(10px); opacity:.75; }
        }
      `}</style>
    </main>
  );
}