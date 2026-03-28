import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { personalData } from "../data";

const FooterContainer = styled.footer`
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  position: relative;
  z-index: 2;
`;

const FooterContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const FooterLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.white}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.paraTextColor};
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secondaryGlow};
    transform: translateY(-2px);
  }
`;

const FooterText = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.paraTextColor};

  span {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }
`;

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <FooterContainer ref={ref}>
      <div className="container">
        <FooterContent
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <FooterLogo href="#home">AY.</FooterLogo>
          <FooterSocials>
            <FooterSocialLink
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </FooterSocialLink>
            <FooterSocialLink
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </FooterSocialLink>
            <FooterSocialLink
              href={`https://wa.me/${personalData.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </FooterSocialLink>
          </FooterSocials>
          <FooterText>
            Designed & Built by <span>Azeem Yaqoob</span>
          </FooterText>
          <FooterText>
            &copy; {new Date().getFullYear()} All Rights Reserved
          </FooterText>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;
