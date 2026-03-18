import React from 'react';

const Certificates = () => {
  // Daftar 6 sertifikatmu
  const myCerts = [
    { id: 1, img: "/sertif1.jpg", title: "Sertifikat 1", desc: "Deskripsi Singkat" },
    { id: 2, img: "/sertif2.jpg", title: "Sertifikat 2", desc: "Deskripsi Singkat" },
    { id: 3, img: "/sertif3.jpg", title: "Sertifikat 3", desc: "Deskripsi Singkat" },
    { id: 4, img: "/sertif4.jpg", title: "Sertifikat 4", desc: "Deskripsi Singkat" },
    { id: 5, img: "/sertif5.jpg", title: "Sertifikat 5", desc: "Deskripsi Singkat" },
    { id: 6, img: "/sertif6.jpg", title: "Sertifikat 6", desc: "Deskripsi Singkat" },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>🌸 My Sakura Achievements 🌸</h2>
      <div style={styles.grid}>
        {myCerts.map((cert) => (
          <div key={cert.id} style={styles.card}>
            <img src={cert.img} alt={cert.title} style={styles.image} />
            <div style={styles.info}>
              <h3 style={styles.certTitle}>{cert.title}</h3>
              <p style={styles.certDesc}>{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styling langsung di dalam file (Inline Style) biar simpel
const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#fff5f8', // Pink Sakura Soft
    textAlign: 'center' as const,
  },
  title: {
    color: '#d87093',
    marginBottom: '40px',
    fontFamily: 'Poppins, sans-serif',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(255, 183, 197, 0.3)',
    border: '1px solid #ffb7c5',
    transition: '0.3s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const,
  },
  info: {
    padding: '15px',
  },
  certTitle: {
    fontSize: '1.1rem',
    color: '#444',
    margin: '0 0 5px 0',
  },
  certDesc: {
    fontSize: '0.9rem',
    color: '#d87093',
    margin: 0,
  }
};

export default Certificates;