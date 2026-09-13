import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Collapse } from '@mui/material';
import { Timeline, TimelineItem } from '@mui/lab';
import { useMediaQuery } from '@mui/material';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const experiences = [
    {
      role: "Software Engineer, AI Platform",
      company: "Oracle",
      duration: "Jun 2025 - Present",
      description:
        "I'm building the AI platform behind a multi-agent system using OpenAI's Agents SDK and MCP tool-use, handling millions of daily transactions at 99%+ uptime. I design and optimize agentic workflows across multiple LLMs (GPT, Claude, Llama, Gemini), tuning model choice and prompting per use case to balance production quality, latency, and cost.\n\nI own full-stack delivery of the platform's backend services and APIs in Python/FastAPI and React/TypeScript, and I engineered a pluggable distributed executor that routes pipeline nodes across Docker and AWS Lambda, backed by a content-addressed S3 artifact store that eliminates redundant recomputation across pipelines. Replacing polling with server-sent events for live metrics streaming cut redundant API calls by 90% and unlocked real-time model governance dashboards.\n\nBeyond building, I participate in design and code reviews that enforce style and testability standards, and I'm often the one triaging production issues that affect service reliability.",
      imageUrl: "/images/oracle.png",
    },
    {
      role: "ML Infrastructure Engineer",
      company: "QureAI",
      duration: "Mar 2026 - Present",
      description:
        "At QureAI I own the ML infrastructure behind our production inference stack. I migrated our synchronous model serving to async vLLM on GCP Cloud Run with autoscaling, cutting p99 latency from 420ms to 140ms across 50,000+ daily requests without touching model quality.\n\nI rebuilt our RAG chunking pipeline around clause-level boundaries instead of fixed token windows, layering in hybrid dense-sparse retrieval and re-ranking, which took top-3 retrieval recall from 61% to 89% on a 2,000-query eval set. Alongside that, I built PySpark data processing jobs that prepare large-scale feature datasets for downstream training and evaluation, and a model observability framework that tracks drift, latency, and eval regressions in production, feeding governance-aligned rollback workflows.",
      imageUrl: "/images/qureai.svg",
    },
    {
      role: "Graduate Teaching Assistant",
      company: "University of Texas at Arlington",
      duration: "Aug 2024 - May 2025",
      description:
        "Alongside my Master's, I taught and mentored graduate students in a machine learning course, running office hours and lab sessions that translated model architectures, training methodology, and evaluation techniques into applied understanding.\n\nOn the research side, I developed multi-modal AI models using PyTorch and TensorFlow with attention mechanisms and domain-specific neural architectures, building the evaluation frameworks to measure their quality and performance.",
      imageUrl: "/images/uta.png",
    },
    {
      role: "Software Engineer",
      company: "Nomura Research Institute Financial Technologies",
      duration: "Sep 2019 - Aug 2023",
      description:
        "Over four years at Nomura, I built and operated 25+ production microservices in Java, C++, and SQL-backed distributed systems serving 1M+ users, sustaining 99.9% uptime on AWS (EC2, RDS, SQS). I designed public-facing REST and gRPC APIs with CLI tooling for partner integrations, prioritizing backward compatibility above all else.\n\nOne of the changes I'm proudest of: redesigning a nightly financial data aggregation job around indexed views and batch partitioning, cutting a settlement-blocking 8-minute run down to 90 seconds. I later took that same instinct for systemic fixes and standardized failure-handling contracts, retry, timeout, and propagation semantics, across all 25+ services, which cut production escalations 60% in a single quarter.",
      imageUrl: "/images/nri.png",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardInteract = (index) => {
    if (isSmallScreen) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <Box
      id="experience"
      sx={{
        padding: { xs: 3, sm: 5 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center' }}>
        Experience
      </Typography>
      <Timeline position="right" sx={{ maxWidth: { xs: '100%', sm: '820px' }, width: '100%' }}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ display: 'none' }} />
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <WorkIcon fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  width: { xs: '100%', sm: '720px' },
                  marginBottom: 2,
                  transition: 'border-color 0.2s ease',
                  borderColor: expandedIndex === index ? 'primary.main' : 'divider',
                  cursor: isSmallScreen ? 'pointer' : 'default',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'flex-start' },
                  padding: 2.5,
                }}
                onMouseEnter={() => !isSmallScreen && setExpandedIndex(index)}
                onMouseLeave={() => !isSmallScreen && setExpandedIndex(null)}
                onClick={() => handleCardInteract(index)}
              >
                <Box
                  sx={{
                    width: { xs: '40px', sm: '46px' },
                    height: { xs: '40px', sm: '46px' },
                    borderRadius: '50%',
                    backgroundImage: `url(${exp.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexShrink: 0,
                    marginRight: { xs: 0, sm: 2.5 },
                    marginBottom: { xs: 2, sm: 0 },
                  }}
                />
                <CardContent sx={{ textAlign: 'left', p: '0 !important', flex: 1 }}>
                  <Typography variant="h6" sx={{ marginBottom: 0.5 }}>
                    {exp.role}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: '0.92rem', marginBottom: 0.5 }}>
                    {exp.company}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.76rem',
                      marginBottom: 1.5,
                      opacity: 0.85,
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <Collapse in={expandedIndex === index} timeout={250}>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
                      {exp.description}
                    </Typography>
                  </Collapse>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;
