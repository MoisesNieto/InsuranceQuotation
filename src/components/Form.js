import React , {useState} from 'react'
import styled from 'styled-components'
import {getDifferenceYear, calculateBrand, calculatePlan} from '../helper';

const ContainerInput = styled.div`
    display: flex ;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label= styled.label`
    flex: 0 0 100px;

`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;
const InputRadio= styled.input`
    margin: 0 1rem;
`;
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width:100%;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    color: #fff;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const ErrorText = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({setResum}) => {

    const [data, setData] = useState({
        brand:'',
        year:'',
        plan:''
    
    });
    const [error, setError] = useState(false);
    
    const {brand, year, plan} = data;

    const getData = e =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        if(brand.trim() === '' || year.trim()=== '' || plan.trim()=== ''){
            setError(true);
            return;
        }
        setError(false);
    
        let priceBase = 2000;
        
        const difference = getDifferenceYear(year);

        priceBase -= ((difference * 3 ) * priceBase ) / 100;
        priceBase = calculateBrand(brand) * priceBase;
        
        const incrementPlan = calculatePlan(plan);
        priceBase = parseFloat(incrementPlan * priceBase).toFixed(2);

        setResum({
            cotizar: priceBase,
            data
        })
        
    }

    return (
            <form
            onSubmit={handleSubmit}
            >
                {error ? <ErrorText>all fields are required</ErrorText>: null}
                
                <ContainerInput>
                   <Label>Brand</Label>
                   <Select
                   name= 'brand'
                   value={brand}
                   onChange={getData}
                   >
                       <option value=''>--select--</option>
                       <option value='americano'>Americano</option>
                       <option value='europeo'>Europeo</option>
                       <option value='asiatico'>Asiatico</option>
                   </Select> 
                </ContainerInput>
                <ContainerInput>
                   <Label>year</Label> 
                   <Select
                   name= 'year'
                   value= {year}
                   onChange={getData}
                   >
                        <option value="">-- Select--</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                   </Select> 
                </ContainerInput>
                <ContainerInput>

                   <Label>Plan</Label>
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="basic"
                        checked={plan ==="basic"}
                        onChange={getData}
                    />Basic

                    <InputRadio
                        type="radio"
                        name="plan"
                        value="complete"
                        checked= {plan === "complete"}
                        onChange={getData}
                    />complete

                </ContainerInput>

                <Button type="submit">Quote</Button>
            </form>
      );
}
 
export default Form;