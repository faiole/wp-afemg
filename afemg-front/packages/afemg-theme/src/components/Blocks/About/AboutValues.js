import React from 'react'
import { styled } from "frontity";

const AboutValues = ({ page }) => {
  return (
    <Wrapper>
      <Content className='values'>
        <Title>{page.acf.aboutValuesTitle}</Title>
        <OptionContainer>
          {page.acf.aboutValues.map( (item, i) => {
            return <Options key={i}>{item.value}</Options>
          })}
        </OptionContainer>
      </Content>
      <Content className='vision'>
        <Title>{page.acf.aboutVisionTitle}</Title>
        <Text>{page.acf.aboutVision}</Text>
      </Content>
    </Wrapper>
  );
}
 
export default AboutValues;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row !important;
  flex-wrap: wrap;
  width: 100%;
  color: #ffffff;

  @media (min-width: 720px) and (max-width: 1367px) {
    align-items: flex-start !important;
    height: 90vh;
  }

  @media (min-width: 1368px) {
    align-items: flex-start !important;
    height: 70vh;
  }
`

const Content = styled.div`
  padding: 3rem 1rem;
  background-color: #203451;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  &.values {
    background-color: #203451;
  }

  &.vision {
    background-color: #e91c23;
  }

  @media (min-width: 720px) {
    width: 50%;
    height: 100%;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  width: fit-content;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 720px) {
    text-align: left;
  }
`

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Options = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin: 0.8rem 0;

  ::before {
    content: '+';
    color: #ffffff;
    font-weight: 900;
    font-size: 3rem;
    margin-right: 15px;
  }
`

const Text = styled.span`
  font-size: 1.3rem;
  margin: 2rem 0;
  width: 100%;
  line-height: 3rem;

  @media (min-width: 720px) {
    width: 60%;
  }
`