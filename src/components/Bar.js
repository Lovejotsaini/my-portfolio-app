import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.span`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  /* padding: 2rem 1rem; */
  font-size: 1.2rem;
`;
const Bar = ({ icon, name }) => {
  return (
    <div className="bar">
      <div className="bar__wrapper">
        <span className="bar__name">
          <Rotate className=" mr-1"> {icon}</Rotate>
          {name}
        </span>
      </div>
    </div>
  );
};

export default Bar;
