import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { FaHeart } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.primaryLight};
  padding: 3rem 0;
  text-align: center;
`;

const FooterContent = styled(motion.div)`
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.paraTextColor};
    margin-bottom: 1rem;

    a {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 500;
    }
  }
`;

const HeartIcon = styled(FaHeart)`
  color: #ff0000;
  margin: 0 0.3rem;
`;

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <FooterContainer ref={ref}>
      <div className="container">
        <FooterContent
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Made with <HeartIcon /> by Your Name
          </p>
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;