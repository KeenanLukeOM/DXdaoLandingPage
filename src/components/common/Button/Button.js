import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        to, 
        label, 
        type, 
        size, 
        dataAOS, 
        dataAOSDelay, 
        iconImage, 
        title, 
        className,
        onClick,
        external,
        elementTag,
        disabled } = props;

    return (
        <StyledButtonWrapper 
            data-aos={dataAOS} 
            data-aos-delay={dataAOSDelay}
            className={`button ${type} ${size} ${className} ${disabled && 'disabled'}`}
        >
            <a href={to && to} onClick={onClick && onClick} title={title} target={external && '_blank'}>
                {type == 'secondary' && (
                    <>
                        <svg width="0" height="0">
                            <linearGradient id="button-grad" x1="0" x2="100%" y1="0" y2="100%">
                                <stop offset="0%"/>
                                <stop offset="25%"/>
                                <stop offset="50%"/>
                                <stop offset="75%"/>
                                <stop offset="100%"/>
                            </linearGradient>
                            <symbol id="button-border" overflow="visible">
                                <rect width="100%" height="100%" rx={'8px'} ry={'8px'}/>
                            </symbol>
                        </svg>
                        <svg className="button-border"><use href="#button-border"/></svg>
                    </>
                )}
                {type == 'outline' && (
                    <>
                        <svg width="0" height="0">
                            <linearGradient id="button-grad-outline" x1="100%" x2="0" y1="100%" y2="0">
                                <stop offset="0%"/>
                                <stop offset="25%"/>
                                <stop offset="50%"/>
                                <stop offset="75%"/>
                                <stop offset="100%"/>
                            </linearGradient>
                            <symbol id="button-border-outline" overflow="visible">
                                <rect width="100%" height="100%" rx={'8px'} ry={'8px'}/>
                            </symbol>
                        </svg>
                        <svg className="button-border"><use href="#button-border-outline"/></svg>
                    </>
                )}
                {type != 'icon' ? (
                    <>
                        <span className="label">{label}</span>
                        <span className="default-background"></span>
                        <span className="active-background"></span>
                        <span className="hover-background"></span>
                    </>
                ) : (
                    <img src={iconImage}/>
                )}
            </a>
        </StyledButtonWrapper>
    )
};

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'icon']),
    size: PropTypes.oneOf(['regular', 'small']),
    label: PropTypes.string,
    iconImage: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    elementTag: PropTypes.oneOf(['a', 'button'])
};

Button.defaultProps = {
    type: 'primary',
    size: 'regular',
    elementTag: 'a'
}

