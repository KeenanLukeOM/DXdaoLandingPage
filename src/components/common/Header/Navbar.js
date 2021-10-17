import React, {useState, useEffect} from "react"
import styled, {keyframes} from 'styled-components';
import {Link} from 'gatsby';
import Logo from './../Logo/Logo';
import {breakpoints} from './../../../utils/theme';
import {mainNavigation, mobileNavMenu} from './../../../utils/ui_constants';
import AccordionLinks from './AccordionLinks';
import SocialIcons from './../SocialIcons/SocialIcons';
import MainNavigationElement from './MainNavigationElement';

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    });

    return (
        <StyledNavbar className="navbar main-width" isMenuOpen={isMenuOpen}>
            <Link to="/" className="navbar-logo-link">
                <Logo />
            </Link>
            <div className="desktop-nav">
                <nav>
                    <ul>
                        {mainNavigation.map((linkData, i) => (
                            <MainNavigationElement key={i} linkData={linkData} />
                        ))}
                    </ul>
                </nav>
            </div>
            <button 
                className={`navbar-toggler ${isMenuOpen ? 'navbar-toggler-active' : ''}` }
                type="button" 
                onClick={() => {setIsMenuOpen(!isMenuOpen)}}
            >
              <div className="nav-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="mobile-nav">
                <nav>
                    <ul>
                        {mobileNavMenu.map((linkData) => (
                            <li className={'main-nav-item'} key={linkData.name}>
                                {
                                    linkData.content ? (
                                        <AccordionLinks
                                            type={linkData.type} 
                                            title={linkData.name}
                                            content={linkData.content} 
                                        />
                                    ) : (
                                        <a target={linkData.external && '_blank'} href={linkData.href && linkData.href}>
                                            {linkData.name}
                                        </a>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
                <SocialIcons />
            </div>
        </StyledNavbar>
    );
};

export default Navbar;

const fadeDown = keyframes`
    0% {top: -114px;};
    100% {top: 0px;};
`;

const StyledNavbar = styled.section`
    position: relative;
    height: 114px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: ease-in-out 0.5s background;
    /* top: -100px; */
    background: ${(props) => (props.isMenuOpen ? '#040D2D' : 'none')};
    @media screen and (max-width: ${breakpoints.md}) {
        width: 100% !important;
        padding: 0 24px;
    }
    @media screen and (max-width: ${breakpoints.s}) {
        width: 100% !important;
        padding: 0 24px;
    }
    .navbar-logo-link {
        z-index: 10;
    }
    .desktop-nav {
        margin-left: auto;
        @media screen and (max-width: ${breakpoints.md}) {
            display: none;
        }
        nav {
            ul {
                display: flex;
            }
        }
        .tooltip-link-wrapper {
            position: relative;
        }
    }
    .menu-toggle,
    .mobile-nav {
        display: none;
        @media screen and (max-width: ${breakpoints.md}) {
            display: unset;
        }
    }
    .navbar-toggler {
        width: auto;
        position: relative;
        padding: 0;
        background: none;
        border: none;
        outline: none;
        display: none;
        @media screen and (max-width: ${breakpoints.md}) {
            display: unset;
        }
        &.navbar-toggler-active {
            span {
                background: #F3F3F3;
                height: 2px;
            }
            span:nth-child(1) {
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
                top: -1px !important;
                left: 5px !important;
            }
            
            span:nth-child(2) {
                width: 0%;
                opacity: 0;
            }
            
            span:nth-child(3) {
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
                top: 19px !important;
                left: 5px !important;
            }
        }
        .nav-icon {
            width: 28px;
            height: 20px;
            position: relative;
            z-index:999;
            margin: 4px auto 0px;
            transition: .2s ease;
            cursor: pointer;

            span {
                display: block;
                position: absolute;
                height: 1px;
                width: 100%;
                background: #F3F3F3;
                border-radius: 1px;
                opacity: 1;
                left: 0;
                transform: rotate(0deg);
                transition: .5s ease;
            }

            span:nth-child(1) {
                top: 0px;
                transform-origin: left center;
            }

            span:nth-child(2) {
                top: 8px;
                transform-origin: left center;
            }

            span:nth-child(3) {
                top: 16px;
                transform-origin: left center;
            }
        }
    }
    .mobile-nav {
        position: absolute;
        left: 0;
        pointer-events: ${(props) => (props.isMenuOpen ? 'unset' : 'none')};
        opacity: ${(props) => (props.isMenuOpen ? '1' : '0')};
        top: ${(props) => (props.isMenuOpen ? '0' : '100vh')};
        padding: 40px 24px;
        background: ${(props) => (props.theme.background)};
        z-index: 4;
        width: 100%;
        height: calc(100vh);
        transition: ease-in-out 0.5s all;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 114px;
        .social-icons {
            margin-top: auto;
            margin-bottom: unset;
            margin-top: 62px;
        }
        .main-nav-item {
            &:last-child {
                & > a,
                .accordion-title {
                    border-bottom: 0;
                }
            }
            & > a,
            .accordion-title {
                padding: 20px 0;
                font-size: 22px;
                line-height: 38px;
                font-weight: 200;
                color: ${(props) => (props.theme.gray)};
                display: inline-block;
                border-bottom: 1px solid rgba(184, 190, 229, 0.3);
                width: 100%;
            }
        }
    }
`;