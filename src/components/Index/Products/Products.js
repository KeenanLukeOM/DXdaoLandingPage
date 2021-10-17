import React, {useEffect, useState, Fragment} from "react"
import styled from 'styled-components';
import ProductCard from "./ProductCard";
import Swapr from '../../../images/landing/svg/Logo-Product_Swapr.svg';
import Mesa from '../../../images/landing/svg/Logo-Product_Mesa.svg';
import Omen from '../../../images/landing/svg/Logo-Product_Omen.svg';
import Aqua from '../../../images/Logo-AquaRound.svg';
import MobileConnector from './../../../images/Products-Conector-Mobile@2x.png';
import ProductsGradientDesktop from './../../../images/ProductsGradientDesktop.png';
import { breakpoints } from "../../../utils/theme";

const Products = () => {

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

    const products = [
        {
            img: Swapr,
            title: 'Swapr',
            positionImg: 'center',
            positionText: 'center',
            description: <span>A governance-enabled<br/>automated-market maker with adjustable fees.</span>,
            primaryButton: {
                size: 'small',
                type: 'secondary',
                label: 'USE SWAPR',
                to: 'https://swapr.eth.link/',
            },
            secondaryButton: {
                size: 'small',
                type: 'outline',
                label: 'LEARN MORE',
                to: 'https://dxdocs.eth.link/docs/Products/swapr/',
            }
        },
        {
            img: Omen,
            title: 'Omen',
            positionImg: 'center',
            positionText: 'center',
            description: 'A fully decenetralized prediction market platform built on top of the Gnosis conditional token framework.',
            primaryButton: {
                size: 'small',
                type: 'secondary',
                label: 'USE OMEN',
                to: 'https://omen.eth.link/',
            },
            secondaryButton: {
                size: 'small',
                type: 'outline',
                label: 'LEARN MORE',
                to: 'https://dxdocs.eth.link/docs/Products/omen/'
            }
        },
        {
            img: Aqua,
            title: 'Aqua',
            positionImg: 'center',
            positionText: 'center',
            description: 'Aqua is the place to conduct transparent token auctions with a fair price discovery.',
            primaryButton: {
                size: 'small',
                type: 'secondary',
                label: 'COMING SOON',
                disabled: true,
                to: 'https://Aqua.eth.link/',
            },
            secondaryButton: {
                size: 'small',
                type: 'outline',
                label: 'LEARN MORE',
                to: 'https://dxdocs.eth.link/docs/Products/aqua/',
            }
        }
    ];

    return (
        <StyledProductsWrapper>
            <section className="products-title" data-aos="fade-up">
                <span className="title-text">DXDAO PRODUCTS</span>
            </section>
            <section className="products-wrapper main-width">
                {products.map((product, i) => {
                    return (
                        <Fragment key={i}>
                            <ProductCard
                                className={`product-` + (i + 1)}
                                key={`product-` + i}
                                img={product.img}
                                title={product.title}
                                positionImg={product.positionImg}
                                positionText={product.positionText}
                                description={product.description}
                                primaryButton={product.primaryButton}
                                secondaryButton={product.secondaryButton} 
                                aosDelay={isMobile ? 0 : i * 400}
                            />
                            <div 
                                className={`mobile-separator mobile-separator-${i + 1}`} 
                                data-aos={'fade-up'}
                            />
                        </Fragment>
                    );
                })}
            </section>
            <div className="gradient-background" data-aos="fade"/>
        </StyledProductsWrapper>
    )
};

const StyledProductsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .mobile-separator {
        display: none; 
        @media screen and (max-width: ${breakpoints.md}) {
            display: unset;
            height: 180px;
            width: 100%;
            max-width: 560px;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(${MobileConnector});
            position: relative;
            bottom: 56px;
        }
        &.mobile-separator-3 {
            display: none !important;
        }
        &.mobile-separator-1 {
            transform: scaleY(1) !important;
        }
        &.mobile-separator-2 {
            transform: scaleY(-1) !important;
        }
    }
    .product-2,
    .product-3 {
        @media screen and (max-width: ${breakpoints.md}) {
            margin-top: -128px;
        }
    }
    .products-title,
    .products-wrapper {
        position: relative;
        z-index: 2;
    }
    .products-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        margin: 0px 0px 45px;
        .title-text {
            font-family: MavenPro;
            font-weight: 500;
            font-size: 22px;
            line-height: 170%;
            letter-spacing: 0.44em;
            text-transform: uppercase;
            margin: 0 0px 24px;
            text-align: center;
            background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            @media screen and (max-width: ${breakpoints.md}) {
                font-size: 18px;
            }
        }
    }
    .products-wrapper {
        display: flex;
        justify-content: space-between;
        width: 1166px;
        padding: 0;
        @media screen and (max-width: ${breakpoints.l}) {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            padding: 0 24px;
        }
    }
    .gradient-background {
        top: 0;
        width: 1338px;
        height: 1338px;
        background-image: url('${ProductsGradientDesktop}');
        background-position: center;
        z-index: 1;
        position: absolute;
        top: -310px;
        /* transform: rotate(45deg); */
        /* background: rgba(61, 90, 254, 0.59); */
        /* filter: blur(700px); */
        /* opacity: .4; */
        /* box-shadow: 0px 0px 250px 0px rgba(61, 90, 254, 0.59); */
        @media screen and (max-width: ${breakpoints.md}) {
            display: none;
        }
    }
`;

export default Products;