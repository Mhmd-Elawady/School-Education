import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../Styles/Home/NavigatePages.css";
import SectionHeader from "../Home/SectionHeader";

export default function NavigatePages() {
  const pages = [
    {
      title: "About Us",
      text: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    },
    {
      title: "Academics",
      text: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    },
    {
      title: "Student Life",
      text: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    },
    {
      title: "Admissions",
      text: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.  ",
    },
  ];

  return (
    <section className="navigate-section py-5">
      <Container>
        <SectionHeader
          sectionTitle="Explore More"
          sectionHeading="Navigate through our Pages"
          sectionDescription="Your gateway to discovering a wealth of valuable information about
            our kindergarten school. Feel free to explore and learn more about
            the enriching experiences that await your child."
        />

        <Row>
          {pages.map((page, index) => (
            <Col md={6} className="mb-4 d-flex" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="custom-card h-100 text-center">
                  <Card.Body className="d-flex flex-column">
                    <h4 className="card-title">{page.title}</h4>

                    <div className="separator">
                      <span className="circle"></span>
                      <span className="line"></span>
                      <span className="circle"></span>
                    </div>

                    <Card.Text className="flex-grow-1">{page.text}</Card.Text>

                    <Button variant="light" className="learn-btn mt-auto">
                      Learn More →
                    </Button>
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
