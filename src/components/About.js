import React, { useState, useEffect } from "react";

const HEADER = "I build AI systems that run in production — agentic pipelines, LLM orchestration, distributed backends, and the infrastructure that holds it all together.";

const PARAGRAPHS = [
  "At DentalScan I lead a team building a computer vision platform on AWS processing 38,000+ records daily at 94% accuracy and sub-100ms latency. At Oracle I built a multi-agent NLP platform using LangChain, LangGraph, and a custom MCP server handling millions of enterprise transactions. Before that, four years at Nomura architecting financial data systems for 1M+ users at 99.9% uptime. I hold a Master's in Computer Science from UT Arlington and my research covered multi-agent reinforcement learning and Vision Transformer models for real-time benchmarks.",
  "I like to tinker. I've built a natural language interface that decomposes questions into multi-step database queries, an ML auto-retraining pipeline that triggers itself when models drift, and an agentic graph system that tries to map how a person thinks. Right now I'm deep in something that keeps me up at night: whether present-day LLMs are actually capable of original thought.",
];

const FULL_TEXT = [HEADER, ...PARAGRAPHS].join("\n\n");

function About({ nightMode, startTyping }) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!startTyping || currentIndex >= FULL_TEXT.length) return;

    const id = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= FULL_TEXT.length) { clearInterval(id); return prev; }
        return prev + 1;
      });
      setTypedText(FULL_TEXT.slice(0, currentIndex + 1));
    }, 3);

    return () => clearInterval(id);
  }, [startTyping, currentIndex]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;

  // Split into header + paragraphs once typing is done, or progressively
  const done = typedText.length >= FULL_TEXT.length;
  const parts = done ? [HEADER, ...PARAGRAPHS] : null;

  const color = nightMode ? '#ffffff' : '#000000';

  return (
    <div
      style={{
        paddingTop: isMobile ? '26vh' : '30vh',
        paddingBottom: '40px',
        minHeight: '80vh',   // always reserves space so Projects don't creep up under the name
        // Narrow column — prevents wall-of-text feel
        maxWidth: '780px',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {parts ? (
        <>
          {/* Header */}
          <p
            style={{
              fontFamily: '"Raleway", serif',
              fontWeight: 600,
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              lineHeight: 1.75,
              letterSpacing: '0.03em',
              textAlign: 'justify',
              color,
              margin: '0 0 1.6rem 0',
              transition: 'color 0.3s ease',
            }}
          >
            {parts[0]}
          </p>

          {/* Body paragraphs */}
          {parts.slice(1).map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: '"Raleway", serif',
                fontWeight: 400,
                fontSize: isMobile ? '1rem' : '1.08rem',
                lineHeight: 1.85,
                letterSpacing: '0.04em',
                textAlign: 'justify',
                color,
                margin: '0 0 1.4rem 0',
                transition: 'color 0.3s ease',
              }}
            >
              {p}
            </p>
          ))}

          <p
            style={{
              fontFamily: '"Raleway", serif',
              fontWeight: 300,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              color,
              opacity: 0.45,
              margin: '2rem 0 0 0',
            }}
          >
            Scroll down :)
          </p>
        </>
      ) : (
        /* While typing — plain pre-wrap block */
        <div
          style={{
            fontFamily: '"Raleway", serif',
            fontWeight: 400,
            fontSize: isMobile ? '1rem' : '1.08rem',
            lineHeight: 1.85,
            letterSpacing: '0.04em',
            textAlign: 'justify',
            color,
            whiteSpace: 'pre-wrap',
            transition: 'color 0.3s ease',
          }}
        >
          {typedText}
        </div>
      )}
    </div>
  );
}

export default About;
