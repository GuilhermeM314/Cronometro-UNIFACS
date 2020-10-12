import React from 'react';
import './App.css';


const Contador = (props) => (
    <h1 className="my-title">{props.horas}:{props.minutos}:{props.segundos}:{props.centesimos}</h1>
)

export default Contador