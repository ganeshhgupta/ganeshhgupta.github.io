import React, { useState, useEffect } from "react";
import "./About.css";

function About({ isNightMode }) {
  const [typedText, setTypedText] = useState('');
  const txt = 'Hi, I’m Ganesh. A Full-Stack Developer with 3+ years of experience in building scalable, enterprise-level applications in Java, Python, SQL, and AWS. Presently, as a Masters student in Computer Science at UT Arlington, mentoring as a Graduate Teaching Assistant while researching Vision Transformers for motion detection. My passion for problem-solving, leadership, and innovation drives me to deliver impactful solutions in any project.';
  const speed = 1; // Typing speed

  useEffect(() => {
    let i = 0;
    let sentenceIndex = 0;
    let timeoutId;
    const sentences = txt.split(/(?<=\.)/); // Split by period but keep the period

    const typeWriter = () => {
      if (i < sentences[sentenceIndex].length) {
        setTypedText((prevText) => prevText + sentences[sentenceIndex].charAt(i));
        i++;
        timeoutId = setTimeout(typeWriter, speed);
      } else {
        // After a sentence finishes typing, move to the next sentence with a line break
        if (sentenceIndex < sentences.length - 1) {
          setTypedText((prevText) => prevText + "<br /><br />"); // Add a line break after each sentence
          sentenceIndex++;
          i = 0; // Reset the character index for the next sentence
          timeoutId = setTimeout(typeWriter, speed);
        }
      }
    };

    // Start typing effect
    typeWriter();

    // Cleanup on component unmount to avoid setting state on an unmounted component
    return () => clearTimeout(timeoutId);
  }, []); // Run the typing effect once when the component mounts

  return (
    <div className="about-container">
      <div
        className={`about-paragraph ${isNightMode ? "night" : "day"}`}
        dangerouslySetInnerHTML={{ __html: typedText }} // Render the HTML with line breaks
      />
    </div>
  );
}

export default About;
