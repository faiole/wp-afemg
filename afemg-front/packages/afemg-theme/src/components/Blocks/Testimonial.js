import React from 'react'
import { styled } from "frontity";

import QuoteImg from '../../images/quote.svg'

const Testimonial = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Quote src={QuoteImg} />
        <Text>{page.acf.homeTestimonial}</Text>
        <Name>{page.acf.homeTestimonialName}</Name>
      </Content>
    </Wrapper>
  );
}
 
export default Testimonial;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row !important;
  align-items: end !important;
  justify-content: flex-end;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fab03b;
  margin: 5rem 1rem;
  
  @media (min-width: 720px) {
    width: 40%;
    margin: 5rem 10rem;
  }
`

const Quote = styled.img`
  font-size: 5rem;
  font-weight: 900;
  filter: invert(78%) sepia(16%) saturate(2134%) hue-rotate(335deg) brightness(103%) contrast(96%);
  width: 90px;
  height: auto;
  margin-bottom: 3rem;
`

const Text = styled.p`
  font-size: 2.3rem;
  margin-bottom: 3rem;
`

const Name = styled.p`
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 5px;
`