import React from "react";
import PropTypes from "prop-types";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "../../Styles/Home/OurTestimonials.css";
import SectionHeader from "../Home/SectionHeader";

import img1 from "../../assets/Profile-Container.png";
import img2 from "../../assets/Profile-Container-1.png";
import img3 from "../../assets/Profile-Container-2.png";

const testimonialsData = [
  {
    name: "Jennifer B",
    text: " Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    image: img1,
  },
  {
    name: "David K",
    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    image: img2,
  },
  {
    name: "Emily L",
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    image: img3,
  },
];

export default function OurTestimonials() {
  return (
    <section className="container py-5 testimonialsSection">
      <SectionHeader
        sectionTitle="Their Happy Words"
        sectionHeading="Our Testimonials"
        sectionDescription="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <div className="row g-4">
        {testimonialsData.map((testimonial, index) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card h-100 testimonialCard text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  loading="lazy"
                />

                <h5 className="card-title mt-3">{testimonial.name}</h5>

                <div className="card-body d-flex flex-column">
                  <div className="mb-3 text-warning">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <BsStarFill key={num} className="me-1" />
                    ))}
                  </div>
                  <p className="card-text flex-grow-1">{testimonial.text}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

OurTestimonials.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};
