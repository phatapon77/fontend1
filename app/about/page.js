export const metadata = {
  title: 'เกี่ยวกับเรา | DAILY',
  description: 'รู้จักกับ DAILY แพลตฟอร์มบทความ/ข่าวสารสไตล์อนาคต',
};

export default function AboutPage() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold mb-3">
            <i className="bi bi-info-circle me-2"></i>
            เกี่ยวกับเรา
          </h1>
          <p className="lead mb-4">
            DAILY คือแพลตฟอร์มเผยแพร่บทความ ข่าวสาร และคอนเทนต์คุณภาพที่ออกแบบด้วยประสบการณ์ผู้ใช้ยุคใหม่
            เราให้ความสำคัญกับความเร็ว ความสวยงาม และความปลอดภัย เพื่อให้ผู้อ่านเข้าถึงข้ออมูลที่ต้องการได้อย่างราบรื่น
          </p>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="p-3 h-100 border rounded-4" style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03))',
                borderColor: 'rgba(255,255,255,.14)'
              }}>
                <div className="d-flex align-items-start">
                  <div className="me-3 fs-3 text-info"><i className="bi bi-lightning-charge"></i></div>
                  <div>
                    <h5 className="mb-1">รวดเร็วและทันสมัย</h5>
                    <p className="mb-0 text-secondary">เทคโนโลยีเว็บยุคใหม่เพื่อประสบการณ์การอ่านที่ลื่นไหล</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 h-100 border rounded-4" style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03))',
                borderColor: 'rgba(255,255,255,.14)'
              }}>
                <div className="d-flex align-items-start">
                  <div className="me-3 fs-3 text-primary"><i className="bi bi-shield-check"></i></div>
                  <div>
                    <h5 className="mb-1">ปลอดภัย น่าเชื่อถือ</h5>
                    <p className="mb-0 text-secondary">เน้นการปกป้องข้อมูลและความเป็นส่วนตัวของผู้ใช้</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="p-4 border rounded-4" style={{
            background: 'linear-gradient(180deg, rgba(0,229,255,.14), rgba(41,121,255,.12))',
            borderColor: 'rgba(255,255,255,.14)',
            boxShadow: '0 20px 60px rgba(0,0,0,.35)'
          }}>
            <h5 className="mb-2"><i className="bi bi-bullseye me-2"></i>พันธกิจของเรา</h5>
            <p className="mb-0 text-secondary">
              มอบคอนเทนต์ที่เป็นประโยชน์ต่อผู้คน ผ่านดีไซน์ที่สวยงามและเข้าถึงง่าย
              พร้อมพัฒนาอย่างต่อเนื่องเพื่อรองรับอนาคตของสื่อออนไลน์
            </p>
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <div className="row g-4">
        <div className="col-md-4">
          <div className="p-4 h-100 border rounded-4">
            <h6 className="text-uppercase text-secondary mb-2">ค่านิยม</h6>
            <h5 className="mb-2">คุณภาพเหนือสิ่งอื่นใด</h5>
            <p className="mb-0 text-secondary">เราพิถีพิถันในรายละเอียดของเนื้อหาและประสบการณ์ผู้ใช้</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 h-100 border rounded-4">
            <h6 className="text-uppercase text-secondary mb-2">ชุมชน</h6>
            <h5 className="mb-2">เติบโตไปด้วยกัน</h5>
            <p className="mb-0 text-secondary">เปิดรับข้อเสนอแนะและไอเดียเพื่อพัฒนาร่วมกับผู้ใช้</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 h-100 border rounded-4">
            <h6 className="text-uppercase text-secondary mb-2">อนาคต</h6>
            <h5 className="mb-2">นวัตกรรมไม่หยุดนิ่ง</h5>
            <p className="mb-0 text-secondary">ทดลองสิ่งใหม่ ๆ เพื่อสร้างมาตรฐานใหม่ของการอ่านออนไลน์</p>
          </div>
        </div>
      </div>
    </main>
  );
}
