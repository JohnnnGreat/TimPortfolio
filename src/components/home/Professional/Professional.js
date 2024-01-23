import React from "react";
import ExperienceImage from "../../../../public/experience-img.jpg";
import Image from "next/image";

const Professional = () => {
  const data = [
    {
      id: 1,
      company: "MacGroup Technologies, Las Vegas",
      year: "November, 2022- date",
      role: "Co-founder and CTO",
    },
    {
      id: 1,
      company: "Evovo Autos, Netherlands",
      year: "July, 2021 - Jan, 2022",
      role: "Data Scientist",
    },
    {
      id: 1,
      company: "Raaxo Synergy, Nigeria",
      year: "2020 Sept. - date",
      role: "Chief Technological Officer Limited",
    },
    {
      id: 1,
      company: "Brainstack Technologies, Nigeria",
      year: "2019 Oct. - 2020 Aug.",
      role: "Embedded Systems Engineer",
    },
  ];
  return (
    <div className="professional">
      <div className="circle-blur">
        <div className="circle"></div>
      </div>
      <div className="professional__wrapper">
        <div className="professional-header">
          <h1 className="professional-header__main" data-aos="fade-up">
            Professional Experience
          </h1>
          <p className="professional-header__desc" data-aos="fade-up">
            Bringing a wealth of hands-on expertise gained through years of
            actively navigating and contributing to the professional landscape.
          </p>
        </div>
        <div className="professional__content">
          <Image src={ExperienceImage} />
          <div className="job-content">
            {data.map((item) => (
              <div className="job-main">
                <div className="square"></div>
                <div className="job-details">
                  <h1>{item.company}</h1>
                  <div>
                    <p>{item.role}</p>
                    <p>({item.year})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
