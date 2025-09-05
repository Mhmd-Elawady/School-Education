import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion"; 
import "../../Styles/Home/OurBenefits.css";

const OurBenefits = ({ sectionTitle, sectionHeading, sectionDescription, items }) => {
  return (
    <section className="benefits-section">
      <Container>
        <div className="section-header text-center">
          {sectionTitle && <p className="section-title">{sectionTitle}</p>}
          {sectionHeading && <h1 className="text-center mb-3 heading55">{sectionHeading}</h1>}
          {sectionDescription && <p className="text-center text-muted mb-4 sectionDescription">{sectionDescription}</p>}
        </div>

        <Row className="benefits-grid">
          {items.map((item, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="benefit-col d-flex">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="benefit-card">
                  <Card.Body className="benefit-card-body">
                    <div className="benefit-icon">{item.icon}</div>
                    <h3 className="benefit-title">{item.title}</h3>
                    <p className="benefit-text">{item.text}</p>
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

export default OurBenefits;
