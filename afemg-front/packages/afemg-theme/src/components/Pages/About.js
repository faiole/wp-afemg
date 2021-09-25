import React from 'react';
import { connect, styled } from "frontity";
import { isMobile } from "react-device-detect";
import Link from "@frontity/components/link";

//Blocks
import AboutBanner from '../Blocks/About/AboutBanner';
import AboutBoard from '../Blocks/About/AboutBoard';
import AboutMission from '../Blocks/About/AboutMission';
import AboutValues from '../Blocks/About/AboutValues';
import Loading from '../Blocks/Loading';

const Showcase = ({ state }) => {
  const data = state.source.get(state.router.link);

  return data.isReady ? (
    <Wrapper>
      <AboutBanner page={state.source[data.type][data.id]} />
      <AboutBoard page={state.source[data.type][data.id]} />
      <AboutMission page={state.source[data.type][data.id]} />
      <AboutValues page={state.source[data.type][data.id]} />
    </Wrapper>
  ) : <Loading />;
}

export default connect(Showcase);

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