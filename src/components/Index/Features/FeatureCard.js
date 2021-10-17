import React, { Fragment, useState, useEffect } from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from "../../common/Button/Button";
import {breakpoints} from "./../../../utils/theme";

const FeatureCard = (props) => {
    const { desktopImg, mobileImg, title, description, buttons, position, className } = props;

    let [viewportWidth, setViewportWidth] = useState(null);
    let [isMobile, setIsMobile] = useState(null);

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

    return (
        <StyledFeatureCardWrapper 
            className={`image-position-${position} ${className}`}
            desktopImg={desktopImg}
            mobileImg={mobileImg}
        >
            <section className="feature-wrapper"  >
                <section 
                    className="feature-image-wrapper" 
                    data-aos="fade-up" 
                    data-aos-offset={isMobile ? "600" : "-1200"}
                >
                    <div className="feature-image"/>
                </section>
                <section className="feature-content">
                    <h2 className="title" data-aos="fade-up" data-aos-delay={isMobile ? "0" : "250"}>{title}</h2>
                    <p className="description" data-aos="fade-up" data-aos-delay={isMobile ? "0" : "500"}>{description}</p>
                    <section className="cta-container" data-aos="fade-up" data-aos-delay={isMobile ? "0" : "750"}>
                        {buttons.map((button, i) => (
                            <div 
                                className={'cta-row'} data-aos="fade-up" data-aos-delay={isMobile ? "0" : "200"} key={`button-` + i}
                            >
                                <Button 
                                    size={button.size} 
                                    type={button.type} 
                                    label={button.label} 
                                    to={button.to}
                                    external
                                />
                                {button.infoText && 
                                    <span className="cta-text">{button.infoText}</span>
                                }
                            </div>)
                        )}
                    </section>
                </section>
            </section>
        </StyledFeatureCardWrapper>
    )
};

FeatureCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.any,
    description: PropTypes.string,
    position: PropTypes.oneOf(['right', 'left']),
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            size: PropTypes.string,
            type: PropTypes.string,
            infoText: PropTypes.string
        }))
};

const StyledFeatureCardWrapper = styled.section`
    display: flex;
    position: relative;
    z-index: 0;
    margin-bottom: 450px;
    @media screen and (max-width: ${breakpoints.l}) {
        margin-bottom: 384px;
    }
    @media screen and (max-width: ${breakpoints.md}) {
        margin-bottom: 52px;
    }
    &.image-position-left {
        .feature-image-wrapper {
            left: -138px;
            @media screen and (max-width: ${breakpoints.l}) {
                left: -190px;
                transform: scale(0.95) !important;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                transform: scale(1) !important;
                left: -100px;
            }
        }
        .feature-content {
            margin-left: auto;
        }
    }
    &.image-position-right {
        .feature-image-wrapper {
            right: -138px;
            @media screen and (max-width: ${breakpoints.l}) {
                right: -160px;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                right: -100px;
            }
        }
    }
    .feature-wrapper {
        display: flex; 
        justify-content: space-between;
        position: relative;
        width: 100%;
        @media screen and (max-width: ${breakpoints.md}) {
            position: relative;
            flex-direction: column;
            justify-content: unset;
        }
        .feature-image-wrapper {
            position: absolute;
            width: 900px;
            height: 900px;
            top: -220px;
            pointer-events: none;
            @media screen and (max-width: ${breakpoints.l}) {
                width: 700px;
                height: 700px;
                top: -160px;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                width: calc(100% + 18px);
                height: 555px;
                position: absolute;
                top: -170px;
                left: -20px;
            }
            .feature-image {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url('${(props) => (props.desktopImg)}');
                @media screen and (max-width: ${breakpoints.md}) {
                    background-image: url('${(props) => (props.mobileImg)}');
                    width: inherit;
                    height: inherit;
                    background-size: contain;

                }
            }
        }
        .feature-content {
            display: flex;
            flex-direction: column;
            width: 600px;
            position: relative;
            z-index: 0;
            @media screen and (max-width: ${breakpoints.l}) {
                width: 484px;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                width: 100%;
                margin-top: 365px;
                padding: 0 16px 0;
            }
            @media screen and (max-width: ${breakpoints.xs}) {
                margin-top: 325px;
            }
            .title {
                font-size: 50px;
                line-height: 60px;
                background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 24px;
                font-weight: 400;
                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: 38px;
                    line-height: 45px;
                }
            }
            .description {
                color: ${(props) => (props.theme.blueGray)};
                font-size: 16px;
                line-height: 28px;
                font-weight: 300;
                margin-bottom: 64px;
                font-family: 'Montserrat';
                @media screen and (max-width: ${breakpoints.md}) {
                    margin-bottom: 40px;
                }
            }
            .cta-container {
                .cta-row {
                    display: flex;
                    align-items: center;
                    margin-bottom: 40px;
                    @media screen and (max-width: ${breakpoints.md}) {
                        margin-bottom: 16px;
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .button {
                        width: 132px;
                        &.secondary {
                            width: 138px;
                            @media screen and (max-width: ${breakpoints.md}) {
                                width: 112px;
                            }
                        }
                        .label {
                            font-size: 12px;
                        }
                    }
                }
                .cta-text {
                    font-size: 16px;
                    line-height: 28px;
                    color: rgba(229, 229, 229, 1);
                    margin-left: 32px;
                    @media screen and (max-width: ${breakpoints.md}) {
                        margin-left: 16px;
                        font-size: 14px;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
`;

export default FeatureCard; 