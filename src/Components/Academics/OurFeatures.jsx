import React, { Suspense, lazy } from 'react';
import { FaBookOpen, FaStar } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TbPuzzleFilled } from "react-icons/tb";
import { IoMdBrush, IoMdSunny } from "react-icons/io";


const OurBenefits = lazy(() => import("../Home/OurBenefits"));

export default function OurFeatures() {
  const featuresData = [
    {
      title: "Thematic Learning",
      text: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
      icon: <FaBookOpen size={30} />,
    },
    {
      title: "STEAM Education",
      text: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
      icon: <GiNetworkBars size={30} />,
    },
    {
      title: "Language Immersion",
      text: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
      icon: <TbPuzzleFilled size={30} />,
    },
    {
      title: "Play-Based Learning",
      text: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
      icon: <FaStar size={30} />,
    },
    {
      title: "Art and Creativity",
      text: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
      icon: <IoMdBrush size={30} />,
    },
    {
      title: "Outdoor Education",
      text: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
      icon: <IoMdSunny size={30} />,
    },
  ];

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <OurBenefits
          sectionTitle="Our Features"
          sectionHeading="Our Special Features"
          sectionDescription="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
          items={featuresData}
        />
      </Suspense>
    </>
  );
}
