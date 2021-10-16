import React, {Fragment} from "react"
import styled from 'styled-components';
import DetailsCard from "./DetailsCard";
import Genesis from "../../../images/about/svg/Graphic-About-Genesis.svg";
import Sovereignty from "../../../images/about/svg/Graphic-About-Sovereignty.svg";
import Treasury from "../../../images/about/svg/Graphic-About-Treasury.svg";

const Details = () => {
    const details = [
        {
            img: Genesis,
            title: 'Distributed Genesis',
            description: 'DXdao (or dxDAO) started as a radical experiment in decentralization. Two leading Ethereum projects, Gnosis and DAOstack, conceived of the idea of a DAO that aimed to be decentralized from inception. This idea, which eventually became DXdao, hinged on distributing voting power (Reputation or REP in DXdao) to as wide a distribution of participatory Ethereum addresses across the globe. These addresses, and not Gnosis or DAOstack, would govern DXdao and decide its future. In total, 399 addresses received REP during the initial launch in the spring of 2019.',
            position: 'right'
        },
        {
            img: Sovereignty,
            title: 'DAO Sovereignty',
            description: 'DXdao is a 100% on-chain organization, so governance and development hingest on building capabilities for the DAO itself to intereact with the rest of the world. All DXdao products and the DXdao website are owned and governed by the DAO itself through the ENS name system. Taking down or changing this website requrires a passed proposal from DXdao. DXdao currently operates three bases, one on Ethereum mainnet, xDai and Arbitrum One, and always interested in expanding to new chains that match its decentralization ethos.',
            position: 'right'
        },
        {
            img: Treasury,
            title: 'DXD and The Treasury', 
            description: 'DXD represents the liquid financial value of DXdao. It was launched through a bonding curve contract in May 2020, with a portion of the ETH proceeds deposited in the DXdao treasury. DXdao’s treasury is over $50m, spread across ETH, stablecoins and other assets. It’s meant to fund product development and is also deposited into DXdao products themselves.',
            position: 'right'
        },
    ];

    return (
        <StyledProductsWrapper className="main-width">
               {details.map((detail, i) => {
                   return (
                    <Fragment key={i}>
                        <DetailsCard 
                            img={detail.img}  
                            title={detail.title} 
                            description={detail.description} buttons={detail.buttons} 
                            position={detail.position} 
                        />
                    </Fragment>);
               })}
        </StyledProductsWrapper>
    )
};

const StyledProductsWrapper = styled.section`
    margin-top: 0 !important;
`;

export default Details;