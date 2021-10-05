import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

const QuestionsBanner = ({ page }) => {
  return (
    <Wrapper>
      <Image src={page.acf.questionsBanner['url']} alt={page.acf.questionsBanner['alt']} />
    </Wrapper>
  );
}
 
export default QuestionsBanner;

const Wrapper = styled.div`
  width: 100%;
  height: 650px;

  @media (max-width: 719px) {
    background-color: #fab03b;
    height: fit-content;
  }

  > img {
    height: auto;
    width: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;

    @media (max-width: 719px) {
      display: none;
    }
  }
`