import React from "react"
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = (props) => {
    const {children} = props;
    return (
        <StyledHeader className="header full-width">
            <Navbar />
            {children && children}
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
`;

export default Header;