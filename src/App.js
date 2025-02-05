import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Back from './components/Back';


export default function App() {

  return (
    <BrowserRouter>
 <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1, 
        }}
      ><div className="container-fluid">
          <button 
            className="navbar-toggler ms-auto" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ms-4">
                <NavLink 
                  to="/" 
                  className="nav-link fs-4"
                  style={({ isActive }) => ({
                    color: isActive ? '#007bff' : '#004c6d', // Reverse the colors: active gets the lighter blue, inactive gets the darker blue
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
                    color: isActive ? '#007bff' : '#004c6d', // Reverse the colors
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
                    color: isActive ? '#007bff' : '#004c6d', // Reverse the colors
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
                    color: isActive ? '#007bff' : '#004c6d', // Reverse the colors
                  })}
                >
                  Footer
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Back/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
