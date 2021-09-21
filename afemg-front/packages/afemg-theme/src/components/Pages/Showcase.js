import React, { useEffect } from 'react';
import { connect, styled } from "frontity";
import Carousel from 'react-grid-carousel';
import { isMobile } from "react-device-detect";
import Link from "@frontity/components/link";

const Showcase = ({ state }) => {
  let i = 0;

  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const respArray = [{
    breakpoint: 766,
    cols: 1,
    rows: 1,
    autoplay: 5000
  }]

  return (
    <>
      <Title>
        <h1>{ page.acf.showcaseTitle }</h1>
        <h3>{ page.acf.showcaseSubtitle }</h3>
      </Title>
      <Wrapper>
        <CarouselContainer>
          <Carousel cols={1} rows={1} hideArrow={true} showDots={true} dotColorActive='#333333' responsiveLayout={respArray} loop>
            {
              page.acf.showcaseTeam.map(function (x) {
                return (
                  <Carousel.Item key={i++} >
                    <CarouselImage width='100%' src={x.showcaseTeamImage['url']} alt={x.showcaseTeamImage['alt']} onContextMenu={(e)=> e.preventDefault()} />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </CarouselContainer>
        <Center>
          <Description dangerouslySetInnerHTML={{ __html: page.acf.showcaseDescription }} />
          <Link link="/contato">{page.acf.showcaseCtaText}</Link>
        </Center>
        <CarouselContainer>
          <Carousel cols={1} rows={1} hideArrow={true} showDots={true} dotColorActive='#333333' responsiveLayout={respArray} loop>
            {
              page.acf.showcaseStudio.map(function (x) {
                return (
                  <Carousel.Item key={i++} >
                    <CarouselImage width='100%' src={x.showcaseStudioImage['url']} alt={x.showcaseStudioImage['alt']} onContextMenu={(e)=> e.preventDefault()} />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </CarouselContainer>
      </Wrapper>
    </>
  );
}

export default connect(Showcase);

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3vh 0 1vh;

  @media (max-width: 719px) {
    flex-direction: column;
  }

  @media (min-width: 720px) {
    margin: 5vh 0 1vh;
  }
`

const Title = styled.div`
  margin: 5vh 10px 0;

  > h1 {
    font-weight: 300;
    font-size: 2.3rem;

    @media (max-width: 719px) {
      font-size: 2.4rem;
    }
  }

  > h3 {
    font-family: 'Poiret One', cursive;
    font-size: 1.2rem;
    font-weight: 700;

    @media (max-width: 719px) {
      font-size: 1.6rem;
    }
  }
`

const Description = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin: 10px;
  font-size: 1rem;
  width: 100;

  > p {
    color: #333333;

    > a {
      text-decoration: none;
      font-weight: 600;
      color: #333333;

      :visited {
        text-decoration: none;
        color: #333333;
      }
    }

    > strong {
      font-weight: 600;
      color: #333333;
    }
  }
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 720px) {
    width: 40%;
    margin: 5px 2rem;
  }

  > a {
    text-align: center;
    text-decoration: none;
    padding: 1rem 1.5rem;
    background-color: #333333;
    transition: all .3s ease;
    text-transform: uppercase;
    font-size: 1rem;
    width: 60%;
    text-decoration: none;
    color: #f1f2f3;
    
    @media (max-width: 719px) {
      box-shadow: 10px 10px 0 -2px #36eee0;
      margin: 0 0 1rem;
    }

    @media (min-width: 900px) and (max-width: 1919px ) {
      width: 80%;
    }

    :visited, :hover {
      text-decoration: none;
    }

    :hover {
      cursor: pointer;
      box-shadow: 10px 10px 0 -2px #36eee0;
    }
  }
`

const CarouselImage = styled.img`
  filter: grayscale(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s ease-in-out;

  @media (max-width: 719px) {
    filter: grayscale(0);
  }

  :hover {
    filter: grayscale(0);
  }
`

const CarouselContainer = styled.div`
  width: 100%;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 720px) {
    width: 30%;
  }
`