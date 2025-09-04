import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion"; 
import "../../Styles/Admission/AdmissionProcess.css";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const AdmissionProcess = ({ sectionTitle, sectionHeading, sectionDescription, items }) => {
  return (
    <section className="admission-process-section">
      <Container>
        <motion.div
          className="admission-process-header text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {sectionTitle && <p className="admission-process-title">{sectionTitle}</p>}
          {sectionHeading && <h1 className="text-center mb-3 admission-process-heading">{sectionHeading}</h1>}
          {sectionDescription && <p className="text-center text-muted mb-4 admission-process-description">{sectionDescription}</p>}
        </motion.div>

        <Row className="admission-process-grid">
          {items.map((item, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="admission-process-col">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: 0.2 * (index + 1) }} 
              >
                <Card className="admission-process-card">
                  <Card.Body className="admission-process-card-body">
                    <div className="admission-process-Number">{item.Number}</div>
                    <div className="shape-admission"></div>
                    <div className="admission-dot"></div>
                    <h3 className="admission-process-title-text">{item.title}</h3>
                    <p className="admission-process-text">{item.text}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AdmissionProcess;