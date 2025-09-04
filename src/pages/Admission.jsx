import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import Header from "../Components/Home/Header";
import MyNavbar from "../Components/Home/MyNavbar";
import AcademicsSection from "../Components/Admission/AdmissionSection";
import AdmissionProcess from "../Components/Admission/AdmissionProcess";
import Structure from "../Components/Admission/Structure";
import Footer from "../Components/Home/Footer";

export default function Admission() {
  const AdmissionProcessData = [
    {
      title: "Holistic Learning Approach",
      text: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development.",
      Number: "01",
    },
    {
      title: "Play-Based Learning",
      text: "We believe in the power of play to foster creativity and imagination.",
      Number: "02",
    },
    {
      title: "Experienced Educators",
      text: "Our passionate and qualified teachers create a supportive learning environment.",
      Number: "03",
    },
    {
      title: "Nurturing Environment",
      text: "We prioritize safety and provide a warm and caring atmosphere.",
      Number: "04",
    },
    {
      title: "Individualized Attention",
      text: "Small class sizes enable personalized attention for each child.",
      Number: "05",
    },
    {
      title: "Parent Involvement",
      text: "We foster a strong parent-school partnership.",
      Number: "06",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Header />
      <MyNavbar />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <AcademicsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <AdmissionProcess
          sectionTitle="Process"
          sectionHeading="Admission Process"
          sectionDescription="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
          items={AdmissionProcessData}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <Structure
          sectionTitle="Process"
          sectionHeading="Admission Process"
          sectionDescription="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
        />
      </motion.div>

      <Footer />
    </>
  );
}
