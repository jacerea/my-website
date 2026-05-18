/*
  List of things I would like to add:
    - Animations such as
      - Hover Animation DONE
      - Scroll Animation/effect DONE
    - Reformat the "About Me" Header DONE
    - IF you think of anything else put it in here
*/
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaJava, FaPython, FaJs, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineDescription } from 'react-icons/md';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      fontSize: '1.1rem',
      backgroundColor: '#f5f7fa',
      color: '#1c1c1c',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
    }}>
      <Head>
        <title>Jace Rea | Portfolio</title>
        <link rel="icon" type="image/jpeg" href="/ReactIcon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Sticky wrapper keeps header + mobile menu pinned together */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <header style={{
          backgroundColor: '#0a2e5c',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 40px',
          boxShadow: '0 2px 16px rgba(0, 0, 0, 0.3)',
        }}>
          <img
            src="/NewLogo.png"
            alt="Jace Rea's Logo"
            style={{ maxWidth: '150px' }}
          />

          <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '1.7rem', fontWeight: 700, letterSpacing: '0.4px' }}>
              Jace Rea
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '0.88rem', fontStyle: 'italic', opacity: 0.8 }}>
              Senior at UNC Chapel Hill | B.S. in Computer Science with a Data Science and Entrepreneur Minor
            </p>
          </div>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            <a href="#about-me" className="nav-link">About Me</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#coding-proficiencies" className="nav-link">Coding Proficiencies</a>
          </nav>

          {/* Hamburger button — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>

        {/* Mobile dropdown menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <a href="#about-me" className="nav-link" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#coding-proficiencies" className="nav-link" onClick={() => setMenuOpen(false)}>Coding Proficiencies</a>
        </div>
      </div>

      <main className="page-main">

        {/* About Me */}
        <section id="about-me" className="fade-in-section" style={{ marginBottom: '80px' }}>
          <h2 className="section-heading">About Me</h2>
          <div className="about-flex">
            <div style={{ flexShrink: 0 }}>
              <img
                src="/New-Jace-Rea_Photo.png"
                alt="Jace Rea"
                className="profile-photo"
              />
            </div>
            <div>
              <p className="about-text">
                Hey, I'm Jace! I am currently a Senior at the University of North Carolina at Chapel Hill, where I'm pursuing an exciting journey toward a B.S in Computer Science
                while minoring in Data Science and Entrepreneurship. My love for technology and innovation fuels my curiosity as I dive deep into the world of coding and consulting, constantly seeking new ways to challenge
                myself and expand my skills. Outside the classroom, I am an enthusiastic sports fan, a film enjoyer, and a lover of music, all of which inspire my creativity and
                drive. Whether it's through coding a new project, solving complex problems with modern business solutions, or jamming out to my favorite tunes, I am always looking
                for ways to blend my diverse interests into something meaningful and impactful.
              </p>
            </div>
          </div>
        </section>

        {/* Consulting Portfolio */}
        <section id="consulting-portfolio" className="fade-in-section" style={{ marginBottom: '80px' }}>
          <h2 className="section-heading">Consulting Portfolio</h2>
          <div style={styles.cardGrid}>

            <a
              href="https://www.canva.com/design/DAGuEZhHSpQ/Fm5NaJNWd1cQgm_oJJc0FQ/edit?utm_content=DAGuEZhHSpQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div style={styles.cardImageWrapper}>
                <img src="/SalfordCity.png" alt="Salford City FC" style={styles.cardImage} />
              </div>
              <div style={styles.cardLabel}>Salford City FC</div>
            </a>

            <a
              href="https://www.canva.com/design/DAGujkGeUlQ/yd62Drb3mQXz7jHOojiVUQ/edit?utm_content=DAGujkGeUlQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div style={styles.cardImageWrapper}>
                <img src="/mancitywomanspicture.png" alt="Manchester City Woman's FC" style={styles.cardImage} />
              </div>
              <div style={styles.cardLabel}>Manchester City Woman's FC</div>
            </a>

            <a
              href="https://www.canva.com/design/DAGtc3-okQQ/sKtU_lXynAYtIrVFmiF-Bw/edit?utm_content=DAGtc3-okQQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div style={styles.cardImageWrapper}>
                <img src="/PlymouthArgyleFinance.png" alt="Plymouth Argyles FC" style={styles.cardImage} />
              </div>
              <div style={styles.cardLabel}>Plymouth Argyles FC</div>
            </a>

            <a
              href="https://www.canva.com/design/DAHBIUhqZMM/iFaytt2s30VIQXNsu8kCEA/view?utm_content=DAHBIUhqZMM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4344a800f6"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div style={styles.cardImageWrapper}>
                <img src="/Protein_Report.png" alt="Protein Market Research Report" style={styles.cardImage} />
              </div>
              <div style={styles.cardLabel}>Protein Market Report</div>
            </a>

          </div>
        </section>

        {/* Coding Projects */}
        <section id="projects" className="fade-in-section" style={{ marginBottom: '80px' }}>
          <h2 className="section-heading">Coding Projects</h2>
          <div style={styles.cardGrid}>

            <a
              href="https://github.com/jacerea/tetris-dog-game"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div style={styles.cardImageWrapper}>
                <img src="/tetris-dog-thumbnail.png" alt="Tetris-Style Dog Game" style={styles.cardImage} />
              </div>
              <div style={styles.cardLabel}>Tetris-Style Dog Game</div>
            </a>

            <a
              href="https://github.com/jacerea/unc-sport-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div style={styles.cardImageWrapper}>
                <img src="/unc-chatbot-thumbnail.png" alt="UNC Sports Chatbot" style={styles.cardImage} />
              </div>
              <div style={styles.cardLabel}>UNC Sports Chatbot</div>
            </a>

            <a
              href="https://github.com/jacerea/ancient-philosophy"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div style={styles.cardImageWrapper}>
                <img src="/ancient-philosophy-thumbnail.png" alt="Ancient Philosophy" style={styles.cardImage} />
              </div>
              <div style={styles.cardLabel}>Ancient Philosophy</div>
            </a>

            <a
              href="https://github.com/jacerea/my-website"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div style={styles.cardImageWrapper}>
                <img src="/personal-website-thumbnail.png" alt="Personal Website" style={styles.cardImage} />
              </div>
              <div style={styles.cardLabel}>Personal Website</div>
            </a>

          </div>
        </section>

        {/* Coding Proficiencies */}
        <section id="coding-proficiencies" className="fade-in-section" style={{ marginBottom: '80px' }}>
          <h2 className="section-heading">Coding Proficiencies</h2>
          <div className="skill-grid">
            <div className="skill-card">
              <FaJava style={styles.icon} />
              <p style={styles.logoText}>Java</p>
            </div>
            <div className="skill-card">
              <FaPython style={styles.icon} />
              <p style={styles.logoText}>Python</p>
            </div>
            <div className="skill-card">
              <FaJs style={styles.icon} />
              <p style={styles.logoText}>JavaScript</p>
            </div>
            <div className="skill-card">
              <FaReact style={styles.icon} />
              <p style={styles.logoText}>React</p>
            </div>
            <div className="skill-card">
              <SiCplusplus style={styles.icon} />
              <p style={styles.logoText}>C++</p>
            </div>
            <div className="skill-card">
              <SiNextdotjs style={styles.icon} />
              <p style={styles.logoText}>Next.js</p>
            </div>
          </div>
        </section>

        {/* Connect With Me */}
        <section className="fade-in-section" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0a2e5c', marginBottom: '32px' }}>
            Connect With Me!
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              className="connect-btn"
              style={{ backgroundColor: '#0077B5' }}
              onClick={() => window.open('https://www.linkedin.com/in/jace-rea04/', '_blank')}
            >
              <FaLinkedin size={22} /> LinkedIn
            </button>
            <button
              className="connect-btn"
              style={{ backgroundColor: '#3D52A0' }}
              onClick={() => window.open('/Jace_Resume.png', '_blank')}
            >
              <MdOutlineDescription size={22} /> View My Resume
            </button>
            <button
              className="connect-btn"
              style={{ backgroundColor: '#333' }}
              onClick={() => window.open('https://github.com/jacerea', '_blank')}
            >
              <FaGithub size={22} /> GitHub
            </button>
          </div>
        </section>

      </main>

      <footer style={{
        padding: '24px',
        textAlign: 'center',
        backgroundColor: '#0a2e5c',
        color: 'white',
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Jace Rea</p>
      </footer>
    </div>
  );
}

const styles = {
  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
  },
  cardImageWrapper: {
    width: '100%',
    paddingTop: '66.66%',
    position: 'relative',
    overflow: 'hidden',
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  cardLabel: {
    padding: '12px 10px',
    backgroundColor: '#3D52A0',
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '15px',
    letterSpacing: '0.2px',
  },
  icon: {
    fontSize: '2.4rem',
    color: '#3D52A0',
    marginBottom: '10px',
  },
  logoText: {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#333',
    margin: 0,
  },
};
