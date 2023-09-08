/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Count from "../components/Count/Count";
import MissionVission from "../components/Mission/Missionvission";
import Herro from "../components/Herro/Herro";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs/ContactUs";
import Team from "../components/Team/Team";
import Roadmap from "../components/Roadmap/Roadmap";
import Roar from "../components/Roar/Roar";
import Header from "../components/Navbar/Header";
import "./about.css"
const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const currentScrollPosition = window.scrollY;
      const scrollPositionRelativeToHeight =
        (currentScrollPosition / windowHeight) * 100;
      setScrollPosition(scrollPositionRelativeToHeight);

      if (parseInt(windowHeight / 2) == currentScrollPosition) {
        window.location.reload();
      }

      // console.log(
      //   windowHeight,
      //   currentScrollPosition,
      //   scrollPosition,
      //   parseInt(windowHeight / 2),
      //   scrollPosition
      // );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="about relative bg-[#0B0B0B] box-content">
      <Navbar/>
      <Header />

      {/* <Herro /> */}
      <Count />
      <MissionVission />
      <Team />
      <Roar />
      <Roadmap />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default About;
