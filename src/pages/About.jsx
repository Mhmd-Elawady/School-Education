import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Home/Header";
import MyNavbar from "../Components/Home/MyNavbar";
import OverviewSection from "../Components/About/OverviewSection";
import MissionVision from "../Components/About/MissionVision";
import OurAchievements from "../Components/About/OurAchievements";
import Timeline from "../Components/About/Timeline";
import TeamMembers from "../Components/About/TeamMembers";
import Footer from "../Components/Home/Footer";

import Icon1 from "../assets/Icon-2.png";
import Icon2 from "../assets/Icon-3.png";
import Icon3 from "../assets/Icon-4.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const awards = [
    {
      title: "Outstanding Early Childhood Education Award",
      text: "Presented by the National Association for the Education of Young Children (NAEYC)...",
      icon: (
        <img src={Icon1} alt="Learning" width={30} height={30} loading="lazy" />
      ),
    },
    {
      title: "Innovative STEAM Education Award",
      text: "Awarded by the Education Excellence Association for our pioneering efforts...",
      icon: (
        <img src={Icon2} alt="Learning" width={30} height={30} loading="lazy" />
      ),
    },
    {
      title: "Environmental Stewardship Award",
      text: "Received from the Green Earth Society for our dedication to environmental education...",
      icon: (
        <img src={Icon3} alt="Learning" width={30} height={30} loading="lazy" />
      ),
    },
  ];

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
        <OverviewSection
          badge="Overview"
          title="Welcome to Little Learners Academy"
          description="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <MissionVision />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <OurAchievements
          sectionTitle="Our Achievements"
          sectionHeading="Our Awards and Recognitions"
          sectionDescription="Little Learners Academy takes pride in our commitment to delivering high-quality education..."
          items={awards}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <Timeline />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        <TeamMembers />
      </motion.div>

      <Footer />
    </>
  );
}
