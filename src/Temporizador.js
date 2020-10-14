import React, { Component } from 'react'

// Feito com base no código da página seguinte:
// https://medium.com/better-programming/building-a-simple-countdown-timer-with-react-4ca32763dda7

export default class Temporizador extends Component {
    state = {
        minutes: 10,
        seconds: 60,
    }

    resetTime() {
        // this.state.minutes = 0,
        //     this.state.seconds = 0,
        //     this.state.play = false
        this.setState({
            minutes: 0,
            seconds: 0,
        })
    }

    stopTime(){
        console.log(this.state)
        clearInterval(this.myInterval)
    }

    componentDidMount() {
      
    }
    /* componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    } */

    start() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                {/* { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                } */}
                <button onClick={() => this.start()}>GO</button>
                <button onClick={() => this.stopTime()}>STOP</button>
                <button onClick={() => this.resetTime()}>RESET</button>
                <div>
                    <label htmlFor="minutes">minutes</label>
                    <input type="number" value={minutes} name="minutus" onChange={({target: {value}}) => {
                        console.log(this.state)
                        this.setState({...this.state, minutes: value})
                    }}/>
                </div>
                <div>
                    <label htmlFor="seconds">seconds</label>
                    <input type="number" value={seconds} name="seconds" onChange={({target: {value}}) => {
                        console.log(this.state)
                        this.setState({...this.state, seconds: value})
                    }}/>
                </div>
            </div>
        )
    }
}