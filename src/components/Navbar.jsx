import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.primaryLight};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    z-index: 1000;
  }
`;

const NavLink = styled.li`
  a {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const MobileMenuBtn = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <NavbarContainer
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      transition={{ duration: 0.5 }}
    >
      <Logo href="#home">
        Azeem<span>Yaqoob</span>
      </Logo>

      <NavLinks isOpen={isOpen}>
        {navLinks.map((item, index) => (
          <NavLink key={index}>
            <a href={item.link} onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          </NavLink>
        ))}
      </NavLinks>

      <MobileMenuBtn onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes size={24} color="#fff" />
        ) : (
          <FaBars size={24} color="#fff" />
        )}
      </MobileMenuBtn>
    </NavbarContainer>
  );
};

export default Navbar;