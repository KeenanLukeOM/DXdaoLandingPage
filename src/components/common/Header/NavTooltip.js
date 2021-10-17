import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LearnNavigation from './LearnNavigation';

const NavTooltip = (props) => {
    
    const [isContentHovered, setIsContentHovered] = useState(false);
    const {
        tooltipData,
        isVisible,
    } = props;
    
    return (
        <StyledNavTooltip 
            className={`
                ${tooltipData.type} 
                ${isVisible || isContentHovered ? 'show' : ''}`
            }
            onMouseEnter={() => {setIsContentHovered(!isContentHovered)}}
            onMouseLeave={() => {setIsContentHovered(!isContentHovered)}}
        >
            <div className="tooltip-arrow"/>
            <fieldset className="tooltip-container">
                <legend />
                {tooltipData.type == 'simple' && (
                    <ul>
                        {
                            tooltipData.elements.map((element,i) => (
                                <li 
                                    key={i}
                                    className={`tooltip-element`} 
                                >
                                    <a target={element.external && '_blank'} href={element.link}>
                                        <div className="element-image-container">
                                            <img className="element-image" src={element.img}/>
                                        </div>
                                        <div className="element-labels">
                                            <span className="element-name">{element.name}</span>
                                            <span className="element-detail">{element.detail}</span>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                )}
                {tooltipData.type == 'large' && (
                    <LearnNavigation className="tooltip-learn-navigation"/>
                )}
            </fieldset>
        </StyledNavTooltip>
    )
};

const StyledNavTooltip = styled.section`
    position: absolute;
    z-index: 100;
    pointer-events: none;
    top: 100px;
    transition: 0.2s ease-in-out all;
    .tooltip-arrow,
    .tooltip-container {
        background: linear-gradient(163.68deg, rgba(196, 196, 196, 0.32) -89.13%, rgba(61, 90, 254, 0) 111.24%);
;
        opacity: 0;
        transition: 0.2s ease-in-out all;
        pointer-events: none;
        filter: blur(10px);
    }
    .tooltip-arrow {
        position: absolute;
        top: 2px;
        left: calc(50% - 6px);
        width: 16px;
        height: 16px;
        transform: rotate(45deg);
        border-top: 1px solid #B8BEE5;
        border-left: 1px solid #B8BEE5;
        z-index: 10;
        background: rgba(61, 50, 10, 0.1);
        backdrop-filter: blur(20px);
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
    }
    .tooltip-container {
        width: 100%;
        padding: 19px 38px 34px;
        border-radius: 8px;
        border: 1px solid #B8BEE5;
        backdrop-filter: blur(20px);
        position: relative;
        legend {
            padding: 10px;
            width: 16px;
            margin-left: calc(50% - 8px);
            span {
                display: none;
            }
        }
    }
    &.simple {
        width: 356px;
        left: calc(50% - 180px);
        .tooltip-container {
            ul {
                display: flex;
                flex-direction: column;
                .tooltip-element {
                    margin-bottom: 24px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    a {
                        display: flex;
                        align-items: flex-start;
                        &:hover {
                            .element-name {
                                background: unset !important;
                                -webkit-background-clip: unset !important;
                                -webkit-text-fill-color: unset !important;
                                color: white !important;
                            }
                            .element-detail {
                                color: whitesmoke !important;
                            }

                        }
                        .element-image-container {
                            width: 38px;
                            height: 38px;
                            display: inherit;
                            align-items: center;
                            justify-content: center;
                            margin-right: 26px;
                            .element-image {
                                max-width: 38px;
                                max-height: 38px;
                            }
                        }
                        .element-labels {
                            display: flex;
                            flex-direction: column;
                            .element-name {
                                font-size: 16px;
                                font-weight: 400;
                                line-height: 27px;
                                background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                filter: drop-shadow(0 1px 1px black);
                                transition: 0.2s ease-in-out color;
                            }
                            .element-detail {
                                font-size: 14px;
                                font-weight: 400;
                                line-height: 24px;
                                transition: 0.2s ease-in-out color;
                                filter: drop-shadow(0 1px 1px black);
                                color: ${(props) => (props.theme.blueGray)};
                            }
                        }
                    }
                }
            }
        }
    }
    &.large {
        width: 656px;
        left: -480px;
        .tooltip-arrow {
            left: 492px;
        }
        .tooltip-container {
            padding: 26px 24px 24px;
            legend {
                margin-left: calc(464px);
            }
            .tooltip-learn-navigation {
                margin-top: -10px;
            }
            .navigation-column {
                width: unset;
                display: flex;
                flex-direction: column;
                margin-right: 24px;
                padding-left: 24px;
                &:first-child {
                    padding-left: 0;
                    .title-item {
                        &:before {
                            display: none;
                        }
                    }
                }
                .title-item {
                    white-space: nowrap;
                    margin-bottom: 4px;
                    &:before {
                        left: -24px;
                    }
                }
                .navigation-list {
                    flex-direction: column;
                    .navigation-item {
                        margin-bottom: 4px;
                        a {
                            font-size: 12px;
                            line-height: 18px;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
    &.show {
        top: 48px;
        pointer-events: unset;
        .tooltip-arrow,
        .tooltip-container {
            opacity: 1;
            pointer-events: unset;
            filter: blur(0px);
        }
    }

    /* Firefox Workaround */

    @-moz-document url-prefix() { 
        .tooltip-arrow {
            background: #0B1645;
            top: 2px;
        }
        .tooltip-container {
            background: #0B1645;
        }
    }

    /* Safari 7.1+ */

    @media not all and (min-resolution:.001dpcm)
    { @supports (-webkit-appearance:none) {
        .tooltip-arrow {
            background: #0B1645;
            top: 2px;
        }
        .tooltip-container {
            background: #0B1645;
        }
    }}
`;

export default NavTooltip;