import React from 'react';
import styled from 'styled-components'

const ContainerHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextHeader= styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27 px', serif;
    text-align:center;
`;

const Header = ({title}) => {
    return (  
        <ContainerHeader>
            <TextHeader>{title}</TextHeader>
        </ContainerHeader>
    );
}
 
export default Header;