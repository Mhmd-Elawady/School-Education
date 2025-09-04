import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion"; 
import '../../Styles/About/OurAchievements.css';


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurAchievements({ sectionTitle, sectionHeading, sectionDescription, items }) {
  return (
    <section className="achievements-section">
      <Container>
        <motion.div
          className="section-header text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {sectionTitle && <p className="section-title">{sectionTitle}</p>}
          {sectionHeading && <h1 className="text-center mb-3 heading55">{sectionHeading}</h1>}
          {sectionDescription && <p className="text-center text-muted mb-4 sectionDescription">{sectionDescription}</p>}
        </motion.div>

        <Row className="achievements-grid">
          {items.map((item, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="achievement-col">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Card className="achievement-card">
                  <Card.Body className="achievement-card-body text-center">
                    <div className="achievement-icon">{item.icon}</div>
                    <h3 className="achievement-card-title">{item.title}</h3>
                    <p className="achievement-card-text">{item.text}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}