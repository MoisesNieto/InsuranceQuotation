import React from 'react';
import styled from 'styled-components';
import {fristLetterUppercase} from '../helper';

const ContainerResum = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resum = ({data}) => {

    const{brand, year, plan} = data;

    if (brand === '' || year === '' || plan === '') return null;

    return ( 
        <ContainerResum>
        <h2>summary of quotations</h2>
       <ul>
         <li>brand: {fristLetterUppercase(brand)}</li>
            <li>years: {year}</li>
            <li>plan: {fristLetterUppercase(plan)}</li>
       </ul>
       </ContainerResum>
     );
}
 
export default Resum;