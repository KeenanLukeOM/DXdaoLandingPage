import React, {useEffect, useState} from "react"
import styled from 'styled-components';
import HeroGraphicDesktop from './../../../images/about/png/Graphic-Hero-About@1x.png';
import HeroGraphicMobile from './../../../images/about/png/Graphic Hero About@1x.png';
import AboutHeroGradient from './../../../images/about/png/AboutHeroGradient.png';
import AboutHeroGradientMobile from './../../../images/AboutHeroGlowMobile.png';
import { breakpoints } from "../../../utils/theme";

const AboutHero = (props) => {

    let [viewportWidth, setViewportWidth] = useState(null);
    let [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        if (window) {
            setViewportWidth(window.innerWidth);
            window.addEventListener('resize', (e) => {
                setViewportWidth(e.target.innerWidth)
            });
        }
    }, []);
    
    useEffect(() => {
        setIsMobile(viewportWidth < 992);
    }, [viewportWidth]);


    return (
        // This prevents the render 
        // before the proper layout is set
        isMobile != null ? (
            <StyledIndexHero className="hero full-width">
                <section className="main-width hero-content">
                    <div className="hero-content-block">
                        <h1 data-aos={'fade'}>Decentralization first</h1>
                        <p data-aos={'fade'}>
                            DXdao is an on-chain organization that builds and governs DeFi products. DXdao is a collective that transcends borders as does its products, which are globally accessible and permissionless. DXdao strives to build an inclusive global community.
                        </p>
                    </div>
                    <div data-aos={'fade-up'} className={'hero-graphic-mobile'}/>
                </section>
                <div className="hero-graphic-wrapper">
                    <div className="hero-graphic" data-aos={'fade-right'} />
                    <div className="hero-gradient" data-aos={'fade'} />
                </div>
            </StyledIndexHero>
        ) : (<></>)
    );
};

const StyledIndexHero = styled.section`
    margin-bottom: 346px;
    @media screen and (max-width: ${breakpoints.md}) {
        margin-bottom: 128px;
    }
    .hero-graphic-wrapper {
        position: absolute;
        left: 0;
        top: 114px;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        .hero-graphic {
            max-width: 744px;
            width: 30vw;
            height: 485px;
            background-image: url('${HeroGraphicDesktop}');
            background-repeat: no-repeat;
            background-position: left center;
            background-size: contain;
            position: absolute;
            top: calc(223px - 114px);
            left: 0;
            @media screen and (max-width: ${breakpoints.l}) {
                width: 16vw;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                display: none;
            }
        }
        .hero-gradient {
            position: absolute;
            top: -114px;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center right;
            background-image: url('${AboutHeroGradient}');
            pointer-events: none !important;
            @media screen and (max-width: ${breakpoints.md}) {
                top: -80px;
                left: 0;
                background-position: center;
                background-image: url('${AboutHeroGradientMobile}');
                height: 900px;
            }
        }
    }
    .hero-content {
        display: flex;
        @media screen and (max-width: ${breakpoints.md}) {
            flex-direction: column;
        }
        .hero-content-block {
            width: 681px;
            margin-top: 200px;
            margin-left: auto;
            position: relative;
            right: 60px;
            @media screen and (max-width: ${breakpoints.md}) {
                width: 100%;
                right: 0;
                margin-top: 40px;
            }
            h1 {
                background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 68px;
                line-height: 82px;
                margin-bottom: 24px;
                font-weight: 400;
                @media screen and (max-width: ${breakpoints.md}) {
                    font-weight: 500;
                    font-size: 40px;
                    line-height: 48px;
                }
            }
            p {
                color: ${(props) => (props.theme.blueGray)};
                font-size: 22px;
                line-height: 44px;
                width: 630px;
                font-family: 'Montserrat';
                font-weight: 300;
                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: 18px;
                    line-height: 36px;
                    width: 100%;
                }
            }
        }
        .hero-graphic-mobile {
            display: none;
            background-image: url('${HeroGraphicMobile}');
            background-position: center;
            width: 331px;
            height: 445px;
            position: relative;
            top: 0;
            left: 0;
            margin: 16px auto 0;
            @media screen and (max-width: ${breakpoints.md}) {
                display: unset;
                background-image: url('${HeroGraphicMobile}');
            }
        }
    }
`;

export default AboutHero;
