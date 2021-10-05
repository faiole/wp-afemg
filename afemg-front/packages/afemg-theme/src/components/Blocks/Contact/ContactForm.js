import React from 'react'
import { styled } from "frontity";
import Image from "@frontity/components/image";

//SVGs Social Network
import InstagramIcon from '../../../images/instagram.svg';
import FacebookIcon from '../../../images/facebook.svg';
import WhatsappIcon from '../../../images/whatsapp.svg';

const ContactForm = ({ page }) => {
  return (
    <Wrapper>
      <Content>
        <Form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Digite sua mensagem aqui..." rows="8" />
          <button>Enviar</button>
        </Form>
        <Social>
          <SocialLinks>
            <a href='' target="_blank"><Image src={InstagramIcon} alt='Instagram' /></a>
            <a href='' target="_blank"><Image src={FacebookIcon} alt='Facebook' /></a>
            <a href='' target="_blank"><Image src={WhatsappIcon} alt='Whatsapp' /></a>  
          </SocialLinks>
          <p>{page.acf.contactFormEmail}</p>
          <p>{page.acf.contactFormPhone}</p>
          <Address>{page.acf.contactFormAddress}</Address>
        </Social>
      </Content>
    </Wrapper>
  );
}
 
export default ContactForm;

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 1rem;

  @media (min-width: 720px) {
    width: 40%;
  }

  > input, textarea {
    width: 100%;
    color: #203451;
    font-size: 1.2rem;
    padding: 1rem;
    margin: 5px 0;
    border-radius: 20px;
    border: 1px solid #203451;
  }

  > button {
    font-size: 1.5rem;
    padding: 1rem 2.5rem;
    margin: 5px 0;
    color: #ffffff;
    border-radius: 30px;
    border: 0;
    background-color: #e83c4c;
    width: fit-content;

    :hover {
      filter: brightness(70%);
      cursor: pointer;
    }
  }
`

const Social = styled.div`
  width: 100%;
  margin: 0 1rem;

  @media (min-width: 720px) {
    width: 15%;
  }

  > p {
    color: #203451;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 1rem 0;
    line-height: 1em;
  }
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 719px) {
    display: none;
  }
  
  > a {
    width: 50px;
    margin: 1rem;

    > img {
      width: 100%;
      height: auto;
      filter: invert(34%) sepia(62%) saturate(1716%) hue-rotate(325deg) brightness(91%) contrast(99%);
    }
  }
`

const Address = styled.p`
  color: #203451;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 2rem 0;
  line-height: 1em;
`