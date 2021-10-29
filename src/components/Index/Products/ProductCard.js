import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardContent from "../../common/CardContent/CardContent";
import {breakpoints} from "./../../../utils/theme";
import SVGGradientBorder from "./../../common/CardContent/SVGGradientBorder";

const ProductCard = (props) => {
    const { img, title, description, positionImg, positionText, primaryButton, secondaryButton, aosDelay, className } = props;

    return (
        <StyledProductCardWrapper 
            data-aos={'fade-up'}
            data-aos-delay={aosDelay}
            className={`product-card-wrapper ${className}`}>
            <SVGGradientBorder borderRadius={'16px'}/>
            <CardContent
                className="poduct-card-content"
                img={img}
                title={title}
                positionImg={positionImg}
                positionText={positionText}
                description={description}
                primaryButton={primaryButton}
                secondaryButton={secondaryButton} 
            />
        </StyledProductCardWrapper>
    )
};

ProductCard.propTypes = {
    img: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.any,
    description: PropTypes.any,
    primaryButton: PropTypes.shape({
        label: PropTypes.string,
        size: PropTypes.string,
        type: PropTypes.string,
    }),
    secondaryButton: PropTypes.shape({
        label: PropTypes.string,
        size: PropTypes.string,
        type: PropTypes.string,
    })
};

ProductCard.defaultProps = {
    className: ''
}

const StyledProductCardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 32px;
    border-radius: 16px;
    width: 367px;
    position: relative;
    background: linear-gradient(163.68deg, rgba(196, 196, 196, 0.32) -89.13%, rgba(61, 90, 254, 0) 111.24%);
    @media screen and (max-width: ${breakpoints.l}) {
        width: 251px;
        margin: 0 16px;
    }
    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
        background: none;
        width: 100%;
        padding: 40px 32px;
        margin: 0 auto;
    }
    .card {
        position: relative;
        @media screen and (max-width: ${breakpoints.l}) {
            width: 100%;
        }
        @media screen and (max-width: ${breakpoints.md}) {
            align-items: baseline;
        }
        &:before {
            display: none;
        }
        &:after {
            position: absolute;
            content: '';
            width: 142px;
            height: 142px;
            transform: rotate(45deg);
            background: radial-gradient(49.98% 49.98% at 49.97% 49.97%, #304FFE 0%, #3D5AFE 100%);
            z-index: -1;
            top: -30px;
            left: -35px;
            filter: blur(100px);
            display: none;
            @media screen and (max-width: ${breakpoints.md}) {
                display: unset;
            }
        }
        .card-header {
            @media screen and (max-width: ${breakpoints.md}) {
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                margin-bottom: 16px;
            }
            .logo {
                margin-bottom: 32px;
                background-size: cover;
                @media screen and (max-width: ${breakpoints.md}) {
                    width: 72px;
                    height: 72px;
                    margin-right: 16px;
                    margin-bottom: 0;
                    position: relative;
                }
            }
            .title {
                margin-bottom: 18px;
                font-weight: 500;
                background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                @media screen and (max-width: ${breakpoints.md}) {
                    margin-bottom: 0;
                }
            }
        }
        .description {
            height: 108px;
            * {
                font-family: 'Montserrat';
            }
            @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.s}) {
                height: 162px;
                width: 100%;
                font-size: 15.8px;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                text-align: left;
                font-size: 16px;
                margin-bottom: 32px;
                height: unset;
                margin-right: auto;
            }
            @media screen and (max-width: ${breakpoints.xs}) {
                margin-bottom: 0;
            }
        }
        .card-footer {
            @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                width: 251px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                flex-direction: row;
                width: unset;
                justify-content: left !important;
            }
            .button {
                &.secondary {
                    width: 138px;
                    @media screen and (max-width: ${breakpoints.l}) {
                        margin-bottom: 16px;
                        width: 132px;
                    }
                    @media screen and (max-width: ${breakpoints.md}) {
                        margin-bottom: 0;
                        width: unset;
                    }
                }
                &.outline {
                    width: 132px;
                }
                .label {
                    font-size: 12px;
                }
                @media screen and (max-width: ${breakpoints.md}) {
                    margin-right: 16px;
                }
            }
        }
    }
    .module-border {
        @media screen and (max-width: ${breakpoints.md}) {
            display: none;
        }
    }
`;

export default ProductCard;