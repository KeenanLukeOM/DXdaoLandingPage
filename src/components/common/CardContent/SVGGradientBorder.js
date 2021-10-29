import React from 'react';
import styled from 'styled-components';

const SVGGradientBorder = (props) => {
    return (
        <StyledSVGGradientBorder>
            <svg width="0" height="0">
                <linearGradient id="grad" x1="0" x2="100%" y1="0" y2="100%">
                    <stop offset="0%"/>
                    <stop offset="25%"/>
                    <stop offset="50%"/>
                    <stop offset="75%"/>
                    <stop offset="100%"/>
                </linearGradient>
                <symbol id="border" overflow="visible">
                    <rect width="100%" height="100%" rx={props.borderRadius} ry={props.borderRadius}/>
                </symbol>
            </svg>
            <svg className="module-border"><use href="#border"/></svg>
        </StyledSVGGradientBorder>
    )
}

const StyledSVGGradientBorder = styled.div`
    height: 0;
    .module-border {
        position: absolute;
        overflow: visible;
        left: 0;
        width: 100%;
        top: 0;
        height: 100%;
        fill: none;
        stroke: url(#grad);
        stroke-width: 1px;
        pointer-events: none;
    }
    #grad stop:nth-child(1) {
        /* stop-color: #374284; */
        stop-color: rgba(61, 90, 254, 0.05);
    }
    #grad stop:nth-child(2) {
        /* stop-color: rgba(61, 90, 254, 1); */
        stop-color: rgba(61, 90, 254, 1);
    }
    #grad stop:nth-child(3) {
        /* stop-color: rgba(169, 182, 255, 0.19); */
        stop-color: rgba(169, 182, 255, 0.19);
    }
    #grad stop:nth-child(4) {
        /* stop-color: rgba(61, 90, 254, 0.04); */
        stop-color: rgba(61, 90, 254, 0.04);
    }
    #grad stop:nth-child(5) {
        /* stop-color: rgba(61, 90, 254, 0.05); */
        stop-color: rgba(61, 90, 254, 0.05);
    }
`;

export default SVGGradientBorder;