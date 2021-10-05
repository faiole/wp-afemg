import React, { useState } from 'react'
import { styled } from "frontity";

import Accordion from './Accordion';

const QuestionsAnswers = ({ page }) => {
  

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
  }

  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.questionsTitle}</Title>
        {page.acf.questionsAnswersQuestions.map( (item, i) => (
          <Accordion key={i} item={item} />
        ))}
      </Content>
    </Wrapper>
  );
}
 
export default QuestionsAnswers;

const Wrapper = styled.section`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fab03b;
  background-color: #ffffff;
  color: #1f3452;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 720px) {
    width: 75%;
  }
`

const Title = styled.h1`
  color: #e83c4c;
  font-size: 3rem;
  margin: 2rem 0;

  @media (min-width: 720px) {
    width: 75%;
    font-size: 4.5rem;
  }
`