const StyledButtonWrapper = styled.div` 
    &.disabled {
        opacity: 0.5;
        pointer-events: none;
    }
    a {
        cursor: pointer;
        /* opacity: 0.8; */
        transition: 0.35s ease-in-out opacity;
        &:hover {
            opacity: 1;
        }
    }
    &:not(.icon) a {
        height: 46px;
        display: inline-block;
        padding: 0 24px;
        line-height: 46px;
        white-space: nowrap;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.08em;
        position: relative;
        z-index: 3;
        transition: 0.35s ease-in-out all;
        width: 100%;
        text-align: center;
        &:hover {
            .hover-background {
                opacity: 1;
            }
        }
        &:active {
            .active-background {
                opacity: 1;
            }
        }
        .default-background,
        .active-background,
        .hover-background {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            border-radius: 8px;
            transition: 0.35s ease-in-out all;
        }
        .active-background,
        .hover-background {
            opacity: 0;
        }
        .label {
            position: relative;
            z-index: 3;
        }
        /* Button Shadows */
        &:after,
        &:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    }
    &.small a {
        height: 40px;
        line-height: 40px;
    }
    &.primary a {
        .label {
            text-shadow: 0px 2px 2px #E2590099;
        }
        .default-background {
            background: linear-gradient(226.37deg, #FF9833 15.42%, #FF5B67 95.96%);
            z-index: 0;
        }
        .hover-background {
            background: linear-gradient(226.37deg, #FDA34B 15.42%, #FF7882 95.96%);
            z-index: 1;
        }
        .active-background {
            background: linear-gradient(226.37deg, #FF6433 15.42%, #FF5B67 95.96%);
            z-index: 2;
        }
        &:after {
            box-shadow: 2px -2px 20px -1px #FF78827D;
        }
        &:before {
            box-shadow: -7px 6px 13px 0px #040D2DB2;
        }
    }
    &.secondary a {
        .label {
            text-shadow: none;
        }
        .default-background {
            background: radial-gradient(49.98% 49.98% at 49.97% 49.97%, #304FFE 0%, #3D5AFE 100%);
            z-index: 0;
        }
        .hover-background {
            background: linear-gradient(253.19deg, rgba(99, 123, 255, 0.85) 15.26%, #2748FF 117.65%);
            z-index: 1;
        }
        .active-background {
            background: #1F3CDD;
            z-index: 2;
        }
        &:after {
            box-shadow: 0px 1.17857px 2.35714px rgba(0, 0, 0, 0.05);
        }
        &:before {
            box-shadow: none;
        }
        .button-border {
            position: absolute;
            overflow: visible;
            left: 0;
            width: 100%;
            top: 0;
            height: 100%;
            fill: none;
            stroke: url(#button-grad);
            stroke-width: 2px;
        }
        #button-grad stop:nth-child(1) {
            /* stop-color: #374284; */
            stop-color: #4D63FF;
        }
        #button-grad stop:nth-child(2) {
            /* stop-color: rgba(61, 90, 254, 1); */
            stop-color: #3A53FF;
        }
        #button-grad stop:nth-child(3) {
            /* stop-color: rgba(169, 182, 255, 0.19); */
            stop-color: #546AFF;
        }
        #button-grad stop:nth-child(4) {
            /* stop-color: rgba(61, 90, 254, 0.04); */
            stop-color: #3A53FF;
        }
        #button-grad stop:nth-child(5) {
            /* stop-color: rgba(61, 90, 254, 0.05); */
            stop-color: #4A61FF;
        }
    }
    &.outline a {
        .label {
            text-shadow: none;
        }
        .default-background {
            z-index: 1;
            background: linear-gradient(260.82deg, rgba(255, 255, 255, 0.15) 2.23%, rgba(255, 255, 255, 0) 92.98%);;
        }
        .hover-background {
            background: linear-gradient(260.06deg, rgba(255, 255, 255, 0.23) 2.11%, rgba(255, 255, 255, 0.08) 94.1%);;
            z-index: 1;
        }
        .active-background {
            background: linear-gradient(260.06deg, rgba(255, 255, 255, 0.23) 2.11%, rgba(255, 255, 255, 0.23) 94.1%);;
            z-index: 2;
        }
        .button-border {
            position: absolute;
            overflow: visible;
            left: 0;
            width: 100%;
            top: 0;
            height: 100%;
            fill: none;
            stroke: url(#button-grad-outline);
            stroke-width: 1px;
        }
        #button-grad-outline stop:nth-child(1) {
            /* stop-color: #374284; */
            stop-color: rgba(61, 90, 254, 0.03);
        }
        #button-grad-outline stop:nth-child(2) {
            /* stop-color: rgba(61, 90, 254, 1); */
            stop-color: rgba(61, 90, 254, 0.6);
        }
        #button-grad-outline stop:nth-child(3) {
            /* stop-color: rgba(169, 182, 255, 0.19); */
            stop-color: rgba(169, 182, 255, 0.6);
        }
        #button-grad-outline stop:nth-child(4) {
            /* stop-color: rgba(61, 90, 254, 0.04); */
            stop-color: rgba(61, 90, 254, 0.6);
        }
        #button-grad-outline stop:nth-child(5) {
            /* stop-color: rgba(61, 90, 254, 0.05); */
            stop-color: rgba(61, 90, 254, 0.03);
        }
    }
    &.icon a {
        height: 28px;
        width: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Button;