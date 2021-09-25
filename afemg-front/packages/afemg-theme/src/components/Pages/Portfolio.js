import React, { useEffect } from 'react';
import { connect, styled } from "frontity";

//Blocks
import Artist from '../Blocks/Artist';
import Arts from '../Blocks/Arts';
import Loading from '../Blocks/Loading';

const Portfolio = ({ state, actions }) => {

  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  useEffect(() => {
    actions.source.fetch("/flash/");
  }, []);

  const cpt = state.source.get("/flash/");

  if (cpt.isReady) {
    flashs = cpt.items.map(({ type, id }) => state.source[type][id]);
  }

  return (
    <>
    </>
  );
}
 
export default connect(Portfolio);

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