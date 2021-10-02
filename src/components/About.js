import React from "react";
import styled from "styled-components";
import cricket from "../assets/cricket.png";
import music from "../assets/music.png";
import travel from "../assets/travel.png";
const Aboutwrapper = styled.div`
  display: grid;
  grid-template: 1fr/1fr;
  grid-gap: 1em;
`;
const About = () => {
  return (
    <Aboutwrapper className="about">
      <div>
        <h6 className="about__intro">
          I describe my self as someone who is <span>persistent</span>,a{" "}
          <span>quick learner</span> and loves <span>problem solving</span>.
        </h6>
      </div>
      <div>
        <h6 className="about__certification">Certification</h6>
        <h6 className="about__detail">Front-End Development</h6>
      </div>
      <div>
        <h6 className="about__language">Language Known</h6>
        <div className="language">
          <div>
            <h6 className="about__spoken">English</h6>
          </div>
          <div>
            <h6 className="about__spoken">Hindi</h6>
          </div>
        </div>
      </div>
      <div>
        <h6 className="about__hobbie">Hobbies</h6>
        <div>
          <h6 className="cricket">
            <img src={cricket} alt="cricket" width="55px" height="50px" />
            cricket
          </h6>
        </div>
        <div>
          <h6 className="music">
            <img src={music} alt="music" width="55px" height="45px" />
            Music
          </h6>
        </div>
        <div>
          <h6 className="travel">
            <img src={travel} alt="travel" width="55px" height="45px" />
            Travel
          </h6>
        </div>
      </div>
    </Aboutwrapper>
  );
};

export default About;
