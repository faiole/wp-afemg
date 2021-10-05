import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

const AboutBanner = ({ page }) => {
  return (
    <>
      <Wrapper>
        <Image src={page.acf.aboutBannerImage['url']} alt={page.acf.aboutBannerImage['alt']} />
        <Content>
          <Title>{page.acf.aboutBannerText}</Title>
        </Content>
      </Wrapper>
      <Description>
          <h3>{ page.acf.aboutBannerDescription }</h3>
      </Description>
    </>
  );
}
 
export default AboutBanner;

const Wrapper = styled.div`
  width: 100%;
  height: 650px;

  @media (max-width: 719px) {
    background-color: #63aab1;
    height: fit-content;
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
    width: 60%;
  }
`

const Title = styled.h1`
  height: 80%;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 5px;
  color: #203451;

  @media (min-width: 720px) {
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 20px;
  }
`

const Description = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  
  @media (min-width: 720px) {
    padding: 10rem 0;
  }

  > h3 {
    color: #1f3452;
    font-weight: 400;
    letter-spacing: 5px;
    font-size: 1.5rem;

    @media (min-width: 720px) {
      width: 75%;
    }
  }
`