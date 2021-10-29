import React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageConnector from "./../../../images/about/png/Connector.png";
import FeatureGradient from "./../../../images/about/png/Products-Gradient.png";
import { breakpoints } from "../../../utils/theme";

const DetailsCard = (props) => {
    const { img, title, description, buttons, position } = props;

    return (
        <StyledDetailsCardWrapper img={img} className={`image-position-${position}`}>
            <section className="detail-wrapper">
                <section data-aos="fade" className="detail-image-wrapper">
                    <div className="detail-image-connector"/>
                    <div className="detail-image" style={{backgroundImage: `url(${img})`}}/>
                </section>
                <section className="detail-content">
                    <h2 className="title" data-aos="fade-up">{title}</h2>
                    <p className="description" data-aos="fade-up">{description}</p>
                </section>
                <div className="background-gradient" data-aos="fade"/>
            </section>
        </StyledDetailsCardWrapper>
    )
};

DetailsCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
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

const StyledDetailsCardWrapper = styled.section`
    display: flex;
    margin-bottom: 195px;
    position: relative;
    &:last-child {
        margin-bottom: 0;
    }
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
        margin: 0 auto 80px;
    }
    .detail-wrapper {
        display: flex; 
        justify-content: space-between;
        position: relative;
        width: 100%;
        @media screen and (max-width: ${breakpoints.md}) {
            flex-direction: column;
            padding: 0 12px;
        }
        .detail-image-wrapper {
            position: absolute;
            width: 225px;
            height: 225px;
            right: 130px;
            top: 96px;
            @media screen and (max-width: ${breakpoints.md}) {
                width: 128px;
                height: 128px;
                position: unset;
                margin-bottom: 24px;
            }
            .detail-image {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                transform: scale(1.42);
            }
            .detail-image-connector {
                position: absolute;
                width: 260px;
                height: 52px;
                background-image: url('${ImageConnector}');
                top: -51px;
                right: 112px;
                @media screen and (max-width: ${breakpoints.md}) {
                    display: none;
                }
            }
        }
        .detail-content {
            display: flex;
            flex-direction: column;
            width: 602px;
            position: relative;
            left: 80px;
            @media screen and (max-width: ${breakpoints.md}) {
                left: 0;
                width: 100%;
                align-items: center;
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
                    left: 0;
                    width: 100%;
                    font-size: 38px;
                    line-height: 45.6px;
                }
            }
            .description {
                color: ${(props) => (props.theme.blueGray)};
                font-size: 16px;
                line-height: 28px;
                font-weight: 400;
                font-family: 'Montserrat';
            }
            .cta-container {
                .cta-row {
                    display: flex;
                    align-items: center;
                    margin-bottom: 40px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .secondary {
                        width: 138px;
                    }
                }
                .cta-text {
                    font-size: 16px;
                    line-height: 28px;
                    color: rgba(229, 229, 229, 1);
                    margin-left: 32px;
                }
            }
        }
    }
    .background-gradient {
        width: 851px;
        height: 520px;
        background-position: center;
        background-image: url('${FeatureGradient}');
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: -80px;
        @media screen and (max-width: ${breakpoints.md}) {
            top: -150px;
            left: -290px;
        }
    }
`;

export default DetailsCard; 