import React, {useState, useEffect, useRef} from "react"
import styled from 'styled-components';
import theme, {breakpoints} from './../../../utils/theme';

const AccordionLinks = (props) => {
    const {title, content, type} = props;
    const [accordionContentHeight, setAccordionContentHeight] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const accordionContentRef = useRef(null);

    useEffect(() => {
        if (accordionContentRef.current) {
            setAccordionContentHeight(accordionContentRef.current.scrollHeight);
        }
    }, [accordionContentRef.current])

    return (
        <StyledAccordionLinks 
            isMenuOpen={isMenuOpen} 
            accordionContentHeight={accordionContentHeight}
        >
            <a 
                className={'accordion-title'}
                role="button"
                onClick={() => {setIsMenuOpen(!isMenuOpen)}}
            >
                {title}
            </a>
            <div className="accordion-content" ref={accordionContentRef}>
                {type == 'simple' && (
                    <ul className="simple-list">
                        {content.map((link, i) => (
                            <li key={i}>
                                <a target={link.external && '_blank'} href={link.link}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                {type == 'tree' && (
                    <ul className="tree-list">
                        {content.map((linkSection, i) => (
                            <li key={i}>
                                <span className="inner-list-header">
                                    {linkSection.listTitle}
                                </span>
                                <ul className="inner-list">
                                    {linkSection.listItems.map((listItem, j) => (
                                        <li key={j}>
                                            <a target={listItem.external && '_blank'} href={listItem.link}>
                                                {listItem.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </StyledAccordionLinks>
    );
};

export default AccordionLinks;

const StyledAccordionLinks = styled.div`
    .accordion-title {
        border-bottom: ${(props) => (props.isMenuOpen ? 'transparent' : '1px solid rgba(184, 190, 229, 0.3)')} !important;
        transition: ease-in-out 0.5s all;
    }
    .accordion-content {
        padding: 0 0 0 32px;
        padding-top: ${(props) => (props.isMenuOpen ? '0' : '0px')};
        opacity: ${(props) => (props.isMenuOpen ? '1' : '0')};
        max-height: ${(props) => (props.isMenuOpen ? props.accordionContentHeight + 'px' : '0px')};
        overflow-y: hidden;
        transition: ease-in-out 0.5s all;
        ul {
            li {
                font-size: 14px;
                line-height: 24px;
                margin-bottom: 12px;
                a {
                    color: ${(props) => (props.theme.blueGray)};
                }
            }
        }
        .simple-list {
            li {
                margin-bottom: 16px;
            }
        }
        .tree-list {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 680px;
            & > li {
                width: 50%;
            }
            .inner-list-header {
                margin-bottom: 12px;
                display: block;
            }
            .inner-list {
                margin-bottom: 32px;
            }
        }
    }
`;