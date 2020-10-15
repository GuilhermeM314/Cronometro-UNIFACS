import React from 'react';
import './App.css';
import './Relogio.css'
import moment from 'moment-timezone'


function toggleCountries() {
    const outrosPaises = document.getElementById("countries");
    outrosPaises.classList.toggle("d-none")
    document.getElementById("toggle-countries").classList.toggle('highlight-btn')
}

const Relogio = (props) => {

    const [brasil, setBrasil] = React.useState()
    const [eua, setEua] = React.useState()
    const [india, setIndia] = React.useState()
    const [china, setChina] = React.useState()
    const [australia, setAustralia] = React.useState()
    const [japan, setJapan] = React.useState()

    React.useEffect(() => {

        setInterval(() => {
            var Brasil = moment.tz("America/Bahia");
            var Eua = moment.tz("America/New_York");
            var India = moment.tz("Asia/Colombo");
            var China = moment.tz("Asia/Macau");
            var Australia = moment.tz("Australia/Sydney");
            var Japan = moment.tz("Asia/Tokyo");
            setBrasil(Brasil.format("DD-MM-YYYY H:m:s"))
            setEua(Eua.format("DD-MM-YYYY H:m:s"))
            setIndia(India.format("DD-MM-YYYY H:m:s"))
            setChina(China.format("DD-MM-YYYY H:m:s"))
            setAustralia(Australia.format("DD-MM-YYYY H:m:s"))
            setJapan(Japan.format("DD-MM-YYYY H:m:s"))
        }, 1000)

        /* console.log('br', brasil.format("DD-MM-YYYY H:m:s"))
        console.log('eua', eua.format("DD-MM-YYYY H:m:s"))
        console.log('india', india.format("DD-MM-YYYY H:m:s"))
        console.log('china', china.format("DD-MM-YYYY H:m:s"))
        console.log('autralia', australia.format("DD-MM-YYYY H:m:s"))
        console.log('japan', japan.format("DD-MM-YYYY H:m:s")) */
    }, [])

    return (
        <div id="relogio-container">
            <h1>Brasília, Brasil:</h1>
            <h2 className="localTime mb-30">{brasil}</h2>

            <button onClick={toggleCountries} id="toggle-countries">Outros países</button>
            <div className="d-none" id="countries">
                <h2>Nova Iorque, EUA:</h2>
                <h3>{eua}</h3>
                <h2>Colombo, India:</h2>
                <h3>{india}</h3>
                <h2>Macau, China:</h2>
                <h3>{china}</h3>
                <h2>Sydney, Australia:</h2>
                <h3>{australia}</h3>
                <h2>Tokyo, Japão:</h2>
                <h3>{japan}</h3>
            </div>
        </div>
    )
}

export default Relogio