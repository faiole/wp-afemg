import React from 'react'
import { styled } from "frontity";

const Partners = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.homePartnerTitle}</Title>
        <Subtitle>{page.acf.homePartnerSubtitle}</Subtitle>
        <PartnerList>
          {page.acf.homePartnerLogo.map( (item, i) => {
            return <Partner key={i} src={item.logo['url']} alt={item.logo['alt']} />
          } )}
        </PartnerList>
      </Content>
    </Wrapper>
  );
}
 
export default Partners;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #203451;
`

const Content = styled.div`
  margin: 5rem 0;

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
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 5rem;
`

const PartnerList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 1rem;

  @media (min-width: 720px) {
    margin: 0;
  }
`

const Partner = styled.img`
  margin: 0.5rem;
  width: 100%;
  height: 80px;

  @media (min-width: 720px) {
    width: 20%;
    margin: 1rem;
  }
`