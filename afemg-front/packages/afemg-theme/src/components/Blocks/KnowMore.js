import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const KnowMore = ({ page }) => {
  return (
    <Wrapper>
      <Description>{page.acf.homeKnowMoreText}</Description>
      <Link link="/">{page.acf.homeKnowMoreCta}</Link>
    </Wrapper>
  );
}
 
export default KnowMore;

const Wrapper = styled.section`
  background-color: #ffffff;
  padding: 6rem 1rem;

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
    width: 60%;
  }
`