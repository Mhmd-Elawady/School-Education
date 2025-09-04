import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../../Styles/Home/Footer.css";
import logo from "../../assets/shape-14.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-main-content">
          <Col lg={3} md={6} className="footer-info-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="footer-brand">
                <img
                  src={logo}
                  alt="Little Learners Logo"
                  className="footer-logo-img"
                  loading="lazy"
                />
                <h3 className="footer-logo">Little Learners</h3>
              </div>
              <p className="footer-text">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:hello@littlelearners.com">
                    hello@littlelearners.com
                  </a>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <a href="tel:+9191813232309">+91 91813 23 2309</a>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Somewhere in the World</span>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={2} md={3} sm={6} className="footer-links-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <h6 className="footer-links-title">Navigation</h6>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="/">Home</a>
                </li>
                <li className="footer-link-item">
                  <a href="/About">About Us</a>
                </li>
                <li className="footer-link-item">
                  <a href="/Academics">Academics</a>
                </li>
                <li className="footer-link-item">
                  <a href="/admissions">Admission</a>
                </li>
                <li className="footer-link-item">
                  <a href="/student-life">Student Life</a>
                </li>
                <li className="footer-link-item">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </motion.div>
          </Col>

          <Col lg={2} md={3} sm={6} className="footer-links-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h6 className="footer-links-title">About Us</h6>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="/OverviewSection">Overview Section</a>
                </li>
                <li className="footer-link-item">
                  <a href="/MissionVision">Mission Vision</a>
                </li>
                <li className="footer-link-item">
                  <a href="/OurAchievements">Our Achievements</a>
                </li>
                <li className="footer-link-item">
                  <a href="/Timeline">Our History</a>
                </li>
                <li className="footer-link-item">
                  <a href="/TeamMembers">Teachers</a>
                </li>
              </ul>
            </motion.div>
          </Col>

          <Col lg={2} md={3} sm={6} className="footer-links-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <h6 className="footer-links-title">Academics</h6>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="/AcademicsSection">Overview Section</a>
                </li>
                <li className="footer-link-item">
                  <a href="/academics/OurFeatures">Our Features</a>
                </li>
                <li className="footer-link-item">
                  <a href="/StudentsLearn">Students Learn</a>
                </li>
                <li className="footer-link-item">
                  <a href="/Academics/OurGallery">Our Achievements</a>
                </li>
              </ul>
            </motion.div>
          </Col>

          <Col lg={2} md={3} sm={6} className="footer-links-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h6 className="footer-links-title">Contact</h6>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="/contact">Information</a>
                </li>
                <li className="footer-link-item">
                  <a href="/ContactForm">Contact Form</a>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="footer-bottom-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <div className="footer-policies">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookie Policy</a>
          </div>

          <div className="footer-social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="footer-copyright"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          transition={{ delay: 0.6 }}
        >
          <p>
            Copyright © {new Date().getFullYear()} Little Learners Academy. All
            rights reserved.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
