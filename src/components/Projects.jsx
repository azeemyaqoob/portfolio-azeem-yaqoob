import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { projects } from "../data";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const ProjectsContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

const ProjectsGlow = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.06;
  pointer-events: none;

  &.left {
    background: ${({ theme }) => theme.colors.secondary};
    bottom: 0;
    left: -200px;
  }

  &.right {
    background: ${({ theme }) => theme.colors.accent};
    top: 0;
    right: -200px;
  }
`;

const FilterBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterBtn = styled(motion.button)`
  padding: 0.6rem 1.5rem;
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.secondary : theme.colors.cardBorder};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.secondaryGlow : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.paraTextColor};
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px ${({ theme }) => theme.colors.secondaryGlow};
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, ${({ theme }) => theme.colors.primary}, transparent);
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;

    ${ProjectCard}:hover & {
      transform: scale(1.08);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem 1.8rem 1.8rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  letter-spacing: -0.01em;
`;

const ProjectDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
`;

const Technology = styled.span`
  background: ${({ theme }) => theme.colors.secondaryGlow};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.paraTextColor};
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secondaryGlow};
  }
`;

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [filter, setFilter] = useState("all");

  const filters = ["all", "React", "MERN", "WordPress"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "MERN")
      return p.technologies.some((t) =>
        ["Node.js", "Node JS", "MongoDB", "Express"].includes(t)
      );
    if (filter === "WordPress")
      return p.technologies.some((t) => t.toLowerCase() === "wordpress");
    if (filter === "React")
      return p.technologies.some((t) =>
        t.toLowerCase().includes("react")
      );
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <ProjectsGlow className="left" />
      <ProjectsGlow className="right" />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Featured <span>Projects</span>
        </motion.h2>

        <FilterBar
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((f) => (
            <FilterBtn
              key={f}
              $active={filter === f}
              onClick={() => setFilter(f)}
              whileTap={{ scale: 0.95 }}
            >
              {f === "all" ? "All Projects" : f}
            </FilterBtn>
          ))}
        </FilterBar>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <ProjectsGrid>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} variants={itemVariants}>
                  <ProjectImageWrapper>
                    <img src={project.image} alt={project.title} />
                  </ProjectImageWrapper>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectTechnologies>
                      {project.technologies.map((tech, i) => (
                        <Technology key={i}>{tech}</Technology>
                      ))}
                    </ProjectTechnologies>
                    <ProjectLinks>
                      {project.githubLink && (
                        <ProjectLink
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> Code
                        </ProjectLink>
                      )}
                      {project.liveLink && (
                        <ProjectLink
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt /> Live <FaArrowRight size={10} />
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </motion.div>
        </AnimatePresence>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
