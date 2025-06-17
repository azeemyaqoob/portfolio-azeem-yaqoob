import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { personalData } from "../data";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactContainer = styled.section``;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

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

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FormInput = styled.input`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
              {/* <SocialLink
                href={personalData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <FaTwitter />
              </SocialLink> */}
            </SocialLinks>
          </ContactInfo>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Subject</FormLabel>
              <FormInput
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;