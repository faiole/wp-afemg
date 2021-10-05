import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const JoinAdvantages = ({ page }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{page.acf.joinAdvantagesTitle}</Title>
        <Subtitle>{page.acf.joinAdvantagesSubtitle}</Subtitle>
        {page.acf.joinAdvantagesList.map((item, i) => (
          <Item key={i} >{item.advantage}</Item>
        ))}
        <Link link="/">{page.acf.joinAdvantagesCta}</Link>
      </Container>
    </Wrapper>
  );
}
 
export default JoinAdvantages;

const Wrapper = styled.section`
  background-color: #ffb82d;
  padding: 6rem 1rem;
  color: #ffffff;
  align-items: flex-end !important;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 720px) {
    width: 40%;
    margin-right: 10vw;
  }

  > a {
    margin-top: 1rem;
    background-color: #ffffff;
    color: #000000;
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

const Item = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 0.8rem 0;

  ::before {
    content: '+';
    color: #ffffff;
    font-weight: 900;
    font-size: 4rem;
    margin-right: 15px;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 3rem;
`