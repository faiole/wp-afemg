import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

const AboutHistory = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.aboutHistoryTitle}</Title>
        <Subtitle>{page.acf.aboutHistorySubtitle}</Subtitle>
        <Description>{page.acf.aboutHistoryDescription}</Description>
      </Content>
      <Flow className='desktop' src={page.acf.aboutHistoryImage['url']} />
      <Flow className='mobile' src={page.acf.aboutHistoryImageMobile['url']} />
    </Wrapper>
  );
}
 
export default AboutHistory;

const Wrapper = styled.section`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fab03b;
  background-color: #eeeeee;
  color: #1f3452;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 720px) {
    width: 60%;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  line-height: 25px;
`

const Description = styled.p`
  margin: 3rem 0;
  font-weight: 400;
  font-size: 1.5rem;

  @media (min-width: 720px) {
    width: 60%;
  }
`

const Flow = styled(Image)`
  &.desktop {
    display: none;
  }

  @media (min-width: 720px) {
    &.mobile {
      display: none;
    }

    &.desktop {
      display: block;
    }
  }
  
`