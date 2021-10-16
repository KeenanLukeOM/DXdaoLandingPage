import React from "react"
import styled from 'styled-components';
import DaoIcon from "../../../images/landing/svg/Logo-DXdao_Small.svg";
import FooterNavigation from "./FooterNavigation";
import SocialIcons from "./../SocialIcons/SocialIcons";
import {breakpoints} from "./../../../utils/theme";

const Footer = () => {
    return (
        <StyledFooterWrapper className="main-width">
               <section className="footer-menu">
                    <section className="footer-container">
                        <section className="logo-area">
                            <img src={DaoIcon} className="logo" />
                        </section>
                        <FooterNavigation />
                    </section>
               </section>
               <section className="footer-social">
                    <SocialIcons />
                    <section className="copyright">
                        © 2021 DXdao
                    </section>
               </section>
        </StyledFooterWrapper>
    )
};

const StyledFooterWrapper = styled.section`
    padding-bottom: 96px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${breakpoints.md}) {
        width: 428px !important;
        padding: 0 0 64px;
    }
    @media screen and (max-width: ${breakpoints.s}) {
        width: 280px !important;
    }
    .footer-menu {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .footer-container {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding-bottom: 24px;
            width: 100%;
            border-bottom: 1px solid rgba(184, 190, 229, .43);
            @media screen and (max-width: ${breakpoints.md}) {
                flex-direction: column;
                padding-bottom: 0;
            }
            .logo-area {
                width: 287px;
            }
        }
    }
    .footer-social {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        width: 100%;
        @media screen and (max-width: ${breakpoints.md}) {
            flex-direction: column;
            margin-top: 32px;
            align-items: center;
        }
        .copyright {
            color: ${(props) => (props.theme.blueGray)} ;
            font-size: 12px;
            line-height: 20.4px;
        }
    }
`;

export default Footer;