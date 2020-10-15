import React from 'react';
import './App.css';
import './Relogio.css'
import moment from 'moment-timezone'

const generateTime = (extraHours) => {
    const today = new Date();
    const totalHours = today.getHours() + extraHours
    const time = totalHours + ":" + today.getMinutes() + ":" + today.getSeconds();

    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    return time + " - " + date;
}


function toggleCountries() {
    const outrosPaises = document.getElementById("countries");
    outrosPaises.classList.toggle("d-none")
}

const Relogio = (props) => {

    const [brasil, setBrasil] = React.useState()
    const [eua, setEua] = React.useState()
    const [india, setIndia] = React.useState()
    const [china, setChina] = React.useState()
    const [australia, setAustralia] = React.useState()
    const [japan, setJapan] = React.useState()
    
    React.useEffect(()=>{
        
        setInterval(() =>{
            var Brasil    = moment.tz("America/Bahia");
            var Eua       = moment.tz("America/New_York");
            var India     = moment.tz("Asia/Colombo");
            var China     = moment.tz("Asia/Macau");
            var Australia = moment.tz("Australia/Sydney");
            var Japan     = moment.tz("Asia/Tokyo");
            setBrasil(Brasil.format("DD-MM-YYYY H:m:s"))
            setEua(Eua.format("DD-MM-YYYY H:m:s"))
            setIndia(India.format("DD-MM-YYYY H:m:s"))
            setChina(China.format("DD-MM-YYYY H:m:s"))
            setAustralia(Australia.format("DD-MM-YYYY H:m:s"))
            setJapan(Japan.format("DD-MM-YYYY H:m:s"))
        },1000)

        /* console.log('br', brasil.format("DD-MM-YYYY H:m:s"))
        console.log('eua', eua.format("DD-MM-YYYY H:m:s"))
        console.log('india', india.format("DD-MM-YYYY H:m:s"))
        console.log('china', china.format("DD-MM-YYYY H:m:s"))
        console.log('autralia', australia.format("DD-MM-YYYY H:m:s"))
        console.log('japan', japan.format("DD-MM-YYYY H:m:s")) */
    },[])

    return(
        <div>
            <h1>Brasília, Brasil:</h1>
            <h2 className="localTime mb-30">{brasil}</h2>

            <button onClick={toggleCountries} id="toggleCountries">Outros países</button>
            <div className="d-none" id="countries">
                <h3>Londres, Reino Unido:</h3>
                <p>{eua}</p>
                <h3>Nova Iorke, EUA:</h3>
                <p>{india}</p>
                <h3>Xangai, China:</h3>
                <p>{china}</p>
                <h3>Paris, França:</h3>
                <p>{australia}</p>
                <h3>Japan, França:</h3>
                <p>{japan}</p>
            </div>
        </div>
    )
}

export default Relogio