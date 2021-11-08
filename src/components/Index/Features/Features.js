import React, { Fragment } from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";

import GraphicDecentralization from "../../../images/landing/Features_Decentralization.png";
import GraphicTransparency from "../../../images/landing/Features_Transparency.png";
import GraphicGovernance from "../../../images/landing/Features_Governance.png";

import GraphicDecentralizationMobile from "../../../images/landing/Graphic-Features-Decentralization-Mobile.png";
import GraphicGovernanceMobile from "../../../images/landing/Graphic-Features_Transparency-Mobile.png";
import GraphicTransparencyMobile from "../../../images/landing/Graphic-Features_Governance-Mobile.png";

import ConnectorLine1_Desktop from "../../../images/landing/Features-Conector-1.png";
import ConnectorLine2_Desktop from "../../../images/landing/Features-Conector-2.png";
import { breakpoints } from "./../../../utils/theme";

const Features = () => {
  const features = [
    {
      img: GraphicDecentralization,
      mobileImg: GraphicDecentralizationMobile,
      title: (
        <span>
          Decentralization
          <br /> at the core
        </span>
      ),
      description:
        "DXdao’s guiding philosophy is decentralization. Eliminating reliance on central operators ensures fair access to public infrastructure for all. DXdao’s products and governance are permissionless and decentralized, because they attract an organic community that builds resilliency. ",
      position: "left",
      buttons: [
        {
          label: "LEARN MORE",
          to: "https://dxdocs.eth.link/docs/Governance/",
        },
      ],
    },
    {
      img: GraphicTransparency,
      mobileImg: GraphicTransparencyMobile,
      title: "On-chain, transparent governance",
      description:
        "DXdao builds and governs out in the open. Its treasury is on-chain and all contributors are paid through on-chain proposals. DXdao governance also manages product updates, treasury movements as well as signal proposals that guide the direction of DXdao. Calls are recorded and most discourse takes place in the public forum.",
      position: "right",
      buttons: [
        {
          type: "secondary",
          label: "DXVOTE",
          infoText: "DXdao’s governance Dapp",
          to: "https://dxvote.eth.link",
        },
        {
          type: "secondary",
          label: "FORUM",
          infoText: "DXdao’s forum on DAOtalk",
          to: "https://daotalk.org/c/dx-dao/15",
        },
      ],
    },
    {
      img: GraphicGovernance,
      mobileImg: GraphicGovernanceMobile,
      title: "A home for builders",
      description:
        "DXdao is an internet-native organization building the future of work. Contributors come from five continents and are building new processes and products for coordinating work across the globe. For entrepreneurs, DXdao offers access to decentralized tools and funding without the overhead of a traditional organization.",
      position: "left",
      buttons: [
        {
          label: "FORUM",
          to: "https://daotalk.org/c/dx-dao/15",
        },
      ],
    },
  ];

  return (
    <StyledProductsWrapper className="main-width">
      {features.map((feature, i) => {
        return (
          <Fragment key={i}>
            <FeatureCard
              className={`feature-card-${i + 1} feature-card`}
              desktopImg={feature.img}
              mobileImg={feature.mobileImg}
              title={feature.title}
              description={feature.description}
              buttons={feature.buttons}
              position={feature.position}
            />
            {i < 2 && (
              <div
                className="connector-line-wrapper"
                data-aos="fade"
                data-aos-offset={"-100"}
              >
                <section
                  className="connector-line curve-line-desktop"
                  id={`connector-line-${i + 1}`}
                />
              </div>
            )}
          </Fragment>
        );
      })}
    </StyledProductsWrapper>
  );
};

const StyledProductsWrapper = styled.section`
  margin-top: 160px !important;
  @media screen and (max-width: ${breakpoints.md}) {
    margin-top: 60px !important;
  }
  .feature-card {
    position: relative;
  }
  .feature-card-2 {
    margin-bottom: 501px;
    @media screen and (max-width: ${breakpoints.l}) {
      margin-bottom: 262px;
    }
  }
  .connector-line-wrapper {
    z-index: 1;
    position: relative;
    @media screen and (max-width: ${breakpoints.md}) {
      display: none;
    }
    .connector-line {
      height: 387px;
      background-repeat: no-repeat !important;
      position: absolute;
      pointer-events: none;
      @media screen and (max-width: ${breakpoints.l}) {
        /* Overlaid connector */
      }
      &#connector-line-1 {
        background: url("${ConnectorLine1_Desktop}");
        height: 511px;
        width: 100%;
        background-position: center;
        background-size: contain;
        top: -500px;
        @media screen and (max-width: ${breakpoints.l}) {
          width: 100%;
          height: 536px;
          background-size: 949px auto;
          top: -524px;
          background-position: -65px 60px;
        }
      }
      &#connector-line-2 {
        background: url("${ConnectorLine2_Desktop}");
        height: 511px;
        width: 100%;
        background-size: contain;
        position: absolute;
        left: 273px;
        top: -570px;
        @media screen and (max-width: ${breakpoints.l}) {
          top: -540px;
          width: 100%;
          left: 0;
          height: 641px;
          background-size: 560px auto;
          background-position: 128px 110px;
        }
      }
    }
  }
`;

export default Features;
