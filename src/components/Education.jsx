import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { education } from "../data";

const EducationContainer = styled.section`
  background: ${({ theme }) => theme.colors.primaryLight};
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const EducationYear = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const EducationInstitution = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
`;

const EducationDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.paraTextColor};
`;

const Education = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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