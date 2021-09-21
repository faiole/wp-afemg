import React, { useEffect } from 'react';
import { connect, styled } from "frontity";

//Blocks
import BannerHome from '../Blocks/BannerHome';
import KnowMore from '../Blocks/KnowMore';
import Loading from '../Blocks/Loading';
import Associate from '../Blocks/Associate';
import AssociateArea from '../Blocks/AssociateArea';
import Testimonial from '../Blocks/Testimonial';
import Board from '../Blocks/Board';
import Partners from '../Blocks/Partners';
import Maps from '../Blocks/Maps';


const Home = ({ state, actions }) => {

  useEffect(() => {
    actions.source.fetch("/inicio");
  }, []);

  const data = state.source.get("/inicio");

  return data.isReady ? (
    <Wrapper>
      <BannerHome page={state.source[data.type][data.id]} />
      <KnowMore page={state.source[data.type][data.id]} />
      <Associate page={state.source[data.type][data.id]} />
      <AssociateArea page={state.source[data.type][data.id]} />
      <Testimonial page={state.source[data.type][data.id]} />
      <Board page={state.source[data.type][data.id]} />
      <Partners page={state.source[data.type][data.id]} />
      <Maps />
    </Wrapper>
  ) : <Loading />;
}
 
export default connect(Home);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  > div {
    padding: 5px;
  }
`