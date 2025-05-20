import './App.css';
import Portfolio from './components/Portfolio';
import ServiceList from './components/ServiceList';
import React, { useState, useRef } from 'react';

const profileImg = '/efe.png'; // Erkek profil fotoğrafı

const SECTIONS = [
  { id: 'home', label: 'Ana sayfa' },
  { id: 'about', label: 'Ben kimim?' },
  { id: 'services', label: 'Neler yapabilirim?' },
  { id: 'portfolio', label: 'Portfolyo' },
  { id: 'contact', label: 'İletişim' },
];

function App() {
  const [form, setForm] = useState({ adsoyad: '' , mail: '', icerik: '' });
  const [gonderildi, setGonderildi] = useState(false);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setGonderildi(true);
    setForm({ adsoyad: 'Efe', mail: '', icerik: '' });
  };

  // Menüye tıklanınca ilgili bölüme scroll
  const handleMenuClick = (id) => {
    sectionRefs[id].current.scrollIntoView({ behavior: 'smooth' });
    setGonderildi(false);
  };

  return (
    <div className="App">
      <header>
        <div className="profile-box">
          <img src={profileImg} alt="Efe" className="profile-img" />
          <div className="profile-name">Efe</div>
        </div>
        <nav>
          <ul>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href="#"
                  onClick={() => handleMenuClick(section.id)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer" title="X"><svg width="24" height="24" fill="#f5f6fa" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47A.75.75 0 1 0 6.47 7.53L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z"/></svg></a>
          <a href="https://github.com/MuratEfeCamoglu" target="_blank" rel="noopener noreferrer" title="Github"><svg width="24" height="24" fill="#f5f6fa" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg></a>
          <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook"><svg width="24" height="24" fill="#f5f6fa" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
        </div>
      </header>
      <main>
        <div className="sections-wrapper">
          <section id="home" ref={sectionRefs.home}>
            <h1>Murat Efe Çamoğlu </h1>
            <h2>Ben bir bilgisayar mühendisi öğrencisiyim.</h2>
            <h2>Aydın Efelerde yaşıyorum.</h2>
          </section>
          <section id="about" ref={sectionRefs.about}>
            <h2>Ben Kimim?</h2>
            <div className="about-section-flex" style={{display: 'flex', flexDirection: 'row', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap'}}>
              <div style={{background: '#23272b', borderRadius: 12, padding: '32px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.15)', flex: '1 1 48%', marginBottom: 16, minWidth: 0}}>
                <h3 style={{color: '#00d2ff', marginBottom: 18, fontSize: '1.2rem'}}>Kısa Biyografi</h3>
                <p style={{color: '#b0b3b8', fontSize: '1.05rem', marginBottom: 8}}>
                  Ben Murat Efe Çamoğlu, Öğrenciyim 17/07/2004 İstanbul Üsküdar doğumluyum. 
                  Aydın/Efelerde yaşıyorum. İzmir Çiğli Fen Lisesi mezunuyum. 
                  Balıkesir Üniversitesi Bilgisayar Mühendisliği 2.Sınıf öğrencisiyim.
                  2 yıldır yazılım geliştirme, bilgisayar teknolojileri ile uğraşıyorum. 
                  Yaratıcı projeler üretmeyi ve yeni teknolojiler öğrenmeyi çok seviyorum.
                  Hobilerimse NBA basketbolu, F1 sezonunu, Oyun sektörünü takip edip bunlarla ilgili bilgiye sahip olmak.
                </p>
                <div style={{marginTop: 18, color: '#f5f6fa', fontWeight: 600, fontSize: '1.1rem'}}>Kişisel Bilgiler</div>
                <p style={{color: '#b0b3b8', marginBottom: 4}}><b>Yaş:</b> 20</p>
                <p style={{color: '#b0b3b8', marginBottom: 4}}><b>Şehir:</b> Aydın</p>
                <p style={{color: '#b0b3b8', marginBottom: 4}}><b>E-posta:</b> camoglumuratefe@gmail.com</p>
                <p style={{color: '#b0b3b8', marginBottom: 4}}><b>Telefon:</b>  (0551) 123 23 48   </p>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', gap: 16, flexWrap: 'wrap', alignItems: 'center', flex: '1 1 48%', minWidth: 0}}>
                {/* Bu alan boş bırakıldı, istatistik kutuları kaldırıldı */}
              </div>
            </div>
          </section>
          <section id="services" ref={sectionRefs.services}>
            <h2>Neler Yapabilirim?</h2>
            <div className="about-section-flex" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
              marginTop: 24,
              justifyItems: 'start',
              alignItems: 'stretch',
              maxWidth: 1200,
              marginLeft: 0,
              marginRight: 'auto',
              paddingLeft: 32
            }}>
              <div style={{background:'#23272b', borderRadius:12, padding:'32px 24px', minWidth:0, boxShadow:'0 2px 12px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
                <div style={{fontWeight:700, color:'#f5f6fa', fontSize:18, marginBottom:8}}>Web Tasarım</div>
                <div style={{color:'#b0b3b8', fontSize:15, textAlign:'center'}}>Html, Css, JavaScript kullanarak modern ve hızlı web siteleri tasarlıyor, kullanıcı dostu arayüzler geliştiriyorum.</div>
              </div>
              <div style={{background:'#23272b', borderRadius:12, padding:'32px 24px', minWidth:0, boxShadow:'0 2px 12px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
                <div style={{fontWeight:700, color:'#f5f6fa', fontSize:18, marginBottom:8}}>Teknik Çizim</div>
                <div style={{color:'#b0b3b8', fontSize:15, textAlign:'center'}}>Fusion 360 kullanarak teknik çizimler geliştiriyorum.</div>
              </div>
              <div style={{background:'#23272b', borderRadius:12, padding:'32px 24px', minWidth:0, boxShadow:'0 2px 12px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
                <div style={{fontWeight:700, color:'#f5f6fa', fontSize:18, marginBottom:8}}>Görsel Programlama</div>
                <div style={{color:'#b0b3b8', fontSize:15, textAlign:'center'}}>Qt Designer, Python, C# Forms kullanarak görsel tasarımlar oluşturuyorum.</div>
              </div>
              <div style={{background:'#23272b', borderRadius:12, padding:'32px 24px', minWidth:0, boxShadow:'0 2px 12px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
                <div style={{fontWeight:700, color:'#f5f6fa', fontSize:18, marginBottom:8}}>Veri Tabanı ve Algoritma</div>
                <div style={{color:'#b0b3b8', fontSize:15, textAlign:'center'}}>Sqlite 3 ve Java'da veritabanı ve algoritma oluşturuyorum.</div>
              </div>
            </div>
          </section>
          <section id="portfolio" ref={sectionRefs.portfolio}>
            <h2>Portfolyo</h2>
            <div className="about-section-flex" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
              marginTop: 24,
              justifyItems: 'start',
              alignItems: 'stretch',
              maxWidth: 1200,
              marginLeft: 0,
              marginRight: 'auto',
              paddingLeft: 32
            }}>
              <a href="https://github.com/MuratEfeCamoglu/MuratEfeCamoglu202313709029UygulamaProjes-.git" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', width:'100%'}}>
                <div style={{background:'#23272b', borderRadius:12, padding:'32px 24px', minWidth:0, boxShadow:'0 2px 12px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
                  <div style={{fontWeight:700, color:'#f5f6fa', fontSize:18, marginBottom:8}}>NBA Uygulaması</div>
                  <div style={{color:'#b0b3b8', fontSize:15, textAlign:'center'}}>NBA istatistiklerini ve güncel haberleri gösteren uygulama.</div>
                </div>
              </a>
              <a href="https://github.com/MuratEfeCamoglu/Gorsel-Programlama-Efe" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', width:'100%'}}>
                <div style={{background:'#23272b', borderRadius:12, padding:'32px 24px', minWidth:0, boxShadow:'0 2px 12px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
                  <div style={{fontWeight:700, color:'#f5f6fa', fontSize:18, marginBottom:8}}>Hesap Makinesi</div>
                  <div style={{color:'#b0b3b8', fontSize:15, textAlign:'center'}}>Dört işlem yapabilen basit hesap makinesi uygulaması.</div>
                </div>
              </a>
              <a href="https://github.com/MuratEfeCamoglu/Gorsel-Programlama-Efe" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', width:'100%'}}>
                <div style={{background:'#23272b', borderRadius:12, padding:'32px 24px', minWidth:0, boxShadow:'0 2px 12px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
                  <div style={{fontWeight:700, color:'#f5f6fa', fontSize:18, marginBottom:8}}>Not Defteri</div>
                  <div style={{color:'#b0b3b8', fontSize:15, textAlign:'center'}}>Notlarınızı kaydedebileceğiniz basit not defteri uygulaması.</div>
                </div>
              </a>
              <a href="https://github.com/MuratEfeCamoglu/Gorsel-Programlama-Efe" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', width:'100%'}}>
                <div style={{background:'#23272b', borderRadius:12, padding:'32px 24px', minWidth:0, boxShadow:'0 2px 12px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
                  <div style={{fontWeight:700, color:'#f5f6fa', fontSize:18, marginBottom:8}}>Soru Bankası</div>
                  <div style={{color:'#b0b3b8', fontSize:15, textAlign:'center'}}>Çeşitli konularda sorular içeren soru bankası uygulaması.</div>
                </div>
              </a>
            </div>
          </section>
          <section id="contact" ref={sectionRefs.contact}>
            <div className="contact-section">
              <div className="contact-info">
                <h3>ADRES</h3>
                <p>Efeler, Aydın</p>
                <p className="info-label">TELEFON</p>
                <p><span role="img" aria-label="Telefon">📞</span> (0551) 123 23 48</p>
                <p className="info-label">E-POSTA</p>
                <p><span role="img" aria-label="Mail">✉️</span> camoglumuratefe@mail.com</p>
                <div className="info-label">SOSYAL MEDYA</div>
                <div className="contact-socials">
                  <a href="#" target="_blank" rel="noopener noreferrer" title="X"><svg width="20" height="20" fill="#f5f6fa" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47A.75.75 0 1 0 6.47 7.53L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z"/></svg></a>
                  <a href="https://github.com/MuratEfeCamoglu" target="_blank" rel="noopener noreferrer" title="Github"><svg width="20" height="20" fill="#f5f6fa" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook"><svg width="20" height="20" fill="#f5f6fa" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <label>Ad Soyad
                  <input type="text" name="adsoyad" value={form.adsoyad} onChange={handleChange} required />
                </label>
                <label>Mail
                  <input type="email" name="mail" value={form.mail} onChange={handleChange} required />
                </label>
                <label>İçerik
                  <textarea name="icerik" value={form.icerik} onChange={handleChange} required />
                </label>
                <button type="submit">Gönder</button>
                {gonderildi && <div className="form-success">Mesajınız iletildi!</div>}
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;