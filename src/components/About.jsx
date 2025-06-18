import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { personalData } from "../data";

const AboutContainer = styled.section`
  background: ${({ theme }) => theme.colors.primaryLight};
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }
`;

const AboutImage = styled(motion.div)`
  flex: 1;
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const AboutText = styled(motion.div)`
  flex: 1;
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.paraTextColor};
  }
`;

const InfoList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem; /* Increased gap for better spacing */
  margin-top: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  p {
    margin-bottom: 0.8rem; /* Increased margin for better spacing */
    font-size: 1rem;
    word-break: break-all; /* Allow long text to break */

    span {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
      margin-right: 0.5rem;
      display: inline-block;
      min-width: 60px; /* Fixed width for labels */
    }
  }
`;

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AboutContainer id="about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    About <span>Me</span>
                </motion.h2>
                <AboutContent>
                    <AboutImage
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&w=400&h=500&fit=crop&crop=faces&auto=format"
                            alt="Professional Developer"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                borderRadius: '10px',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                            }}
                        />
                    </AboutImage>
                    <AboutText
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <motion.h3 variants={itemVariants}>Full Stack Developer</motion.h3>
                        <motion.p variants={itemVariants}>{personalData.about1}</motion.p>
                        <InfoList variants={containerVariants}>
                            <InfoItem>
                                <motion.p variants={itemVariants}>
                                    <span>Name:</span> {personalData.name}
                                </motion.p>
                                <motion.p variants={itemVariants}>
                                    <span>Email:</span> {personalData.email}
                                </motion.p>
                            </InfoItem>
                            <InfoItem>
                                <motion.p variants={itemVariants}>
                                    <span>Phone:</span> {personalData.phone}
                                </motion.p>
                                <motion.p variants={itemVariants}>
                                    <span>From:</span> {personalData.address}
                                </motion.p>
                            </InfoItem>
                        </InfoList>
                        <motion.div variants={itemVariants}>
                            <a href="#contact" className="btn">
                                Contact Me
                            </a>
                        </motion.div>
                    </AboutText>
                </AboutContent>
            </div>
        </AboutContainer>
    );
};

export default About;