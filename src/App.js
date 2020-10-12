import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import Relogio from './Relogio'
import Temporizador from './Temporizador'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 1000ms/100
      centesimos: 0,
      segundos: 0,
      minutos: 0,
      horas: 0,
      stop: false,
      nameStop: "Stop",
      name: "Cronômetro",
      parcial: ""
    };
  }
  zerarCronometro() {
    this.state.centesimos = -1
    this.state.segundos = 0
    this.state.minutos = 0
    this.state.horas = 0
    this.state.parcial = ""
  }

  parcial() {
    let p = this.state.horas + ":" + this.state.minutos + ":" + this.state.segundos + ":" + this.state.centesimos + "\n\n"
    // let p = {` ${this.state.horas} + : + ${this.state.minutos} + : + ${this.state.segundos} + : + ${this.state.centesimos} + \n\n`}
    this.state.parcial = this.state.parcial + p
  }

  pararTempo() {
    this.setState({
      stop: !this.state.stop
    })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }

  incrementarCentesimo() {
    if (this.state.stop === false) {
      this.setState(
        function (state, props) {
          if (state.centesimos >= 100) {
            this.zerarCentesimos();
            this.incrementar(state);
          }
          return ({ centesimos: state.centesimos + 1 })
        })
    }
  }

  incrementar() {
    if (this.state.stop === false) {
      this.setState(
        function (state, props) {
          if (state.segundos >= 60) {
            this.zerar();
            this.incrementarMinuto(state);
          }
          // Está incrementando em 2 se colocar + 1 (não sei porque)
          return ({ segundos: state.segundos + 0.5 })
        })
    }
  }

  incrementarMinuto(state) {
    this.setState(() => {
      if (state.minutos >= 60) {
        this.zerarMinutos();
        this.incrementarHora(state);
      }
      return { minutos: state.minutos + 1 }
    })
  };

  incrementarHora(state) {
    this.setState(() => {
      return { horas: state.horas + 1 }
    })
  }

  zerar() {
    this.setState({
      segundos: 0
    })
  }

  zerarCentesimos() {
    this.setState({
      centesimos: 0
    })
  }

  zerarMinutos() {
    this.setState({
      minutos: 0
    })
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.incrementarCentesimo(), 10)
  }


  render() {

    return (
      <div id="container">
        <div>
          <Relogio />
        </div>
        <hr></hr>

        <div>
          <LabelRelogio name={this.state.name} />
          <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} centesimos={this.state.centesimos} />
          <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
          <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
          <Botao onClick={() => this.parcial()} label={"Pacial"} />
          <LabelRelogio name={this.state.parcial} />
        </div>

        <Temporizador />
      </div>
    );
  }
}

export default App;