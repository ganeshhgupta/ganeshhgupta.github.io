import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import SectionHeading from './SectionHeading';

// Curated, tiered, text-based — no hotlinked third-party icons, no consumer
// chat-app logos. Core is what's used daily in production; Also worked with
// is real breadth, presented smaller and quieter rather than equal-weight.
const CORE = {
  'Languages': ['Python', 'Java', 'TypeScript', 'C++', 'SQL'],
  'AI / ML': ['LLMs', 'Agentic AI', 'LangGraph', 'RAG', 'PyTorch', 'TensorFlow', 'vLLM'],
  'Backend & Data': ['FastAPI', 'Node.js', 'REST / gRPC APIs', 'PostgreSQL', 'MongoDB', 'PySpark'],
  'Cloud & Infra': ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
};

const ALSO = [
  'Spring MVC', 'JSP', 'Jenkins', 'Firebase', 'MySQL', 'ChromaDB', 'Pinecone',
  'OpenCV', 'Vision Transformers', 'Hugging Face', 'Selenium', 'Katalon',
  'Android Studio', 'Bash', 'Scala',
];

const Skills = () => {
  return (
    <Box id="skills">
      <SectionHeading eyebrow="TOOLBOX" title="Skills" />

      <Box>
        {Object.entries(CORE).map(([category, items]) => (
          <Box key={category} sx={{ mb: 3.5 }}>
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{ display: 'block', marginBottom: 1.25 }}
            >
              {category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  sx={{
                    borderColor: 'divider',
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', marginBottom: 1.25 }}>
            Also worked with
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {ALSO.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: 'divider',
                  color: 'text.secondary',
                  fontSize: '0.76rem',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
