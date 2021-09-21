import React from "react"
import { styled, keyframes } from "frontity"

const Loading = () => {
  
  return (
    <Spinner>
      <div />
    </Spinner>
  )
}

export default Loading

const ripple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

const Spinner = styled.div`
  display: inline-block;
  position: absolute;
  top: 40%;
  left: 40%;
  width: 80px;
  height: 80px;

  > div {
    position: absolute;
    border: 4px solid #333333;
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    :nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`