import React from 'react';
import styled from 'styled-components';

const DateStyled = styled.div`
    h3 {
      color: ${props => props.theme.nasaDarkGray};
      margin-top: 1%;
      margin-bottom: 5%;
    }
`

const Date = props => {
    return (
        <DateStyled>
            <h3>{props.data.date}</h3>
        </DateStyled>
    )
}

export default Date