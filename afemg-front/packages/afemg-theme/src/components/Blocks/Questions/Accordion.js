import React, { useState } from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";
import Arrow from '../../../images/chevron-right-solid.svg';

const Accordion = ({ item }) => {
  const [setActive, setActiveState] = useState("");

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
  }

  return (
    <Wrapper>
      <AccordionTitle onClick={toggleAccordion}>
        <AccordionTitle>{item.question}</AccordionTitle>
        <Image src={Arrow} className={`${setActive}`} />
      </AccordionTitle>
      <AccordionContent className={`${setActive}`}>
        <p>{item.answer}</p>
      </AccordionContent>
    </Wrapper>
  );
}
 
export default Accordion;

const Wrapper = styled.div`
  width: 100%;

  > div {
    display: none;

    &.active {
      display: block;
    }
  }
`

const AccordionTitle = styled.button`
  width: 100%;
  font-size: 1.4rem;
  margin: 2rem 0;
  background-color: #eeeeee;
  color: #203451;
  padding: 0 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  outline: none;

  @media (min-width: 720px) {
    padding: 0 2rem;
    font-size: 1.6rem;
  }

  > p {
    font-weight: 600;
    font-size: 14px;
  }

  > img {
    padding: 0 5px;
    height: auto;
    width: 2rem;
    filter: invert(33%) sepia(42%) saturate(4568%) hue-rotate(335deg) brightness(96%) contrast(90%);

    &.active {
      transform: rotate(90deg);
    }
  }
`

const AccordionContent = styled.div`
  padding: 0 1rem;
  background-color: white;
  overflow: hidden;
  transition: transform 0.6s ease;
  color: #203451;
  display: none;

  &.active {
    display: block;
  }

  > p { 
    font-weight: 400;
    font-size: 1.2rem;
    padding: 18px;
  }

  > span {
    margin-left: auto;
    transition: transform 0.6s ease;
  }
`