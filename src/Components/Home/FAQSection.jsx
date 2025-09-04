import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Home/FAQSection.css";
import SectionHeader from "../Home/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection() {
  const [active, setActive] = useState(null);

  const handleClick = (i) => {
    setActive(active === i ? null : i);
  };

  const faq = [
    {
      q: "What are the school hours at Little Learners Academy?",
      a: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      q: "Is there a uniform policy for students?",
      a: "Yes, students are required to wear uniforms to maintain equality and discipline.",
    },
    {
      q: "What extracurricular activities are available for students?",
      a: "We offer sports, music, art, and language clubs to encourage holistic development.",
    },
    {
      q: "How do you handle food allergies and dietary restrictions?",
      a: "We take allergies seriously and work closely with parents to provide safe meal options.",
    },
    {
      q: "What is the teacher-to-student ratio at Little Learners Academy?",
      a: "Our average ratio is 1 teacher for every 12 students to ensure personalized attention.",
    },
    {
      q: "How do you handle discipline and behavior management?",
      a: "We use positive reinforcement and restorative practices to guide student behavior.",
    },
    {
      q: "How do I apply for admission to Little Learners Academy?",
      a: "You can apply online through our website or visit the school office for assistance.",
    },
  ];

  return (
    <section className="faq-section container py-5">
      <SectionHeader
        sectionTitle="Solutions For The Doubts"
        sectionHeading="Frequently Asked Questions"
        sectionDescription="Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child's education."
      />

      <div className="row g-4">
        {faq.map((item, i) => (
          <div className="col-md-6" key={i}>
            <motion.div
              className={`faq-item p-4 rounded ${active === i ? "active" : ""}`}
              onClick={() => handleClick(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="h5 mb-0">{item.q}</h3>
                <span className="icon ms-3">{active === i ? "−" : "+"}</span>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    className="faq-answer show"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="mt-3 mb-0">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
