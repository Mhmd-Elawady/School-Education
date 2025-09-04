import React from "react";
import StudentsLearn from "../Academics/StudentsLearn";
import '../../Styles/Academics/StudentsLearn.css'
import Event1 from "../../assets/imageevent1.png";
import Event2 from "../../assets/imageevent2.png";
import Event3 from "../../assets/imageevent3.png";
import Event4 from "../../assets/imageevent4.png";
import Event5 from "../../assets/imageevent5.png";
import Event6 from "../../assets/imageevent6.png";

export default function Events() {
  const eventsData = [
    {
      title: "Graduation Ceremony",
      text: "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
      img: Event1,
    },
    {
      title: "International Day",
      text: "A vibrant celebration of our diverse community, embracing cultures from around the world.",
      img: Event2,
    },
    {
      title: "Science Fair",
      text: "A platform for budding scientists to present their innovative projects and experiments.",
      img: Event3,
    },
       {
      title: "Art Exhibitions",
      text: "Showcasing our students' artistic talents through exhibitions and displays.",
      img: Event4,
    },
    {
      title: "Cultural Festivals",
      text: "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
      img: Event5,
    },
    {
      title: " Annual Sports Day",
      text: "A day filled with friendly competition, team spirit, and sportsmanship.",
      img: Event6,
    },
  ];

  return (
    <>
      <StudentsLearn
        sectionTitle="Our Features"
        sectionHeading="Events & Celebrations"
        sectionDescription="At Little Learners Academy, we celebrate milestones and create lasting memories. Each year, we host events that bring our school community together"
        data={eventsData}
      />
    </>
  );
}
