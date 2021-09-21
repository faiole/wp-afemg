import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const Associate = ({ page }) => {

  const blockContent = [
    {color: 'red', text: 'AFEMG'},
    {color: 'green', text: 'Eventos'},
    {color: 'blue', text: 'Participe'},
    {color: 'yellow', text: 'Carteirinha'},
    {color: 'lightblue', text: 'Conheça'}
  ]

  return (
    <Wrapper>
      <BlockContainer>
        <CornerBlock className='left' />
        { blockContent.map( (block, i) => {
          return <Blocks key={i} className={block.color}> {block.text} </Blocks>
        }) }
        <CornerBlock className='right' />
      </BlockContainer>
      <Rainbow>
        <div className='red' />
        <div className='green' />
        <div className='blue' />
        <div className='yellow' />
        <div className='lightblue' />
      </Rainbow>
      <Content>
        <Title>{page.acf.homeAssociateTitle}</Title>
        <Subtitle>{page.acf.homeAssociateSubtitle}</Subtitle>
        {page.acf.homeAssociateInformation.map(( option, i ) => {
          return <Options key={i}> {option.homeAssociateInformationItem} </Options>
        })}
        <Link link="/">{page.acf.homeAssociateCta}</Link>
      </Content>
    </Wrapper>
  );
}
 
export default Associate;

const Wrapper = styled.section`
  background-color: #ffffff;
`

const BlockContainer = styled.div`
  width: 100%;
  height: 12em;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (min-width: 720px) {
    display: flex;
  }
`

const Rainbow = styled.div`
  width: 100%;
  display: flex;
  margin: 0;

  @media (min-width: 720px) {
    display: none;
  }

  > div {
    width: 20%;
    height: 10px;

    &.red {
      background-color: #e91c23;
    }

    &.green {
      background-color: #1faa6c;
    }

    &.blue {
      background-color: #203451;
    }

    &.yellow {
      background-color: #fab03b;
    }

    &.lightblue {
      background-color: #54bce7;
    }
  }
`

const Blocks = styled.div`
  width: 16%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;

  &.red {
    background-color: #e91c23;
  }

  &.green {
    background-color: #1faa6c;
  }

  &.blue {
    background-color: #203451;
  }

  &.yellow {
    background-color: #fab03b;
  }

  &.lightblue {
    background-color: #54bce7;
  }
`

const CornerBlock = styled.div`
  width: 10%;

  &.left {
    background-color: #99c7e3;
  }

  &.right {
    background-color: #e6a8ab;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1f3452;
  margin: 3rem 1rem;

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

    @media (min-width: 720px) {
      margin: 5rem 0;
    }

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
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    margin-bottom: 5rem;
  }
`

const Options = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin: 2rem 0;

  ::before {
    content: '+';
    color: #e91c23;
    font-weight: 900;
    font-size: 4rem;
    margin-right: 15px;
  }
`