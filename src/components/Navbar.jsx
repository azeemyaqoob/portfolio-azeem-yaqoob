import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(3, 0, 20, 0.85)" : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(20px)" : "none")};
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.colors.glassBorder}` : "none"};
`;

const NavInner = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: -0.02em;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.white},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.paraTextColor};
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.cardBg};
    }
  }
`;

const MobileMenuBtn = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: rgba(3, 0, 20, 0.95);
  backdrop-filter: blur(30px);
  border-left: 1px solid ${({ theme }) => theme.colors.glassBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  z-index: 1000;
`;

const MobileNavLink = styled(motion.a)`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.paraTextColor};
  padding: 0.8rem 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  width: 80%;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.cardBg};
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <NavbarContainer
        $scrolled={scrolled}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <NavInner>
          <Logo href="#home">AY.</Logo>

          <NavLinks>
            {navLinks.map((item, index) => (
              <NavLink key={index}>
                <a href={item.link}>{item.name}</a>
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenuBtn onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </MobileMenuBtn>
        </NavInner>
      </NavbarContainer>

      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <MobileMenu
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {navLinks.map((item, index) => (
                <MobileNavLink
                  key={index}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.name}
                </MobileNavLink>
              ))}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
