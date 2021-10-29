import React, {useEffect, useState, useRef} from "react"
import styled from 'styled-components';
import CardContent from "../CardContent/CardContent";
import Left from "../../../images/landing/svg/Icons-Getting_Started_Community.svg";
import Middle from "../../../images/landing/svg/Icons-Getting_Started_Contributor.svg";
import Right from "../../../images/landing/svg/Icons-Getting_Started_Share.svg";
import GettingStartedBackground from '../../../images/getting_started/getting_started_bg.png'
import GettingStartedGraphic from '../../../images/getting_started/getting_started.png'
import LeftLine from "../../../images/landing/custom_exports/LineLeft.png";
import RightLine from "../../../images/landing/custom_exports/LineRight.png";
import {breakpoints} from "./../../../utils/theme";

import GettingStartedMask from '../../../images/getting_started/GettingStartedMask.png'
import Planet from '../../../images/getting_started/planet.png'
import Star from '../../../images/getting_started/star.png'

const GettingStarted = (props) => {

    let [viewportWidth, setViewportWidth] = useState(null);
    let [isMobile, setIsMobile] = useState(null);
    let [getStartedPosition, setGetStartedPosition] = useState(null);

    const [scrollPosition, setScrollPosition] = useState(null);
    // const [windowsWidth, setWindowsWidth] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, []);

    const listenToScroll = (e) => {
        let scrollPosition = window.scrollY;
        setScrollPosition(scrollPosition);
        // console.log('Scroll: ' + scrollPosition)
        // console.log('Get Started: ' + getStartedPosition)
        // console.log('Offset: ' + (getStartedPosition - scrollPosition))
    };

    const getStartedRef = useRef(null);

    useEffect(() => {
        if (window) {
            window.addEventListener('resize', (e) => {
                setViewportWidth(e.target.innerWidth)
            });
        }
    }, []);
    
    useEffect(() => {
        setIsMobile(viewportWidth < 992);
    }, [viewportWidth]);

    useEffect(() => {
        if (getStartedRef.current) {
            const rect = getStartedRef.current.getBoundingClientRect();
            // console.log(rect);
            const top = rect.y;
            // console.log(getStartedRef.current.scrollTop)
            setGetStartedPosition(top)
        }
    }, [getStartedRef.current])

    const getting = [
        {
            img: Left,
            title: <span>Join the <br/>community</span>,
            description: 'Welcome to a growing global community with no barrier to entry! Everyone is encouraged to express their opinions and participate in any active conversation about DXdao or its products.',
            positionImg: 'left',
            positionText: 'left',
            primaryButton: {
                size: 'small',
                type: 'secondary',
                label: 'DISCORD',
                to: 'https://discord.gg/4QXEJQkvHH'
            },
            secondaryButton: {
                size: 'small',
                type: 'outline',
                label: 'LEARN MORE',
                to: 'https://dxdocs.eth.link/'
            }
        },
        {
            img: Middle,
            title: <span>Become a<br/> contributor</span>,
            description: 'As a transparent and unstoppable entity DXdao is always searching for talent in the Web3 space. Want to make your mark in the future of work? Join us.',
            positionImg: 'left',
            positionText: 'left',
            primaryButton: {
                size: 'small',
                type: 'secondary',
                label: 'KEYBASE',
                to: 'https://keybase.io/team/dx_dao'
            },
            secondaryButton: {
                size: 'small',
                type: 'outline',
                label: 'LEARN MORE',
                to: 'https://dxdocs.eth.link/docs/ContributorHub/ '
            }
        },
        {
            img: Right,
            title: <span>Share what you are building</span>,
            description: 'Are you building something relevent to DeFi, Web3, and DAO’s? DXdao may be interested in incubating or funding your project through DXventures.',
            positionImg: 'left',
            positionText: 'left',
            primaryButton: {
                size: 'small',
                type: 'secondary',
                label: 'DAOTALK',
                to: 'https://daotalk.org/c/dx-dao/15'
            },
            secondaryButton: {
                size: 'small',
                type: 'outline',
                label: 'LEARN MORE',
                to: 'https://dxdocs.eth.link/docs/DXventures/'
            }
        }
    ];

    return (
        <StyledGettingStartedWrapper className="full-width" showGraphic={props.showGraphic} showGraphicMobile={props.showGraphicMobile}>
            <section ref={getStartedRef} className="get-started-graphic-wrapper" data-aos="fade-up" data-aos-offset={isMobile ? 0 : 300}>
                <div className="get-started-background" />
                <div className="get-started-graphic" />
                <div className="planet" style={{
                    backgroundPosition: `calc(50% - 60px) calc(((${scrollPosition}px - ${getStartedPosition}px) / 8) + 60px)`
                }}/>
                <div className="star" style={{
                    backgroundPosition: `50% calc(((${scrollPosition}px - ${getStartedPosition}px) / 20) + 20px)`
                }}/>
            </section>
            <section id="getting-started-link-target" className="main-width starter-wrapper">
                <section className="get-started-title" data-aos="fade-up">
                    <span>Getting Started</span>
                </section>
                <section className="get-started-cards" data-aos="fade">
                    {getting.map((item, index) => {
                        return (
                            <CardContent
                                dataAosDelay={isMobile ? 0 : (index * 400) + 100}
                                key={`card-`+ index}
                                img={item.img}
                                title={item.title}
                                description={item.description}
                                positionImg={item.positionImg}
                                positionText={item.positionText}
                                primaryButton={item.primaryButton}
                                secondaryButton={item.secondaryButton}
                                cardType={'simple'} 
                            />
                        );
                    })}
                </section>
            </section>
        </StyledGettingStartedWrapper>
    )
};

