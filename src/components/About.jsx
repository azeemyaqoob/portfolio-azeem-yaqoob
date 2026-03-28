import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { personalData } from "../data";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode, FaServer, FaRobot } from "react-icons/fa";

const AboutContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

const AboutGlow = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.08;
  background: ${({ theme }) => theme.colors.secondary};
  top: 50%;
  left: -100px;
  transform: translateY(-50%);
  pointer-events: none;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutLeft = styled(motion.div)``;

const AboutBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: ${({ theme }) => theme.colors.secondaryGlow};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

const AboutHeading = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const AboutText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.paraTextColor};
  margin-bottom: 2rem;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.2rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
  transition: all 0.3s ease;

  svg {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  span {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.paraTextColor};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.secondaryGlow};
  }
`;

const AboutRight = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -15px ${({ theme }) => theme.colors.secondaryGlow};
  }

  &:nth-child(2) {
    transform: translateY(1.5rem);
    @media ${({ theme }) => theme.breakpoints.sm} {
      transform: none;
    }
  }

  &:nth-child(2):hover {
    transform: translateY(calc(1.5rem - 5px));
    @media ${({ theme }) => theme.breakpoints.sm} {
      transform: translateY(-5px);
    }
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem;
  font-size: 1.5rem;
  color: white;
`;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
  line-height: 1.5;
`;

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AboutContainer id="about" ref={ref}>
      <AboutGlow />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          About <span>Me</span>
        </motion.h2>

        <AboutGrid>
          <AboutLeft
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <AboutBadge>Senior Software Engineer</AboutBadge>
            </motion.div>
            <motion.div variants={itemVariants}>
              <AboutHeading>
                Building <span>Digital Experiences</span> That Make an Impact
              </AboutHeading>
            </motion.div>
            <motion.div variants={itemVariants}>
              <AboutText>{personalData.about1}</AboutText>
            </motion.div>
            <InfoGrid>
              <InfoItem variants={itemVariants}>
                <FaMapMarkerAlt />
                <span>{personalData.address}</span>
              </InfoItem>
              <InfoItem variants={itemVariants}>
                <FaEnvelope />
                <span>{personalData.email}</span>
              </InfoItem>
              <InfoItem variants={itemVariants}>
                <FaPhone />
                <span>{personalData.phone}</span>
              </InfoItem>
            </InfoGrid>
            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn">
                Get In Touch
              </a>
            </motion.div>
          </AboutLeft>

          <AboutRight
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FeatureCard whileHover={{ scale: 1.02 }}>
              <FeatureIcon><FaCode /></FeatureIcon>
              <FeatureTitle>Frontend</FeatureTitle>
              <FeatureDesc>React, Next.js, TypeScript, Tailwind CSS with pixel-perfect responsive designs</FeatureDesc>
            </FeatureCard>
            <FeatureCard whileHover={{ scale: 1.02 }}>
              <FeatureIcon><FaServer /></FeatureIcon>
              <FeatureTitle>Backend</FeatureTitle>
              <FeatureDesc>Node.js, NestJS, Express, Python/Flask, Laravel, MongoDB, MySQL with scalable APIs</FeatureDesc>
            </FeatureCard>
            <FeatureCard whileHover={{ scale: 1.02 }}>
              <FeatureIcon><FaRobot /></FeatureIcon>
              <FeatureTitle>AI-Powered</FeatureTitle>
              <FeatureDesc>Claude Code, Vercel VO, Replit AI for accelerated development</FeatureDesc>
            </FeatureCard>
          </AboutRight>
        </AboutGrid>
      </div>
    </AboutContainer>
  );
};

export default About;
