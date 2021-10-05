import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

const EducationNumbers = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{page.acf.educationNumbersTitle}</Title>
        <Subtitle>{page.acf.educationNumbersSubtitle}</Subtitle>
        <Description>{page.acf.educationNumbersDescription}</Description>
        <Icons>
          {page.acf.educationNumbersData.map( (item, i) => (
            <Item key={i}>
              <p>{item.data}</p>
              <span>{item.text}</span>
            </Item>
          ))}
        </Icons>
        <MapContainer>
          <Image src={page.acf.educationNumbersMap['url']} />
        </MapContainer>
        <Quote dangerouslySetInnerHTML={{__html: page.acf.educationNumbersComplimentary}} />
      </Content>
    </Wrapper>
  );
}
 
export default EducationNumbers;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  color: #203451;
  background-color: #ffffff;
`
const Content = styled.div`
  @media (min-width: 720px) {
    width: 75%;
    text-align: left;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;

  &.second {
    margin: 5rem 0 2rem;
  }

  @media (min-width: 720px) {
    text-align: left;
  }
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;

  @media (min-width: 720px) {
    text-align: left;
  }
`

const Description = styled.p`
  color: #1f3452;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 2rem 0;
`

const Icons = styled.div`
  color: #e83c4c;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem 0;
`

const Item = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;

  @media (min-width: 720px) {
    width: 33%;
    padding: 2rem 5rem;
  }

  p {
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 0;
  }

  span {
    font-size: 1.5rem;
    text-align: center;
  }
`

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Quote = styled.div`
  margin: 5rem 0;
  font-size: 3rem;
`