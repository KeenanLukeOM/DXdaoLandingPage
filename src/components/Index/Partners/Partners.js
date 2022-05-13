import React from "react"
import styled from 'styled-components';
import Arbitrum from '../../../images/landing/svg/Logo-Arbitrum.svg';
import Gnosis from '../../../images/landing/svg/Logo-Gnosis.svg';
import Loopring from '../../../images/landing/svg/Logo-Loopring.svg';
import GnosisChain from '../../../images/landing/svg/Logo-GnosisChain.svg';
import Opolis from '../../../images/landing/svg/Logo-Opolis.svg';
import DAOstack from '../../../images/landing/svg/Logo-DAOstack.svg';
import Status from '../../../images/landing/svg/Logo-Status.svg';
import Agave from '../../../images/landing/svg/agave.svg';
import { breakpoints } from "./../../../utils/theme";

const Partners = () => {
    const partnerLogos = [
        {
            img: Arbitrum,
            to: 'https://offchainlabs.com/'
        },
        {
            img: Gnosis,
            to: 'https://gnosis.io/'
        },
        {
            img: Loopring,
            to: 'https://loopring.org/#/'
        },
        {
            img: Opolis,
            to: 'https://opolis.co/'
        },
        {
            img: Status,
            to: 'https://status.im/'
        },
        {
            img: Agave,
            to: 'https://agave.finance/'
        },
        {
            img: DAOstack,
            to: 'https://daostack.io/'
        },
        {
            img: GnosisChain,
            to: 'https://www.xdaichain.com/'
        },
    ]

    return (
        <StyledPartnersWrapper className="main-width">
            <section className="partners-title" data-aos="fade-up">
                <span className="title-text">OUR PARTNERS</span>
            </section>
            <section className="partners-list">
                {partnerLogos.map((partner, i) =>
                (
                    <div className="image-container" data-aos="fade-up" key={i}>
                        <a target={'_blank'} href={partner.to}>
                            <img
                                key={i}
                                className={'partner-logo'}
                                src={partner.img}
                            />
                        </a>
                    </div>
                ))
                }
            </section>
        </StyledPartnersWrapper>
    )
};

const StyledPartnersWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 360px auto 88px !important;
    @media screen and (max-width: ${breakpoints.l}) {
        margin-bottom: 280px !important;
    }
    @media screen and (max-width: ${breakpoints.md}) {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
    .partners-title {
        display: flex;
        margin-bottom: 96px;
        position: relative;
        width: 100%;
        @media screen and (max-width: ${breakpoints.md}) {
            margin-bottom: 64px;
        }
        @media screen and (max-width: ${breakpoints.s}) {
            max-width: 340px;
        }
        &:after,
        &:before {
            width: 327px;
            height: 1px;
            background: linear-gradient(122.39deg, rgba(61, 90, 254, 0.05) 0%, #3D5AFE 22.92%, #A9B6FF 46.35%, #3D5AFE 78.65%, rgba(61, 90, 254, 0.05) 100%);
            position: absolute;
            content: '';
            top: calc(50% - 1px);
            @media screen and (max-width: ${breakpoints.l}) {
                width: 227px;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                width: 120px;
            }
            @media screen and (max-width: ${breakpoints.s}) {
                width: 28px;
            }
        }
        &:after {
            left: 0;
        }
        &:before {
            right: 12px;
        }
        .title-text {
            font-size: 22px;
            letter-spacing: 10px;
            background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 38px;
            width: inherit;
            text-align: center;
            @media screen and (max-width: ${breakpoints.md}) {
                font-size: 18px;
            }
        }
    }
    .partners-list {
        display: flex; 
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: ${breakpoints.md}) {
            justify-content: space-between;
            max-width: 366px;
        }
        .image-container {
            margin: 0 36px 42px;
            position: relative;
            @media screen and (max-width: ${breakpoints.md}) {
                width: calc(100% / 3);
                margin: 0 auto 28px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &:nth-child(4) {
                &:after {
                    display: none;
                    @media screen and (max-width: ${breakpoints.md}) {
                        display: unset;
                    }
                }
            }
            &:after {
                content: "";
                position: absolute;
                width: 1px;
                height: 54px;
                top: calc(50% - 27px);
                right: -36px;
                background: radial-gradient(49.98% 49.98% at 49.97% 49.97%, #304FFE 0%, #3D5AFE 100%);
                @media screen and (max-width: ${breakpoints.md}) {
                    height: 23px;
                    top: calc(50% - (23px / 2));
                    right: 0;
                }
            }
            &:last-child {
                &:after {
                    display: none;
                }
            }
            .partner-logo {
                mix-blend-mode: lighten !important;
                @media screen and (max-width: ${breakpoints.l}) {
                    max-height: 71px;
                }
                @media screen and (max-width: ${breakpoints.md}) {
                    max-width: 90px;
                    max-height: 40px;
                }
            }
        }
    }
    @media screen and (max-width: ${breakpoints.md}) {
        .image-container {
            &:nth-child(3),
            &:nth-child(6) {
                &:after {
                    display: none;
                }
            }
        }
    }
    `;

export default Partners;