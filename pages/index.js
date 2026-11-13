/*
  List of things I would like to add:
    - Animations such as
      - Hover Animation DONE
      - Scroll Animation/effect DONE
    - Reformat the "About Me" Header DONE
    - IF you think of anything else put it in here
    - Landing page? makes the website look longer and more professional Done, maybe wanna change the color but
*/
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { FaJava, FaPython, FaJs, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineDescription } from 'react-icons/md';

// Typewriter content (constant, so defined outside the component)
const fullName = 'Jace Rea';
const roles = ['Computer Scientist.', 'Consultant.', 'Creator.', 'Innovator.'];

const NAV_LINKS = [
  { id: 'about-me', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'coding-proficiencies', label: 'Coding Proficiencies' },
];

// Sections tracked for nav highlighting. Consulting has no nav link, so it highlights "About Me".
const NAV_SECTION_MAP = {
  'about-me': 'about-me',
  'consulting-portfolio': 'about-me',
  'projects': 'projects',
  'coding-proficiencies': 'coding-proficiencies',
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll / animation state
  const [introDone, setIntroDone] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastTop, setPastTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const heroRef = useRef(null);
  const progressRef = useRef(null);

  // Typewriter state
  const [displayedName, setDisplayedName] = useState('');
  const [nameComplete, setNameComplete] = useState(false);
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Let "Hi, I'm" animate in before the typewriter starts
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  //This types my name out onto the landing page
  useEffect(() => {
    if (!introDone || nameComplete) return;
    if (displayedName.length < fullName.length) {
      const t = setTimeout(() => setDisplayedName(fullName.slice(0, displayedName.length + 1)), 100);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setNameComplete(true), 500);
      return () => clearTimeout(t);
    }
  }, [displayedName, nameComplete, introDone]);

  //Then we cycle through each role and type those out, then check with isDeleting
  useEffect(() => {
    if (!nameComplete) return;
    const current = roles[roleIndex];
    if (!isDeleting && displayedRole.length < current.length) {
      const t = setTimeout(() => setDisplayedRole(current.slice(0, displayedRole.length + 1)), 60);
      return () => clearTimeout(t);
    } else if (!isDeleting && displayedRole.length === current.length) {
      const t = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(t);
    } else if (isDeleting && displayedRole.length > 0) {
      const t = setTimeout(() => setDisplayedRole(displayedRole.slice(0, -1)), 35);
      return () => clearTimeout(t);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
  }, [displayedRole, isDeleting, roleIndex, nameComplete]);

  // Scroll reveal: heading slides up, then each .reveal-item staggers in via its --i index
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      section.querySelectorAll('.reveal-item').forEach((el, i) => el.style.setProperty('--i', i));
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Active nav link: whichever section crosses the middle band of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(NAV_SECTION_MAP[entry.target.id]);
        });
      },
      { rootMargin: '-45% 0px -54% 0px' }
    );
    Object.keys(NAV_SECTION_MAP).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll progress bar, compact header, and hiding the scroll indicator (rAF-throttled)
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
      const hero = heroRef.current;
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
      setScrolled(y > heroBottom - 80);
      setPastTop(y > 40);
      if (y + window.innerHeight * 0.45 < heroBottom) setActiveSection('');
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
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
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />

      <Head>
        <title>Jace Rea | Portfolio</title>
        <link rel="icon" type="image/jpeg" href="/ReactIcon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Sticky wrapper keeps header and mobile menu pinned together */}
      <div
        className={`header-wrap${scrolled ? ' is-scrolled' : ''}`}
        style={{ position: 'sticky', top: 0, zIndex: 1000 }}
      >
        <header className="site-header">
          {/* Left: logo — flex:1 so it matches the right side width */}
          <div style={{ flex: 1 }}>
            <img
              src="/NewLogo.png"
              alt="Jace Rea's Logo"
              className="site-logo"
              style={{ maxWidth: '150px', display: 'block' }}
            />
          </div>

          {/* Center: always truly centered */}
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '1.7rem', fontWeight: 700, letterSpacing: '0.4px' }}>
              Jace Rea
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '0.88rem', fontStyle: 'italic', opacity: 0.8 }}>
              Senior at UNC Chapel Hill | B.S. in Computer Science with a Data Science and Entrepreneur Minor
            </p>
          </div>

          {/* Right: nav + dropdown — flex:1 so it balances the left */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <nav className="nav-desktop">
              {NAV_LINKS.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link${activeSection === link.id ? ' is-active' : ''}`}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              className={`hamburger${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        {/*Actual menu */}
        <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link${activeSection === link.id ? ' is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? undefined : -1}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Landing Section portion */}
      <section ref={heroRef} className="hero" style={{
        minHeight: '100vh',
        backgroundColor: '#0a2e5c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        color: 'white',
      }}>
        {/* Decorative animated background */}
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-orb hero-orb-1" />
          <span className="hero-orb hero-orb-2" />
          <span className="hero-orb hero-orb-3" />
          <span className="hero-grid" />
        </div>

        <p className="hero-intro" style={{ margin: '0 0 12px', fontSize: '1.2rem', fontWeight: 400, opacity: 0.7, letterSpacing: '2px', textTransform: 'uppercase' }}>
          Hi, I&apos;m
        </p>
        <h1 style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', fontWeight: 700, margin: '0 0 24px', letterSpacing: '-1px', lineHeight: 1.1 }}>
          {displayedName}
          {!nameComplete && <span className="cursor">|</span>}
        </h1>
        <div style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 500, color: 'rgba(255,255,255,0.7)', minHeight: '2rem', display: 'flex', alignItems: 'center', gap: '2px' }}>
          <span>{displayedRole}</span>
          {nameComplete && <span className="cursor">|</span>}
        </div>
        <a href="#about-me" className={`hero-cta${nameComplete ? ' is-shown' : ''}`}>
          View My Work <span className="cta-arrow" aria-hidden="true">↓</span>
        </a>

        <a
          href="#about-me"
          className={`scroll-indicator${pastTop ? ' is-hidden' : ''}`}
          aria-hidden="true"
          tabIndex={-1}
        >
          <span className="scroll-mouse"><span className="scroll-wheel" /></span>
        </a>
      </section>

      <main className="page-main">

        {/* About Me */}
        <section id="about-me" className="fade-in-section" style={{ marginBottom: '80px' }}>
          <h2 className="section-heading">About Me</h2>
          <div className="about-flex">
            <div className="reveal-item" style={{ flexShrink: 0 }}>
              <img
                src="/New-Jace-Rea_Photo.png"
                alt="Jace Rea"
                className="profile-photo"
              />
            </div>
            <div>
              <p className="about-text reveal-item">
                Hey, I&apos;m Jace! I am currently a Senior at the University of North Carolina at Chapel Hill, where I&apos;m pursuing an exciting journey toward a B.S in Computer Science
                while minoring in Data Science and Entrepreneurship. My love for technology and innovation fuels my curiosity as I dive deep into the world of coding and consulting, constantly seeking new ways to challenge
                myself and expand my skills. Outside the classroom, I am an enthusiastic sports fan, a film enjoyer, and a lover of music, all of which inspire my creativity and
                drive. Whether it&apos;s through coding a new project, solving complex problems with modern business solutions, or jamming out to my favorite tunes, I am always looking
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
              className="project-card reveal-item"
            >
              <div className="card-media">
                <img src="/SalfordCity.png" alt="Salford City FC" className="card-image" />
                <span className="card-cta" aria-hidden="true">View →</span>
              </div>
              <div className="card-label">Salford City FC</div>
            </a>

            <a
              href="https://www.canva.com/design/DAGujkGeUlQ/yd62Drb3mQXz7jHOojiVUQ/edit?utm_content=DAGujkGeUlQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-item"
            >
              <div className="card-media">
                <img src="/mancitywomanspicture.png" alt="Manchester City Woman's FC" className="card-image" />
                <span className="card-cta" aria-hidden="true">View →</span>
              </div>
              <div className="card-label">Man City Woman&apos;s FC</div>
            </a>

            <a
              href="https://www.canva.com/design/DAGtc3-okQQ/sKtU_lXynAYtIrVFmiF-Bw/edit?utm_content=DAGtc3-okQQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-item"
            >
              <div className="card-media">
                <img src="/PlymouthArgyleFinance.png" alt="Plymouth Argyles FC" className="card-image" />
                <span className="card-cta" aria-hidden="true">View →</span>
              </div>
              <div className="card-label">Plymouth Argyles FC</div>
            </a>

            <a
              href="https://www.canva.com/design/DAHBIUhqZMM/iFaytt2s30VIQXNsu8kCEA/view?utm_content=DAHBIUhqZMM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4344a800f6"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-item"
            >
              <div className="card-media">
                <img src="/Protein_Report.png" alt="Protein Market Research Report" className="card-image" />
                <span className="card-cta" aria-hidden="true">View →</span>
              </div>
              <div className="card-label">Protein Market Report</div>
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
              className="project-card reveal-item"
            >
              <div className="card-media">
                <img src="/tetris-dog-thumbnail.png" alt="Tetris-Style Dog Game" className="card-image" />
                <span className="card-cta" aria-hidden="true">View →</span>
              </div>
              <div className="card-label">Tetris-Style Dog Game</div>
            </a>

            <a
              href="https://github.com/jacerea/unc-sport-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-item"
            >
              <div className="card-media">
                <img src="/unc-chatbot-thumbnail.png" alt="UNC Sports Chatbot" className="card-image" />
                <span className="card-cta" aria-hidden="true">View →</span>
              </div>
              <div className="card-label">UNC Sports Chatbot</div>
            </a>

            <a
              href="https://github.com/jacerea/ancient-philosophy"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-item"
            >
              <div className="card-media">
                <img src="/ancient-philosophy-thumbnail.png" alt="Ancient Philosophy" className="card-image" />
                <span className="card-cta" aria-hidden="true">View →</span>
              </div>
              <div className="card-label">Ancient Philosophy</div>
            </a>

            <a
              href="https://github.com/jacerea/my-website"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-item"
            >
              <div className="card-media">
                <img src="/personal-website-thumbnail.png" alt="Personal Website" className="card-image" />
                <span className="card-cta" aria-hidden="true">View →</span>
              </div>
              <div className="card-label">Personal Website</div>
            </a>

          </div>
        </section>

        {/* Coding Proficiencies */}
        <section id="coding-proficiencies" className="fade-in-section" style={{ marginBottom: '80px' }}>
          <h2 className="section-heading">Coding Proficiencies</h2>
          <div className="skill-grid">
            <div className="skill-card reveal-item">
              <FaJava style={styles.icon} />
              <p style={styles.logoText}>Java</p>
            </div>
            <div className="skill-card reveal-item">
              <FaPython style={styles.icon} />
              <p style={styles.logoText}>Python</p>
            </div>
            <div className="skill-card reveal-item">
              <FaJs style={styles.icon} />
              <p style={styles.logoText}>JavaScript</p>
            </div>
            <div className="skill-card reveal-item">
              <FaReact style={styles.icon} />
              <p style={styles.logoText}>React</p>
            </div>
            <div className="skill-card reveal-item">
              <SiCplusplus style={styles.icon} />
              <p style={styles.logoText}>C++</p>
            </div>
            <div className="skill-card reveal-item">
              <SiNextdotjs style={styles.icon} />
              <p style={styles.logoText}>Next.js</p>
            </div>
          </div>
        </section>

        {/* Connect With Me */}
        <section className="fade-in-section" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="reveal-item" style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0a2e5c', marginBottom: '32px' }}>
            Connect With Me!
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              className="connect-btn reveal-item"
              style={{ backgroundColor: '#0077B5' }}
              onClick={() => window.open('https://www.linkedin.com/in/jace-rea04/', '_blank')}
            >
              <FaLinkedin size={22} /> LinkedIn
            </button>
            <button
              className="connect-btn reveal-item"
              style={{ backgroundColor: '#3D52A0' }}
              onClick={() => window.open('/Jace_Resume.png', '_blank')}
            >
              <MdOutlineDescription size={22} /> View My Resume
            </button>
            <button
              className="connect-btn reveal-item"
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
