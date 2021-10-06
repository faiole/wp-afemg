import React from 'react';
import { connect, styled } from "frontity";
import { isMobile } from "react-device-detect";
import Link from "@frontity/components/link";

//Blocks
import ContactBanner from '../Blocks/Contact/ContactBanner';
import ContactForm from '../Blocks/Contact/ContactForm';
import ContactJoin from '../Blocks/Contact/ContactJoin';
import Loading from '../Blocks/Loading';

const Contact = ({ state }) => {
  const data = state.source.get(state.router.link);

  return data.isReady ? (
    <Wrapper>
      <ContactBanner page={state.source[data.type][data.id]} />
      <ContactForm page={state.source[data.type][data.id]} />
      <ContactJoin page={state.source[data.type][data.id]} />
    </Wrapper>
  ) : <Loading />;
}

export default connect(Contact);

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