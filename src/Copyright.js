import React from 'react';
import styled from 'styled-components';

const CopyrightStyled = styled.div`
    color: ${props => props.theme.nasaDarkGray};
`

const Copyright = props => {
    return (
        <CopyrightStyled>
            <p> © {props.data.copyright} </p>
        </CopyrightStyled>
    )
}

export default Copyright