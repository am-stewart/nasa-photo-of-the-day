import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.div`
    color: ${props => props.theme.nasaRed};

    h2 {
        margin-bottom: 0%;
    }
`

const Title = props => {
 return (
    <StyledTitle> 
        <h2> {props.data.title} </h2>
    </StyledTitle> 
 )
}

export default Title