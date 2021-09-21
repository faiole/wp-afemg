import React from 'react';
import { styled } from "frontity";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { bool } from 'prop-types';

//Images
import Logo from "../../../images/logo_afemg.svg"

//SVGs Social Network
import InstagramIcon from '../../../images/instagram.svg';
import FacebookIcon from '../../../images/facebook.svg';
import WhatsappIcon from '../../../images/whatsapp.svg';

const Menu = ({ open, setOpen }) => {
  return (
    <MenuWrapper open={open} >
      <Image src={Logo} alt='Logo' onContextMenu={(e)=> e.preventDefault()} />
      <Link rel="prefetch" link="/" onClick={() => setOpen(!open)} >Home</Link>
      <Link rel="prefetch" link="/" onClick={() => setOpen(!open)} >A AFEMG</Link>
      <Link rel="prefetch" link="/" onClick={() => setOpen(!open)} >Educação Domiciliar</Link>
      <Link rel="prefetch" link="/" onClick={() => setOpen(!open)} >Perguntas e Respostas</Link>
      <Link rel="prefetch" link="/" onClick={() => setOpen(!open)} >Faça Parte</Link>
      <Link rel="prefetch" link="/" onClick={() => setOpen(!open)} >Eventos</Link>
      <Link rel="prefetch" link="/" onClick={() => setOpen(!open)} >Blog</Link>
      <Link rel="prefetch" link="/" onClick={() => setOpen(!open)} >Contato</Link>
      <SocialLinks>
        <a href='' target="_blank"><Image src={InstagramIcon} alt='Instagram' /></a>
        <a href='' target="_blank"><Image src={FacebookIcon} alt='Facebook' /></a>
        <a href='' target="_blank"><Image src={WhatsappIcon} alt='Whatsapp' /></a>
      </SocialLinks>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;

export const MenuWrapper = styled.nav`
  z-index: 998;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f3f4;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  > img {
    max-width: 135px;
    margin: 2rem 0;
  }

  a {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    padding: 0.5rem 0;
    color: #0D0C1D;
    letter-spacing: 0.2rem;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    text-align: center;

    &:hover {
      color: #1faa6c;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 719px) {
    order: 0; 
  }

  > a {
    margin: 5px;
    width: 35px;
    height: 35px;
    opacity: 70%;

    :hover {
      opacity: 50%;
    }

    > img {
      width: 100%;
    }
  }
`