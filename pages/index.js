/*
  List of things I would like to add:
    - Animations such as
      - Hover Animation
      - Scroll Animation/effect
    - Reformat the "About Me" Header
    - IF you think of anything else put it in here
*/
import Head from 'next/head';
//import styled from 'styled-components';
import { FaJava, FaPython, FaJs, FaReact } from 'react-icons/fa'; // Import relevant icons from coding section
import { SiCplusplus, SiNextdotjs } from 'react-icons/si'; // Other icons for coding section
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Github and LinkedIn icon
import { MdOutlineDescription } from 'react-icons/md'; // For the resume icon

export default function Home() {
  return ( // could do font as 'Bodoni MT, serif' but i liked other better, Calibri, sans-serif
    <div style={{ fontFamily: 'Segoe UI, Roboto, Helvetica Neue, sans-serif', 
                  fontSize: '1.2rem',
                  backgroundColor: '#f5f7fa', //EDE8F5, header: 8697C4
                  color: '#1c1c1c', //#333
                  minHeight: '100vh', 
                  margin: 0, 
                  padding: 0 }}>
      <Head>
        <title>Jace Rea | Portfolio</title>
        <link rel="icon" type="image/jpeg" href="/ReactIcon.jpg" />
      </Head>

      <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize:'1.5rem', zIndex: 1000 }}>
        <a href="#about-me" style={{ fontFamily: 'Calibri, sans-serif', fontStyle: 'italic', marginLeft: '10px', textDecoration: 'underline', color: 'white'}}>About Me</a>
        { /* removed skills section */}
        <a href="#projects" style={{ fontFamily: 'Calibri, sans-serif', fontStyle: 'italic', marginLeft: '10px', textDecoration: 'underline', color: 'white' }}>Projects</a>
        <a href="#coding-proficiencies" style={{ fontFamily: 'Calibri, sans-serif', fontStyle: 'italic', marginLeft: '10px', textDecoration: 'underline', color: 'white'}}>Coding Proficiencies</a>
      </div>

      
      <header style={{ fontFamily: 'Calibri, sans-serif', padding: '20px', fontSize: '1.4rem', textAlign: 'center', backgroundColor: '#0a2e5c' , color: 'white' }}>
        <img src="/Logo.jpg" 
             alt="Jace Rea's Logo" 
             style={{ position: 'absolute', top: '20px', left: '20px', maxWidth: '180px' }} />
        <h1>Jace Rea</h1>
        <p style = {{ fontStyle: 'italic' }}>
          Junior at UNC Chapel Hill | Computer Science and Business Administration Major and Entrepreneur Minor</p>
      </header>

      {/* Need to fix this so the about me is above the paragraph but its breaking my code*/}
      <main style={{ padding: '20px', textAlign: 'center' }}>
      <section id = "about-me" style={{ marginBottom: '200px' }}>
        <h2 style={{ fontSize: '3.5rem', textDecoration: 'underline'}}>About Me</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/*this is me and my image on the left */}
          <div style={{ flex: '0 0 30%' }}>
            <img
              src="/New-Jace-Rea_Photo.png"  // W public photo bro thank god for the public file. Need a more professional photo tho.
              alt="Jace Rea"
            />
          </div>
          
          {/*this is the text on the right changed text size */}
          <div style={{ flex: '1', maxWidth: '1000px', padding: '10px' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.6'}}>
              Hey, I'm Jace! I am currently a junior at the University of North Carolina at Chapel Hill, where I'm pursuing an exciting journey toward a Master's in Computer Science 
              while majoring in Business. My love for technology and innovation fuels my curiosity as I dive deep into the world of coding and consulting, constantly seeking new ways to challenge 
              myself and expand my skills. Outside the classroom, I am an enthusiastic sports fan, a film enjoyer, and a lover of music, all of which inspire my creativity and 
              drive. Whether it’s through coding a new project, solving complex problems with modern business solutions, or jamming out to my favorite tunes, I am always looking 
              for ways to blend my diverse interests into something meaningful and impactful.
            </p>
          </div>
        </div>
      </section>
      

      <section id="consulting-portfolio" style={{ marginBottom: '100px' }}>
        <h2 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '40px' }}>Consulting Portfolio</h2> 
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '20px', 
          justifyContent: 'center'
        }}>

          {/* Project 1 */}
          <a 
            href="https://www.canva.com/design/DAGuEZhHSpQ/Fm5NaJNWd1cQgm_oJJc0FQ/edit?utm_content=DAGuEZhHSpQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '220px', // smaller width
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              textDecoration: 'none',
              cursor: 'pointer',
              flex: '0 0 220px',
              maxWidth: '100%',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '100%',
              paddingTop: '66.66%', // 3:2 aspect ratio
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src="/SalfordCity.png" 
                alt="Salford City FC"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{ 
              padding: '8px', // smaller padding
              backgroundColor: '#3D52A0', 
              color: 'white', 
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '16px' // slightly smaller text
            }}>
              Salford City FC
            </div>
          </a>

          {/* Project 2 */}
          <a 
            href="https://www.canva.com/design/DAGujkGeUlQ/yd62Drb3mQXz7jHOojiVUQ/edit?utm_content=DAGujkGeUlQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '220px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              textDecoration: 'none',
              cursor: 'pointer',
              flex: '0 0 220px',
              maxWidth: '100%',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '100%',
              paddingTop: '66.66%',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src="/mancitywomanspicture.png" 
                alt="Manchester City Woman's FC"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{ 
              padding: '8px', 
              backgroundColor: '#3D52A0', 
              color: 'white', 
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              Manchester City Woman's FC
            </div>
          </a>

          {/* Project 3 */}
          <a 
            href="https://www.canva.com/design/DAGtc3-okQQ/sKtU_lXynAYtIrVFmiF-Bw/edit?utm_content=DAGtc3-okQQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '220px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              textDecoration: 'none',
              cursor: 'pointer',
              flex: '0 0 220px',
              maxWidth: '100%',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '100%',
              paddingTop: '66.66%',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src="/PlymouthArgyleFinance.png" 
                alt="Plymouth Argyles FC"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{ 
              padding: '8px', 
              backgroundColor: '#3D52A0', 
              color: 'white', 
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              Plymouth Argyles FC
            </div>
          </a>
        </div>
      </section>
        
        <section id="projects" style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '40px' }}>Coding Projects</h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '20px', 
            justifyContent: 'center'
          }}>

            {/* Project 1 */}
            <a 
              href="https://github.com/jacerea/tetris-dog-game"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '220px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                textDecoration: 'none',
                cursor: 'pointer',
                flex: '0 0 220px',
                maxWidth: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '100%',
                paddingTop: '66.66%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src="/tetris-dog-thumbnail.png"
                  alt="Tetris-Style Dog Game"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ 
                padding: '8px',
                backgroundColor: '#3D52A0', 
                color: 'white', 
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                Tetris-Style Dog Game
              </div>
            </a>

            {/* Project 2 */}
            <a 
              href="https://github.com/jacerea/unc-sport-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '220px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                textDecoration: 'none',
                cursor: 'pointer',
                flex: '0 0 220px',
                maxWidth: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '100%',
                paddingTop: '66.66%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src="/unc-chatbot-thumbnail.png"
                  alt="UNC Sports Chatbot"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ 
                padding: '8px',
                backgroundColor: '#3D52A0', 
                color: 'white', 
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                UNC Sports Chatbot
              </div>
            </a>

            {/* Project 3 */}
            <a 
              href="https://github.com/jacerea/ancient-philosophy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '220px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                textDecoration: 'none',
                cursor: 'pointer',
                flex: '0 0 220px',
                maxWidth: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '100%',
                paddingTop: '66.66%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src="/ancient-philosophy-thumbnail.png"
                  alt="Ancient Philosophy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ 
                padding: '8px',
                backgroundColor: '#3D52A0', 
                color: 'white', 
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                Ancient Philosophy
              </div>
            </a>

            {/* Project 4 */}
            <a 
              href="https://github.com/jacerea/my-website"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '220px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                textDecoration: 'none',
                cursor: 'pointer',
                flex: '0 0 220px',
                maxWidth: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '100%',
                paddingTop: '66.66%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src="/personal-website-thumbnail.png"
                  alt="Personal Website"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ 
                padding: '8px',
                backgroundColor: '#3D52A0', 
                color: 'white', 
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                Personal Website
              </div>
            </a>

          </div>
        </section>

        
        <section id="coding-proficiencies" style={{ marginBottom: '100px' }}> 
          <h2 style={{ fontSize: '3.5rem'}}>Coding Proficiencies</h2> 
          <div // Just need animations now and the rest should be fine
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',  
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '100px',
              width: '35%',
              maxWidth: '1000px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {/*Java*/}
            <div
              className="popOut" 
              style={{ ...styles.logoBox, width: '200px', height: '150px' }}>
              <FaJava style={styles.icon} />
              <p style={styles.logoText}>Java</p>
            </div>

            {/*Python*/}
            <div style={{ ...styles.logoBox, width: '200px', height: '150px' }}>
              <FaPython style={styles.icon} />
              <p style={styles.logoText}>Python</p>
            </div>

            {/*JavaScript*/}
            <div style={{ ...styles.logoBox, width: '200px', height: '150px' }}>
              <FaJs style={styles.icon} />
              <p style={styles.logoText}>JavaScript</p>
            </div>

            {/*React*/}
            <div style={{ ...styles.logoBox, width: '200px', height: '150px' }}>
              <FaReact style={styles.icon} />
              <p style={styles.logoText}>React</p>
            </div>

            {/*C++*/}
            <div style={{ ...styles.logoBox, width: '200px', height: '150px' }}>
              <SiCplusplus style={styles.icon} />
              <p style={styles.logoText}>C++</p>
            </div>

            {/*Next.js*/}
            <div style={{ ...styles.logoBox, width: '200px', height: '150px' }}>
              <SiNextdotjs style={styles.icon} />
              <p style={styles.logoText}>Next.js</p>
            </div>
          </div>
        </section>
        
        {/* Added logo for each of these looks great */}
        <section style = {{ textAlign: 'center', marginBottom: '100px'}}>
          <h2 style = {{ fontSize: '2.5rem' }}>Connect With Me!</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
            {/*LinkedIn Button*/}
            <button
              style={{ margin: '10px', padding: '15px 30px', fontSize: '18px', backgroundColor: '#0077B5', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'underline', gap: '10px'}}
              onClick={() => window.open('https://www.linkedin.com/in/jace-rea04/', '_blank')}
            >
              <FaLinkedin size={24} /> LinkedIn
            </button>

            {/*Resume Button*/}
            <button
              style={{margin: '10px', padding: '15px 30px', fontSize: '18px', backgroundColor: '#3D52A0', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'underline'}}
              onClick={() => window.open('https://docs.google.com/document/d/1DaaZMfiJVdWixJzwECqEK-dgVw8XZiBF3Zh8F3iGNoc/edit?usp=sharing','_blank')}
            >
              <MdOutlineDescription size={24} /> View My Resume
            </button>

            {/* GitHub School Link */}
            <button
              style={{margin: '10px', padding: '15px 30px', fontSize: '18px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'underline'}}
              onClick={() => window.open('https://github.com/jacerea', '_blank')}
            >
              <FaGithub size={24} />GitHub
            </button>
          </div>
        </section>


      <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#8697C4', color: 'white', textDecoration: 'underline' }}>
        <p>&copy; 2025 Jace Rea</p>
      </footer>
     </main>
    </div>
  );
}

//Just need animations now
const styles = {
  logoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '2px solid #3D52A0',
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 1.3s',
  },
  icon: {
    fontSize: '2rem',
    color: '#3D52A0',
    marginBottom: '5px',
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
};


