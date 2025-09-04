import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../Styles/Home/HeroSection.css";
import kidsImage from "../../assets/Image-hero.png";
import circle from "../../assets/Abstract-Design-5.png";

export default function Hero() {
  return (
    <section className="hero">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="left-side">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="img-box">
                <img
                  src={kidsImage}
                  alt="Kids"
                  className="main-img"
                  loading="lazy"
                />
                <div className="circle-box">
                  <img
                    src={circle}
                    alt="Pattern"
                    className="circle-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </Col>

          <Col md={6} className="right-side">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="welcome">Welcome to Little Learners Academy</p>
              <h1 className="big-title">
                Where Young Minds Blossom <br />
                and <span className="orange">Dreams Take Flight.</span>
              </h1>
              <p className="info">
                Our kinder garden school provides a nurturing and stimulating
                environment, fostering a love for learning that lasts a
                lifetime. Join us as we embark on an exciting educational
                journey together!
              </p>

              <div className="stats">
                {[
                  { value: "+7000", label: "Students Passed Out" },
                  { value: "+37", label: "Awards & Recognitions" },
                  { value: "+15", label: "Experience Educators" },
                ].map((stat, index) => (
                  <motion.div
                    className="stat"
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  >
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
