import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const ContactJoin = ({ page }) => {
  return (
    <Wrapper>
      <Title>{page.acf.contactJoinTitle}</Title>
      <Subtitle>{page.acf.contactJoinSubtitle}</Subtitle>
      <Options>
        {page.acf.contactJoinOption.map((item, i) => (
          <Item key={i}>
            <p>{item.description}</p>
            <Link link={item.link}>{item.cta}</Link>
          </Item>
        ))}
      </Options>
    </Wrapper>
  );
}
 
export default ContactJoin;

const Wrapper = styled.section`
  background-color: #eeeeee;
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  @media (min-width: 720px) {
    margin: 0 3rem;
    width: 20%;

    > p {
      width: 80%;
    }
  }

  > p {
    text-align: center;
    color: #1f3452;
    font-size: 1.3rem;
  }

  > a {
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    margin: 5px 0;
    color: #ffffff;
    border-radius: 30px;
    border: 0;
    background-color: #fab03b;
    width: fit-content;
    text-decoration: none;
    text-align: center;

    :hover {
      filter: brightness(70%);
      cursor: pointer;
    }
  }
`