import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

//SVGs Social Network
import InstagramIcon from '../../images/instagram.svg';
import FacebookIcon from '../../images/facebook.svg';
import WhatsappIcon from '../../images/whatsapp.svg';

const BannerHome = ({ page }) => {
  return (
    <Wrapper>
      <Image src={page.acf.homeBannerDesktop['url']} alt={page.acf.homeBannerDesktop['alt']} />
      <Content>
        <Title>{page.acf.homeBannerTitle}</Title>
        <Subtitle>{page.acf.homeBannerSubtitle}</Subtitle>
        <SocialLinks>
          <a href='' target="_blank"><Image src={InstagramIcon} alt='Instagram' /></a>
          <a href='' target="_blank"><Image src={FacebookIcon} alt='Facebook' /></a>
          <a href='' target="_blank"><Image src={WhatsappIcon} alt='Whatsapp' /></a>
        </SocialLinks>
      </Content>
    </Wrapper>
  );
}
 
export default BannerHome;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  @media (max-width: 719px) {
    background-color: #1faa6c;
  }

  > img {
    height: auto;
    width: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;

    @media (max-width: 719px) {
      display: none;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  color: #ffffff;
  text-transform: uppercase;
  padding: 5rem 0;
  
  @media (min-width: 720px) {
    padding: 10rem 0;
  }
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 5px;

  @media (min-width: 720px) {
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 20px;
  }
`

const Subtitle = styled.h2`
  font-weight: 400;
  letter-spacing: 10px;
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 719px) {
    display: none;
  }
  
  > a {
    width: 50px;
    margin: 1rem;

    > img {
      width: 100%;
      height: auto;
      filter: invert(100%);
    }
  }
`