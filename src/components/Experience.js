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

const Experience = ({ nightMode }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const experiences = [
{
      role: "Machine Learning Engineer",
      company: "ReplyQuick",
      duration: "Nov 2025 - Present",
      description:
        "I'm leading the architecture and deployment of production ML systems in a fast-paced start-up, that serve real-time dental disease classification at scale. My work focuses on building cost-efficient, serverless infrastructure that processes over 100K monthly predictions while keeping operational costs under $2.\n\nOne of my proudest achievements has been designing an end-to-end computer vision pipeline that consolidates 24 different medical imaging datasets—nearly 39K images with varying classification schemes into a unified detection system achieving 91-93% mAP@50. This involved building robust ETL pipelines, handling class imbalances through synthetic data generation, and reducing data preparation cycles from weeks to just days.\n\nI also led the technical evaluation of multiple YOLO architectures across different GPU configurations on AWS SageMaker, ultimately selecting a deployment strategy that balances sub-50ms inference latency with 60% cost savings through spot instances. The infrastructure I built achieves 97% cost reduction compared to traditional approaches while maintaining sub-second P99 latency through event-driven Lambda orchestration and intelligent auto-scaling.",
      imageUrl: "/images/replyquick.png",
    },

    {
      role: "Software Developer - Machine Learning",
      company: "Oracle - (Contract)",
      duration: "Jun 2025 – Nov 2025",
      description:
        "I had the opportunity to build intelligent AI agents using OpenAI's Agents SDK and MCP architecture, processing millions of daily transactions with 99%+ uptime. This work included integrating AI-powered fraud detection that improved detection accuracy by 25%.\n\nOne of my key contributions was architecting high-throughput microservices using Node.js, Kafka, PostgreSQL, and Spark Structured Streaming, achieving sub-200ms latency with comprehensive distributed tracing and real-time transaction stream processing.\n\nAdditionally, I established automated model training workflows with server-sent events for real-time metrics streaming from training containers, reducing API calls by 90% and enabling continuous model improvement for production fraud detection systems.",
      imageUrl: "/images/oracle.png",
    },
    {
      role: "Graduate Teaching Assistant",
      company: "University of Texas at Arlington",
      duration: "2024-2025",
      description:
        "I had the privilege of mentoring a class of 19 students, where I guided them through the fundamentals of Android Studio, mobile app development, and integrating Firebase for backend functionality.\n\nAs part of the mentorship, I conducted live coding workshops to strengthen students' programming and debugging abilities, which contributed to a noticeable improvement in their class performance.\n\n I also led practical lab sessions focused on Raspberry Pi projects, giving students hands-on experience with hardware and programming, further enhancing their technical skills.",
      imageUrl: "/images/uta.png",
    },
    {
      role: "Associate Software Engineer - II",
      company: "Nomura Research Institute Financial Technologies",
      duration: "2021-2023",
      description:
        "I had the opportunity to lead the design and development of over six enterprise-level applications in the banking, brokerage, and asset management sectors. These applications focused on enhancing client reporting and were built in an AGILE environment using Java 8 and 11, Spring MVC, SQL, and AWS.\n\nOne of my key contributions was implementing scalable APIs for proprietary back-office software, enabling it to handle more than 1,000 daily requests across international markets.\n\nAdditionally, I spearheaded the creation of a Rapid Application Development (RAD) tool that transformed Excel data into a streamlined solution, ultimately saving 80% of man-days and significantly boosting productivity.",
      imageUrl: "/images/nri.png",
    },
    {
      role: "Associate Software Engineer - I",
      company: "Nomura Research Institute Financial Technologies",
      duration: "2020-2021",
      description:
        "I led the end-to-end development of the organization's flagship products, starting from identifying system requirements and understanding partner dependencies, all the way through to implementing business logic, engineering, testing, and configuring metrics and dashboards.\n\nI also automated key processes like customized bulk MQ message generation and broken-link detection in Confluence, which resulted in a 75% reduction in man-days.\n\nAdditionally, I played a key role in integrating the CI/CD pipeline with Jenkins, conducted code reviews, and led unit, integration, and end-to-end testing efforts. Along the way, I had the privilege of mentoring over eight junior developers, helping them grow their skills and contribute to the success of the projects.",
      imageUrl: "/images/nri.png",
    },
    {
      role: "Software Engineer - Intern",
      company: "Nomura Research Institute Financial Technologies",
      duration: "2019-2020",
      description:
        "I introduced a Test Report Generation tool for Katalon using Thymeleaf, which greatly improved the way developers review test reports, allowing them to efficiently manage hundreds of reports.\n\nIn addition, I automated over 50 test cases using Katalon Studio, significantly enhancing the efficiency of web application testing and helping to streamline the overall testing process.",
      imageUrl: "/images/nri.png",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Box
      id="experience"
      sx={{
        padding: { xs: 3, sm: 5 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4,
        marginRight: { xs: 0, sm: 3 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          textAlign: 'center',
          fontFamily: '"Raleway", serif',
        }}
      >
        Professional Experience
      </Typography>
      <Timeline position="right" sx={{ maxWidth: { xs: '100%', sm: '800px' }, width: '100%' }}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ display: 'none' }} />
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                py: '12px',
                px: 2,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  width: { xs: '100%', sm: '700px' },
                  marginBottom: 2,
                  transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
                  transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  backgroundColor: nightMode ? 'text.200' : 'text.100',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  minHeight: { xs: '250px', sm: '130px' },
                  maxHeight: hoverIndex === index ? 'auto' : '120px',
                  padding: 2,
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Box
                  sx={{
                    width: { xs: '40px', sm: '50px' },
                    height: { xs: '40px', sm: '50px' },
                    borderRadius: '50%',
                    backgroundImage: `url(${exp.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginRight: { xs: 0, sm: 2 },
                    marginBottom: { xs: 2, sm: 0 },
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    height: '100%',
                    overflow: 'hidden',
                    flex: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ marginBottom: 1, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    {exp.role}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal',
                      marginBottom: 1,
                    }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal',
                      marginBottom: 1,
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <Collapse in={hoverIndex === index || !isSmallScreen} timeout={300}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ whiteSpace: 'pre-wrap' }}
                    >
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
