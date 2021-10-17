import React, {useEffect, useState, useRef} from "react"
import styled, {keyframes} from 'styled-components';
import Button from './../../common/Button/Button';
import {breakpoints} from './../../../utils/theme';
import LogoDiscord from './../../../images/landing/svg/Logo-Discord.svg';
import LogoKeybase from './../../../images/landing/svg/Logo-Keybase.svg';
import LogoDAOtalk from './../../../images/landing/daotalk.png';

import HeroLeftGraphic from './../../../images/landing/custom_exports/LeftHeroImage.png';
import HeroRightGraphic from './../../../images/landing/custom_exports/RightHeroImage.png';
import GlowMobile from './../../../images/GlowMobileHero.png';

import HeroSquare1 from './../../../images/hero/Glowing rectangles 1.png';
import HeroSquare2 from './../../../images/hero/Glowing rectangles 2.png';
import HeroSquare3 from './../../../images/hero/Glowing rectangles 3.png';
import GradientBack from './../../../images/hero/Glowing.png';

const IndexHero = (props) => {

    const [viewportWidth, setViewportWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(null);
    const [windowWidth, setWindowWidth] = useState(null);

    const LeftGraphicRef = useRef(null);

    useEffect(() => {
        let windowWidth = window.innerWidth;
        setWindowWidth(windowWidth);
        window.addEventListener('resize', (e) => {
            setWindowWidth(window.innerWidth);
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, []);

    const listenToScroll = (e) => {
        let scrollPosition = window.scrollY;
        setScrollPosition(scrollPosition);
    };


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

    const scrollTo = (targetId) => {
        let element = document.getElementById(targetId);
        element.scrollIntoView({
            behavior: 'smooth'
        })
    };
    
    const links = [
        {
            alt: 'Discord',
            logoImg: LogoDiscord,
            to: 'https://discord.gg/4QXEJQkvHH'
        },
        {
            alt: 'KeyBase',
            logoImg: LogoKeybase,
            to: 'https://keybase.io/team/dx_dao'
        },
        {
            alt: 'DAO Talk',
            logoImg: LogoDAOtalk,
            to: 'https://daotalk.org/c/dx-dao/15'
        }
    ];

    return (
        <StyledIndexHero className="hero full-width" scrollPosition={scrollPosition}>
            <div className="main-width hero-content">
                <span className="pre-heading">The first <br/>super-scalable collective</span>
                <h1 className="heading">We decentralize DeFi</h1>
                <p>DXdao is a decentralized autonomous organization, or DAO, that develops, governs, and grows DeFi products. Spawned in May of 2019, DXdao is a highly scalable collective focused on the DeFi ecosystem.</p>
                <Button 
                    external
                    to={'https://discord.gg/4QXEJQkvHH'}
                    label={'Join Our Discord'} type={'primary'} />
                <div 
                    className="hero-footer"
                >
                    <span>
                        Join the community
                    </span>
                    <div className="line"></div>
                    <div className="community-icons">
                        <ul>
                            {links.map((link, i) => (
                                <li key={i}>
                                    <Button 
                                        className={'community-icon-button'}
                                        type="icon" 
                                        to={link.to}
                                        iconImage={link.logoImg}
                                        external
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero-background">
                <div 
                    data-aos={'fade'}
                    className="blue-gradient"
                />
                <div ref={LeftGraphicRef} className={'left-graphic hero-lateral-graphic'}>
                    <div className={'square-bottom'} 
                        style={{
                            left: scrollPosition / 5,
                            backgroundSize: windowWidth < 1365 ? 
                                '80%' :
                                '100%',
                            backgroundPosition: windowWidth < 1365 ? 
                                '-40px center' :
                                'center',
                        }}
                    />
                    <div className={'square-middle'} 
                        style={{
                            left: -80 + (scrollPosition / 3),
                            backgroundSize: windowWidth < 1365 ? 
                                '80%' :
                                '100%',
                            backgroundPosition: windowWidth < 1365 ? 
                                '-40px center' :
                                'center',
                        }}
                    />
                    <div className={'square-top'}
                        style={{
                            left: windowWidth < 1365 ? 
                                0 + (scrollPosition / 2) :
                                180 + (scrollPosition / 2),
                            backgroundSize: windowWidth < 1365 ? 
                                '140%' :
                                'unset',
                            backgroundPosition: windowWidth < 1365 ? 
                                '0px calc(50% - 10px)' :
                                'center',
                        }} 
                    />
                </div>
                <div className="right-graphic">
                    <div className={'square-bottom'} 
                        style={{
                            left: scrollPosition / 5,
                            backgroundSize: windowWidth < 1365 ? 
                                '80%' :
                                '100%',
                            backgroundPosition: windowWidth < 1365 ? 
                                '-40px center' :
                                'center',
                        }}
                    />
                    <div className={'square-middle'} 
                        style={{
                            left: -80 + (scrollPosition / 3),
                            backgroundSize: windowWidth < 1365 ? 
                                '80%' :
                                '100%',
                            backgroundPosition: windowWidth < 1365 ? 
                                '-40px center' :
                                'center',
                        }}
                    />
                    <div className={'square-top'}
                        style={{
                            left: windowWidth < 1365 ? 
                                0 + (scrollPosition / 2) :
                                180 + (scrollPosition / 2),
                            backgroundSize: windowWidth < 1365 ? 
                                '140%' :
                                'unset',
                            backgroundPosition: windowWidth < 1365 ? 
                                '0px calc(50% - 10px)' :
                                'center',
                        }} 
                    />
                </div>
            </div>
        </StyledIndexHero>
    );
};

const fadeInLeft = keyframes`
    0% {transform: translateX(200px); opacity: 0;}
    100% {transform: translateX(0px); opacity: 1;}
`;

const fadeInRight = keyframes`
    0% {transform: translateX(200px); opacity: 0;};
    100% {transform: translateX(0px); opacity: 1;};
`;

const fadeUp = keyframes`
    0% {transform: translateY(200px); opacity: 0;};
    100% {transform: translateY(0px); opacity: 1;};
`;

const StyledIndexHero = styled.section`
    padding-top: 132px;
    text-align: center;
    position: relative;
    @media screen and (max-width: ${breakpoints.md}) {
        padding-top: 32px;
    }
    && .hero-content {
        width: 860px;
        position: relative;
        z-index: 2;
        opacity: 0;
        animation: ${fadeUp} 0.5s 1s forwards ease-out;
        @media screen and (max-width: ${breakpoints.xl}) {
            width: 792px;
        }
        @media screen and (max-width: 1140px) {
            width: 554px;
        }
        @media screen and (max-width: ${breakpoints.s}) {
            width: 100%;
        }
        .pre-heading {
            font-size: 14px;
            line-height: 23px;
            text-transform: uppercase;
            letter-spacing: 0.5em;
            background: linear-gradient(226.37deg, #FDA34B 15.42%, #FF7882 95.96%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            white-space: nowrap;
            br {
                display: none;
                @media screen and (max-width: ${breakpoints.xs}) {
                    display: unset;
                }
            }
            @media screen and (max-width: ${breakpoints.md}) {
                text-align: left;
                display: block;
                line-height: 20.4px;
                white-space: unset;
            }
            @media screen and (max-width: ${breakpoints.s}) {
                font-size: 12px;
                width: 100%;
            }
            @media screen and (max-width: ${breakpoints.xs}) {
                margin-bottom: 36px;
            }
        }
        .heading {
            font-size: 68px;
            line-height: 82px;
            background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 500;
            margin-top: 16px;
            margin-bottom: 24px;
            @media screen and (max-width: ${breakpoints.md}) {
                text-align: left;
                display: block;
                font-size: 50px;
                line-height: 60px;
            }
        }
        p {
            color: ${(props) => (props.theme.blueGray)};
            font-size: 22px;
            line-height: 44px;
            font-weight: 300;
            margin-bottom: 64px;
            font-family: 'Montserrat';
            @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                width: 545px;
                margin-left: auto;
                margin-right: auto;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                text-align: left;
                display: block;
                font-size: 16px;
                line-height: 28px;
                width: 100%;
                max-width: 592px;
                margin-left: 0;
            }
        }
        .button {
            @media screen and (max-width: ${breakpoints.md}) {
                text-align: left;
                .label {
                    font-size: 12px;
                }
            }
            a {
                width: unset;
            }
        }
        .hero-footer {
            margin-top: 106px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 29px;
            @media screen and (max-width: ${breakpoints.md}) {
                justify-content: flex-start;
            }
            span {
                text-transform: uppercase;
                color: ${(props) => (props.theme.blueGray)};
                font-size: 12px;
                letter-spacing: 1px;
                @media screen and (max-width: ${breakpoints.md}) {
                    white-space: nowrap;
                }
            }
            .line {
                background: linear-gradient(226.37deg, #FDA34B 15.42%, #FF7882 95.96%);
                width: 60px;
                height: 1px;
                margin: 0 22px;
                @media screen and (max-width: ${breakpoints.md}) {
                    width: 24px;
                }
            }
            .community-icons {
                ul {
                    list-style: none;
                    display: flex;
                    li {
                        margin: 0 7px;
                        .button {
                            opacity: 0.7;
                            transition: 0.25s ease-in-out opacity;
                            &:hover {
                                opacity: 1;
                            }
                            img {
                                max-width: 31px;
                            }
                        }
                        &:last-child {
                            margin-right: 0;
                        }
                        &:first-child {
                            margin-left: 0;
                        }
                    }
                }
            }
        }
    }
    .hero-background {
        position: absolute;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        pointer-events: none;
        .blue-gradient {
            width: 100vw;
            height: 100vh;
            background-image: url('${GlowMobile}');
            position: absolute;
            top: -120px;
            right: 0px;
            pointer-events: none;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: top right;
            @media screen and (max-width: ${breakpoints.md}) {
                top: 0;
                top: -141px;
                transform: scale(2);
                background-image: url('${GlowMobile}');
                background-size: cover;
            }
        }
        .left-graphic,
        .right-graphic {
            width: 420px;
            height: 720px;
            position: absolute;
            top: -120px;
            pointer-events: none;
            @media screen and (max-width: ${breakpoints.l}) {
                width: 300px;
                height: 700px;
                top: 0;
                background-size: cover;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                display: none;
            }
        }
        .left-graphic {
            transform: scaleX(-1);
            div {
                animation: ${fadeInLeft} 0.5s forwards ease-out;
            }
        }
        .right-graphic {
            div {
                animation: ${fadeInRight} 0.5s forwards ease-out;
            }
        }
        .left-graphic,
        .right-graphic {
            left: -90px;
            div {
                position: absolute;
                background-position: center;
                background-repeat: no-repeat;
                opacity: 0;
            }
            .square-bottom {
                background-image: url('${HeroSquare3}');
                width: 820px;
                height: 790px;
                top: calc(50% - (790px / 2));
                left: 0px;
                z-index: 1; 
                animation-delay: 1s;
            }
            .square-middle {
                background-image: url('${HeroSquare2}');
                width: 800px;
                height: 800px;
                top: calc(50% - (800px / 2));
                left: -72px;
                z-index: 2;
                animation-delay: 1.25s;
            }
            .square-top {
                background-image: url('${HeroSquare1}');
                width: 300px;
                height: 300px;
                top: 210px;
                left: 180px;
                z-index: 5;
                background-size: 600px;
                animation-delay: 1.5s;
            }
            .gradient-background {
                background-image: url('${GradientBack}');
                width: 2095px;
                height: 1645px;
                top: 210px;
                left: 86px;
                z-index: 5;
                background-size: 400px;
            }
        }
        .right-graphic {
            left: unset;
            right: -90px;
            top: -100px;
            @media screen and (max-width: ${breakpoints.l}) {
                top: 0;
            }
        }
    }
`;

export default IndexHero;
