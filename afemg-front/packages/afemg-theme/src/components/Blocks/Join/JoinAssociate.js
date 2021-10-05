import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const JoinAssociate = ({ page }) => {
  return (
    <Wrapper>
      <Title>{page.acf.joinAssociateTitle}</Title>
      <Subtitle>{page.acf.joinAssociateSubtitle}</Subtitle>
      <Description>{page.acf.joinAssociateDescription}</Description>
      <Link link="/">{page.acf.joinAssociateCta}</Link>
    </Wrapper>
  );
}
 
export default JoinAssociate;

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