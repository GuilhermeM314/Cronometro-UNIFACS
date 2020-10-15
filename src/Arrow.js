import React from 'react';
import './App.css';
import './Arrow.css'

const Arrow = (props) => (
    <a id="arrow" href={props.href} onClick={props.onClick}>
        <img src={props.src} alt="Arrow" width="60" height="60" />
        {props.name}
    </a>
)

export default Arrow