import React from 'react';
import styled, { css } from 'styled-components'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const ContainerMessage = styled.p`
    background-color: rgb(127, 224, 237);
    margin: 2rem 0 0 0 ;
    padding: 1rem;
    text-align: center;
`;
const ResultContainer = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;

`;
const TextCotizar = styled.p`
    color: #00838f;
    padding: 1rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;
`;

const  Result= ({cotizar}) => {

    return (  
        (cotizar === 0 )
         ? <ContainerMessage>Choose brand, year and type of insurance</ContainerMessage> 
         : 
         (
         <ResultContainer>
            <TransitionGroup
                component= "p"
                className= "resultado"
            >
                <CSSTransition
                classNames="resultado"
                key={cotizar}
                timeout={{enter:500, exit:500}}
                >
                    <TextCotizar>The total is: ${cotizar}</TextCotizar>
                </CSSTransition>
            </TransitionGroup>   
         </ResultContainer>
        
            )
    );
}
 
export default Result;