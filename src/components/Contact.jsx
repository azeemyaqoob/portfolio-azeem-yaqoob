import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { personalData } from "../data";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import qrcode from "./../assets/images/whatsapp.jpeg"
const ContactContainer = styled.section``;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.paraTextColor};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const WhatsAppSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const QRCodeContainer = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const QRCodeImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const WhatsAppText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
  max-width: 300px;
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #25D366;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #128C7E;
    transform: translateY(-3px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const Contact = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Get In <span>Touch</span>
        </motion.h2>
        <ContactContent>
          <ContactInfo
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants}>Contact Information</motion.h3>
            <ContactInfoItem variants={itemVariants}>
              <FaMapMarkerAlt />
              <p>{personalData.address}</p>
            </ContactInfoItem>
            <ContactInfoItem variants={itemVariants}>
              <FaPhone />
              <p>{personalData.phone}</p>
            </ContactInfoItem>
            <ContactInfoItem variants={itemVariants}>
              <FaEnvelope />
              <p>{personalData.email}</p>
            </ContactInfoItem>
            <SocialLinks variants={containerVariants}>
              <SocialLink
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <WhatsAppSection
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3 variants={itemVariants}>Connect via WhatsApp</motion.h3>
            <QRCodeContainer>
              <QRCodeImage 
                src={qrcode} // Replace with your actual QR code image path
                alt="WhatsApp QR Code"
              />
            </QRCodeContainer>
            <WhatsAppText>
              Scan the QR code or click below to start a conversation on WhatsApp
            </WhatsAppText>
            <WhatsAppButton
              href={`https://wa.me/${personalData.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </WhatsAppButton>
          </WhatsAppSection>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;