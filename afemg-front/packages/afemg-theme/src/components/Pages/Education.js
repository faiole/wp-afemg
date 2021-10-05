import React from 'react';
import { connect, styled } from "frontity";
import { isMobile } from "react-device-detect";
import Link from "@frontity/components/link";

//Blocks
import BannerHome from '../Blocks/BannerHome';
import EducationInfo from '../Blocks/Education/EducationInfo';
import EducationNumbers from '../Blocks/Education/EducationNumbers';
import EducationExecutive from '../Blocks/Education/EducationExecutive';
import Loading from '../Blocks/Loading';

const Education = ({ state }) => {
  const data = state.source.get(state.router.link);

  return data.isReady ? (
    <Wrapper>
      <BannerHome page={state.source[data.type][data.id]} />
      <EducationInfo page={state.source[data.type][data.id]} />
      <EducationNumbers page={state.source[data.type][data.id]} />
      <EducationExecutive page={state.source[data.type][data.id]} />
    </Wrapper>
  ) : <Loading />;
}

export default connect(Education);

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