import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { experience } from "../data";

const ExperienceContainer = styled.section``;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary};

    @media ${({ theme }) => theme.breakpoints.md} {
      left: 2rem;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 4rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-left: 5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateX(-50%);

    @media ${({ theme }) => theme.breakpoints.md} {
      left: 2rem;
    }
  }
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.colors.primaryLight};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const TimelineYear = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const TimelineSubtitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
`;

const TimelineDescription = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const TimelineDescriptionItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
`;

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <ExperienceContainer id="experience" ref={ref}>
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
                <TimelineContent>
                  <TimelineYear>{exp.year}</TimelineYear>
                  <TimelineTitle>{exp.role}</TimelineTitle>
                  <TimelineSubtitle>{exp.company}</TimelineSubtitle>
                  <TimelineDescription>
                    {exp.description.map((item, i) => (
                      <TimelineDescriptionItem key={i}>
                        {item}
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