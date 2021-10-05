import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const JoinArea = ({ page }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{page.acf.joinAreaTitle}</Title>
        <Subtitle>{page.acf.joinAreaSubtitle}</Subtitle>
        <Description>{page.acf.joinAreaDescription}</Description>
        <Link link="/">{page.acf.joinAreaCta}</Link>
      </Container>
    </Wrapper>
  );
}
 
export default JoinArea;

const Wrapper = styled.section`
  background-color: #ffffff;
  padding: 6rem 1rem;
  align-items: flex-start !important;  
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 720px) {
    margin-left: 10vw;
  }

  > a {
    margin-top: 1rem;
    background-color: #1f3452;
    color: #ffffff;
    padding: 1.5rem 3rem;
    border-radius: 50px;
    width: fit-content;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all .3s ease;

    :hover {
      filter: brightness(70%);
    }
  }
`

const Description = styled.p`
  color: #1f3452;
  font-weight: 400;
  font-size: 1.5rem;

  @media (min-width: 720px) {
    width: 40%;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;
  color: #1f3452;
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 3rem;
  color: #1f3452;
`