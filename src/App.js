import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Back from './components/Back';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', height: '100vh' }}>
        {/* Full-screen video background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Blue Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 139, 0.5)', // Dark blue with transparency
            }}
          ></div>
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: 'transparent', zIndex: 1 }}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
            {/* Your Name with typing effect */}
            <NavLink
              className="navbar-brand"
              to="/"
              style={{ fontSize: '1.8rem', color: '#ffffff' }}
            >
              <span className="typing-effect">Anouar Harchi</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ms-4">
                <NavLink
                  to="/"
                  className="nav-link fs-4"
                  style={({ isActive }) => ({
                    color: isActive ? '#00bcd4' : '#ffffff',
                    transition: 'color 0.3s, transform 0.3s',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  })}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink
                  to="/about"
                  className="nav-link fs-4"
                  style={({ isActive }) => ({
                    color: isActive ? '#00bcd4' : '#ffffff',
                    transition: 'color 0.3s, transform 0.3s',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  })}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink
                  to="/contact"
                  className="nav-link fs-4"
                  style={({ isActive }) => ({
                    color: isActive ? '#00bcd4' : '#ffffff',
                    transition: 'color 0.3s, transform 0.3s',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  })}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink
                  to="/footer"
                  className="nav-link fs-4"
                  style={({ isActive }) => ({
                    color: isActive ? '#00bcd4' : '#ffffff',
                    transition: 'color 0.3s, transform 0.3s',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  })}
                >
                  Footer
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Back />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>

      {/* CSS for hover effect, active state, and typing effect */}
      <style>
        {`
          .nav-link {
            color: #ffffff;
            transition: color 0.3s, transform 0.3s;
          }

          .nav-link:hover {
            color: #1e90ff; /* Light blue */
            transform: scale(1.1);
          }

          .navbar-nav .active .nav-link {
            color: #00bcd4 !important; /* Cyan blue */
            transform: scale(1.1) !important;
          }

          /* Typing effect */
          .typing-effect {
            display: inline-block;
            font-family: 'Courier New', Courier, monospace;
            font-size: 1.8rem;
            color: #ffffff;
            white-space: nowrap;
            overflow: hidden;
            border-right: 3px solid #ffffff;
            width: 0;
            animation: typing 3s steps(15) 1s forwards, blink 0.75s step-end infinite;
          }

          /* Keyframes for typing effect */
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 15ch; /* Adjust for the length of your name */
            }
          }

          /* Keyframes for blinking cursor effect */
          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }
        `}
      </style>
    </BrowserRouter>
  );
}
