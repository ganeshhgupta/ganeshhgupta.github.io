import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import SectionHeading from './SectionHeading';
import {
  SiPython, SiCplusplus, SiC, SiTypescript, SiJavascript, SiScala, SiGnubash,
  SiReact, SiNodedotjs, SiFastapi, SiSpringboot, SiJquery, SiThymeleaf, SiApachetomcat,
  SiPytorch, SiTensorflow, SiKeras, SiOpencv, SiHuggingface, SiLangchain, SiOpenai, SiAnthropic,
  SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiAmazondynamodb,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes, SiJenkins, SiAmazons3, SiAwslambda,
  SiSelenium, SiAndroidstudio, SiGit, SiGithub,
} from 'react-icons/si';

// A small subset of these tools predate icon coverage in Simple Icons
// (LangGraph, MCP, vLLM, Katalon, FreeMarker, Wildfly, JSP, ChromaDB,
// Pinecone, Vision Transformers) — they render as plain text chips rather
// than leaving a gap, so nothing gets dropped from the list.
const iconProps = { size: 16 };

const CORE = {
  'Languages': [
    { name: 'Python', icon: <SiPython {...iconProps} /> },
    { name: 'Java' },
    { name: 'TypeScript', icon: <SiTypescript {...iconProps} /> },
    { name: 'JavaScript', icon: <SiJavascript {...iconProps} /> },
    { name: 'C++', icon: <SiCplusplus {...iconProps} /> },
    { name: 'C', icon: <SiC {...iconProps} /> },
    { name: 'Scala', icon: <SiScala {...iconProps} /> },
    { name: 'Bash', icon: <SiGnubash {...iconProps} /> },
  ],
  'AI / ML': [
    { name: 'PyTorch', icon: <SiPytorch {...iconProps} /> },
    { name: 'TensorFlow', icon: <SiTensorflow {...iconProps} /> },
    { name: 'Keras', icon: <SiKeras {...iconProps} /> },
    { name: 'OpenAI', icon: <SiOpenai {...iconProps} /> },
    { name: 'Anthropic', icon: <SiAnthropic {...iconProps} /> },
    { name: 'LangChain', icon: <SiLangchain {...iconProps} /> },
    { name: 'LangGraph' },
    { name: 'Hugging Face', icon: <SiHuggingface {...iconProps} /> },
    { name: 'OpenCV', icon: <SiOpencv {...iconProps} /> },
    { name: 'RAG' },
    { name: 'vLLM' },
    { name: 'MCP' },
    { name: 'Vision Transformers' },
  ],
  'Backend & Data': [
    { name: 'FastAPI', icon: <SiFastapi {...iconProps} /> },
    { name: 'Node.js', icon: <SiNodedotjs {...iconProps} /> },
    { name: 'React', icon: <SiReact {...iconProps} /> },
    { name: 'Spring Boot', icon: <SiSpringboot {...iconProps} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql {...iconProps} /> },
    { name: 'MongoDB', icon: <SiMongodb {...iconProps} /> },
    { name: 'MySQL', icon: <SiMysql {...iconProps} /> },
    { name: 'DynamoDB', icon: <SiAmazondynamodb {...iconProps} /> },
    { name: 'Firebase', icon: <SiFirebase {...iconProps} /> },
  ],
  'Cloud & Infra': [
    { name: 'AWS', icon: <SiAmazonwebservices {...iconProps} /> },
    { name: 'AWS S3', icon: <SiAmazons3 {...iconProps} /> },
    { name: 'AWS Lambda', icon: <SiAwslambda {...iconProps} /> },
    { name: 'GCP', icon: <SiGooglecloud {...iconProps} /> },
    { name: 'Docker', icon: <SiDocker {...iconProps} /> },
    { name: 'Kubernetes', icon: <SiKubernetes {...iconProps} /> },
    { name: 'Jenkins', icon: <SiJenkins {...iconProps} /> },
    { name: 'Git', icon: <SiGit {...iconProps} /> },
    { name: 'GitHub', icon: <SiGithub {...iconProps} /> },
  ],
};

const ALSO = [
  { name: 'Spring MVC' },
  { name: 'JSP' },
  { name: 'jQuery', icon: <SiJquery {...iconProps} /> },
  { name: 'Thymeleaf', icon: <SiThymeleaf {...iconProps} /> },
  { name: 'FreeMarker' },
  { name: 'Tomcat', icon: <SiApachetomcat {...iconProps} /> },
  { name: 'Wildfly' },
  { name: 'ChromaDB' },
  { name: 'Pinecone' },
  { name: 'Selenium', icon: <SiSelenium {...iconProps} /> },
  { name: 'Katalon' },
  { name: 'Android Studio', icon: <SiAndroidstudio {...iconProps} /> },
];

const SkillChip = ({ item, small }) => (
  <Chip
    icon={item.icon}
    label={item.name}
    variant="outlined"
    size={small ? 'small' : 'medium'}
    sx={{
      borderColor: 'divider',
      color: small ? 'text.secondary' : 'text.primary',
      fontWeight: small ? 400 : 500,
      fontSize: small ? '0.76rem' : '0.85rem',
      '& .MuiChip-icon': { color: 'inherit', marginLeft: '10px' },
    }}
  />
);

const Skills = () => {
  return (
    <Box id="skills">
      <SectionHeading eyebrow="TOOLBOX" title="Skills" />

      <Box>
        {Object.entries(CORE).map(([category, items]) => (
          <Box key={category} sx={{ mb: 3.5 }}>
            <Typography variant="overline" color="text.secondary" sx={{ display: 'block', marginBottom: 1.25 }}>
              {category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {items.map((item) => (
                <SkillChip key={item.name} item={item} />
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
              <SkillChip key={item.name} item={item} small />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
