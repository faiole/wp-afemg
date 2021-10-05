import React from 'react';
import { connect, styled } from "frontity";
import { isMobile } from "react-device-detect";
import Link from "@frontity/components/link";

//Blocks
import JoinBanner from '../Blocks/Join/JoinBanner';
import JoinAssociate from '../Blocks/Join/JoinAssociate';
import JoinAdvantages from '../Blocks/Join/JoinAdvantages';
import JoinArea from '../Blocks/Join/JoinArea';
import JoinPartner from '../Blocks/Join/JoinPartner';
import JoinDonation from '../Blocks/Join/JoinDonation';
import Loading from '../Blocks/Loading';

const Join = ({ state }) => {
  const data = state.source.get(state.router.link);

  return data.isReady ? (
    <Wrapper>
      <JoinBanner page={state.source[data.type][data.id]} />
      <JoinAssociate page={state.source[data.type][data.id]} />
      <JoinAdvantages page={state.source[data.type][data.id]} />
      <JoinArea page={state.source[data.type][data.id]} />
      <JoinPartner page={state.source[data.type][data.id]} />
      <JoinDonation page={state.source[data.type][data.id]} />
    </Wrapper>
  ) : <Loading />;
}

export default connect(Join);

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