import React, {useEffect} from "react"
import styled, {ThemeProvider} from 'styled-components';
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';
import './../css/stylesheet.css';
import Header from "../components/common/Header/Header";
import Footer from "./../components/common/Footer/Footer";

import theme from './../utils/theme';


import GraphicLeft from "./../images/404/Graphic@1x.png";
import GraphicRight from "./../images/404/png/Graphic-Hero-Right-Error_Page@1x.png";

import {breakpoints} from './../utils/theme';

import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const NotFoundPage = () => {

  useEffect(() => {

    setTimeout(function () { AOS.init(); }, 1000);

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>dxDao | Not Found</title>
      </Helmet>
      <StyledRoot id="root">
        <Header></Header>
        <main className="full-width">
          <section data-aos="fade" className="error-404-container main-width">
            <div className="text-container">
              <h1>404</h1>
              <p>Page not found</p>
              <div data-aos="fade" className="graphics-container">
                <img className="graphic-left" src={GraphicLeft} />
                <img className="graphic-right" src={GraphicRight} />
              </div>
            </div>
            <div className="go-home-link">
              <Link to="/">Go back Home</Link>
            </div>
          </section>
          <img data-aos="fade" className="graphic-right-mobile" src={GraphicRight} />
        </main>
        <Footer />
      </StyledRoot>
    </ThemeProvider>
  )
}

const StyledRoot = styled.div`
  .graphic-right-mobile {
    display: none;
    width: 100%;
    transform: scale(1.3) translateX(-20px);
    @media screen and (max-width: ${breakpoints.md}) {
        display: unset;
        position: relative;
        left: -20px;
        transform: scale(1.5) !important;
    }
  }
  .graphics-container {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: -353px;
    left: -558px;
    pointer-events: none;
    @media screen and (max-width: ${breakpoints.md}) {
        display: none;
    }
    .graphic-left,
    .graphic-right {
      position: absolute;
      top: 14px;
      pointer-events: none;
    }
    .graphic-left {
      left: 102px;
    }
    .graphic-right {
      right: 102px;
    }
  }
  .error-404-container {
    display: flex;
    margin-bottom: 350px;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: ${breakpoints.md}) {
      margin-bottom: 0;
    }
    .text-container,
    .go-home-link {
      margin-top: 240px;
      width: 350px;
      position: relative;
      left: -48px;
      @media screen and (max-width: ${breakpoints.md}) {
        left: 0;
        margin-top: 60px;
        width: 100%;
      }
      h1 {
        font-size: 76px;
        line-height: 91px;
        background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 500;
        margin-bottom: 0px;
        clip-path: inset(0 0px 0px 21px);
        @media screen and (max-width: ${breakpoints.md}) {
          clip-path: none;
          font-size: 50px;
          line-height: 60px;
        }
      }
      p {
        background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 50px;
        line-height: 60px;
        margin-bottom: 75px;
        font-weight: 200;
        clip-path: inset(0 0px 0px 21px);
        @media screen and (max-width: ${breakpoints.md}) {
          clip-path: none;
          font-size: 38px;
          line-height: 45.6px;
          margin-bottom: 32px;
        }
      }
    }
    .go-home-link {
      margin-top: 0;
      font-size: 22px;
      background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 24px;
        line-height: 28px;
      }
    }
  }
`

export default NotFoundPage
