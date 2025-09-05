import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../Styles/Academics/StudentsLearn.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StudentsLearn({
  sectionTitle,
  sectionHeading,
  sectionDescription,
  data,
}) {
  return (
    <>
      {sectionTitle && <p className="section-title">{sectionTitle}</p>}
      {sectionHeading && <h1 className="text-center mb-3">{sectionHeading}</h1>}
      {sectionDescription && (
        <p className="text-center text-muted sectionDescription">
          {sectionDescription}
        </p>
      )}

      <section className="academics-section py-5">
        <Container>
          <motion.div
            className="row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {data.map((item, index) => (
              <Col key={index} md={6} lg={4} className="mb-4 d-flex">
                <motion.div variants={cardVariants}>
                  <Card className="h-100 subject-card">
                    <div className="rectangular"></div>
                    <Card.Img
                      variant="top"
                      src={item.img}
                      alt={item.title}
                      className="card-img-top-custom"
                      loading="lazy"
                    />
                    <Card.Body className="text-center">
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="text-muted">{item.text}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
