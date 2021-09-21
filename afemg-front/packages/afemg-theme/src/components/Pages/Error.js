import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Error = ({ state }) => {
  return (
    <Wrapper>
      <Title>Erro 404</Title>
      <Subtitle>
        Página não encontrada.
      </Subtitle>
      <HomeButton>
        <Link link="/">Página Inicial</Link>
      </HomeButton>
    </Wrapper>
  )
}

export default connect(Error);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5vh 0;
`

const Title = styled.h2`
  font-size: 3rem;
  margin: 0;
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #737373;
`

const HomeButton = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 1rem 1.5rem;
  background-color: #333333;
  transition: all .3s ease;
  text-transform: uppercase;
  font-size: 1rem;
  
  @media (max-width: 719px) {
    box-shadow: 10px 10px 0 -2px #36eee0;
  }

  :visited, :hover {
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
    box-shadow: 10px 10px 0 -2px #36eee0;
  }

  > a {
    text-decoration: none;
    color: #f1f2f3;
  }
`