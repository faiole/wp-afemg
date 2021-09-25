import React from 'react'
import { styled } from "frontity";

const AboutBoard = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.aboutBoardTitle}</Title>
        <Subtitle>{page.acf.aboutBoardSubtitle}</Subtitle>
        {page.acf.aboutBoardMembers.map((member, i) => {
          return <Member key={i} ><b>{member.role}:</b> {member.name}</Member>
        })}
        <Title className='second' >{page.acf.aboutBoardSecondTitle}</Title>
        <Quote>{page.acf.aboutBoardSecondDescription}</Quote>
      </Content>
    </Wrapper>
  );
}
 
export default AboutBoard;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #203451;
  background-color: #eeeeee;
`
const Content = styled.div`
  margin: 5rem 1rem;

  @media (min-width: 720px) {
    text-align: left;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;

  &.second {
    margin: 5rem 0 2rem;
  }

  @media (min-width: 720px) {
    text-align: left;
  }
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 5rem;

  @media (min-width: 720px) {
    text-align: left;
  }
`

const Member = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 5px;
`

const Quote = styled.p`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 5px;
  text-align: center;

  @media (min-width: 720px) {
    text-align: left;
    width: 50%;
  }
`