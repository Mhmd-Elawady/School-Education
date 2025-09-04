import React from "react";
import { motion } from "framer-motion";
import "../../Styles/About/MissionVision.css";
import IconMission from "../../assets/Icon.png";
import IconVision from "../../assets/Icon_1.png";
import SectionHeader from "../Home/SectionHeader";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MissionVision = () => {
  return (
    <section className="MissionVision-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <SectionHeader
          sectionTitle="Mission & Visions"
          sectionHeading="Our Mission & Visions"
          sectionDescription="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
        />
      </motion.div>

      <div className="MissionVision">
        <motion.div
          className="box-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="box-header">
            <h2>Mission</h2>
            <img src={IconMission} className="IconMission" alt="Mission Icon" />
          </div>
          <p className="Missiondec">
            At Little Learners Academy, our mission is to inspire a passion for
            learning and empower young minds to become confident, compassionate,
            and creative individuals. We strive to create a safe and inclusive
            space where children thrive academically, socially, and emotionally,
            setting the stage for a successful educational journey.
          </p>
        </motion.div>

        <motion.div
          className="box-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="box-header">
            <h2>Vision</h2>
            <img src={IconVision} className="IconVision" alt="Vision Icon" />
          </div>
          <p className="Missiondec">
            Our vision is to be a beacon of educational excellence, where
            children are encouraged to explore, discover, and express their
            unique talents. We aim to foster a generation of lifelong learners
            equipped with critical thinking, empathy, and a deep appreciation
            for diversity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
