


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5e9d6 0%, #f7c873 100%)', fontFamily: 'SF Pro Display, Arial, sans-serif' }}>
            {/* Header แบบชาเย็น */}
            <nav style={{ width: '100%', background: '#f7c873', padding: '16px 0', borderBottom: '1px solid #e0cfae', textAlign: 'center', fontSize: '18px', fontWeight: '500', color: '#7c4a03', letterSpacing: '1px', boxShadow: '0 2px 8px #e0cfae55' }}>
                โทรศัพท์สีชาเย็น
            </nav>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="rounded shadow p-4" style={{ background: '#fff', border: '1px solid #f7c873' }}>
                            <h2 className="mb-4 text-center" style={{ color: '#d2691e', fontWeight: 'bold', fontSize: '2.5rem', textShadow: '1px 1px 0 #fff8e1' }}>Contact Us</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label" style={{ color: '#7c4a03', fontSize: '1.1rem' }}>Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" style={{ borderRadius: '1rem', fontSize: '1.1rem', background: '#f5e9d6', border: '1px solid #f7c873' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ color: '#7c4a03', fontSize: '1.1rem' }}>Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" style={{ borderRadius: '1rem', fontSize: '1.1rem', background: '#f5e9d6', border: '1px solid #f7c873' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label" style={{ color: '#7c4a03', fontSize: '1.1rem' }}>Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message" style={{ borderRadius: '1rem', fontSize: '1.1rem', background: '#f5e9d6', border: '1px solid #f7c873' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-lg w-100" style={{ fontSize: '1.2rem', borderRadius: '1rem', fontWeight: 500, background: 'linear-gradient(90deg, #d2691e 0%, #f7c873 100%)', color: '#fff', border: 'none', boxShadow: '0 2px 8px #d2691e33' }}>Send</button>
                            </form>
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

export default Contact;
