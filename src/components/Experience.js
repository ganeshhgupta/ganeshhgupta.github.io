import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    role: "Software Engineer, AI Platform",
    company: "Oracle",
    duration: "Jun 2025 - Present",
    description:
      "I'm building the AI platform behind a multi-agent system using OpenAI's Agents SDK and MCP tool-use, handling millions of daily transactions at 99%+ uptime. I design and optimize agentic workflows across multiple LLMs (GPT, Claude, Llama, Gemini), tuning model choice and prompting per use case to balance production quality, latency, and cost.\n\nI own full-stack delivery of the platform's backend services and APIs in Python/FastAPI and React/TypeScript, and I engineered a pluggable distributed executor that routes pipeline nodes across Docker and AWS Lambda, backed by a content-addressed S3 artifact store that eliminates redundant recomputation across pipelines. Replacing polling with server-sent events for live metrics streaming cut redundant API calls by 90% and unlocked real-time model governance dashboards.\n\nBeyond building, I participate in design and code reviews that enforce style and testability standards, and I'm often the one triaging production issues that affect service reliability.",
  },
  {
    role: "ML Infrastructure Engineer",
    company: "QureAI",
    duration: "Mar 2026 - Present",
    description:
      "At QureAI I own the ML infrastructure behind our production inference stack. I migrated our synchronous model serving to async vLLM on GCP Cloud Run with autoscaling, cutting p99 latency from 420ms to 140ms across 50,000+ daily requests without touching model quality.\n\nI rebuilt our RAG chunking pipeline around clause-level boundaries instead of fixed token windows, layering in hybrid dense-sparse retrieval and re-ranking, which took top-3 retrieval recall from 61% to 89% on a 2,000-query eval set. Alongside that, I built PySpark data processing jobs that prepare large-scale feature datasets for downstream training and evaluation, and a model observability framework that tracks drift, latency, and eval regressions in production, feeding governance-aligned rollback workflows.",
  },
  {
    role: "Graduate Teaching Assistant",
    company: "University of Texas at Arlington",
    duration: "Aug 2024 - May 2025",
    description:
      "Alongside my Master's, I taught and mentored graduate students in a machine learning course, running office hours and lab sessions that translated model architectures, training methodology, and evaluation techniques into applied understanding.\n\nOn the research side, I developed multi-modal AI models using PyTorch and TensorFlow with attention mechanisms and domain-specific neural architectures, building the evaluation frameworks to measure their quality and performance.",
  },
  {
    role: "Software Engineer",
    company: "Nomura Research Institute Financial Technologies",
    duration: "Sep 2019 - Aug 2023",
    description:
      "Over four years at Nomura, I built and operated 25+ production microservices in Java, C++, and SQL-backed distributed systems serving 1M+ users, sustaining 99.9% uptime on AWS (EC2, RDS, SQS). I designed public-facing REST and gRPC APIs with CLI tooling for partner integrations, prioritizing backward compatibility above all else.\n\nOne of the changes I'm proudest of: redesigning a nightly financial data aggregation job around indexed views and batch partitioning, cutting a settlement-blocking 8-minute run down to 90 seconds. I later took that same instinct for systemic fixes and standardized failure-handling contracts, retry, timeout, and propagation semantics, across all 25+ services, which cut production escalations 60% in a single quarter.",
  },
];

const Experience = () => {
  return (
    <Box id="experience">
      <SectionHeading eyebrow="2019 — PRESENT" title="Experience" />
      <Box>
        {experiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' },
              gap: { xs: 1, sm: 4 },
              py: 4,
              borderTop: index === 0 ? 'none' : '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.76rem',
                  color: 'text.secondary',
                  whiteSpace: { sm: 'nowrap' },
                }}
              >
                {exp.duration}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 0.25 }}>
                {exp.role}
              </Typography>
              <Typography color="primary.main" sx={{ fontSize: '0.92rem', fontWeight: 500, mb: 1.5 }}>
                {exp.company}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ whiteSpace: 'pre-wrap', fontSize: '0.92rem', lineHeight: 1.75 }}
              >
                {exp.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
