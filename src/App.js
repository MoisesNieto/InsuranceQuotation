import React, {useState} from 'react';
import Header from './components/Header';
import styled from 'styled-components'
import Form from './components/Form'
import Resum from './components/Resum'
import Result from './components/Result';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

`;
const ContainerForm= styled.div`
  background-color: #fff;
  padding: 3rem;
`;


function App() {

  const [resum, setResum] = useState({
    cotizar: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })
  const {data, cotizar} = resum;
  return (
    <Container >
      <Header
        title= 'Insurance Quotation'
      />

      <ContainerForm>
        <Form
          setResum={setResum}
        />
        <Resum
          data= {data}
        />

        <Result
            cotizar= {cotizar}
        />
      </ContainerForm>
    </Container>
  );
}

export default App;
