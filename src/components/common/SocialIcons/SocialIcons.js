import React from 'react';
import styled from 'styled-components';
import {breakpoints} from './../../../utils/theme';

import DXdao from "../../../images/landing/svg/Logo-DXdao_Grey.svg";
import DAOtalk from "../../../images/landing/daotalk.png";
import Discord from "../../../images/landing/svg/Logo-Discord.svg";
import Twitter from "../../../images/landing/svg/Logo-Twitter.svg";
import Keybase from "../../../images/landing/svg/Logo-Keybase.svg";
import Telegram from "../../../images/landing/svg/Logo-Telegram.svg";
import Medium from "../../../images/landing/svg/Logo-Medium.svg";
import Etherscan from "../../../images/landing/svg/Logo-Etherscan.svg";
import Bino from "../../../images/landing/svg/Logo-Bino.svg";

import Button from "../Button/Button";

const socialIcons = [
    // {
    //     img: DXdao,
    //     link: 'https://dxdao.eth.link/'
    // },
    {
        img: Discord,
        link: 'https://discord.gg/4QXEJQkvHH'
    },
    {
        img: Twitter,
        link: 'https://twitter.com/DXdao_'
    },
    {
        img: Keybase,
        link: 'https://keybase.io/team/dx_dao'
    },
    {
        img: Telegram,
        link: 'https://t.me/dxDAO'
    },
    {
        img: Medium,
        link: 'https://dxdao.medium.com/'
    },
    {
        img: DAOtalk,
        link: 'https://daotalk.org/c/dx-dao/15'
    },
    // {
    //     img: Etherscan,
    //     link: 'https://etherscan.io/token/0xa1d65E8fB6e87b60FECCBc582F7f97804B725521'
    // },
    // {
    //     img: Bino,
    //     link: 'https://blockscout.com/xdai/mainnet/tokens/0xb90D6bec20993Be5d72A5ab353343f7a0281f158/token-transfers' //Este no lo encontre en las imagenes.
    // }
];

const SocialIcons = (props) => {
    return (
        <StyledSocialIcons className="social-icons">
            {socialIcons.map((s, i) => (
                <Button key={i} external type="icon" iconImage={s.img} to={s.link}/>)
            )}
        </StyledSocialIcons>
    )
};

const StyledSocialIcons = styled.section`
    display: flex;
    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 42px;
    }
    div {
        display: flex;
        width: 44px;
        height: 44px;
        padding-right: 19px;
        @media screen and (max-width: ${breakpoints.md}) {
            padding: 0;
            width: 22px;
            height: 22px;
        }
    }
    .button {
        opacity: 0.7;
        transition: 0.25s ease-in-out opacity;
        &:hover {
            opacity: 1;
        }
        img {
            max-width: 31px;
        }
    }
`;

export default SocialIcons;