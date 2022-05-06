import React, { useEffect } from "react"
import styled, { ThemeProvider } from 'styled-components';
import theme from './../utils/theme';
import AboutHero from './../components/About/AboutHero/AboutHero';
import './../css/stylesheet.css';
import { Helmet } from 'react-helmet';
import Header from "./../components/common/Header/Header";
import GettingStarted from "../components/common/GettingStarted/GettingStarted";
import Footer from "../components/common/Footer/Footer";
import AskedQuestions from "../components/About/AskedQuestions/AskedQuestions";
import Details from "../components/About/Details/Details";

import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const AboutPage = () => {

  useEffect(() => {

    setTimeout(function () { AOS.init(); }, 1000);

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>DXdao | Vision</title>
      </Helmet>
      <StyledRoot id="root">
        <Header>
          <AboutHero />
        </Header>
        <main>
          <Details />
          <AskedQuestions />
          <GettingStarted showGraphic={false} />
          <Footer />
        </main>
      </StyledRoot>
    </ThemeProvider>
  )
};

const StyledRoot = styled.div``;

export default AboutPage;
