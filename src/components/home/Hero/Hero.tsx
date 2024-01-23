import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="circle">
        <div className="circle-blr"></div>
      </div>
      <div className="hero__wrapper">
        <Image src={require("../../../../public/net.svg")} alt={""}></Image>
        <div>
          <h1 className="intro-header">Hello, I am a</h1>
          <h1 className="intro-main">A Software Engineer</h1>
          <p>
            I am Timothy Zinwota, I amExperienced in software engineering,
            DevOps and database administration for a wide range of clients and
            projects. I am Self-motivated and adaptable, with the ability to
            work well; both independently and in teams.
          </p>
          <div className="intro-link">
            {" "}
            <a href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="move">
        <div className="container">
          <div className="indic"></div>
        </div>
      </div>
    </div>
  );
};
