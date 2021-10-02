import React from "react";

import { FaReact, FaGitSquare } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiBootstrap,
  SiRedux,
  SiJavascript,
  SiPostman,
  SiStyledComponents,
  SiHeroku,
} from "react-icons/si";

import {
  ResumeWrapper,
  LanguageWrapper,
  EducationWrapper,
  ExperienceWrapper,
} from "../App-style";
import Bar from "./Bar";

const languages = [
  {
    icon: <FaReact size={55} />,
    name: "React",
  },
  {
    icon: <SiRedux size={55} />,
    name: "Redux",
  },
  {
    icon: <SiJavascript size={50} />,
    name: "javaScript",
  },
  {
    icon: <IoLogoCss3 size={70} />,
    name: "CSS3",
  },
  {
    icon: <AiFillHtml5 size={70} />,
    name: "HTML",
  },
  {
    icon: <SiStyledComponents size={60} />,
    name: "Styled-Component",
  },
];

const tools = [
  {
    icon: <FaGitSquare size={70} />,
    name: "git",
  },
  {
    icon: <SiPostman size={50} />,
    name: "postman",
  },

  {
    icon: <SiBootstrap size={50} />,
    name: "Bootstrap",
  },
  {
    icon: <SiHeroku size={50} />,
    name: "Heroku",
  },
];
const Resume = () => {
  return (
    <ResumeWrapper>
      <EducationWrapper>
        <h4 className="resume-card__heading">Education</h4>
        <div className="resume-card__body">
          <h5 className="resume-card__title">Computer Science Engineering</h5>
          <p className="resume-card__name">
            Amritsar College Of Engineering and Technology(2016-2020)
          </p>
          <p className="resume-card__details">
            I have completed my B.Tech in Computer Science Engineering from
            Amritsar College Of Engineering And Technology
          </p>
        </div>
      </EducationWrapper>
      <ExperienceWrapper>
        <h4 className="resume-card__heading">Experience</h4>
        <div className="resume-card__body">
          <h5 className="resume-card__title">Trainee</h5>
          <p className="resume-card__name">Web Development Indusrial training at Excellence Technology,Mohali</p>
          <p className="resume-card__details">
            
           
          </p>
        </div>
      </ExperienceWrapper>

      <LanguageWrapper>
        <div className="resume-languages">
          <h5 className="resume-language__heading">Language</h5>

          <div className="resume-language__body mt-3">
            {languages.map((language, i) => (
              <Bar {...language} key={i} />
            ))}
          </div>
        </div>
        <div className="resume-languages">
          <h5 className="resume-language__heading">Tools and Libraries</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool, i) => (
              <Bar {...tool} key={i} />
            ))}
          </div>
        </div>
      </LanguageWrapper>
    </ResumeWrapper>
  );
};

export default Resume;
