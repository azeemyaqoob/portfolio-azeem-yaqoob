import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { personalData } from "../data";
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp,
  FaPaperPlane
} from "react-icons/fa";
import qrcode from "./../assets/images/whatsapp.jpeg";

const ContactContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

const ContactGlow = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.06;
  background: ${({ theme }) => theme.colors.accent};
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const ContactLeft = styled(motion.div)``;

const ContactSubtitle = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.paraTextColor};
  margin-bottom: 2.5rem;
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 14px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(5px);
    background: ${({ theme }) => theme.colors.secondaryGlow};
  }
`;

const ContactItemIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: white;
  flex-shrink: 0;
`;

const ContactItemText = styled.div`
  .label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.paraTextColor};
    margin-bottom: 0.2rem;
  }

  .value {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.paraTextColor};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secondaryGlow};
    transform: translateY(-3px);
  }
`;

const ContactRight = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 24px;
  padding: 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #25D366, #128C7E);
  }
`;

const WhatsAppTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: #25D366;
  }
`;

const QRCodeContainer = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 16px;
  display: inline-block;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
`;

const QRCodeImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
`;

const WhatsAppText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.paraTextColor};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 30px -5px rgba(37, 211, 102, 0.3);
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <ContactGlow />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Get In <span>Touch</span>
        </motion.h2>

        <ContactGrid>
          <ContactLeft
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <ContactSubtitle>
                Ready to bring your ideas to life? I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of your vision.
              </ContactSubtitle>
            </motion.div>

            <ContactItems>
              <ContactItem
                href={`mailto:${personalData.email}`}
                variants={itemVariants}
              >
                <ContactItemIcon><FaEnvelope /></ContactItemIcon>
                <ContactItemText>
                  <div className="label">Email</div>
                  <div className="value">{personalData.email}</div>
                </ContactItemText>
              </ContactItem>

              <ContactItem
                href={`tel:${personalData.phone}`}
                variants={itemVariants}
              >
                <ContactItemIcon><FaPhone /></ContactItemIcon>
                <ContactItemText>
                  <div className="label">Phone</div>
                  <div className="value">{personalData.phone}</div>
                </ContactItemText>
              </ContactItem>

              <ContactItem as={motion.div} variants={itemVariants}>
                <ContactItemIcon><FaMapMarkerAlt /></ContactItemIcon>
                <ContactItemText>
                  <div className="label">Location</div>
                  <div className="value">{personalData.address}</div>
                </ContactItemText>
              </ContactItem>
            </ContactItems>

            <motion.div variants={itemVariants}>
              <SocialLinks>
                <SocialLink
                  href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink
                  href={`https://wa.me/${personalData.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                </SocialLink>
              </SocialLinks>
            </motion.div>
          </ContactLeft>

          <ContactRight
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <WhatsAppTitle>
              <FaWhatsapp /> Quick Connect
            </WhatsAppTitle>
            <QRCodeContainer>
              <QRCodeImage src={qrcode} alt="WhatsApp QR Code" />
            </QRCodeContainer>
            <WhatsAppText>
              Scan the QR code or click below to start a conversation instantly
            </WhatsAppText>
            <WhatsAppButton
              href={`https://wa.me/${personalData.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp <FaPaperPlane size={12} />
            </WhatsAppButton>
          </ContactRight>
        </ContactGrid>
      </div>
    </ContactContainer>
  );
};

export default Contact;
