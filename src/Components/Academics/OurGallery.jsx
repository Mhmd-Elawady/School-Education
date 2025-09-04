import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import "../../Styles/Academics/OurGallery.css";
import Img_class_1 from "../../assets/Image-class-1.png";
import Img_class_2 from "../../assets/Image-class-2.png";
import Img_class_3 from "../../assets/Image-class-3.png";
import Img_class_4 from "../../assets/Image-class-4.png";
import Img_Library_1 from "../../assets/Image-Library-1.png";
import Img_Library_2 from "../../assets/Image-Library-2.png";
import Img_Library_3 from "../../assets/Image-Library-3.png";
import Img_Library_4 from "../../assets/Image-Library-4.png";
import Img_Science_Lab_1 from "../../assets/Image-Science-Lab-1.png";
import Img_Science_Lab_2 from "../../assets/Image-Science-Lab-2.png";
import Img_Science_Lab_3 from "../../assets/Image-Science-Lab-3.png";
import Img_Science_Lab_4 from "../../assets/Image-Science-Lab-4.png";
import Img_Computer_Lab_1 from "../../assets/Image-Computer-Lab-1.png";
import Img_Computer_Lab_2 from "../../assets/Image-Computer-Lab-2.png";
import Img_Computer_Lab_3 from "../../assets/Image-Computer-Lab-3.png";
import Img_Computer_Lab_4 from "../../assets/Image-Computer-Lab-4.png";
import Img_Garden_1 from "../../assets/Image-Garden-1.png";
import Img_Garden_2 from "../../assets/Image-Garden-2.png";
import Img_Garden_3 from "../../assets/Image-Garden-3.png";
import Img_Garden_4 from "../../assets/Image-Garden-4.png";
import SectionHeader from "../Home/SectionHeader";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurGallery() {
  const [activeTab, setActiveTab] = useState("Classrooms");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 480);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = {
    Classrooms: {
      images: [Img_class_1, Img_class_2, Img_class_3, Img_class_4],
      description:
        "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    },
    Library: {
      images: [Img_Library_1, Img_Library_2, Img_Library_3, Img_Library_4],
      description:
        "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    },
    "Science Lab": {
      images: [Img_Science_Lab_1, Img_Science_Lab_2, Img_Science_Lab_3, Img_Science_Lab_4],
      description:
        "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    },
    "Computer Lab": {
      images: [Img_Computer_Lab_1, Img_Computer_Lab_2, Img_Computer_Lab_3, Img_Computer_Lab_4],
      description:
        "Our computer lab is equipped with the latest technology to enhance students' digital skills and learning experience.",
    },
    "Garden and Nature Area": {
      images: [Img_Garden_1, Img_Garden_2, Img_Garden_3, Img_Garden_4],
      description:
        "Our garden and nature area provide a serene environment for outdoor learning and exploration.",
    },
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sections[activeTab].images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === sections[activeTab].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#fff4f0" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionHeader
            sectionTitle="Our Achievements"
            sectionHeading="Our Awards and Recognitions"
            sectionDescription=" Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
          />
        </motion.div>

        <motion.div
          className="nav gallery-nav-pills justify-content-center p-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {Object.keys(sections).map((tab) => (
            <li className="gallery-nav-item" key={tab}>
              <button
                className={`gallery-nav-link ${activeTab === tab ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentImageIndex(0);
                }}
              >
                {tab}
              </button>
            </li>
          ))}
        </motion.div>

        <div className="p-5 mb-5 gallery-all">
          {activeTab === "All" ? (
            Object.keys(sections).map((key, idx) => (
              <motion.div
                className="gallery-card mx-auto mb-5"
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: 0.2 * (idx + 1) }}
              >
                <div className="gallery-card-body mb-5">
                  <div className="gallery-images d-flex justify-content-center mb-3">
                    {sections[key].images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${key} ${index + 1}`}
                        className="gallery-img m-2"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <h2 className="mb-2 gallery-title">{key}</h2>
                  <p className="gallery-desc">{sections[key].description}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="gallery-card mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: 0.4 }}
            >
              <div className="gallery-card-body">
                <div className="gallery-images d-flex justify-content-center">
                  {isMobileView ? (
                    <>
                      <img
                        src={sections[activeTab].images[currentImageIndex]}
                        alt={`${activeTab} ${currentImageIndex + 1}`}
                        className="gallery-img m-2 active"
                        loading="lazy"
                      />
                      <button className="gallery-btn prev-btn" onClick={handlePrevImage}>
                        &lt;
                      </button>
                      <button className="gallery-btn next-btn" onClick={handleNextImage}>
                        &gt;
                      </button>
                    </>
                  ) : (
                    sections[activeTab].images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${activeTab} ${index + 1}`}
                        className="gallery-img m-2"
                        loading="lazy"
                      />
                    ))
                  )}
                </div>
                <h2 className="mb-2 gallery-title">{activeTab}</h2>
                <p className="gallery-desc">{sections[activeTab].description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}