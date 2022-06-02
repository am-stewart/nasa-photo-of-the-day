import React from 'react';
import styled, { keyframes } from 'styled-components';



const StyledImage = styled.div`
  img {
    width: 55%;
    border-radius: 5%;
    border: 2px solid ${props => props.theme.nasaBlue};
    padding: 1%;
    transition: all 0.2s ease-in-out;

    &:hover {
    transform: scale(1.1);
    }
  }
`

const Image = props => {
    return (
        <StyledImage>
            <img src={props.data.url} alt='Loading...'></img>
        </StyledImage>
    )
}

export default Image