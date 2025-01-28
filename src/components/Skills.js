import React from 'react';
import { Box, Tooltip, Typography, Grid, Avatar } from '@mui/material';
import { Javascript as JavascriptIcon, Code as CodeIcon, PhpSharp as PhpSharpIcon } from '@mui/icons-material';

const skillsByCategory = {
  Programming: [
    { icon: <img src="https://www.svgrepo.com/show/376344/python.svg" alt="Python" width={40} height={40} />, name: 'Python', isCustom: true, iconUrl: 'https://www.svgrepo.com/show/376344/python.svg' },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjhkptAiEpo6BU_XYgC1gib7-b-JJS0W5UQ&s" alt="Java" width={40} height={40} />, name: 'Java', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjhkptAiEpo6BU_XYgC1gib7-b-JJS0W5UQ&s' },
    { icon: <img src="https://banner2.cleanpng.com/20171217/033/av2bv0zlf.webp" alt="C" width={40} height={40} />, name: 'C', isCustom: true, iconUrl: 'https://banner2.cleanpng.com/20171217/033/av2bv0zlf.webp' },
    { icon: <img src="https://cdn-icons-png.flaticon.com/512/6132/6132220.png" alt="Scala" width={40} height={40} />, name: 'Scala', isCustom: true, iconUrl: 'https://cdn-icons-png.flaticon.com/512/6132/6132220.png' },
    { icon: <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" width={40} height={40} />, name: 'JavaScript', isCustom: true, iconUrl: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
    { icon: <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" alt="React" width={40} height={40} />, name: 'ReactJS', isCustom: true, iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256' },
    
    { icon: <img src="https://philna.sh/_astro/node.DvAuachI.png" alt="NodeJS" width={40} height={40} />, name: 'NodeJS', isCustom: true, iconUrl: 'https://philna.sh/_astro/node.DvAuachI.png' },
    { icon: <img src="https://pbs.twimg.com/profile_images/826088341099704320/ymCgaIO0_400x400.jpg" alt="FreeMarker" width={40} height={40} />, name: 'FreeMarker', isCustom: true, iconUrl: 'https://pbs.twimg.com/profile_images/826088341099704320/ymCgaIO0_400x400.jpg' },
    { icon: <img src="https://www.thymeleaf.org/images/thymeleaf.png" alt="Thymeleaf" width={40} height={40} />, name: 'Thymeleaf', isCustom: true, iconUrl: 'https://www.thymeleaf.org/images/thymeleaf.png' },
    { icon: <img src="https://cdn-icons-png.flaticon.com/512/6132/6132220.png" alt="Scala" width={40} height={40} />, name: 'Scala', isCustom: true, iconUrl: 'https://cdn-icons-png.flaticon.com/512/6132/6132220.png' },
    { icon: <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" width={40} height={40} />, name: 'JavaScript', isCustom: true, iconUrl: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
    { icon: <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" alt="React" width={40} height={40} />, name: 'ReactJS', isCustom: true, iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256' },

  ],
  Technology: [
    { icon: <img src="https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg" alt="AWS S3" width={40} height={40} />, name: 'AWS S3', isCustom: true, iconUrl: 'https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg' },
    { icon: <img src="https://miro.medium.com/v2/resize:fit:735/1*U56JIjUVBUVcUZRTA8RBXA.png" alt="GitHub Actions" width={40} height={40} />, name: 'GitHub Actions', isCustom: true, iconUrl: 'https://miro.medium.com/v2/resize:fit:735/1*U56JIjUVBUVcUZRTA8RBXA.png' },
    { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2048px-Amazon_Lambda_architecture_logo.svg.png" alt="AWS Lambda" width={40} height={40} />, name: 'AWS Lambda', isCustom: true, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2048px-Amazon_Lambda_architecture_logo.svg.png' },
    { icon: <img src="https://www.apono.io/wp-content/uploads/2023/05/amazon-sqs-min.png" alt="AWS SQS" width={40} height={40} />, name: 'AWS SQS', isCustom: true, iconUrl: 'https://www.apono.io/wp-content/uploads/2023/05/amazon-sqs-min.png' },
    { icon: <img src="https://raw.githubusercontent.com/pulumi/pulumi-aws-apigateway/main/assets/logo.png" alt="API Gateway" width={40} height={40} />, name: 'API Gateway', isCustom: true, iconUrl: 'https://raw.githubusercontent.com/pulumi/pulumi-aws-apigateway/main/assets/logo.png' },
    { icon: <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_original_logo_icon_146556.png" alt="Docker" width={40} height={40} />, name: 'Docker', isCustom: true, iconUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_original_logo_icon_146556.png' },
    { icon: null, name: 'Spring MVC', isCustom: false },
    { icon: null, name: 'JSP', isCustom: false },
    { icon: null, name: 'jQuery', isCustom: false },
    { icon: null, name: 'Tomcat', isCustom: false },
    { icon: null, name: 'Wildfly', isCustom: false },
    { icon: null, name: 'WinSCP/Putty', isCustom: false },
    { icon: null, name: 'Jenkins', isCustom: false },
    { icon: null, name: 'Firebase', isCustom: false },
    { icon: null, name: 'MongoDB', isCustom: false },
    { icon: null, name: 'Oracle', isCustom: false },
    { icon: null, name: 'MySQL', isCustom: false },
  ],
  AI: [
    { icon: null, name: 'OpenCV', isCustom: false },
    { icon: null, name: 'Keras', isCustom: false },
    { icon: null, name: 'TensorFlow', isCustom: false },
    { icon: null, name: 'ResNet', isCustom: false },
    { icon: null, name: 'Vision Transformers', isCustom: false },
    { icon: null, name: 'Langchain', isCustom: false },
    { icon: null, name: 'Hugging Face', isCustom: false },
    { icon: null, name: 'RAG', isCustom: false },
    { icon: null, name: 'Selenium', isCustom: false },
    { icon: null, name: 'Katalon', isCustom: false },
  ],
};

const Skills = ({ nightMode }) => {
  return (
    <Box 
      sx={{ 
        padding: '20px 0',
        backgroundColor: nightMode ? "text.200" : 'text.100',
        color: nightMode ? "text.200" : 'text.100',
      }}
    >
      {Object.keys(skillsByCategory).map((category) => (
        <Box key={category}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {category}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {skillsByCategory[category].map((skill, index) => (
              <Grid item key={index} xs={3} sm={2} md={1}>
                <Tooltip title={skill.name} arrow>
                  <Box
                    sx={{
                      backgroundColor: nightMode ? "text.200" : 'text.100' ,
                      color: nightMode ? "text.200" : 'text.100',
                      borderRadius: '50%', // Round
                      width: 70, 
                      height: 70,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: nightMode ? "text.200" : 'text.100',
                      }
                    }}
                  >
                    {skill.isCustom ? (
                      <Avatar
                        alt={skill.name}
                        src={skill.iconUrl}
                        sx={{ width: 40, height: 40 }}
                      />
                    ) : (
                      skill.icon
                    )}
                  </Box>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
