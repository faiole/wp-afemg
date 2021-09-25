import React from "react"
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";

//Images
import Logo from "../../../images/logo_afemg.svg"

const DesktopHeader = ({ state }) => {
  return (
    <Wrapper>
      <HeaderContent>
        <Image src={Logo} alt='Logo'/>
        <Menu>
          <Link link="/">Home</Link>
          <Link link="/sobre">A AFEMG</Link>
          <Link link="/">Educação <br/>Domiciliar</Link>
          <Link link="/">Perguntas <br/>e Respostas</Link>
          <Link link="/">Faça Parte</Link>
          <Link link="/">Eventos</Link>
          <Link link="/">Blog</Link>
          <Link link="/">Contato</Link>
        </Menu>
      </HeaderContent>
    </Wrapper>
  );
}
 
export default connect(DesktopHeader);

const Wrapper = styled.header`
  width: 100%;
  background-color: #ffffff;
  height: 20vh;

  @media (max-width: 719px) {
    display: none;
  }
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  img {
    width: 13vh;
    height: auto;
    margin: 1em;
  }
`

const Menu = styled.nav`
  display: flex;
  margin: 1em;
  align-items: flex-end;
  
  & > a {
    margin: 1em 1em 0 1em;
    color: #737373;
    width: max-content;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    animation: ease-in 0.3s;

    font-family: 'Nunito Sans', sans-serif;

    :hover {
      color: #e91c23;
      text-decoration: none;
    }
  }
`