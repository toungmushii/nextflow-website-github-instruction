


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f7c873 0%, #f5e9d6 100%)', fontFamily: 'SF Pro Display, Arial, sans-serif' }}>
            {/* Header แบบชาเย็น */}
            <nav style={{ width: '100%', background: '#f7c873', padding: '16px 0', borderBottom: '1px solid #e0cfae', textAlign: 'center', fontSize: '18px', fontWeight: '500', color: '#7c4a03', letterSpacing: '1px', boxShadow: '0 2px 8px #e0cfae55' }}>
                โทรศัพท์สีชาเย็น
            </nav>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '2rem', color: '#d2691e', letterSpacing: '-2px', textShadow: '1px 1px 0 #fff8e1' }}>
                            เปิดตัวสินค้าใหม่<br />โทรศัพท์สีชาเย็น
                        </h1>
                        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
                            <img
                                src="https://pngimg.com/d/iphone_14_PNG19.png"
                                alt="โทรศัพท์ล้ำสมัย ไม่มีพื้นหลัง"
                                style={{
                                    maxWidth: '350px',
                                    width: '100%',
                                    borderRadius: '32px',
                                    boxShadow: '0 8px 32px #d2691e55',
                                    border: '6px solid #f7c873',
                                    animation: 'floatPhone 2.5s ease-in-out infinite',
                                    background: 'transparent',
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                bottom: '-18px',
                                transform: 'translateX(-50%)',
                                width: '60%',
                                height: '18px',
                                background: 'radial-gradient(ellipse at center, #d2691e33 0%, #fff0 80%)',
                                opacity: 0.7,
                                borderRadius: '50%',
                                filter: 'blur(2px)',
                            }} />
                        </div>
                        <p style={{ fontSize: '1.5rem', color: '#7c4a03', marginBottom: '2.5rem', fontWeight: 400, textShadow: '1px 1px 0 #fff8e1' }}>
                            สัมผัสประสบการณ์ใหม่กับโทรศัพท์สีชาเย็น<br />ดีไซน์เรียบหรู สีสันโดดเด่น พร้อมฟีเจอร์ล้ำสมัย
                        </p>
                        <div className="d-flex flex-column align-items-center gap-3">
                            <a href="/booking" className="btn btn-lg px-5" style={{
                                fontSize: '1.3rem',
                                borderRadius: '32px',
                                fontWeight: 700,
                                background: 'linear-gradient(90deg, #ff9800 0%, #f7c873 100%)',
                                color: '#fff',
                                border: 'none',
                                boxShadow: '0 4px 16px #ff980088',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                transition: '0.2s',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                                onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #f7c873 0%, #ff9800 100%)'}
                                onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #ff9800 0%, #f7c873 100%)'}
                            >
                                จองเลย
                                <span style={{
                                    position: 'absolute',
                                    right: '18px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '1.5rem',
                                    color: '#fff8e1',
                                    filter: 'drop-shadow(0 2px 4px #d2691e88)'
                                }}>→</span>
                            </a>
                            <a href="/contact" className="btn btn-lg px-5" style={{ fontSize: '1.2rem', borderRadius: '24px', fontWeight: 500, boxShadow: '0 2px 8px #d2691e33', background: 'linear-gradient(90deg, #d2691e 0%, #f7c873 100%)', color: '#fff', border: 'none', transition: '0.2s', letterSpacing: '1px' }}>
                                ติดต่อเรา
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer style={{ background: '#f7c873', color: '#7c4a03', textAlign: 'center', padding: '32px 0', fontSize: '1rem', fontWeight: 500, borderTop: '1px solid #e0cfae', boxShadow: '0 -2px 8px #e0cfae55' }}>
                Contact@fusionware.com
            </footer>
        </div>
    );
}


// Animation CSS
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes floatPhone {
    0% { transform: translateY(0); }
    50% { transform: translateY(-18px); }
    100% { transform: translateY(0); }
}`;
document.head.appendChild(styleSheet);

export default Home;