GettingStarted.defaultProps = {
    showGraphic: true,
    showGraphicMobile: true,
}

const StyledGettingStartedWrapper = styled.section`
    display: flex;
    justify-content: center;
    margin-bottom: 240px;
    flex-direction: column;
    position: relative;
    margin-top: 170px;
    @media screen and (max-width: ${breakpoints.l}) {
        margin-bottom: 140px;
        margin-top: 0;
    }
    @media screen and (max-width: ${breakpoints.md}) {
        /* margin-top: 62px; */
        margin-bottom: 104px;
    }
    .get-started-graphic-wrapper {
        pointer-events: none;
        width: 100%;
        position: absolute;
        top: -220px;
        z-index: 1;
        display: ${(props) => (props.showGraphic ? 'block' : 'none')};
        @media screen and (max-width: ${breakpoints.md}) {
            flex-direction: column;
            top: 110px;
            height: 290px;
            display: ${(props) => (props.showGraphicMobile ? 'block' : 'none')}
        }
        @media screen and (max-width: ${breakpoints.s}) {
            top: -70px;
        }
        .get-started-background {
            pointer-events: none;
            width: inherit;
            height: 2740px;
            background: url('${GettingStartedBackground}');
            background-size: 1920px auto;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            top: -60px;
            @media screen and (max-width: ${breakpoints.l}) {
                top: -230px;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                top: -310px;
            }
            @media screen and (max-width: ${breakpoints.s}) {
                top: -340px;
            }
        }
        .get-started-graphic {
            pointer-events: none;
            width: inherit;
            height: 700px;
            width: 930px;
            left: calc(50% - (930px / 2));
            top: 170px;
            background: url('${GettingStartedMask}');
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            z-index: 10;
            @media screen and (max-width: ${breakpoints.l}) {
                width: 744px;
                height: 500px;
                left: calc(50% - (744px / 2));
                top: 110px;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                width: 595px;
                height: 500px;
                left: calc(50% - (595px / 2));
                top: 40px;
            }
            @media screen and (max-width: ${breakpoints.s}) {
                background: url('${GettingStartedGraphic}');
                width: 274px;
                height: 500px;
                left: calc(50% - (274px / 2));
                top: 180px;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }
        .planet,
        .star {
            position: absolute;
            background: url('${Planet}');
            width: 388px;
            height: 388px;
            top: 0;
            left: 0;
            background-size: cover;
            left: calc(50% - (388px / 2));
            top: 326px;
            z-index: 2;
            background-repeat: no-repeat;
            /* background: blue; */
            clip-path: polygon(
                calc(50% + 0.5px) -1px, 
                calc(100% + 1px) calc(50% - 0.5px), 
                calc(50% + 1px) 100%, 
                0 calc(50% - 1px));
            @media screen and (max-width: ${breakpoints.l}) {
                width: 311px;
                height: 311px;
                left: calc(50% - (311px / 2));
                top: 204px;
                clip-path: polygon(
                    calc(50% + 0.5px) 0px, 
                    calc(100%) calc(50% + 0px), 
                    calc(50% + 1px) 100%, 
                    0 calc(50% + 1px)
                );
            }
            @media screen and (max-width: ${breakpoints.md}) {
                width: 248px;
                height: 248px;
                left: calc(50% - (248px / 2));
                top: 166px;
                clip-path: polygon(
                    calc(50% + 0.5px) -1px, 
                    calc(100%) calc(50% - 0.5px), 
                    calc(50% + 1px) 100%, 
                    0 calc(50% - 1px)
                );
            }
            @media screen and (max-width: ${breakpoints.s}) {
                width: 118px;
                height: 118px;
                left: calc(50% - (118px / 2));
                top: 230px;
                display: none;
            }
        }
        .star {
            background: url('${Star}');
            background-repeat: no-repeat;
        }
    }
    .starter-wrapper {
        display: flex;
        justify-content: center;
        margin-top: ${(props) => (props.showGraphic ? '640px' : '0')};
        flex-direction: column;
        position: relative;
        z-index: 2;
        @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
            margin-top: ${(props) => (props.showGraphic ? '400px' : '0')};
        }
        @media screen and (max-width: ${breakpoints.md}) {
            margin-top: ${(props) => (props.showGraphicMobile ? '600px' : '0')};
            padding: 0 32px;
        }
        @media screen and (max-width: ${breakpoints.s}) {
            margin-top: ${(props) => (props.showGraphicMobile ? '330px' : '0')};
            padding: 0 32px;
        }
        .get-started-title {
            margin-bottom: 120px;
            @media screen and (max-width: ${breakpoints.md}) {
                margin-bottom: 80px;
            }
            span {
                background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 58px;
                line-height: 70px;
                font-weight: 400;
                display: inline-block;
                width: 100%;
                text-align: center;
                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: 38px;
                    line-height: 46px;
                }
            }
        }
        .get-started-cards {
            display: flex;
            justify-content: center;
            position: relative;
            @media screen and (max-width: ${breakpoints.md}) {
                flex-direction: column;
            }
            &:before,
            &:after {
                width: 385px;
                height: 483px;
                content: '';
                position: absolute;
                top: -96px;
                background-size: cover;
                @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                    width: 352px;
                    background-size: contain;
                }
                @media screen and (max-width: ${breakpoints.md}) {
                    display: none;
                }
            }
            &:before {
                background-image: url('${LeftLine}');
                left: 30px;
                @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                    left: 0;
                }
            }
            &:after {
                background-image: url('${RightLine}');
                right: 30px;
                @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                    right: 0;
                }
            }
            .card {
                width: 300px;
                margin: 0 24px;
                @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                    width: 211px;
                }  
                @media screen and (max-width: ${breakpoints.md}) {
                    margin: 0;
                    width: 100%;
                    margin-bottom: 102px;
                }              
                &:first-child {
                    margin-left: 0;
                }
                &:last-child {
                    margin-right: 0;
                }
                .card-header {
                    display: flex;
                    position: relative;
                    @media screen and (max-width: ${breakpoints.md}) {
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 30px;
                    }
                    .logo {
                        margin-bottom: 32px;
                        background-size: cover;
                        width: 160px;
                        height: 160px;
                        position: relative;
                        left: -48px;
                        @media screen and (max-width: ${breakpoints.md}) {
                            min-width: 160px;
                            position: absolute;
                            top: -54px;
                        }
                    }
                    .title {
                        margin-bottom: 16px !important;
                        line-height: 34.8px;
                        font-size: 29px;
                        height: unset;
                        background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        @media screen and (max-width: ${breakpoints.md}) {
                            left: 100px;
                            font-size: 22px;
                            line-height: 26px;
                            width: 180px;
                            margin-bottom: 0 !important;
                        }
                    }
                }
                .title,
                .description,
                .card-footer {
                    position: relative;
                    top: -56px;
                    @media screen and (max-width: ${breakpoints.md}) {
                        top: 0;
                    }
                }
                .description {
                    height: 174px;
                    font-size: 16px;
                    @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                        height: 211px;
                    }
                    @media screen and (max-width: ${breakpoints.md}) {
                        height: unset;
                    }
                }
                .card-footer {
                    justify-content: flex-start;
                    @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                        flex-direction: column;
                    }
                    .button {
                        &:first-child {
                            margin-right: 16px;
                            @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                                margin: 0;
                                margin-bottom: 16px;
                            }
                        }
                        .label {
                            font-size: 12px;
                        }
                        @media screen and (max-width: ${breakpoints.l}) {
                            width: 138px;
                        }
                        @media screen and (max-width: ${breakpoints.md}) {
                            &:first-child {
                                margin-right: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
 
`;

export default GettingStarted;