import React, { useState, useEffect } from "react";

function About({ nightMode, startTyping }) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const txt = 'Full-Stack Developer with 3+ years of experience in building scalable, enterprise-level applications in Java, Python, SQL, and AWS, and formulating automation tools to streamline workflows. Presently, pursing my Masters Thesis at UTA with a research focus on using Histogram of Gradients from Event-Based Camera Datasets for Motion Tracking by Vision Transformers, while mentoring as a Graduate Teaching Assistant. I like to build things, solve real-world problems, find the most efficient way to get things done, and channelize technology for humans to have a better time on this planet. Scroll Down :)';

  useEffect(() => {
    if (!startTyping || currentIndex >= txt.length) return;

    const typingInterval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= txt.length) {
          clearInterval(typingInterval);
          return prev;
        }
        return prev + 1;
      });
      setTypedText(txt.slice(0, currentIndex + 1));
    }, 5); // Adjust timing here for faster/slower typing

    return () => clearInterval(typingInterval);
  }, [startTyping, currentIndex]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'auto',
    paddingTop: '45vh',
    paddingBottom: '50px',
    boxSizing: 'border-box',
    transition: 'padding-bottom 0.5s ease',
  };

  const textStyle = {
    fontFamily: '"Raleway", serif',
    fontWeight: 400,
    fontSize: '0.95rem',
    textAlign: 'left',
    margin: '0 auto',
    overflow: 'hidden',
    letterSpacing: '0.08em',
    width: '80%',
    whiteSpace: 'pre-wrap',
    lineHeight: '1.50rem',
    color: nightMode ? '#ffffff' : '#000000',
    textShadow: nightMode ? '0px 0px 8px rgba(255, 255, 255, 0.3)' : 'none',
    transition: 'color 0.3s ease',
  };

  // Format text with line breaks after each sentence
  const formattedText = typedText.replace(/\. /g, '.\n\n');

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        {formattedText}
      </div>
    </div>
  );
}

export default About;