import React from 'react'
import { styled } from "frontity";

const BlogPostContent = ({ page }) => {
  console.log(page)

  return (
    <Wrapper>
      {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
    </Wrapper>
  );
}
 
export default BlogPostContent;

const Wrapper = styled.div`
  margin: 1rem 0;
`