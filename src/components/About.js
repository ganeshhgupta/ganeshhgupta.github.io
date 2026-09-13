import React, { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material';
import profilePic from './images/dp.png';

const ROLE_TAGS = "AI SYSTEMS · ML and Data INFRA · FULL STACK";

const NAME = "Ganesh Gupta";

const SUBTEXT = "I approach infrastructure the way I approach a hard bug: trace it to the root, not the symptom. I build the agentic pipelines, model-serving layers, and distributed backends that run underneath AI products, at the scale where the easy version stops working.";

const STATS = [
  { value: "5+", label: "YEARS BUILDING" },
  { value: "3", label: "PRODUCTION SYSTEMS" },
  { value: "99.9%", label: "UPTIME AT SCALE" },
  { value: "140ms", label: "P99 LATENCY, QUREAI" },
];

function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function About() {
  const time = useClock();
  const timeStr = time.toLocaleTimeString('en-US', { hour12: false });

  return (
    <Box id="about" sx={{ pt: { xs: 7, sm: 11 }, pb: { xs: 5, sm: 7 } }}>
      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.76rem',
          color: 'text.secondary',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 3.5,
        }}
      >
        <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
        {timeStr}
      </Typography>

      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: 'primary.main',
          mb: 2,
        }}
      >
        {ROLE_TAGS}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 }, mb: 3 }}>
        <Box
          component="img"
          src={profilePic}
          alt={NAME}
          sx={{
            width: { xs: 64, sm: 88 },
            height: { xs: 64, sm: 88 },
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid',
            borderColor: 'divider',
            flexShrink: 0,
          }}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3.1rem' },
            lineHeight: 1.1,
          }}
        >
          {NAME}
        </Typography>
      </Box>

      <Typography color="text.secondary" sx={{ maxWidth: '640px', fontSize: { xs: '0.95rem', sm: '1.02rem' }, mb: 4 }}>
        {SUBTEXT}
      </Typography>

      <Box sx={{ display: 'flex', gap: 3, mb: { xs: 5, sm: 7 } }}>
        {[
          { label: 'View work', to: 'experience' },
          { label: 'Get in touch', to: 'contact' },
        ].map((link, i) => (
          <Box
            key={link.to}
            component="a"
            href={`#${link.to}`}
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              fontSize: '0.92rem',
              color: i === 0 ? 'primary.main' : 'text.primary',
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: i === 0 ? 'primary.main' : 'divider',
              paddingBottom: '2px',
            }}
          >
            {link.label}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
          gap: 3,
          mb: { xs: 5, sm: 7 },
        }}
      >
        {STATS.map((s) => (
          <Box key={s.label}>
            <Typography sx={{ fontFamily: '"Raleway", sans-serif', fontWeight: 700, fontSize: '1.7rem', color: 'text.primary' }}>
              {s.value}
            </Typography>
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', letterSpacing: '0.05em', color: 'text.secondary' }}>
              {s.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'text.secondary', mb: 1.5 }}>
          CURRENTLY
        </Typography>
        <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 2.5 }}>
          <Typography sx={{ fontSize: '0.92rem', color: 'text.primary', mb: 1 }}>
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>Oracle</Box> &middot; Multi-agent AI platform on OpenAI's Agents SDK &amp; MCP
          </Typography>
          <Typography sx={{ fontSize: '0.92rem', color: 'text.primary' }}>
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>QureAI</Box> &middot; ML infrastructure for production inference
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 7, sm: 9 }, maxWidth: '720px' }}>
        <Typography color="text.secondary" sx={{ fontSize: { xs: '0.92rem', sm: '0.98rem' } }}>
          Before Oracle and QureAI, four years at Nomura architecting financial data systems for 1M+ users. I hold a Master's in Computer Science from UT Arlington, where I also taught a graduate ML course, and my research covered multi-agent reinforcement learning and Vision Transformer models for real-time benchmarks. Outside of work I tend to build things nobody asked for: a natural language interface that decomposes questions into multi-step database queries, an ML pipeline that retrains itself when it drifts, and lately, a running argument with myself about whether today's LLMs are capable of original thought.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
