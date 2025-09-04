import React from 'react'
import OurBenefits from "../Home/OurBenefits";

import { IoIosMusicalNotes, IoMdBrush } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import { BsStars, BsPuzzleFill } from "react-icons/bs";
import { CiBeaker1 } from "react-icons/ci";

export default function ExtracurricularActivities(){
  
  const activitiesData = [
    {
      title: "Music and Performing Arts",
      text: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
      icon: <IoIosMusicalNotes size={30} />,
    },
    {
      title: "Sports and Athletics",
      text: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
      icon: <SlEnergy size={30} />,
    },
    {
      title: "Cooking and Culinary Arts",
      text: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
      icon: <BsStars size={30} />,
    },
    {
      title: "Science Club",
      text: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
      icon: <CiBeaker1 size={30} />,
    },
    {
      title: "Art and Creativity",
      text: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
      icon: <IoMdBrush size={30} />,
    },
    {
      title: "Language Clubs",
      text: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
      icon: <BsPuzzleFill size={30} />,
    },
  ];

  return (
    <>
      <OurBenefits
        sectionTitle="Beyond the Classroom"
        sectionHeading="Extracurricular Activities"
        sectionDescription="At Little Learners Academy, we focus on building well-rounded students. Our extracurricular activities support learning and give children the chance to explore their interests and passions"
        items={activitiesData}
      />
    </>
  )
}