import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

const JoinBanner = ({ page }) => {
  return (
    <>
      <Wrapper>
        <Image src={page.acf.joinBannerDesktop['url']} alt={page.acf.joinBannerDesktop['alt']} />
        <Content>
          <Title>{page.acf.joinBannerTitle}</Title>
          <Subtitle>{page.acf.joinBannerSubtitle}</Subtitle>
          <Description>{ page.acf.joinBannerDescription }</Description>
        </Content>
      </Wrapper>
    </>
  );
}
 
export default JoinBanner;

const Wrapper = styled.div`
  width: 100%;
  height: 650px;

  @media (max-width: 719px) {
    background-color: #a9dcd2;
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
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  color: #ffffff;
  padding: 5rem 0;
  
  @media (min-width: 720px) {
    padding: 10rem 0 0 20vw;
    width: 60%;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;
  color: #203451;

  @media (min-width: 720px) {
    text-align: left;
  }
`

const Subtitle = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 2rem;
  color: #203451;

  @media (min-width: 720px) {
    text-align: left;
  }
`

const Description = styled.h3`
  color: #1f3452;
  font-weight: 400;
  letter-spacing: 5px;
  font-size: 1.5rem;
  color: #203451;

  @media (min-width: 720px) {
    width: 75%;
    text-align: left;
  }
`