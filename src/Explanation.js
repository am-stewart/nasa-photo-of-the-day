import React from 'react';
import styled from 'styled-components';

const ExplanationStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3%;
    background: ${props => props.theme.nasaLightRed};

   p{
    width: 52%;
    }
    
`

const Explanation = props => {
  return (
    <ExplanationStyled>
        <p> {props.data.explanation} </p>
    </ExplanationStyled>
  )
}

export default Explanation