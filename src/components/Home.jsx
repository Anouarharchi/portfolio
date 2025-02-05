import React, { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;       // Delay per character when typing
  const deletingSpeed = 100;     // Delay per character when deleting
  const pauseAfterTyping = 1000; // Pause after full word is typed
  const pauseAfterDeleting = 500; // Pause before restarting the effect

  useEffect(() => {
    const role = 'Developer';  // Only use 'Developer' as the word

    let timer;

    if (!isDeleting && text.length < role.length) {
      // Typing phase: add one character
      timer = setTimeout(() => {
        setText(role.substring(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === role.length) {
      // Word fully typed: pause then start deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && text.length > 0) {
      // Deleting phase: remove one character
      timer = setTimeout(() => {
        setText(role.substring(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      // Finished deleting: restart the effect
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, pauseAfterDeleting);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div style={{ padding: '50px', color: '#fff', fontFamily: 'Courier New, Courier, monospace', marginTop: '100px' }}>
      {/* Heading with typing effect */}
      <h1 style={{ fontSize: '3rem' }}>
        I am a <span className="typing-effect" style={{ fontSize: '3rem', color: '#007bff', verticalAlign: 'middle' }}>{text}</span>
      </h1>

      {/* Resume Section */}
      <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>
        I'm a passionate Developer with experience in building full-stack web applications. 
        I specialize in creating efficient, user-friendly solutions using the latest technologies.
      </p>

      {/* Buttons Section */}
      <div style={{ marginTop: '30px' }}>
        <button className="btn btn-primary" style={{ marginRight: '1rem' }}>
          Contact Me
        </button>
        <button className="btn btn-secondary">
          View My Work
        </button>
      </div>

      {/* Inline CSS for typing effect, blinking cursor, and button styling */}
      <style>
        {`
          .typing-effect {
            border-right: 3px solid #fff;
            white-space: nowrap;
            overflow: hidden;
            min-width: 10ch; /* Adjusts for the word 'Developer' */
            animation: blink 0.75s step-end infinite;
          }

          @keyframes blink {
            50% { border-color: transparent; }
          }

          .btn {
            font-size: 1rem;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            border: none;
          }
          .btn-primary {
            background-color: #007bff;
            color: #fff;
            transition: background-color 0.3s ease;
          }
          .btn-primary:hover {
            background-color: #0056b3;
          }
          .btn-secondary {
            background-color: #6c757d;
            color: #fff;
            transition: background-color 0.3s ease;
          }
          .btn-secondary:hover {
            background-color: #5a6268;
          }
        `}
      </style>
    </div>
  );
}
