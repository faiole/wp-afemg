import React from 'react'
import { styled } from "frontity";

const Board = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.homeBoardTitle}</Title>
        <Subtitle>{page.acf.homeBoardSubtitle}</Subtitle>
        {page.acf.homeBoardMembers.map((member, i) => {
          return <Member key={i} ><b>{member.role}:</b> {member.name}</Member>
        })}
      </Content>
    </Wrapper>
  );
}
 
export default Board;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #ffffff;
  background-color: #e83c4c;
`
const Content = styled.div`
  margin: 5rem 1rem;

  @media (min-width: 720px) {
    text-align: center;
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
  margin-bottom: 5rem;
`

const Member = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 5px;
`