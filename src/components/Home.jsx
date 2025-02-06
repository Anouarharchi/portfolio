import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;       // Delay per character when typing
  const deletingSpeed = 100;     // Delay per character when deleting
  const pauseAfterTyping = 1000; // Pause after full word is typed
  const pauseAfterDeleting = 1500; // Pause before restarting the effect

  useEffect(() => {
    const role = 'Developer';  // You can change this to dynamic roles if needed

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
    <div className="container text-center my-5">
      <h1 className="display-4 text-white">
        I am a <span className="role-text">{text}</span>
      </h1>

      <p className="lead mt-4 text-white">
        I'm a passionate Developer with experience in building full-stack web applications.
        I specialize in creating efficient, user-friendly solutions using the latest technologies.
      </p>

      <div className="mt-5">
        <a href="https://github.com/Anouarharchi" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary btn-lg mx-3" aria-label="View My Work">
            View My Work
          </button>
        </a>
        <a href="/contact">
          <button className="btn btn-secondary btn-lg" aria-label="Contact Me">
            Contact Me
          </button>
        </a>
      </div>

      {/* Inline CSS for the typing effect */}
      <style>
        {`
          .role-text {
            font-size: 3rem;
            color: #007bff;
            vertical-align: middle;
            border-right: 3px solid #fff;
            white-space: nowrap;
            overflow: hidden;
            min-width: 10ch; /* Adjusts for the word 'Developer' */
            animation: blink 0.75s step-end infinite;
          }

          @keyframes blink {
            50% { border-color: transparent; }
          }
        `}
      </style>
    </div>
  );
}
