import React from 'react';
import { styled, keyframes } from "frontity";
import Image from "@frontity/components/image";

//SVGs Social Network
import InstagramIcon from '../../images/instagram.svg';
import FacebookIcon from '../../images/facebook.svg';
import WhatsappIcon from '../../images/whatsapp.svg';
import FiftyIcon from '../../images/55.png';

const Social = () => {
  return (
    <SocialLinks>
        <a href='https://www.instagram.com/marianabh.tattoo/' target="_blank"><Image src={InstagramIcon} alt='Instagram' /></a>
        <a href='https://www.facebook.com/marianabh.tattoo/' target="_blank"><Image src={FacebookIcon} alt='Facebook' /></a>
        <a href='https://api.whatsapp.com/send?phone=5531983528940&text=Ol%C3%A1%2C%20estava%20no%20site%20do%20est%C3%BAdio%2C%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.' target="_blank"><Image src={WhatsappIcon} alt='Whatsapp' /></a>
        <a href='https://www.colab55.com/@bulldogtattoo' target="_blank"><Image src={FiftyIcon} alt='Colab55' /></a>
    </SocialLinks>
  );
}
 
export default Social;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 719px) {
    order: 0; 
  }

  > a {
    margin: 5px;
    width: 15px;
    height: 15px;
    opacity: 70%;

    :hover {
      opacity: 50%;
    }

    > img {
      width: 100%;
    }
  }
`