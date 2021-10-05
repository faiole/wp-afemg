import React from 'react';
import { connect, styled } from "frontity";
import { isMobile } from "react-device-detect";
import Link from "@frontity/components/link";

//Blocks
import BlogBanner from '../Blocks/Blog/BlogBanner';
import Loading from '../Blocks/Loading';

const Blog = ({ state }) => {
  const data = state.source.get(state.router.link);

  return data.isReady ? (
    <Wrapper>
      <BlogBanner page={state.source[data.type][data.id]} />
    </Wrapper>
  ) : <Loading />;
}

export default connect(Blog);

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