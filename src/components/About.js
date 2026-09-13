import React from "react";

const HEADER = "I build AI systems that run in production — agentic pipelines, LLM orchestration, distributed backends, and the infrastructure that holds it all together.";

const PARAGRAPHS = [
  "At Oracle I build a multi-agent AI platform using OpenAI's Agents SDK and MCP tool-use, handling millions of daily transactions at 99%+ uptime. At QureAI I own the ML infrastructure behind our production inference stack, cutting p99 latency from 420ms to 140ms and rebuilding our RAG pipeline to take retrieval recall from 61% to 89%. Before that, four years at Nomura architecting financial data systems for 1M+ users at 99.9% uptime. I hold a Master's in Computer Science from UT Arlington, where I also taught a graduate ML course, and my research covered multi-agent reinforcement learning and Vision Transformer models for real-time benchmarks.",
  "I like to tinker. I've built a natural language interface that decomposes questions into multi-step database queries, an ML auto-retraining pipeline that triggers itself when models drift, and an agentic graph system that tries to map how a person thinks. Right now I'm deep in something that keeps me up at night: whether present-day LLMs are actually capable of original thought.",
];

function About({ nightMode }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
  const primaryColor = nightMode ? '#EDEEF2' : '#14171F';
  const secondaryColor = nightMode ? '#9AA0AC' : '#565B66';

  return (
    <div
      style={{
        paddingTop: isMobile ? '30vh' : '34vh',
        paddingBottom: '40px',
        minHeight: '70vh',
        maxWidth: '760px',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <p
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontWeight: 600,
          fontSize: isMobile ? '1.05rem' : '1.2rem',
          lineHeight: 1.6,
          textAlign: 'left',
          color: primaryColor,
          margin: '0 0 1.5rem 0',
        }}
      >
        {HEADER}
      </p>

      {PARAGRAPHS.map((p, i) => (
        <p
          key={i}
          style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            fontSize: isMobile ? '0.95rem' : '1rem',
            lineHeight: 1.75,
            textAlign: 'left',
            color: secondaryColor,
            margin: '0 0 1.25rem 0',
          }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export default About;
