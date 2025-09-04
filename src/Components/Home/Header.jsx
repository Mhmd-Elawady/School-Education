import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "../../Styles/Home/Header.css";
import img1 from "../../assets/Abstract-Design-1.png";
import img2 from "../../assets/Abstract-Design-2.png";
import img3 from "../../assets/Abstract-Design-3.png";
import img4 from "../../assets/Abstract-Design-4.png";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-images">
        <img src={img1} alt="design 1" className="header-img" loading="lazy" />
        <img src={img4} alt="design 4" className="header-img" loading="lazy" />
      </div>

      <div className="header-content">
        <p className="header-text">
          Admission is Open, Grab your seat now
          <FaArrowRightLong className="arrow-icon" />
        </p>
      </div>

      <div className="header-images">
        <img src={img3} alt="design 3" className="header-img" loading="lazy" />
        <img src={img2} alt="design 2" className="header-img" loading="lazy" />
      </div>
    </header>
  );
}
