import React from "react"
import styled from 'styled-components';
import DiamondIcon from '../../../images/landing/super-scalable.png';
import {breakpoints} from './../../../utils/theme';

const Banner = () => {
    return (
        <StyledBannerWrapper data-aos={'fade-up'}>
            <img src={DiamondIcon} />
            <section className="banner-text">
                <p>
                    The first <br/>
                    super-scalable collective
                </p>
            </section>
        </StyledBannerWrapper>
    )
};

const StyledBannerWrapper = styled.section`
    display: flex;
    flex-direction: column;   
    align-items: center;
    padding: 0px 80px;
    margin-top: 120px;
    @media screen and (max-width: ${breakpoints.md}) {
        padding: 0;
    }
    img {
        width: 190px;
    }
    .diamond-icon {
        width: 712px;
        height: 156px;
        background-image: url(${DiamondIcon});
        background-size: cover;
    }
    .banner-text {
        font-size: 22px;
        line-height: 38px;
        font-weight: 500;
        letter-spacing: 12px;
        text-align: center;
        background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
        @media screen and (max-width: ${breakpoints.md}) {
            font-size: 18px;
            line-height: 30px;
        }
    }

    /* Safari 7.1+ */

    @media not all and (min-resolution:.001dpcm)
    { @supports (-webkit-appearance:none) {
        .banner-text {
            color: white;
            background: transparent;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
        }
    }}
`

export default Banner;