import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

const EducationExecutive = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.educationExecutiveTitle}</Title>
        <Subtitle>{page.acf.educationExecutiveSubtitle}</Subtitle>
        {page.acf.educationExecutiveFact.map(( option, i ) => (
          <Options key={i}> {option.text} </Options>
        ))}
      </Content>
    </Wrapper>
  );
}
 
export default EducationExecutive;

const Wrapper = styled.section`
  background-color: #eeeeee;
`

const Content = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1f3452;
  margin: 3rem 1rem;

  @media (min-width: 720px) {
    width: 70%;
  }

  > a {
    margin-top: 3rem;
    background-color: #1f3452;
    color: #ffffff;
    padding: 1.5rem 3rem;
    border-radius: 50px;
    width: fit-content;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all .3s ease;

    @media (min-width: 720px) {
      margin: 5rem 0;
    }

    :hover {
      filter: brightness(70%);
    }
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    margin-bottom: 5rem;
  }
`

const Options = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin: 2rem 0;

  ::before {
    content: '+';
    color: #e91c23;
    font-weight: 900;
    font-size: 5rem;
    margin-right: 15px;
  }
`