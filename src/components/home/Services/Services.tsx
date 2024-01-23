import Image from "next/image";
import React from "react";
import Design from "../../../../public/iconoir_design-nib.svg";
import Arrow from "../../../../public/solar_arrow-right-outline.svg";
import FrontEnd from "../../../../public/fluent-mdl2_front-camera.svg";
import Backend from "../../../../public/cib_strapi.svg";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="circle-blur">
        <div className="circle"></div>
      </div>

      <div className="services__wrapper">
        <div className="services-header">
          <h1 className="services-header__main" data-aos="fade-up">
            Services I can help you with
          </h1>
        </div>
        <div className="services-container grid">
          <div className="services-card">
            <div>
              <Image className="services-icon" src={Design} alt=""></Image>
              <h1>Problem Solving</h1>
            </div>
          </div>
          <div
            className="services-card"
            // data-aos="fade-up"
            // data-aos-delay="200"
          >
            <div>
              <Image
                className="services-icon"
                // src="../../../assets/fluent-mdl2_front-camera.svg"
                src={FrontEnd}
                alt=""
              ></Image>
              <h1>Research</h1>
            </div>
          </div>
          <div
            className="services-card"
            // data-aos="fade-up"
            // data-aos-delay="400"
          >
            <div>
              <Image
                className="services-icon"
                // src="../../../assets/cib_strapi.svg"
                src={Backend}
                alt=""
              ></Image>
              <h1>Project Management.</h1>
            </div>
          </div>
          <div
            className="services-card"
            // data-aos="fade-up"
            // data-aos-delay="400"
          >
            <div>
              <Image
                className="services-icon"
                // src="../../../assets/cib_strapi.svg"
                src={Backend}
                alt=""
              ></Image>
              <h1>Programming</h1>
            </div>
          </div>
        </div>
      </div>
      <p className="service-p">
        With a keen eye for design aesthetics and a passion for coding
        excellence, I am dedicated to delivering solutions that not only meet
        but exceed your expectations. Let's collaborate to turn your ideas into
        reality.
      </p>
    </div>
  );
};

export default Services;
