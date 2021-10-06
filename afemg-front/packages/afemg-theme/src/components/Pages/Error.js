import React from "react";
import { connect, styled } from "frontity";

const Error = ({ state }) => {
  return (
    <Wrapper>
      <Title>Erro 404</Title>
      <Subtitle>
        Página não encontrada.
      </Subtitle>
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