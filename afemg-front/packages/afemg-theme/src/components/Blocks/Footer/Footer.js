import React from 'react';
import { styled } from "frontity";
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";

//Images
import Logo from "../../../images/logo_afemg.svg"
import InstagramIcon from '../../../images/instagram.svg'
import FacebookIcon from '../../../images/facebook.svg'
import WhatsappIcon from '../../../images/whatsapp.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <Holder>
        <LogoContainer>
          <Image src={Logo} />
        </LogoContainer>
        <Content>
          <Left>
            <Title>ASSOCIAÇÃO DE FAMÍLIAS EDUCADORAS DE MINAS GERAIS</Title>
            <p>Associação civil sem fins lucrativos, inscrita no CNPJ/MF sob o número xx.xxx.xxx/0001-xx</p>
            <CTA>Associe-se</CTA>
          </Left>
          <Right>
            <SocialLinks>
              <a href='' target="_blank"><Image src={InstagramIcon} alt='Instagram' /></a>
              <a href='' target="_blank"><Image src={FacebookIcon} alt='Facebook' /></a>
              <a href='' target="_blank"><Image src={WhatsappIcon} alt='Whatsapp' /></a>
            </SocialLinks>
            <Contact>
              <p>(31) 9 9999-9999</p>
              <p>contato@afemg.com.br</p>
            </Contact>
          </Right>
          <Line />
          <LinksContainer>
            <Links>
              <Link link="/">Home</Link>
              <Link link="/">A AFEMG</Link>
              <Link link="/">Educação Domiciliar</Link>
              <Link link="/">Perguntas e Respostas</Link>
            </Links>
            <Links>
              <Link link="/">Faça Parte</Link>
              <Link link="/">Eventos</Link>
              <Link link="/">Blog</Link>
              <Link link="/">Contato</Link>
            </Links>
          </LinksContainer>
        </Content>
      </Holder>
    </FooterWrapper>
  );
}
 
export default Footer;

const FooterWrapper = styled.footer`
  background-color: #ffffff;
`

const Holder = styled.div`
  width: 100%;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #203451;

  @media (min-width: 720px) {
    padding: 5rem 0;
  }
`

const LogoContainer = styled.div`
  display: none;

  @media (min-width: 720px) {
    justify-content: flex-end;
    height: 100%;
    display: flex;
    width: 30%;
  }

  > img {
    width: 120px;
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 720px) {
    width: 50%;
    margin-left: 2rem;
  }
`

const Title = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
`

const SocialLinks = styled.div`
  margin-bottom: 1rem;

  > a {
    width: 50px;
    transition: all .3s ease;

    :hover {
      filter: brightness(70%);
    }

    > img {
      margin: 0 1rem;
      width: 40px;
      height: auto;
      filter: invert(16%) sepia(22%) saturate(1445%) hue-rotate(176deg) brightness(100%) contrast(90%);
    }
  }
`
const CTA = styled(Link)`
  text-transform: uppercase;
  background-color: #e83c4c;
  font-weight: 400;
  text-decoration: none;
  color: #ffffff;
  border-radius: 35px;
  padding: 10px 20px;
  margin: 3rem 0;
  transition: all .3s ease;

  :hover {
    filter: brightness(70%);
  }
`

const Contact = styled.div`
  @media (min-width: 720px) {
    text-align: right;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  
  @media (min-width: 720px) {
    width: 40%;
    align-items: start;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;

  @media (min-width: 720px) {
    align-items: end;
    width: 40%;
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #203451;

  @media (max-width: 719px) {
    margin: 2rem 0;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Links = styled.div`
  margin: 2rem 4rem 0 0;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  
  > a {
    color: #000000;
    margin: 0.4rem 0;
    text-decoration: none;
    font-weight: 400;
  }
`