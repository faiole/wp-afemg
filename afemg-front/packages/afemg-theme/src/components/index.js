import React from "react"
import { connect, Global, css, styled } from "frontity";
import { Head } from "frontity";
import Switch from "@frontity/components/switch";
import { isMobile } from 'react-device-detect';

//Blocks
import DesktopHeader from "./Blocks/Menu/DesktopHeader";
import MobileHeader from "./Blocks/Menu/MobileHeader";
import Footer from "./Blocks/Footer/Footer";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&Nunito+Sans:wght@400;700&family=Poiret+One&display=swap');
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background-color: #f1f1f1;
          }
          html {
            font-family: 'Open Sans', sans-serif;
          }
          .kNBmiK {
            margin: 0 !important;
          }
          .dLykRX {
            margin-top: 10px !important;
          }
        `}
      />
      <Head>
        <title>AFEMG</title>
        <meta name="description" content="AFEMG" />
        <html lang="ptBR" />
        <link rel="canonical" href="http://afemg.local" />
      </Head>
      <Rainbow>
        <div className='red' />
        <div className='green' />
        <div className='blue' />
        <div className='yellow' />
        <div className='lightblue' />
      </Rainbow>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <Main>
        <Switch>
          <Home when={data.route == '/'} />
          <About when={data.route == '/sobre/'} />
          <Error when={data.isError} />
        </Switch>
      </Main>
      <Footer />
    </>
  )
}

export default connect(Root);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
`

const Rainbow = styled.div`
  width: 100%;
  display: flex;
  margin: 0;

  > div {
    width: 20%;
    height: 10px;

    &.red {
      background-color: #e91c23;
    }

    &.green {
      background-color: #1faa6c;
    }

    &.blue {
      background-color: #203451;
    }

    &.yellow {
      background-color: #fab03b;
    }

    &.lightblue {
      background-color: #54bce7;
    }
  }
`