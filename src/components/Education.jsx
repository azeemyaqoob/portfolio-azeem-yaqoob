import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { education } from "../data";
import { FaGraduationCap } from "react-icons/fa";

const EducationContainer = styled.section`
  position: relative;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 2rem;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -15px ${({ theme }) => theme.colors.secondaryGlow};
  }
`;

const EducationIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  color: white;
`;

const EducationYear = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondaryGlow};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const EducationTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const EducationInstitution = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const EducationDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.paraTextColor};
`;

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <EducationContainer id="education" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My <span>Education</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <EducationGrid>
            {education.map((edu, index) => (
              <EducationCard key={index} variants={itemVariants}>
                <EducationIcon>
                  <FaGraduationCap />
                </EducationIcon>
                <EducationYear>{edu.year}</EducationYear>
                <EducationTitle>{edu.degree}</EducationTitle>
                <EducationInstitution>{edu.institution}</EducationInstitution>
                <EducationDescription>{edu.description}</EducationDescription>
              </EducationCard>
            ))}
          </EducationGrid>
        </motion.div>
      </div>
    </EducationContainer>
  );
};

export default Education;
