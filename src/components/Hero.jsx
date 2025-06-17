import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { personalData } from "../data";
import profileImage from './../assets/images/azeem-500x500.jpg'; // Adjust path as needed
const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryLight}
  );
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
  max-width: 600px;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: 2rem;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <HeroContainer id="home" ref={ref}>
      <div className="container">
        <HeroContent>
          <HeroText>
            <HeroTitle
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span>{personalData.name}</span>
            </HeroTitle>
            <HeroSubtitle
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {personalData.role}
            </HeroSubtitle>
            <HeroDescription
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {personalData.about}
            </HeroDescription>
            <HeroButtons
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="#contact" className="btn">
                Contact Me
              </a>
              <a href="#projects" className="btn">
                View Projects
              </a>
            </HeroButtons>
          </HeroText>
          <HeroImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              src={profileImage}
              alt="Profile"
            />
          </HeroImage>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default Hero;