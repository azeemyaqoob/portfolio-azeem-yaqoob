import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { skills } from "../data";

const SkillsContainer = styled.section``;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primaryLight};
  padding: 1.5rem;
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

const SkillName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const SkillLevel = styled.div`
  height: 10px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const SkillLevelBar = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
`;

const SkillPercentage = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
`;

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { duration: 1, delay: 0.3 },
    }),
  };

  return (
    <SkillsContainer id="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My <span>Skills</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard key={index} variants={itemVariants}>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>
                  <SkillLevelBar
                    variants={barVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  />
                </SkillLevel>
                <SkillPercentage>{skill.level}%</SkillPercentage>
              </SkillCard>
            ))}
          </SkillsGrid>
        </motion.div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;