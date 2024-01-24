import React from "react";

const About = () => {
  const interest = [
    "Machine Learning",
    "Artificial Intelligence",
    "Computer Vision",
    "Internet of Things",
    "Embedded Systems",
    "Distributed Systems",
    "IT Security",
    "Software Engineering",
    "Real-time Computing Systems",
  ];
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about-header">
          <h1 className="about-header__main" data-aos="fade-up">
            About Me
          </h1>
        </div>

        <div className="about-details">
          <div className="about-content">
            <p>
              Hello, I'm Timothy Zinwota, and I'm passionate about exploring the
              realms of technology and innovation. As a dedicated enthusiast in
              the field of computer science, my interests span a wide spectrum
              of cutting-edge domains.
            </p>
          </div>

          <div className="interest">
            <h1>Areas of Interest</h1>

            <div className="divider"></div>

            <ul>
              {interest.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
