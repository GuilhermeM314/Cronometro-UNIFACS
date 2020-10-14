import React from 'react';
import './App.css';

const Arrow = (props) => (
    <a href={props.href} onClick={props.onClick}>
        <img src={props.src} alt="Arrow" width="60" height="60" />
    </a>
)

export default Arrow