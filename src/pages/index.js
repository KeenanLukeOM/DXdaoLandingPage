import React, {useEffect} from "react"
import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';
import { Helmet } from 'react-helmet';
import './../css/fonts.css';
import './../css/stylesheet.css';
import Header from "./../components/common/Header/Header";
import IndexHero from "../components/Index/IndexHero/IndexHero";
import Breakdown from "./../components/Index/Breakdown/Breakdown";
import Products from "./../components/Index/Products/Products";
import Banner from "./../components/Index/Banner/Banner";
import Features from "./../components/Index/Features/Features";
import Partners from "./../components/Index/Partners/Partners";
import GettingStarted from "./../components/common/GettingStarted/GettingStarted";
import Footer from "./../components/common/Footer/Footer";
// import Favicon from "./../images/isologo.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const IndexPage = () => {

  useEffect(() => {

    setTimeout(() => { AOS.init({
      duration: 500,
    })}, 1000);

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>DXdao | The First Super-Scalable Collective</title>

        <meta name="icon" href="./../images/gatsby-icon.png" />

        <meta property="og:title" content="DXdao | The First Super-Scalable Collective" />
        <meta property="og:image" content="https://i.ibb.co/0Xs9tLQ/Website-Thumbnail-Image.png" />
        <meta property="og:description" content="DXdao is a decentralized autonomous organization, or DAO, that develops, governs, and grows DeFi products. Spawned in May of 2019, DXdao is a highly scalable collective focused on the DeFi ecosystem." />
        <meta property="og:url" content="https://dxdao.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="626" />
        <meta property="og:type" content="website" />
        
        <link rel="preload" as="image" href="/../images/hero/Glowing reactangles 1.png"></link>
        <link rel="preload" as="image" href="/../images/hero/Glowing reactangles 2.png"></link>
        <link rel="preload" as="image" href="/../images/hero/Glowing reactangles 3.png"></link>
        <link rel="preload" as="image" href="/../images/hero/Glowing.png"></link>

      </Helmet>
      <StyledRoot id="root">
        <Header>
          <IndexHero/>
        </Header>
        <main>
          <Breakdown />
          <Products />
          <Banner />
          <Features />
          <Partners />
          <GettingStarted isIndex />
        </main>
        <Footer />
      </StyledRoot>
    </ThemeProvider>
  )
};

const StyledRoot = styled.div``;

export default IndexPage
