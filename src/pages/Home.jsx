import React from "react";
import { motion } from "framer-motion";

import Header from "../Components/Home/Header";
import MyNavbar from "../Components/Home/MyNavbar";
import HeroSection from "../Components/Home/HeroSection";
import OurBenefits from "../Components/Home/OurBenefits";
import OurTestimonials from "../Components/Home/OurTestimonials";
import FAQSection from "../Components/Home/FAQSection";
import NavigatePages from "../Components/Home/NavigatePages";
import Footer from "../Components/Home/Footer";

import {
  BsMortarboardFill,
  BsPuzzleFill,
  BsPeopleFill,
  BsShieldFillCheck,
  BsPersonLinesFill,
  BsChatDotsFill,
} from "react-icons/bs";

export default function Home() {
  const benefitsData = [
    {
      title: "Holistic Learning Approach",
      text: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development.",
      icon: <BsMortarboardFill size={30} />,
    },
    {
      title: "Play-Based Learning",
      text: "We believe in the power of play to foster creativity and imagination.",
      icon: <BsPuzzleFill size={30} />,
    },
    {
      title: "Experienced Educators",
      text: "Our passionate and qualified teachers create a supportive learning environment.",
      icon: <BsPeopleFill size={30} />,
    },
    {
      title: "Nurturing Environment",
      text: "We prioritize safety and provide a warm and caring atmosphere.",
      icon: <BsShieldFillCheck size={30} />,
    },
    {
      title: "Individualized Attention",
      text: "Small class sizes enable personalized attention for each child.",
      icon: <BsPersonLinesFill size={30} />,
    },
    {
      title: "Parent Involvement",
      text: "We foster a strong parent-school partnership.",
      icon: <BsChatDotsFill size={30} />,
    },
  ];

  // Animation variant
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
      <HeroSection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <OurBenefits
          sectionTitle="Bright Kids Future"
          sectionHeading="Our Benefits"
          sectionDescription="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
          items={benefitsData}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <OurTestimonials />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <FAQSection />
      </motion.div>

      <NavigatePages />
      <Footer />
    </>
  );
}
