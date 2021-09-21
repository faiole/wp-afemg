import React from 'react';
import { styled } from "frontity";
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerWrapper open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerWrapper>
  );
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;

export const BurgerWrapper = styled.button`
  position: fixed;
  top: 1%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: #333333;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;