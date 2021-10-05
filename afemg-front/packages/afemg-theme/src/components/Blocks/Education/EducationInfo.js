import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

const EducationInfo = ({ page }) => {
  return (
    <Wrapper>
      <Description>
        <h3>{page.acf.educationNumbersIntroduction}</h3>
      </Description>
    </Wrapper>
  );
}
 
export default EducationInfo;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #203451;
  background-color: #eeeeee;
`

const Description = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  
  @media (min-width: 720px) {
    padding: 5rem 0;
  }

  > h3 {
    color: #1f3452;
    font-weight: 400;
    letter-spacing: 5px;
    font-size: 1.5rem;

    @media (min-width: 720px) {
      width: 75%;
    }
  }
`