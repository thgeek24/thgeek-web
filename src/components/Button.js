import React from 'react';

function Button({text, onClick}) {
    return (
        <button className="App-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;