import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { personalData } from "../data";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
`;

const HeroGlow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
  pointer-events: none;

  &.purple {
    background: #8b5cf6;
    top: -200px;
    right: -200px;
  }

  &.cyan {
    background: #06b6d4;
    bottom: -200px;
    left: -200px;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Greeting = styled(motion.p)`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.03em;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2.2rem;
  }
`;

const GradientName = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.secondary}
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const TypewriterWrapper = styled(motion.div)`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  min-height: 45px;
  color: ${({ theme }) => theme.colors.paraTextColor};

  .type-text {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.accent}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const SocialRow = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  color: ${({ theme }) => theme.colors.paraTextColor};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.secondaryGlow};
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
  font-size: 0.8rem;
  cursor: pointer;

  svg {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-8px); }
    60% { transform: translateY(-4px); }
  }
`;

const StatsRow = styled(motion.div)`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 3rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;

  .number {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .label {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.paraTextColor};
    margin-top: 0.3rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    .number { font-size: 1.5rem; }
    .label { font-size: 0.75rem; }
  }
`;

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <HeroContainer id="home">
      <HeroGlow className="purple" />
      <HeroGlow className="cyan" />

      <HeroContent>
        <Greeting
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to my portfolio
        </Greeting>

        <HeroTitle
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm <GradientName>{personalData.name}</GradientName>
        </HeroTitle>

        <TypewriterWrapper
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TypeAnimation
            sequence={[
              "Senior Software Engineer",
              2000,
              "React & Next.js Expert",
              2000,
              "NestJS & Node.js Specialist",
              2000,
              "Python & Flask Developer",
              2000,
              "AI-Powered Engineer",
              2000,
              "MERN Stack Architect",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="type-text"
            repeat={Infinity}
          />
        </TypewriterWrapper>

        <HeroDescription
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {personalData.about}
        </HeroDescription>

        <HeroButtons
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#projects" className="btn">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </HeroButtons>

        <SocialRow
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <SocialIcon
            href={personalData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
          </SocialIcon>
          <SocialIcon
            href={personalData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={20} />
          </SocialIcon>
        </SocialRow>

        <StatsRow
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <StatItem>
            <div className="number">5+</div>
            <div className="label">Years Experience</div>
          </StatItem>
          <StatItem>
            <div className="number">10+</div>
            <div className="label">Projects Delivered</div>
          </StatItem>
          <StatItem>
            <div className="number">15+</div>
            <div className="label">Happy Clients</div>
          </StatItem>
        </StatsRow>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span>Scroll Down</span>
        <FaArrowDown />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
