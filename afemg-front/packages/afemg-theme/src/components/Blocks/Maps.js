import React from 'react';
import { styled } from "frontity";

const Maps = () => {
  return (
    <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15002.671974324994!2d-43.9397782!3d-19.9383909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcce5dd4c4a977b4c!2sHARD%20WORK%20OFFICE!5e0!3m2!1spt-BR!2sbr!4v1631838126039!5m2!1spt-BR!2sbr"></Map>
  );
}
 
export default Maps;

const Map = styled.iframe`
  width: 100%;
  height: 40rem;
`