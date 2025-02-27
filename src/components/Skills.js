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
    { icon: <img src="https://bashlogo.com/img/symbol/jpg/full_colored_light.jpg" alt="Bash" width={40} height={40} />, name: 'Bash', isCustom: true, iconUrl: 'https://bashlogo.com/img/symbol/jpg/full_colored_light.jpg' },
    { icon: <img src="https://pbs.twimg.com/profile_images/826088341099704320/ymCgaIO0_400x400.jpg" alt="FreeMarker" width={40} height={40} />, name: 'FreeMarker', isCustom: true, iconUrl: 'https://pbs.twimg.com/profile_images/826088341099704320/ymCgaIO0_400x400.jpg' },
    { icon: <img src="https://www.thymeleaf.org/images/thymeleaf.png" alt="Thymeleaf" width={40} height={40} />, name: 'Thymeleaf', isCustom: true, iconUrl: 'https://www.thymeleaf.org/images/thymeleaf.png' },

  ],

  Databases: [

    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTvo5Avm0OntY98pk0Z9MRvBazgVmPO-TLf2o8kXUX_Xv5SfWzApd0gCfdJFu-f6X_64&usqp=CAU" alt="Firebase" width={40} height={40} />, name: 'Firebase', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTvo5Avm0OntY98pk0Z9MRvBazgVmPO-TLf2o8kXUX_Xv5SfWzApd0gCfdJFu-f6X_64&usqp=CAU' },
    { icon: <img src="https://images.seeklogo.com/logo-png/27/1/mongodb-logo-png_seeklogo-273731.png" alt="MongoDB" width={40} height={40} />, name: 'MongoDB', isCustom: true, iconUrl: 'https://images.seeklogo.com/logo-png/27/1/mongodb-logo-png_seeklogo-273731.png' },
    { icon: <img src="https://m.media-amazon.com/images/I/41QodfboFdL.png" alt="Oracle Database" width={40} height={40} />, name: 'Oracle Database', isCustom: true, iconUrl: 'https://m.media-amazon.com/images/I/41QodfboFdL.png' },
    { icon: <img src="https://banner2.cleanpng.com/20180704/ylc/kisspng-mysql-database-computer-servers-microsoft-sql-serv-laxyo-solution-soft-pvt-ltd-5b3d2044b74d39.1344207915307326127508.jpg" alt="MySQL" width={40} height={40} />, name: 'MySQL', isCustom: true, iconUrl: 'https://banner2.cleanpng.com/20180704/ylc/kisspng-mysql-database-computer-servers-microsoft-sql-serv-laxyo-solution-soft-pvt-ltd-5b3d2044b74d39.1344207915307326127508.jpg' },
      { icon: <img src="https://cdn.prod.website-files.com/63daf1fa1abcbc5e7969d7c9/641e0cf34bb664fa0044863d_pinecone-fav.webp" alt="PineconeDB" width={40} height={40} />, name: 'PineconeDB', isCustom: true, iconUrl: 'https://cdn.prod.website-files.com/63daf1fa1abcbc5e7969d7c9/641e0cf34bb664fa0044863d_pinecone-fav.webp' },
  ],

  Technology: [
    { icon: <img src="https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg" alt="AWS S3" width={40} height={40} />, name: 'AWS S3', isCustom: true, iconUrl: 'https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg' },
    { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2048px-Amazon_Lambda_architecture_logo.svg.png" alt="AWS Lambda" width={40} height={40} />, name: 'AWS Lambda', isCustom: true, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2048px-Amazon_Lambda_architecture_logo.svg.png' },
    { icon: <img src="https://www.apono.io/wp-content/uploads/2023/05/amazon-sqs-min.png" alt="AWS SQS" width={40} height={40} />, name: 'AWS SQS', isCustom: true, iconUrl: 'https://www.apono.io/wp-content/uploads/2023/05/amazon-sqs-min.png' },
    { icon: <img src="https://raw.githubusercontent.com/pulumi/pulumi-aws-apigateway/main/assets/logo.png" alt="API Gateway" width={40} height={40} />, name: 'API Gateway', isCustom: true, iconUrl: 'https://raw.githubusercontent.com/pulumi/pulumi-aws-apigateway/main/assets/logo.png' },
    { icon: <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt="Docker" width={40} height={40} />, name: 'Docker', isCustom: true, iconUrl: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
    
    
    { icon: <img src="https://www.geekandjob.com/uploads/wiki/3abebb36b664ca8ac4d29397bb9d2705198996a5.png" alt="Spring MVC" width={40} height={40} />, name: 'Spring MVC', isCustom: true, iconUrl: 'https://www.geekandjob.com/uploads/wiki/3abebb36b664ca8ac4d29397bb9d2705198996a5.png' },
    { icon: <img src="https://cdn-icons-png.flaticon.com/512/5105/5105719.png" alt="JSP" width={40} height={40} />, name: 'JSP', isCustom: true, iconUrl: 'https://cdn-icons-png.flaticon.com/512/5105/5105719.png' },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLME0hpAJOqBGhaVjcgkk8hIKS3S4GAqrLg&s" alt="jQuery" width={40} height={40} />, name: 'jQuery', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLME0hpAJOqBGhaVjcgkk8hIKS3S4GAqrLg&s' },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjdex_w5hDNMzrU4p2BaSkttupxozQMEteQ&s" alt="Tomcat" width={40} height={40} />, name: 'Tomcat', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjdex_w5hDNMzrU4p2BaSkttupxozQMEteQ&s' },
    { icon: <img src="https://weppa.cloud/wp-content/uploads/2020/08/Apps-Weppa-Nuevos-28.png" alt="Wildfly" width={40} height={40} />, name: 'Wildfly', isCustom: true, iconUrl: 'https://weppa.cloud/wp-content/uploads/2020/08/Apps-Weppa-Nuevos-28.png' },
    { icon: <img src="https://ih1.redbubble.net/image.453956200.1706/tst,small,507x507-pad,600x600,f8f8f8.u5.jpg" alt="Jenkins" width={40} height={40} />, name: 'Jenkins', isCustom: true, iconUrl: 'https://ih1.redbubble.net/image.453956200.1706/tst,small,507x507-pad,600x600,f8f8f8.u5.jpg' },
    { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png" alt="Android Studio" width={40} height={40} />, name: 'Android Studio', isCustom: true, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png' },
  ],

  "Artificial Intelligence / Automation": [

    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNSol2KPLUo_aGSrDdm3Hg_EA07AijCvG7XWb47PsAYqv8NkYDx-VAHtftGlOvUXz1o&usqp=CAU" alt="OpenCV" width={40} height={40} />, name: 'OpenCV', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNSol2KPLUo_aGSrDdm3Hg_EA07AijCvG7XWb47PsAYqv8NkYDx-VAHtftGlOvUXz1o&usqp=CAU' },
    { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png" alt="Keras" width={40} height={40} />, name: 'Keras', isCustom: true, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png' },
    { icon: <img src="https://static-00.iconduck.com/assets.00/tensorflow-icon-955x1024-hd4xzbqj.png" alt="TensorFlow" width={40} height={40} />, name: 'TensorFlow', isCustom: true, iconUrl: 'https://static-00.iconduck.com/assets.00/tensorflow-icon-955x1024-hd4xzbqj.png' },
    { icon: <img src="https://resize.latenode.com/cdn-cgi/image/width=960,format=auto,fit=scale-down/https://cdn.prod.website-files.com/62c40e4513da320b60f32941/66a8c8f98dad82efb9a4e315_%D0%A1%D0%9C%D0%98%20(5).jpg  " alt="ResNet" width={40} height={40} />, name: 'ResNet', isCustom: true, iconUrl: 'https://resize.latenode.com/cdn-cgi/image/width=960,format=auto,fit=scale-down/https://cdn.prod.website-files.com/62c40e4513da320b60f32941/66a8c8f98dad82efb9a4e315_%D0%A1%D0%9C%D0%98%20(5).jpg' },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5hYcB6zTZFSCD83KLGlVJpkcRdmmfmqy9w&s" alt="Vision Transformers" width={40} height={40} />, name: 'Vision Transformers', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5hYcB6zTZFSCD83KLGlVJpkcRdmmfmqy9w&s' },
    { icon: <img src="https://agile-systems.de/wp-content/uploads/2024/03/LangChain-Logo.png" alt="Langchain" width={40} height={40} />, name: 'Langchain', isCustom: true, iconUrl: 'https://agile-systems.de/wp-content/uploads/2024/03/LangChain-Logo.png' },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80zg_RKN4w3BXlMnOwj4evR9JzAjfV73KHQ&s" alt="Hugging Face" width={40} height={40} />, name: 'Hugging Face', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80zg_RKN4w3BXlMnOwj4evR9JzAjfV73KHQ&s' },
    { icon: <img src="https://media.licdn.com/dms/image/v2/D4E12AQGdFFJ5BPQMfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722702083011?e=2147483647&v=beta&t=d3-U8R5_ZIOw5Urpn9WdD48d9kq0Zh4z2g2aKhQ2kVE" alt="RAG" width={40} height={40} />, name: 'RAG', isCustom: true, iconUrl: 'https://media.licdn.com/dms/image/v2/D4E12AQGdFFJ5BPQMfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722702083011?e=2147483647&v=beta&t=d3-U8R5_ZIOw5Urpn9WdD48d9kq0Zh4z2g2aKhQ2kVE' },
    { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png" alt="Selenium" width={40} height={40} />, name: 'Selenium', isCustom: true, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png' },
    { icon: <img src="https://logosandtypes.com/wp-content/uploads/2020/07/katalon-old.png" alt="Katalon" width={40} height={40} />, name: 'Katalon', isCustom: true, iconUrl: 'https://logosandtypes.com/wp-content/uploads/2020/07/katalon-old.png' },

  ],

  "AI Tools": [

    { icon: <img src="https://assets.designhill.com/design-blog/wp-content/uploads/2024/07/2-1.png" alt="Chat GPT" width={40} height={40} />, name: 'Chat GPT', isCustom: true, iconUrl: 'https://assets.designhill.com/design-blog/wp-content/uploads/2024/07/2-1.png' },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOboCNWIF8QWZDFShhAHz3s59jpWn-Q1fGQ&s" alt="Claude" width={40} height={40} />, name: 'Claude', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOboCNWIF8QWZDFShhAHz3s59jpWn-Q1fGQ&s' },
    { icon: <img src="https://preview.redd.it/is-deepseek-really-that-good-v0-d1mwkvg9zzee1.jpeg?auto=webp&s=7f58c75f82371cff2cf552963fae988219e3af55" alt="Deepseek" width={40} height={40} />, name: 'Deepseek', isCustom: true, iconUrl: 'https://preview.redd.it/is-deepseek-really-that-good-v0-d1mwkvg9zzee1.jpeg?auto=webp&s=7f58c75f82371cff2cf552963fae988219e3af55' },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCiL-O66xhAYdw7h5co2QzcWI3KtFjGA8gQ&s" alt="Perplexity" width={40} height={40} />, name: 'Perplexity', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCiL-O66xhAYdw7h5co2QzcWI3KtFjGA8gQ&s' },
    { icon: <img src="https://i.pinimg.com/736x/c8/0f/90/c80f90c48b1bdddfdf7c1249984ab744.jpg" alt="Midjourney " width={40} height={40} />, name: 'Midjourney ', isCustom: true, iconUrl: 'https://i.pinimg.com/736x/c8/0f/90/c80f90c48b1bdddfdf7c1249984ab744.jpg' },
    { icon: <img src="https://striking-kindness-e0d93214bb.media.strapiapp.com/Stable_Diffusion_logo_2b68efd6c7.png" alt="Stable Diffusion" width={40} height={40} />, name: 'Stable Diffusion', isCustom: true, iconUrl: 'https://striking-kindness-e0d93214bb.media.strapiapp.com/Stable_Diffusion_logo_2b68efd6c7.png' },

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
      <Typography
              variant="h4"
              sx={{
                marginBottom: 2,
                textAlign: 'center',
                fontFamily: '"Raleway", serif',
              }}
            >
              Technical Skills
            </Typography>
      {Object.keys(skillsByCategory).map((category) => (
        <Box key={category}>
          <Typography variant="h5" sx={{ marginBottom: 2 , textAlign: 'center', padding: '20px 0', fontFamily: '"Raleway", serif'}}>
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
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                          transform: 'scale(2.5)',
                        },
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
