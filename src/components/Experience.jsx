import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { experience } from "../data";
import { FaBriefcase } from "react-icons/fa";

const ExperienceContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

const ExperienceGlow = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.06;
  background: ${({ theme }) => theme.colors.secondary};
  top: 30%;
  right: -100px;
  pointer-events: none;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 30px;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.accent},
      transparent
    );

    @media ${({ theme }) => theme.breakpoints.sm} {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 70px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding-left: 55px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  left: 18px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  svg {
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    left: 8px;
  }
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 15px 30px -10px ${({ theme }) => theme.colors.secondaryGlow};
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.01em;
`;

const TimelineYear = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondaryGlow};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  white-space: nowrap;
`;

const TimelineCompany = styled.h4`
  font-size: 1rem;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const TimelineDescription = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const TimelineDescriptionItem = styled.li`
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.paraTextColor};
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <ExperienceContainer id="experience" ref={ref}>
      <ExperienceGlow />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Work <span>Experience</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Timeline>
            {experience.map((exp, index) => (
              <TimelineItem key={index} variants={itemVariants}>
                <TimelineDot>
                  <FaBriefcase />
                </TimelineDot>
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTitle>{exp.role}</TimelineTitle>
                    <TimelineYear>{exp.year}</TimelineYear>
                  </TimelineHeader>
                  <TimelineCompany>{exp.company}</TimelineCompany>
                  <TimelineDescription>
                    {exp.description.map((item, i) => (
                      <TimelineDescriptionItem key={i}>
                        {item.replace(/^- /, "")}
                      </TimelineDescriptionItem>
                    ))}
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
