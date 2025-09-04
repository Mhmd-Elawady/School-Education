import React from "react";
import "../../Styles/Home/SectionHeader.css";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SectionHeader = ({
  sectionTitle,
  sectionHeading,
  sectionDescription,
}) => {
  return (
    <motion.div
      className="section-header text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
    >
      {sectionTitle && <p className="section-title">{sectionTitle}</p>}
      {sectionHeading && (
        <h1 className="text-center mb-3 heading55">{sectionHeading}</h1>
      )}
      {sectionDescription && (
        <p className="text-center text-muted mb-4 section-description">
          {sectionDescription}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
