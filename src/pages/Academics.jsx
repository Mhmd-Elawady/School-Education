import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Home/Header";
import MyNavbar from "../Components/Home/MyNavbar";
import AcademicsSection from "../Components/Academics/AcademicsSection";
import OurFeatures from "../Components/Academics/OurFeatures";
import StudentsLearn from "../Components/Academics/StudentsLearn";
import OurGallery from "../Components/Academics/OurGallery";
import Footer from "../Components/Home/Footer";

import Img1 from "../assets/Image-1S.png";
import Img2 from "../assets/Image-2S.png";
import Img3 from "../assets/Image-3S.png";
import Img4 from "../assets/Image-4S.png";
import Img5 from "../assets/Image-5S.png";
import Img6 from "../assets/Image-6S.png";

const subjects = [
  {
    title: "Language Arts",
    text: "Reading, writing, storytelling, and communication skills.",
    img: Img1,
  },
  {
    title: "Mathematics",
    text: "Number sense, basic operations, problem-solving, and logic.",
    img: Img2,
  },
  {
    title: "Science",
    text: "Exploring the natural world through hands-on experiments and investigations.",
    img: Img3,
  },
  {
    title: "Social Studies",
    text: "Cultivating an understanding of diverse cultures and communities.",
    img: Img4,
  },
  {
    title: "Arts and Crafts",
    text: "Encouraging creativity through various art forms and crafts.",
    img: Img5,
  },
  {
    title: "Physical Education",
    text: "Promoting physical fitness, coordination, and teamwork.",
    img: Img6,
  },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Academics() {
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
        <OurFeatures />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <StudentsLearn
          sectionTitle="Our Features"
          sectionHeading="What Students Learn"
          sectionDescription="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success..."
          data={subjects}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <OurGallery />
      </motion.div>

      <Footer />
    </>
  );
}
