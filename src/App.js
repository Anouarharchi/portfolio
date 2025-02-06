import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Reviews from './components/Reviews'; 
import Back from './components/Back';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
              backgroundColor: 'rgba(0, 0, 139, 0.5)',
            }}
          ></div>
        </div>

        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-dark sticky-top"
          style={{ zIndex: 1, backgroundColor: 'transparent' }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <NavLink
              className="navbar-brand logo"
              to="/"
              style={{ fontSize: '1.8rem', color: '#ffffff' }}
            >
              <span className="typing-effect">Anouar Harchi</span>
            </NavLink>
            <button
              className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              onClick={toggleMenu}
              style={{ border: 'none', background: 'none' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ms-4">
                <NavLink
                  to="/"
                  className="nav-link fs-4"
                  style={({ isActive }) => ({
                    color: isActive ? '#00bcd4' : '#ffffff',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    textShadow: isActive ? '0 0 10px #00bcd4' : 'none',
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
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    textShadow: isActive ? '0 0 10px #00bcd4' : 'none',
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
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    textShadow: isActive ? '0 0 10px #00bcd4' : 'none',
                  })}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink
                  to="/reviews"  
                  className="nav-link fs-4"
                  style={({ isActive }) => ({
                    color: isActive ? '#00bcd4' : '#ffffff',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    textShadow: isActive ? '0 0 10px #00bcd4' : 'none',
                  })}
                >
                  Reviews
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
          <Route path="/reviews" element={<Reviews />} />  {/* تم تغيير Footer إلى Reviews */}
        </Routes>
      </div>

      {/* CSS for hover effect, active state, typing effect, toggler button, mobile alignment, and extra spacing */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap');

          body {
            font-family: 'Poppins', sans-serif;
          }

          .nav-link {
            /* Nav items use 'Roboto Slab' for a distinct look */
            font-family: 'Roboto Slab', serif;
            transition: color 0.3s, transform 0.3s, text-shadow 0.3s;
          }

          .nav-link:hover {
  color: #00bcd4 !important; /* Fixed the typo here */
  transform: scale(1.1);
  text-shadow: 0 0 5px #1e90ff;
}


          .navbar-nav .active .nav-link {
            color: #00bcd4 !important;
            transform: scale(1.1) !important;
            text-shadow: 0 0 10px #00bcd4;
          }

          /* Increase space between nav items */
          .navbar-nav .nav-item {
            margin-right: 2rem;  /* Increase or adjust this value as needed */
          }

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

          @keyframes typing {
            from { width: 0; }
            to { width: 15ch; }
          }

          @keyframes blink {
            50% { border-color: transparent; }
          }

          .navbar-brand {
            font-size: 2rem;
            font-weight: bold;
            letter-spacing: 2px;
            color: #ffffff !important;
          }

          .navbar {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }

          .navbar-toggler {
            border: none;
            background: none;
            padding: 0;
          }

          .navbar-toggler-icon {
            width: 30px;
            height: 3px;
            background-color: #ffffff;
            transition: transform 0.3s;
          }

          .navbar-toggler-icon:before,
          .navbar-toggler-icon:after {
            content: '';
            background-color: #ffffff;
            height: 3px;
            width: 30px;
            transition: transform 0.3s;
          }

          .navbar-toggler.open .navbar-toggler-icon {
            transform: rotate(45deg);
          }

          .navbar-toggler.open .navbar-toggler-icon:before {
            transform: rotate(-90deg);
          }

          .navbar-toggler.open .navbar-toggler-icon:after {
            transform: rotate(90deg);
          }

          .navbar-collapse.show {
            display: block;
          }

          /* Mobile view: adjust collapsed menu positioning */
          @media (max-width: 995px) {
            .navbar-collapse {
              position: absolute;
              top: 60px; /* Adjust if your navbar height changes */
              right: 0;
              left: auto;
              width: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              padding: 10px 20px;
            }
            .navbar-nav {
              margin-left: auto;
              text-align: right;
            }
            /* Active nav item on mobile: translate 10px to the left */
            .navbar-nav > .nav-item.active > .nav-link,
            .navbar-nav > .nav-item > .nav-link.active {
              transform: translateX(-10px) scale(1.1) !important;
            }
          }
        `}
      </style>
    </BrowserRouter>
  );
}
