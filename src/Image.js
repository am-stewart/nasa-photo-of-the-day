import React from 'react';

const Image = props => {
    return (
        <div>
            <img src={props.data.url} alt='Loading...'></img>
        </div>
    )
}

export default Image