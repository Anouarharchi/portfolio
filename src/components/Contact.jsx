import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', color: '#00bcd4' }}>
        Contact Me
      </h2>
      <div className="row">
        <div className="col-md-6">
          <h4 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>Get In Touch</h4>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' , color:"white" }}>
            If you have any questions or want to collaborate on a project, feel free to reach out to me using the form below!
          </p>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: '#ffffff' }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#222', color: '#ffffff', borderRadius: '5px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: '#ffffff' }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#222', color: '#ffffff', borderRadius: '5px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label" style={{ color: '#ffffff' }}>
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                style={{ backgroundColor: '#222', color: '#ffffff', borderRadius: '5px' }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#00bcd4', borderColor: '#00bcd4' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
