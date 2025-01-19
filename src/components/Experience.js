import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Collapse } from '@mui/material';
import { Timeline, TimelineItem } from '@mui/lab';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer - II",
      company: "Nomura Research Institute Financial Technologies",
      duration: "2021-2023",
      description: "I had the opportunity to lead the design and development of over six enterprise-level applications in the banking, brokerage, and asset management sectors. These applications focused on enhancing client reporting and were built in an AGILE environment using Java 8 and 11, Spring MVC, SQL, and AWS.<br /><br />One of my key contributions was implementing scalable APIs for proprietary back-office software, enabling it to handle more than 1,000 daily requests across international markets.<br /><br />Additionally, I spearheaded the creation of a Rapid Application Development (RAD) tool that transformed Excel data into a streamlined solution, ultimately saving 80% of man-days and significantly boosting productivity."
    },
    {
      role: "Associate Software Engineer - I",
      company: "Nomura Research Institute Financial Technologies",
      duration: "2020-2021",
      description: "I led the end-to-end development of the organization's flagship products, starting from identifying system requirements and understanding partner dependencies, all the way through to implementing business logic, engineering, testing, and configuring metrics and dashboards.<br /><br />I also automated key processes like customized bulk MQ message generation and broken-link detection in Confluence, which resulted in a 75% reduction in man-days.<br /><br />Additionally, I played a key role in integrating the CI/CD pipeline with Jenkins, conducted code reviews, and led unit, integration, and end-to-end testing efforts. Along the way, I had the privilege of mentoring over eight junior developers, helping them grow their skills and contribute to the success of the projects."
    },
    {
      role: "Software Engineer - Intern",
      company: "Nomura Research Institute Financial Technologies",
      duration: "2019-2020",
      description: "I introduced a Test Report Generation tool for Katalon using Thymeleaf, which greatly improved the way developers review test reports, allowing them to efficiently manage hundreds of reports.<br /><br />In addition, I automated over 50 test cases using Katalon Studio, significantly enhancing the efficiency of web application testing and helping to streamline the overall testing process."
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
<Box
  id="experience"
  sx={{
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 4, // Add margin-top to create space between sections
    marginRight: 3,
  }}
>
  {/* Add the new heading here */}
  <Typography
    variant="h4"
    sx={{
      marginBottom: 2,
      textAlign: 'center',
      fontFamily: '"Raleway", serif',  // Applying Raleway font here
    }}
  >
    Professional Experience
  </Typography>
      <Timeline position="right" sx={{ maxWidth: '800px', width: '100%' }}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                display: 'none', // Hide the opposite content
              }}
            />
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
                  width: '700px',
                  marginBottom: 2,
                  transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
                  transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  backgroundColor: hoverIndex === index ? 'grey.200' : 'grey.100',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  minHeight: '150px',
                  height: hoverIndex === index ? 'auto' : '120px',
                  padding: 2,
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Box
                  sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundImage: `url(/images/nri.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginRight: 2,
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
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
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
                  <Collapse in={hoverIndex === index}>
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: 1,
                        overflowWrap: 'break-word',
                        whiteSpace: 'normal',
                      }}
                      dangerouslySetInnerHTML={{ __html: exp.description }}
                    />
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
