import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookFlix</h2>
            <p className="fs-17">
              Welcome to BookFlix, the ultimate online book library where
              captivating stories and endless knowledge await. With an extensive
              collection spanning various genres, authors, and eras, BookFlix is
              your go-to destination for finding your next literary adventure.
            </p>
            <p className="fs-17">
            Our user-friendly search function makes it a breeze to explore our curated library and discover books that match your unique interests. Whether you're seeking an enthralling thriller, an enlightening non-fiction title, or a heartwarming romance, BookFlix has you covered. Immerse yourself in the transformative power of literature as you embark on a journey of imagination and personal growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
