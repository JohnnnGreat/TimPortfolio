"use client";
import React, { useEffect, useRef, useState } from "react";
import { IonSpinner } from "@ionic/react";
import Image from "next/image";
import About from "../../../../public/about-img.jpg";
import clsx from "clsx";

const Skills = () => {
  const rateRef = useRef(null);
  const [inView, setIsInView] = useState(false);

  const stylesTwo = clsx({
    isInView: inView,
  });
  const stylesThree = clsx({
    isInViewTwo: inView,
  });
  const stylesFour = clsx({
    isInViewThree: inView,
  });

  const styles = clsx({
    isInViewFour: inView,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          console.log(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (rateRef.current) {
      observer.observe(rateRef.current);
    }

    return () => {
      if (rateRef.current) {
        observer.unobserve(rateRef.current);
      }
    };
  }, []);
  return (
    <div className="skills">
      <div className="skills__wrapper">
        <div className="professional__wrapper">
          <div className="professional-header">
            <h1 className="professional-header__main" data-aos="fade-up">
              My Skills
            </h1>
            <p className="professional-header__desc" data-aos="fade-up">
              Embarking on a journey where proficiency meets passion, "My
              Skills" encapsulates a diverse arsenal cultivated through hands-on
              experience and continuous learning.
            </p>
          </div>

          <div className="skills_content">
            <div className="skills-con">
              <div className="skills-con-main">
                <div ref={rateRef} className="skills-item">
                  <div className="skills-item-con">
                    <div className="bar-container">
                      <div className={styles}></div>
                    </div>
                    <div className="skill-text flex justify-between text-white">
                      <h1 className="skill-tag">Backend Development</h1>
                      <h1>80%</h1>
                    </div>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="skills-item-con">
                    <div className="bar-container">
                      <div className={stylesTwo}></div>
                    </div>
                    <div className="skill-text flex justify-between text-white">
                      <h1 className="skill-tag">Version Control</h1>
                      <h1>80%</h1>
                    </div>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="skills-item-con">
                    <div className="bar-container">
                      <div className={stylesThree}></div>
                    </div>
                    <h1 className="skill-tag">Database Management</h1>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="skills-item-con">
                    <div className="bar-container">
                      <div className={stylesFour}></div>
                    </div>
                    <h1 className="skill-tag">Frontend Development</h1>
                  </div>
                </div>
              </div>
            </div>
            <Image src={About} alt={""}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
