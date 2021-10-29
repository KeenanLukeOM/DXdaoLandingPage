import React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from "../../common/Button/Button";

const CardContent = (props) => {
    const { img, title, description, positionImg, positionText, primaryButton, secondaryButton, dataAosDelay} = props;
    return (
        <StyledCardContentWrapper 
            data-aos={dataAosDelay && 'fade'} 
            data-aos-delay={dataAosDelay && dataAosDelay} 
            img={img} positionImg={positionImg} positionText={positionText} className={'card'}>
            <section className="card-header">
                <section className="logo"></section>
                <span className="title">{title}</span>
            </section>
            <span className="description">{description}</span>
            <section className="card-footer">
                <Button 
                    disabled={primaryButton.disabled}
                    size={primaryButton.size} 
                    type={primaryButton.type} 
                    label={primaryButton.label} 
                    external 
                    to={primaryButton.to} />
                <Button 
                    size={secondaryButton.size} 
                    type={secondaryButton.type} 
                    external 
                    label={secondaryButton.label} 
                    to={secondaryButton.to}/>
            </section>
        </StyledCardContentWrapper>
    )
};

CardContent.propTypes = {
    img: PropTypes.string,
    title: PropTypes.any,
    description: PropTypes.any,
    positionImg: PropTypes.oneOf(['left', 'center', 'right']),
    positionText: PropTypes.oneOf(['left', 'center', 'right']),
    primaryButton: PropTypes.shape({
        label: PropTypes.string,
        size: PropTypes.string,
        type: PropTypes.string,
    }),
    secondaryButton: PropTypes.shape({
        label: PropTypes.string,
        size: PropTypes.string,
        type: PropTypes.string,
    })
};

const StyledCardContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0px;
    align-items: ${(props) => (props.positionImg)};
    .card-header {
        display: flex;
        flex-direction: column;
    }
    .left {
        align-items: flex-start;
    }
    .center {
        align-items: center;
    }
    .right {
        align-items: flex-end;
    }
    .logo {
        width: 136px;
        height: 136px;
        mix-blend-mode: normal;
        background-image: url("${(props) => (props.img)}");
        filter: drop-shadow(0px 28px 28px rgba(0, 0, 0, 0.2))
    }
    .title {
        height: 46px;
        font-size: 38px;
        line-height: 120%;
        text-align: ${(props) => (props.positionText)};
        color: #E5E5E5;
    }
    .description {
        height: 108px;
        font-family: Montserrat;
        font-weight: 200;
        font-size: 16px;
        line-height: 170%;
        text-align: ${(props) => (props.positionText)};
        color: #B8BEE5;            
    }
    .card-footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 32px 0px 0px;
    }       
`;

export default CardContent;