import './Symbol.css';
import number from './number.svg';
import React from 'react';


const Symbol = () => {

    return (
        <img className="icon icon-number" src = {number} alt = 'Number' />
    );
}

export default Symbol;

