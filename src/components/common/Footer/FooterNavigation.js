import { Link } from "gatsby";
import React, {Fragment} from "react"
import styled from 'styled-components';
import {breakpoints} from "./../../../utils/theme";
import {footerNavigation, mobileFooterNavigation} from "./../../../utils/ui_constants";

const FooterNavigation = (props) => {

    return (
        <StyledFooterNavigation className={props.className && props.className}>
            {footerNavigation.map((elem, i) => {
                return (
                        <div
                            key={`navigation-item` + i}
                            className="navigation-column hide-mobile"
                        >
                            <div className="title-item">
                                {elem.title}
                            </div>
                            <ul className="navigation-list">
                                {elem.items.map((link, j) => {
                                    return (
                                        <li className="navigation-item" key={`link-` + j}>
                                            <a 
                                            target={link.external && '_blank'} href={link.url} >
                                                {link.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                )})
            }
            {mobileFooterNavigation.map((elem, i) => (
                <div
                    key={`navigation-item` + i}
                    className="navigation-column show-mobile"
                >
                    <div className="title-item">
                        {elem.title}
                    </div>
                    <ul className="navigation-list">
                        {elem.items.map((link, j) => {
                            return (
                                <li className="navigation-item" key={`link-` + j}>
                                    <a target={link.external && '_blank'}href={link.url} >
                                        {link.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            ))}
        </StyledFooterNavigation>
    )
};

const StyledFooterNavigation = styled.section`
    display: flex;
    margin-left: auto;
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 42px;
        height: 380px;
        margin-left: unset;
    }
    @media screen and (max-width: ${breakpoints.s}) {
        height: 732px;
    }
    .navigation-column {
        padding-left: 16px;
        width: 172px;
        @media screen and (max-width: ${breakpoints.l}) {
            width: 120px;
        }
        @media screen and (max-width: ${breakpoints.md}) {
            margin-right: 16px;
            &:nth-last-child(2)
            &:last-child {
                margin-right: 0;
            }
        }
        &.show-mobile {
            display: none !important;
            @media screen and (max-width: ${breakpoints.md}) {
                display: unset !important;
            }
        }
        &.hide-mobile {
            @media screen and (max-width: ${breakpoints.md}) {
                display: none !important;
            }
        }
        @media screen and (max-width: ${breakpoints.md}) {
            width: 132px;
            padding-left: 0;
            margin-bottom: 32px;
        }
        .title-item,
        .navigation-list .navigation-item {
            margin-bottom: 13px;
        }
        .title-item {
            font-size: 14px;
            line-height: 22px;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                height: 21px;
                width: 1px;
                background: #B8BEE5;
                left: -16px;
                top: 0;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                font-size: 16px;
                line-height: 22px;
                &:before {
                    display: none;
                }
            }
        }
        .navigation-list {
            .navigation-item {
                &:last-child {
                    margin-bottom: 0;
                }
                a {
                    color: ${(props) => (props.theme.blueGray)};
                    font-size: 12px;
                    line-height: 18px;
                    font-weight: 400;
                    transition: 0.2s ease-in-out color;
                    @media screen and (max-width: ${breakpoints.l}) and (min-width: ${breakpoints.md}) {
                        white-space: nowrap;
                    }
                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }
`;

export default FooterNavigation;