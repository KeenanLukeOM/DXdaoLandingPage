import React, {useState, useEffect, useRef} from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SVGGradientBorder from "../../common/CardContent/SVGGradientBorder";
import Chevron from "../../../images/about/png/Chevron.png";
import { breakpoints } from "../../../utils/theme";

const Question = (props) => {

    const { ask, reply } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const [answerHeight, setAnswerHeight] = useState(null);

    const answerContainerRef = useRef(null);

    useEffect(() => {
        let offset = 200;
        if (answerContainerRef.current) {
            setAnswerHeight(answerContainerRef.current.scrollHeight + offset);
        };
    }, [answerContainerRef.current]);

    return (
        <StyledQuestionWrapper 
            answerContainerHeight={answerHeight}
            className={`${isExpanded ? 'expanded' : ''}`}
        >
            <SVGGradientBorder borderRadius={'5px'}/>
            <div className="question-trigger" onClick={() => {setIsExpanded(!isExpanded)}}>
                <span>{ask}</span>
                <div className="chevron"/>
            </div>
            <div className="answer-container" ref={answerContainerRef}>
                {reply}
            </div>
        </StyledQuestionWrapper>
    )
};

Question.propTypes = {
    ask: PropTypes.string,
    reply: PropTypes.string,
    moreInfo: PropTypes.string
};

const StyledQuestionWrapper = styled.li`
    margin-bottom: 40px;
    border-radius: 5px;
    background: #3D5AFE;
    position: relative;
    transition: linear 0.35s background;
    @media screen and (max-width: ${breakpoints.md}) {
        margin-bottom: 32px;
    }
    &.expanded {
        background: linear-gradient(163.68deg, rgba(196, 196, 196, 0.32) -89.13%, rgba(61, 90, 254, 0) 111.24%);
        transition-delay: 0s;
        .answer-container {
            max-height: ${(props) => (props.answerContainerHeight + 'px')};
            padding: 8px 20px 16px;
            * {
                opacity: 1;
            }
        }
        .question-trigger {
            background: transparent;
            &:after {
                opacity: 1;
            }
            .chevron {
                transform: rotate(0deg);
            }
        }
    }
    .question-trigger {
        height: 63px;
        padding: 16px 20px;
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;
        @media screen and (max-width: ${breakpoints.md}) {
            height: unset;
        }
        span {
            font-family: 'Montserrat';
            line-height: 28px;
            font-size: 16px;
            font-weight: 300;
            color: #E5E5E5;
            @media screen and (max-width: ${breakpoints.md}) {
                max-width: 280px;
            }
        }
        .chevron {
            width: 24px;
            height: 24px;
            margin-left: auto;
            background-image: url('${Chevron}');
            background-repeat: no-repeat;
            background-position: center;
            transform: rotate(-90deg);
            transition: ease-in-out 0.35s transform;
        }
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 20px;
            height: 1px;
            width: 32px;
            background: ${(props) => (props.theme.blueGray)};
            opacity: 0;
            transition: ease-in-out 0.35s opacity;
        }
    }
    .answer-container {
        padding: 0 20px 0;
        font-size: 16px;
        color: ${(props) => (props.theme.blueGray)};
        line-height: 28px;
        max-height: 0;
        transition: 0.35s ease-in-out max-height, 0.35s ease-in-out padding;
        overflow: hidden;
        * {
            font-family: 'Montserrat' !important;
            font-weight: 300;
            opacity: 0;
            transition: 0.5s linear opacity;
        }
    }
`;

export default Question;