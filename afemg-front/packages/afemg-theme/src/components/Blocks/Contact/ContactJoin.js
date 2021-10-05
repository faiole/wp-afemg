import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const ContactJoin = ({ page }) => {
  return (
    <Wrapper>
      <Title>{page.acf.contactJoinTitle}</Title>
      <Subtitle>{page.acf.contactJoinSubtitle}</Subtitle>

    </Wrapper>
  );
}
 
export default ContactJoin;

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

const Options = styled.div`
  
`