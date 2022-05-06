import React from "react"
import styled from 'styled-components';
import Question from "./Question";
import SeparatorImage from "./../../../images/about/png/FAQ-Divider@2x.png";
import { breakpoints } from './../../../utils/theme';

const AskedQuestions = () => {
    const questions = [
        {
            ask: 'What is DXdao all about?',
            reply:
                <>
                    <p>
                        DXdao is a decentralized collective that builds and governs decentralized products and services for the world. It aims to be an open community that reaches consensus in a transparent and fair way.
                    </p>
                    <div>
                        You can read more in the <a href="https://dxdocs.eth.limo/docs/Manifesto/" target="_blank"><b>DXdao Manifesto.</b></a>
                    </div>
                </>
        },
        {
            ask: 'Who makes up DXdao?',
            reply:
                <p>
                    DXdao is made up of stakeholders, otherwise known as "reputation holders". Your proportion of the dao\'s reputation determines your voting weight. This reputation is owned by Ethereum addresses that collectively control the set of smart contracts that is the DXdao, and the projects it administers. Some DXdao members assert themselves as the owners of certain addresses, other address owners are anonymous.
                </p>
        },
        {
            ask: 'How does one earn Reputation (“REP”) in DXdao?',
            reply:
                <p>
                    One can earn Reputation in DXdao by contributing to DXdao itself. This is done by a proposal which is put to a vote. For example, a full-time contributor requests 0.1667% of reputation (to their Ethereum address) for work completed. DXdao members can then cast on-chain votes weighted by reputation. If the proposal passes, the new member is granted reputation.
                </p>
        },
        {
            ask: 'How does decision making happen in DXdao?',
            reply:
                <p>
                    DXdao reputation holders vote on proposals on-chain, using DXdao's governance interface, DXvote, and holographic consensus. This means some proposals can pass by a relative majority, and other times an absolute majority is needed. This depends on the type of proposal, and if the proposal is boosted by reaching a specific staking threshold. In general, though, the DXdao coalesces around ideas and achieves rough consensus through off-chain, less formal methods, such as weekly calls, discussion forums, and chat groups. All of these are open to the public.
                </p>

        },
        {
            ask: 'What is the difference between DXD and Reputation (“REP”)?',
            reply:
                <>
                    <p>
                        <a href="https://dxdocs.eth.limo/docs/DXD/" target="_blank">DXD</a> is the economic token of the DXdao. It is a transferable ERC20 token which grants its holders a share of DXdao profits, as well as certain privileges or premier services on DXdao-owned products. <a target="_blank" href="https://dxdocs.eth.limo/docs/Governance/REP/ ">Reputation (“REP”)</a> is the governance mechanism that controls the DXdao. It is non-transferrable and holders have a right - and implicit duty - to govern and direct the collective.
                    </p>
                    <p>
                        DXD and reputation holders need not overlap, but it is likely some part of each stakeholder group will hold both to more tightly couple their interests. As holding DXD is the more passive path - and the one tied to economic success - it will likely be the more widely owned stake in the system.
                    </p>
                </>
        }
    ];

    return (
        <StyledAskedQuestionsWrapper className="full-width">
            <section className="main-width question-wrapper">
                <div className="separator-wrapper" data-aos={'fade-up'}>
                    <div className="separator-image" />
                </div>
                <section className="question-title" data-aos={'fade-up'}>
                    <h2>Frequently Asked Questions</h2>
                </section>
                <ul className="questions-cards-list" data-aos="fade-up">
                    {questions.map((q, i) => {
                        return (
                            <Question
                                key={"ask-" + i}
                                ask={q.ask}
                                reply={q.reply}
                            />
                        );
                    })}
                </ul>
            </section>
        </StyledAskedQuestionsWrapper>
    )
};

const StyledAskedQuestionsWrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 332px;
    margin-bottom: 240px;
    @media screen and (max-width: ${breakpoints.md}) {
        margin-top: 160px;
        margin-bottom: 0;
    }
    .separator-wrapper {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        margin-bottom: 48px;
        @media screen and (max-width: ${breakpoints.md}) {
            margin-bottom: -4px
        }
        .separator-image {
            width: 123px;
            height: 127px;
            background-image: url('${SeparatorImage}');
            background-size: cover;
            background-position: center;
        }
    }
    .question-wrapper {
        width: 732px;
        @media screen and (max-width: ${breakpoints.md}) {
            width: 100%;
        }
        .question-title {
            margin-bottom: 104px;
            @media screen and (max-width: ${breakpoints.md}) {
                margin-bottom: 64px;
            }
            h2 {
                font-weight: 400 !important;
                background: linear-gradient(180deg, #E5E5E5 47.59%, rgba(229, 229, 229, 0.74) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 58px;
                line-height: 70px;
                text-align: center;
                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: 38px;
                    line-height: 46px;
                }
            }
        }
        .question-cards-list{
            display: inherit;
            justify-content: inherit;
            flex-direction: inherit;
        }
    }
`;

export default AskedQuestions;