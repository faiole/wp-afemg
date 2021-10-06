import React from 'react';
import { connect, styled } from "frontity";

//Blocks
import BlogPostBanner from '../Blocks/Blog/BlogPostBanner';
import Loading from '../Blocks/Loading';

const Blog = ({ state }) => {
  const data = state.source.get(state.router.link);
  
  return data.isReady ? (
    <Wrapper>
      {/* <BlogPostBanner page={state.source[data.type][data.id]} /> */}
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