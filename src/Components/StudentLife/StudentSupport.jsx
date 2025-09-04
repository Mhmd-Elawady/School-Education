import React from 'react'
import OurAchievements from "../About/OurAchievements";

import { FaRegLightbulb , FaBookOpen } from "react-icons/fa";  
import { BsPeopleFill } from "react-icons/bs";   

export default function StudentSupport() {
  const supportServices = [
    {
      title: "Counseling",
      text: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
      icon: <FaRegLightbulb size={30} />,  
    },
    {
      title: "Learning Support",
      text: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
      icon: <FaBookOpen size={30} />,
    },
    {
      title: "Parent-Teacher Collaboration",
      text: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
      icon: <BsPeopleFill size={30}  />,
    },
  ];

  return (
    <OurAchievements
      sectionTitle="Our Achievements"
      sectionHeading="Student Support"
      sectionDescription="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
      items={supportServices}
    />
  )
}
