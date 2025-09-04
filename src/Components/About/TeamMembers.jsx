import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/About/TeamMembers.css";
import Img1 from "../../assets/Image-1.png";
import Img2 from "../../assets/Image-2.png";
import Img3 from "../../assets/Image-3.png";
import Img4 from "../../assets/Image-4.png";
import Img5 from "../../assets/Image-5.png";
import Img6 from "../../assets/Image-6.png";
import icon111 from "../../assets/Button.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SectionHeader = lazy(() => import("../Home/SectionHeader"));


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const TeamMembers = () => {
  const teamMembers = [
    {
      image: Img1,
      name: "Ms. Sarah Anderson",
      qualification: "Qualification: Bachelor's Degree in Early Childhood Education",
      description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
      image: Img2,
      name: "Mr. David Roberts",
      qualification: "Qualification: Master's Degree in Elementary Education",
      description: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    },
    {
      image: Img3,
      name: "Ms. Emily Hernandez",
      qualification: "Qualification: Diploma in Child Psychology",
      description: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    },
    {
      image: Img4,
      name: "Mr. Michael Turner",
      qualification: "Qualification: Bachelor's Degree in Physical Education",
      description: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    },
    {
      image: Img5,
      name: "Ms. Jessica Lee",
      qualification: "Qualification: Master's Degree in Special Education",
      description: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    },
    {
      image: Img6,
      name: "Mr. William Parker",
      qualification: "Qualification: Bachelor's Degree in Fine Arts",
      description: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    },
  ];

  return (
    <div className="container my-5">
      <Suspense fallback={<p>Loading...</p>}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionHeader
            sectionTitle="Our Teachers With Expertise"
            sectionHeading="Our Team Members"
            sectionDescription=" At Mike Learman Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and experienced educators who possess a deep understanding of child development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
          />
        </motion.div>
      </Suspense>

      <div className="card-TeamMembers-big">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.2 * (index + 1) }} 
          >
            <div className="card-TeamMembers">
              <div className="d-flex align-items-center card-TeamMembers-all">
                <LazyLoadImage
                  src={member.image}
                  alt={member.name}
                  className="member-image"
              
                />
                <div className="ms-3 d-flex justify-content-between w-100 align-items-center">
                  <h3 className="mb-1 fw-bold member-name">{member.name}</h3>
                  <LazyLoadImage
                    src={icon111}
                    alt="icon"
                    className="icon-TeamMembers"
                    effect="blur"
                  />
                </div>
              </div>

              <div className="card-body-TeamMembers">
                <p className="card-subtitle-TeamMembers mb-2 fw-bold">{member.qualification}</p>
                <p className="card-text-TeamMembers">{member.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;