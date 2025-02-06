import React from 'react';

export default function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', color: '#00bcd4' }}>
        About Me
      </h2>
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/aboutme.png`} 
                        alt="About Me"
            className="img-fluid rounded-circle"
            style={{
              maxWidth: '250px',   // Smaller size
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
              marginBottom: '20px' // Adds some space below the image
            }}
          />
        </div>
        <div className="col-md-6">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color:"white" }}>
            Hello! I'm Anouar Harchi, a passionate web developer with a deep love for coding, technology, and learning. I specialize in creating dynamic and responsive websites and applications. My journey in the world of coding started when I realized how impactful software development can be in shaping the future.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color:"white" }}>
            I'm constantly improving my skills, diving into new technologies, and working on projects that push my creativity and knowledge further. I believe in continuous learning and the power of collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}
