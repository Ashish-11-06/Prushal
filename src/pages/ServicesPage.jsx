import { Button, Typography, Tag, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import cloudImage from '../assets/cloudcom.png'; // Replace with your actual image
import automationImage from '../assets/cloudcom.png'; // Replace with your actual image
import businessProcessImage from '../assets/app1.png';
import applicationServicesImage from '../assets/erp.gif';
import dataAIImage from '../assets/data1.png';
import softwareEngineeringImage from '../assets/app1.png';
import genAIImage from '../assets/ai.png';
import iotImage from '../assets/iot_transaprent.png';
import web from '../assets/web.png';

const { Title, Paragraph } = Typography;

const servicesData = [
  {
    id: 1,
    title: 'Web App Development',
    buzzword: 'Scalable, Secure, and High-Performance Solutions',
    description: `In a world where performance, reliability, and experience matter most, our Web App Development service focuses on building robust, secure, and scalable applications. We develop high-performance web solutions tailored to your unique goals — whether you're launching a startup, growing a business, or transforming enterprise systems. From dynamic frontends to powerful backend architectures, we integrate modern frameworks, CMS platforms, and databases to deliver complete web ecosystems. Our team brings full-stack expertise to craft responsive, SEO-friendly, and user-driven platforms — ensuring seamless functionality, fast load times, and future-ready features. Whether you're using Django, MERN, WordPress, or PHP, we turn your ideas into powerful digital experiences.`,
    image: web,
    tech: [
      'React', 'Node.js', 'Express', 'MongoDB',
      'Django', 'WordPress', 'PHP', 'MySQL',
      'HTML5', 'CSS3', 'JavaScript', 'REST APIs',
      'Firebase', 'Next.js', 'TypeScript', 'Git'
    ]
  },
  
  {
    id: 2,
    title: 'Data and AI',
    buzzword: 'Harness the Power of Insights & Intelligence',
    description: `Transform your data into actionable insights with our comprehensive data and AI services. We help you collect, analyze, and visualize your data to identify trends, patterns, and opportunities. Our expertise covers a wide range of data and AI technologies, including machine learning, natural language processing, and data visualization. We work closely with you to understand your business goals and develop customized solutions that deliver measurable results. From building predictive models to automating data analysis, we empower you to make data-driven decisions that drive business growth.`,
    image: dataAIImage,
    tech: ['Machine Learning', 'NLP', 'Data Visualization', 'Tableau', 'Power BI', 'Spark'],
  },
  {
    id: 3,
    title: 'GenAI',
    buzzword: 'Next-Gen AI That Thinks Like You Do',
    description: `Revolutionize your business with our generative AI solutions. Our expertise covers a wide range of generative AI technologies, including natural language generation, image generation, and code generation. We work closely with you to understand your business goals and develop customized solutions that deliver measurable results. From automating content creation to generating realistic simulations, we empower you to unlock new levels of creativity and efficiency. Leverage the power of GenAI to innovate.`,
    image: genAIImage,
    tech: ['Generative AI', 'GANs', 'Transformers', 'GPT-3', 'DALL-E', 'Stable Diffusion'],
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    buzzword: 'Scalable, Secure & Seamless Cloud Infrastructure',
    description: `Leverage the power of the cloud with our tailored solutions. We provide comprehensive cloud services, from migration and management to optimization and security. Our expertise covers AWS, Azure, and Google Cloud Platform, ensuring that your business benefits from increased agility, reduced costs, and enhanced collaboration. Whether you're looking to modernize your infrastructure, develop cloud-native applications, or implement a robust disaster recovery plan, we have the expertise to guide you. Our cloud solutions are designed to scale with your business, providing the flexibility and reliability you need to stay ahead of the competition. Focus on your core business while we handle the complexities of the cloud.`,
    image: cloudImage,
    tech: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
  },
  {
    id: 5,
    title: 'Internet of Things (IoT)',
    buzzword: 'Connecting the World, One Device at a Time',
    description: `Connect your business to the Internet of Things with our comprehensive IoT solutions. We help you design, develop, and deploy IoT devices and applications that collect data, automate processes, and improve efficiency. Our expertise covers a wide range of IoT technologies, including sensors, gateways, and cloud platforms. We work closely with you to understand your business goals and develop customized solutions that deliver measurable results. From smart homes to industrial automation, we empower you to harness the power of IoT.`,
    image: iotImage,
    tech: ['Sensors', 'Gateways', 'Cloud Platforms', 'MQTT', 'CoAP', 'LoRaWAN'],
  },
  {
    id: 6,
    title: 'Software Engineering',
    buzzword: 'Robust Engineering for Scalable Products',
    description: `Build high-quality, scalable, and reliable software solutions with our expert software engineering services. We follow industry best practices and use the latest technologies to deliver custom software that meets your specific needs. Our team of experienced software engineers works closely with you to understand your requirements and develop solutions that are both functional and maintainable. Whether you're building a new application, modernizing an existing application, or scaling your software infrastructure, we have the expertise to guide you. Our commitment to quality and innovation ensures that you receive the best possible software solutions.`,
    image: softwareEngineeringImage,
    tech: ['Java', 'Python', 'C++', 'Agile', 'DevOps', 'CI/CD'],
  },
  {
    id: 7,
    title: 'Automation',
    buzzword: 'Transforming Workflows Through Intelligent Automation',
    description: `Unlock the potential of automation with our intelligent solutions. We automate repetitive tasks, streamline processes, and improve efficiency across your organization. Our expertise covers a wide range of automation technologies, including robotic process automation (RPA), artificial intelligence (AI), and machine learning (ML). We work closely with you to identify opportunities for automation and implement customized solutions that deliver measurable results. From automating data entry to optimizing customer service, we help you free up your team to focus on strategic initiatives and drive business growth.`,
    image: automationImage,
    tech: ['RPA', 'AI', 'Machine Learning', 'Python', 'TensorFlow', 'OpenCV'],
  },
  {
    id: 8,
    title: 'Business Process Services',
    buzzword: 'Driving Operational Efficiency with Smart Automation',
    description: `Transform your business processes with our comprehensive suite of services. We analyze, optimize, and automate your workflows to improve efficiency, reduce costs, and enhance customer satisfaction. From robotic process automation (RPA) to business process management (BPM), we leverage the latest technologies to streamline your operations. Our team of experts works closely with you to identify areas for improvement and implement customized solutions that deliver measurable results. Focus on strategic initiatives while we handle the day-to-day tasks, allowing you to achieve your business goals faster.`,
    image: businessProcessImage,
    tech: ['RPA', 'BPM', 'Workflow Automation', 'UiPath', 'Automation Anywhere', 'Blue Prism'],
  },
  {
    id: 9,
    title: 'Application Services',
    buzzword: 'Modernizing Apps for a Faster Digital Future',
    description: `Ensure your business applications are up-to-date and meeting the demands of today's digital landscape. Our application services cover the entire lifecycle, from design and development to maintenance and modernization. We use the latest technologies and best practices to deliver high-quality applications that are scalable, secure, and user-friendly. Whether you're looking to build a new application, migrate an existing application to the cloud, or optimize your application performance, we have the expertise to guide you. Drive innovation with application services.`,
    image: applicationServicesImage,
    tech: ['React', 'Angular', 'Node.js', 'GraphQL', 'REST APIs', 'Microservices'],
  },
];

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.3,
      delay,
      ease: 'easeOut',
    },
  },
});

const ServicesPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>


      {/* Hero Section */}
      <motion.div
  ref={heroRef}
  initial="hidden"
  animate={heroInView ? 'visible' : 'hidden'}
  variants={fadeIn('up')}
>
  <div
    className="responsive-hero"
    style={{
      textAlign: 'center',
      padding: '100px 30px',
      background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
      borderRadius: '20px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      margin: '40px 20px',
      height: '300px',
    }}
  >
    <motion.div
      animate={{ y: [-10, 10] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
    >
      <Title
        level={1}
        style={{
          fontWeight: 700,
          fontSize: '36px',
          color: '#007676',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          marginBottom: '10px',
          marginTop: '-15px',
        }}
      >
        Strategic Solutions that Drive Business Growth..
      </Title>
    </motion.div>
    <Paragraph
      style={{
        fontSize: 18,
        maxWidth: 800,
        margin: '0 auto',
        color: '#007676',
        lineHeight: '1.6',
        textAlign: 'center',
      }}
    >
      From strategy to execution, we provide everything you need to succeed in the digital era.
    </Paragraph>
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
    >
      <Button
        type="primary"
        size="large"
        onClick={() => navigate('/contact')}
        style={{ zIndex: 1, marginTop: '20px', backgroundColor: '#007676', borderColor: '#007676' }}
      >
        Contact Us
      </Button>
    </motion.div>
  </div>
  {/* Responsive mobile styles */}
  <style>{`
    @media (max-width: 700px) {
      .responsive-hero {
        padding: 36px 6px !important;
        margin: 16px 2px !important;
        height: auto !important;
        min-height: 180px;
      }
      .responsive-hero h1,
      .responsive-hero .ant-typography {
        font-size: 1.2rem !important;
        margin-top: 0 !important;
        margin-bottom: 8px !important;
        line-height: 1.2 !important;
      }
      .responsive-hero .ant-typography,
      .responsive-hero p {
        font-size: 1rem !important;
        max-width: 98vw !important;
        line-height: 1.5 !important;
      }
      .responsive-hero button {
        width: 100%;
        font-size: 1rem !important;
        margin-top: 16px !important;
      }
    }
  `}</style>
</motion.div>





      {/* Services List */}
      <div>
        {servicesData.map((service, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn(imageFirst ? 'left' : 'right', index * 0.1)}
              style={{
                display: 'flex',
                flexDirection: imageFirst ? 'row' : 'row-reverse',
                alignItems: 'center',
                margin: '40px 0',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                backgroundColor: '#fff',
                flexWrap: 'wrap', // Added for better responsiveness
                position: 'relative', // For the gradient overlay
                overflow: 'hidden',   // Clip the overflow
                border: '0.5px solid #007676',

              }}
            >
                {/* Gradient Overlay */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(224, 247, 250, 0.3), rgba(255, 255, 255, 0.3))',
                  zIndex: 0,          // Place behind the content
                  pointerEvents: 'none', // Make it non-interactive
                  borderRadius: '15px',
                }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.img
                src={service.image}
                alt={service.title}
                style={{
                  width: '50%',
                  minWidth: '300px', // Ensure image doesn't get too small on smaller screens
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  objectFit: 'contain',  // Ensure the whole image is visible
                  height: '300px', // Added fixed height
                  animation: 'float 1s ease-in-out infinite', // Added floating animation
                  zIndex: 1,      // Place above the gradient
                  position: 'relative',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
              />
              <div
                style={{
                  width: '50%',
                  padding: '20px',
                  minWidth: '300px', // Ensure text section doesn't get too small
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Title level={3} style={{ color: '#007676' }}>
                  {service.title}
                </Title>
                <Paragraph style={{ fontStyle: 'italic', color: '#666' }}>
                  {service.buzzword}
                </Paragraph>
                <Paragraph style={{ textAlign: 'justify' }}>
                  {service.description}
                </Paragraph>
                <div style={{ marginTop: '10px' }}>
                  {service.tech &&
                    service.tech.map((tech) => (
                      <Tag color="blue" key={tech}>
                        {tech}
                      </Tag>
                    ))}
                </div>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    style={{ display: 'inline-block' }}
                  >
                    {/* <Button
                      type="primary"
                      style={{ marginRight: '10px' }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.1 }}
                    >
                      Learn More
                    </Button> */}
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.3 }}
                    style={{ display: 'inline-block' }}
                  >
                    <Button
                      onClick={() => navigate('/contact')}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.1 }}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
