
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Styles/About/OverviewSection.css';
import overviewImg from '../../assets/Abstract-Design-6.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const OverviewSection = ({ badge, title, description }) => {
  return (
    <motion.section
      className="overview-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
    >
      <Container>
        <Row className="align-items-start">
          <Col lg={5} className="overview-left">
            <LazyLoadImage
              src={overviewImg}
              className="overviewImg"
              alt="Abstract design"
            />
            {badge && <span className="overview-badge">{badge}</span>}
            <h1 className="overview-title">{title}</h1>
          </Col>
          <Col lg={7} className="overview-right">
            <p className="overview-description">{description}</p>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default OverviewSection;
