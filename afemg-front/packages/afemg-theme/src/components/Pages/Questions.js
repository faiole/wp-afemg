import React from 'react';
import { connect, styled } from "frontity";
import { isMobile } from "react-device-detect";
import Link from "@frontity/components/link";

//Blocks
import QuestionsBanner from '../Blocks/Questions/QuestionsBanner';
import QuestionsAnswers from '../Blocks/Questions/QuestionsAnswers';
import Loading from '../Blocks/Loading';

const Questions = ({ state }) => {
  const data = state.source.get(state.router.link);

  return data.isReady ? (
    <Wrapper>
      <QuestionsBanner page={state.source[data.type][data.id]} />
      <QuestionsAnswers page={state.source[data.type][data.id]} />
    </Wrapper>
  ) : <Loading />;
}

export default connect(Questions);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`