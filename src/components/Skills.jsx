import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { skills } from "../data";
import {
  SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiNestjs, SiMongodb, SiMysql,
  SiHtml5, SiJavascript, SiTypescript, SiGit, SiTailwindcss, SiMui,
  SiBitbucket, SiStripe, SiBootstrap, SiWordpress, SiCss3, SiPython, SiFlask
} from "react-icons/si";
import { FaRobot, FaCog } from "react-icons/fa";

const iconMap = {
  "Next JS": SiNextdotjs,
  "React js": SiReact,
  "Node.js": SiNodedotjs,
  "NestJS": SiNestjs,
  "Express": SiExpress,
  "Python": SiPython,
  "Flask": SiFlask,
  "MongoDB": SiMongodb,
  "SQL": SiMysql,
  "HTML/CSS": SiHtml5,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Git": SiGit,
  "TailwindCSS": SiTailwindcss,
  "Material UI": SiMui,
  "Bitbucket": SiBitbucket,
  "Stripe Payment": SiStripe,
  "Bootstrap": SiBootstrap,
  "React Bootstrap": SiBootstrap,
  "Wordpress": SiWordpress,
  "Custom CSS": SiCss3,
  "Claude Code": FaRobot,
  "Git Copilot": FaCog,
  "Vercel VO Agentic AI": FaRobot,
  "Replit Agentic AI": FaRobot,
  "Bluehost": FaCog,
  "Hostinger": FaCog,
};

const SkillsContainer = styled.section`
  position: relative;
`;

const SkillsGlow = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.06;
  background: ${({ theme }) => theme.colors.accent};
  top: 20%;
  right: -150px;
  pointer-events: none;
`;

const SkillCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 1.5rem 1rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  cursor: default;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
    box-shadow: 0 15px 30px -10px ${({ theme }) => theme.colors.secondaryGlow};

    &::before {
      transform: scaleX(1);
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  transition: all 0.3s ease;

  ${SkillCard}:hover & {
    color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.1);
  }
`;

const SkillName = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.paraTextColor};

  ${SkillCard}:hover & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const frontendSkills = skills.filter((s) =>
    ["Next JS", "React js", "HTML/CSS", "JavaScript", "TypeScript", "TailwindCSS", "Material UI", "Custom CSS", "Bootstrap", "React Bootstrap"].includes(s.name)
  );
  const backendSkills = skills.filter((s) =>
    ["Node.js", "NestJS", "Express", "Python", "Flask", "MongoDB", "SQL", "Stripe Payment", "Wordpress"].includes(s.name)
  );
  const toolsSkills = skills.filter((s) =>
    ["Git", "Bitbucket", "Claude Code", "Git Copilot", "Vercel VO Agentic AI", "Replit Agentic AI", "Bluehost", "Hostinger"].includes(s.name)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };

  const renderSkillGroup = (skillGroup, title) => (
    <div>
      <CategoryTitle
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </CategoryTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SkillsGrid>
          {skillGroup.map((skill, index) => {
            const Icon = iconMap[skill.name] || FaCog;
            return (
              <SkillCard key={index} variants={itemVariants} whileTap={{ scale: 0.95 }}>
                <SkillIcon><Icon /></SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            );
          })}
        </SkillsGrid>
      </motion.div>
    </div>
  );

  return (
    <SkillsContainer id="skills" ref={ref}>
      <SkillsGlow />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Tech <span>Stack</span>
        </motion.h2>
        <SkillCategories>
          {renderSkillGroup(frontendSkills, "Frontend Development")}
          {renderSkillGroup(backendSkills, "Backend & Database")}
          {renderSkillGroup(toolsSkills, "Tools & AI")}
        </SkillCategories>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
