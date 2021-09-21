import React, { useEffect } from 'react';
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

import HubspotForm from '../Blocks/HubspotForm';

//SVGs Social Network
import InstagramIcon from '../../images/instagram.svg';
import FacebookIcon from '../../images/facebook.svg';
import WhatsappIcon from '../../images/whatsapp.svg';

const Contact = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <Wrapper>
      <Introduction>
        <Text dangerouslySetInnerHTML={{ __html: page.acf.contactIntroductionText }} />
        <SocialContainer>
          <SocialNetwork href={page.acf.contactLinkFacebook} target="_blank" >
            <Image src={FacebookIcon} />
          </SocialNetwork>
          <SocialNetwork href={page.acf.contactLinkInstagram} target="_blank" >
            <Image src={InstagramIcon} />
          </SocialNetwork>
          <SocialNetwork href={page.acf.contactLinkWhatsapp} target="_blank" >
            <Image src={WhatsappIcon} />
          </SocialNetwork>
        </SocialContainer>
        <HubspotForm text={page.acf.contactDataUsageText} />
      </Introduction>
    </Wrapper>
  );
}
 
export default connect(Contact);

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 5vh 0;
`

const Text = styled.div`
  @media (max-width: 719px) {
    text-align: center;
  }
`

const Introduction = styled.div`
  padding: 5px;
  width: 50%;

  @media (max-width: 719px) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  
  @media (max-width: 719px) {
    justify-content: center;
  }
`

const SocialNetwork = styled.a`
  cursor: pointer;
  height: auto;
  transition: all .3s ease;
  width: 60px;
  border: 3px solid #333333;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;

  > img {
    filter: invert(14%) sepia(67%) saturate(0%) hue-rotate(139deg) brightness(96%) contrast(86%);
  }

  :hover {
    background-color: #333333;

    > img {
      filter: invert(100%) sepia(1%) saturate(1924%) hue-rotate(174deg) brightness(90%) contrast(113%);
    }
  }
`