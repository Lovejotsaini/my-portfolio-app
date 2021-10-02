import styled from "styled-components";
export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to right bottom, #00f260, #0575e6);
  background-attachment: fixed;
  color: #354538;
  display: grid;
  grid-template: 1fr / 0.4fr 0.8fr;
  padding: 1.5em 10em;
  grid-gap: 1rem;

  @media only screen and (max-width: 550px) {
    grid-template: 0.2fr 1fr/1fr;
    grid-gap: 1.5rem;
    padding: 1.8em 1em;
  }
`;
export const Sidediv = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 25px 15px;
  box-shadow: 0 0 10px black;
  text-align: center;
`;
export const Main = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 25px 15px;
  box-shadow: 0 0 10px black;
`;

export const ResumeWrapper = styled.div`
  display: grid;
  grid-template: 0.5fr 1fr/1fr 1fr;
  grid-template-areas:
    "EducationWrapper ExperienceWrapper"
    "LanguageWrapper LanguageWrapper";
  grid-gap: 0.2rem;
  padding: 0.1rem 1em;

  @media only screen and (max-width: 550px) {
    grid-template: auto / 1fr;
    grid-gap: 1rem;
    padding: 0.5em 1.5em;
    grid-template-areas:
      "EducationWrapper" "ExperienceWrapper"
      "LanguageWrapper";
  }
`;
export const EducationWrapper = styled.div`
  grid-area: EducationWrapper;
`;
export const ExperienceWrapper = styled.div`
  grid-area: ExperienceWrapper;
`;
export const LanguageWrapper = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  grid-area: LanguageWrapper;
  grid-gap: 0.5rem;
  padding: 1px 1em;

  @media only screen and (max-width: 550px) {
    grid-template: auto / 1fr;
    grid-gap: 1rem;
  }
`;
