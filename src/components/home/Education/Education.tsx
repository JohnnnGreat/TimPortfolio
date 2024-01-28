import React from "react";
import ImageEd from "../../../../public/experience-img.jpg";
import Image from "next/image";

const Education = () => {
  const education = [
    "Best Graduating Student (Department of Computer Science)",
    "Best student in software engineering.",
    "Best student in Algorithms and Complexity analysis.",
    "Best student in Legal and ethical issues in computing.",
    "Best student in distributed computing.",
    "Best student in net-centric computing.",
    "Best student tutor.",
    "Received School Scholarship for academic excellence.",
    "Member of the Nigerian Association of Computer Science Students.",
    "Elected as President of the Nigerian Association of Computer Science Students, Federal University of Lafia in 2020.",
    "Relevant Coursework Completed: Greenhouse Climate Control System with Disease and Defect Detection in Tomato plant. (BSc. Dissertation)",
  ];
  return (
    <div id="education" className="education">
      <div className="circle-blurx">
        <div className="circlex"></div>
      </div>
      <div className="education__wrapper">
        <div className="professional-header">
          <h1 className="professional-header__main" data-aos="fade-up">
            My Education
          </h1>
          <p className="professional-header__desc" data-aos="fade-up">
            Bringing a wealth of hands-on expertise gained through years of
            actively navigating and contributing to the professional landscape.
          </p>
        </div>
        <div className="education__details">
          <div data-aos="fade-right" className="education-content">
            {" "}
            <h1>BSc. Computer Science Nov. 2016 - Nov. 2021</h1>
            <p>
              First Class Honours (Federal University of Lafia, Nasarawa State
              Nigeria)
            </p>
            <div>
              <ul>
                {education.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <Image data-aos="fade-left" src={ImageEd} alt={""}></Image>
        </div>
      </div>
    </div>
  );
};

export default Education;
