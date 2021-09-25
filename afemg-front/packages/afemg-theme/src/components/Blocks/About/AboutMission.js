import React from 'react'
import { styled } from "frontity";

const AboutMission = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.aboutMissionTitle}</Title>
        <Description>{page.acf.aboutMissionDescription}</Description>  
      </Content>
    </Wrapper>
  );
}
 
export default AboutMission;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fab03b;
  background-color: #ffffff;
`
const Content = styled.div`
  margin: 5rem 1rem;

  @media (min-width: 720px) {
    text-align: left;
    width: 60%;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  width: fit-content;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;

  @media (min-width: 720px) {
    text-align: left;
  }
`

const Description = styled.h3`
  margin-top: 2rem;
  word-wrap: break-word; 
  font-weight: 500;
  letter-spacing: 5px;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 720px) {
    text-align: left;
    width: 50%;
  }
`