import React from 'react';
import './App.css';
import './Relogio.css'

const generateTime = (extraHours) => {
    let today = new Date();
    let totalHours = today.getHours() + extraHours
    let time = totalHours + ":" + today.getMinutes() + ":" + today.getSeconds();

    return time;
}

function toggleCountries() {
    const x = document.getElementById("countries");
    x.classList.toggle("d-none")
}

const Relogio = (props) => (
    <div>
        <h1>Brasília, Brasil:</h1>
        <p className="localTime mb-30">{generateTime(0)}</p>
        <button onClick={toggleCountries} id="toggleCountries">Outros países</button>
        <div className="d-none" id="countries">
            <h3>Londres, Reino Unido:</h3>
            <p>{generateTime(4)}</p>
            <h3>Nova Iorke, EUA:</h3>
            <p>{generateTime(-1)}</p>
            <h3>Xangai, China:</h3>
            <p>{generateTime(11)}</p>
            <h3>Paris, França:</h3>
            <p>{generateTime(5)}</p>
        </div>
    </div>
)

export default Relogio