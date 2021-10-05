import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const JoinPartner = ({ page }) => {
  const blockContent = [
    {color: 'red', text: 'GRATUIDADES'},
    {color: 'blue', text: 'BRINDES E MATERIAIS'},
    {color: 'yellow', text: 'DESCONTOS'},
  ]

  return (
    <Wrapper>
      <BlockContainer>
        { blockContent.map( (block, i) => {
          return <Blocks key={i} className={block.color}> {block.text} </Blocks>
        }) }
      </BlockContainer>
      <Content>
        <Title>{page.acf.joinPartnerTitle}</Title>
        <Subtitle>{page.acf.joinPartnerSubtitle}</Subtitle>
        {page.acf.joinPartnerAdvantages.map((item, i) => (
          <Item key={i} >{item.text}</Item>
        ))}
        <Link link="/">BAIXE AQUI A NOSSA CARTA DE APRESENTAÇÃO</Link>
      </Content>
    </Wrapper>
  );
}
 
export default JoinPartner;

const Wrapper = styled.section`
  background-color: #eeeeee;
  padding: 6rem 1rem;
  color: #ffffff;
  flex-direction: row !important;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 720px) {
    width: 40%;
    margin: 0 5rem;
  }

  > a {
    margin: 1rem;
    font-size: 1.3rem;
    color: #e91c23;
  }
`

const BlockContainer = styled.div`
  width: 220px;
  display: none;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: 720px) {
    display: flex;
  }
`

const Blocks = styled.div`
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;

  &.red {
    background-color: #e91c23;
  }

  &.blue {
    background-color: #203451;
  }

  &.yellow {
    background-color: #fab03b;
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

const Item = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 0.8rem 0;
  color: #1f3452;

  ::before {
    content: '+';
    color: #e91c23;
    font-weight: 900;
    font-size: 4rem;
    margin-right: 15px;
  }
`