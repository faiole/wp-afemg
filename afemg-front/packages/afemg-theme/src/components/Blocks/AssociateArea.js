import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const AssociateArea = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.homeAreaTitle}</Title>
        <Subtitle>{page.acf.homeAreaSubtitle}</Subtitle>
        <Description>{page.acf.homeAreaDescription}</Description>
        <Link link="/">{page.acf.homeAreaCta}</Link>
      </Content>
    </Wrapper>
  );
}
 
export default AssociateArea;

const Wrapper = styled.section`
  background-color: #fab03b;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 720px) {
    align-items: start !important;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 5rem 1rem;

  @media (min-width: 720px) {
    align-items: start;
    margin: 5rem 10rem;
    width: 30%;
  }

  > a {
    margin-top: 3rem;
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
  margin-bottom: 5rem;
  color: #1f3452;
`

const Description = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 5px;
  color: #1f3452;

  @media (max-width: 719px) {
    text-align: center;
  }
`
