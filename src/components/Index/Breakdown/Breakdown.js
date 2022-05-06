import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import BreakDownImage from './../../../images/landing/breakdown_image.png';
import BreakDownImageMobile from './../../../images/landing/Graphic-Social_Mobile.png';
import { breakpoints } from './../../../utils/theme';

const Breakdown = (props) => {

    let [tvl, setTvl] = useState(0);

    useEffect(() => {
        const fetchPromise = fetch('https://api.llama.fi/tvl/swapr').then((data) => {
            return data.json();
        }).then((decodedTvl) => {
            let millions = decodedTvl / 10000;
            let stringTvl = millions.toString();
            let splitTvlString = stringTvl.split('.');
            function split_at_index(value, index) {
                return value.substring(0, index) + "." + value.substring(index);
            }
            splitTvlString = split_at_index(splitTvlString[0], 2);
            setTvl(splitTvlString);
        })
    }, []);

    let DetailsColumn = (props) => (
        <div className="details-column" data-aos="fade-up" data-aos-delay={props.aosDelay}>
            <span className="number">{props.title}</span>
            <span className="detail">{props.detail}</span>
        </div>
    );

    return (
        <StyledBreakdownWrapper className="main-width">
            <div className="breakdown-content">
                <DetailsColumn
                    aosDelay={200}
                    title={'400+'}
                    detail={'Over 400 unique stakeholder addresses'}
                />
                <div className="image-column" data-aos="fade-up">
                    <div className="breakdown-image" />
                </div>
                <DetailsColumn
                    aosDelay={400}
                    title={`$${tvl}m`}
                    detail={<span>TVL in DXdao<br /> products</span>}
                />
            </div>
            <div className="blue-gradient" />
        </StyledBreakdownWrapper>
    )
};

const StyledBreakdownWrapper = styled.section`
    margin-top: 275px;
    position: relative;
    @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
        margin-top: 138px;
    }
    @media screen and (max-width: ${breakpoints.md}) {
        margin-top: 244px;
    }
    .blue-gradient {
        width: 245px;
        height: 245px;
        background: radial-gradient(49.98% 49.98% at 49.97% 49.97%, #304FFE 0%, #3D5AFE 100%);
        transform: rotate(45deg);
        filter: blur(160px);
        position: absolute;
        top: -140px;
        left: calc(50% - 122px);
        display: none;
        @media screen and (max-width: ${breakpoints.md}) {
            display: unset;
        }
    }
    .breakdown-content {
        display: flex;
        margin: 0 auto;
        justify-content: center;
        position: relative;
        @media screen and (max-width: ${breakpoints.md}) {
            
        }
        .details-column {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            width: 196px;
            height: 460px;
            padding-top: 64px;
            @media screen and (max-width: ${breakpoints.md}) {
                height: 360px;
                width: 128px;
                &:first-child {
                    align-items: flex-end;
                    margin-right: 28px;
                    .detail {
                        text-align: right;
                    }
                }
                &:last-child {
                    align-items: baseline;
                    margin-left: 28px;
                    .detail {
                        text-align: left;
                    }
                }
            }
            .number {
                font-size: 68px;
                line-height: 82px;
                margin-bottom: 16px;
                background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: 38px;
                    line-height: 46px;
                }
            }
            .detail {
                color: ${(props) => (props.theme.blueGray)};
                line-height: 31px;
                font-size: 18px;
                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: 16px;
                    line-height: 28px;
                }
            }
        }
        .image-column {
            width: 380px;
            height: 420px;
            margin: 0 24px;
            @media screen and (max-width: ${breakpoints.md}) {
                position: absolute;
                padding: 0;
                width: 366px;
                height: 800px;
                margin: 0;
                left: calc(50% - (366px / 2));
                top: -160px;
            }
            .breakdown-image {
                width: 100%;
                height: 100%;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url('${BreakDownImage}');
                @media screen and (max-width: ${breakpoints.md}) {
                    background-image: url('${BreakDownImageMobile}');
                }
            }
        }
    }
    /* Firefox Workaround */

    @-moz-document url-prefix() { 
        .blue-gradient {
            display: none;
        }
    }
`;

export default Breakdown;