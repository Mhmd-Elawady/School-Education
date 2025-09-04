import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import pattern from "../../assets/Abstract-Design-7.png";
import '../../Styles/About/Timeline.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SectionHeader = lazy(() => import("../Home/SectionHeader"));


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Timeline = () => {
  const timelineData = [
    {
      year: "2023",
      title: "Resilience and Future Horizons",
      description: "Adopting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
    },
    {
      year: "2017",
      title: "Innovation and Technology",
      description: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
    },
    {
      year: "2012",
      title: "Expansion and Recognition",
      description: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
    },
    {
      year: "2005",
      title: "Inception and Growth",
      description: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
    }
  ];

  return (
    <section className='timeline-section py-5'>
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionHeader
              sectionTitle="Our Progressive Journey"
              sectionHeading="Our History"
              sectionDescription=" Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment."
            />
          </motion.div>
        </Suspense>

        <div className="timeline-container position-relative">
          <div className="timeline-vertical-line"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-dot2"></div>
              <div className="year-box">
                <LazyLoadImage
                  src={pattern}
                  alt="Pattern"
                  className="year-bg"
                  effect="blur"
                />
                <h3 className="year-text">{item.year}</h3>
              </div>
              <div className="description-box">
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-text">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;