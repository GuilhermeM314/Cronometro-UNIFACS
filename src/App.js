import React from 'react';
import Contador from './Contador'
/* import Botao from './Botao' */
import LabelRelogio from './LabelRelogio'
import Relogio from './Relogio'
import Temporizador from './Temporizador'
import screenHandler from './screenHandler'
import './App.css';
import 'antd/dist/antd.css';

import { Button, Timeline, Card  } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, HistoryOutlined, ClockCircleOutlined, CaretUpOutlined, CaretDownOutlined  } from '@ant-design/icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 1000ms/100
      centesimos: 0,
      segundos: 0,
      minutos: 0,
      horas: 0,
      stop: true,
      nameStop: "Start",
      name: "Cronômetro",
      parciais: [],
      ultimaParcial: {
        centesimos: 0,
        segundos: 0,
        minutos: 0,
        horas: 0,
      }
    };
  }
  zerarCronometro() {
    this.state.centesimos = -1
    this.state.segundos = 0
    this.state.minutos = 0
    this.state.horas = 0
    this.state.parciais = []
    this.state.ultimaParcial = {
      centesimos: 0,
      segundos: 0,
      minutos: 0,
      horas: 0,
    }
  }

  parcial() {
    let p = this.state.horas + ":" + this.state.minutos + ":" + this.state.segundos + ":" + this.state.centesimos

    let horasDaDiferenca = this.state.horas - this.state.ultimaParcial.horas

    let minutosDaDiferenca = this.state.minutos - this.state.ultimaParcial.minutos
    if (minutosDaDiferenca < 0) {
      horasDaDiferenca = horasDaDiferenca - 1
      minutosDaDiferenca += 60
    }

    let segundosDaDiferenca = this.state.segundos - this.state.ultimaParcial.segundos
    if (segundosDaDiferenca < 0) {
      minutosDaDiferenca = minutosDaDiferenca - 1
      segundosDaDiferenca += 60
    }

    let centesimosDaDiferenca = this.state.centesimos - this.state.ultimaParcial.centesimos
    if (centesimosDaDiferenca < 0) {
      segundosDaDiferenca = segundosDaDiferenca - 1
      centesimosDaDiferenca += 100
    }

    console.log(`Diferença: ${horasDaDiferenca}: ${minutosDaDiferenca}: ${segundosDaDiferenca}: ${centesimosDaDiferenca}`)

    let diferenca = horasDaDiferenca + ":" + minutosDaDiferenca + ":" + segundosDaDiferenca + ":" + centesimosDaDiferenca

    this.state.ultimaParcial.centesimos = this.state.centesimos
    this.state.ultimaParcial.segundos = this.state.segundos
    this.state.ultimaParcial.minutos = this.state.minutos
    this.state.ultimaParcial.horas = this.state.horas

    const result = p + "\n|\n+" + diferenca
    this.setState({ ...this.state, parciais: [...this.state.parciais, result] })
    // const repl = result.replace(':', '').replace(':', '').replace(':', '').replace(':', '')

    console.log('=>', this.state.parciais)
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
          if (state.segundos >= 59) {
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
        <div className="tool-box" id="relogio">
          <Relogio />
          <CaretDownOutlined style={{fontSize: 40}}  onClick={() => screenHandler.showCronometro()}/>
        </div>

        <div className="tool-box opacity-0 hidden" id="cronometro">
          <CaretUpOutlined style={{fontSize: 40}} onClick={() => screenHandler.showRelogio()}/>
          {/* <Arrow name="Relógio"  src="https://image.flaticon.com/icons/png/512/36/36874.png"></Arrow> */}
          <Card bordered={false} style={{ width: 600 }}>
            
              <LabelRelogio name={this.state.name} />
              <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} centesimos={this.state.centesimos} >
                <Timeline>
                  {
                    this.state.parciais.map(item => (
                      <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">{item}</Timeline.Item>
                    ))
                  }
                </Timeline>
              </Contador>
              <div id="botoes">
                <Button danger onClick={() => this.zerarCronometro()}  >Zerar</Button>
                <Button primary onClick={() => this.pararTempo()} label={this.state.nameStop} >{this.state.nameStop}</Button>
                <Button primary onClick={() => this.parcial()} label={"Pacial"} >Parcial</Button>
              </div>
          </Card>
          
          {/*  <LabelRelogio name={this.state.parcial} /> */}
          <CaretDownOutlined style={{fontSize: 40}}  onClick={() => screenHandler.showTemporizador()}/>
        </div>

        <div className="tool-box opacity-0 hidden" id="temporizador">
          <CaretUpOutlined style={{fontSize: 40}} onClick={() => screenHandler.showCronometro()}/>
          <LabelRelogio name="Temporizador" />
          <Temporizador />
        </div>
      </div>
    );
  }
}

export default App;