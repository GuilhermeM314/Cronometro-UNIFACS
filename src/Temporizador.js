import React, { Component } from 'react'
import { notification, Button, Radio, Input, Card } from 'antd'
// import { PoweroffOutlined } from '@ant-design/icons';
// Feito com base no código da página seguinte:
// https://medium.com/better-programming/building-a-simple-countdown-timer-with-react-4ca32763dda7

export default class Temporizador extends Component {
    state = {
        minutes: 0,
        seconds: 0,
        loading: false,
    }

    openNotification() {
        notification.open({
            message: 'Start',
            description:
                'contando...',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    finishNotification() {
        notification.open({
            message: 'Finish',
            description:
                'fim...',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    minuteFinalNotification() {
        notification.open({
            message: 'Minuto Final',
            description:
                'ultimo minuto',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    resetTime() {
        this.setState({
            minutes: 0,
            seconds: 0,
            loading: false
        })
    }

    stopTime() {
        console.log(this.state)
        this.setState({ ...this.state, loading: false })
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
        this.setState({ ...this.state, loading: true })
        this.openNotification()
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    this.setState({ ...this.state, loading: false })
                    this.finishNotification()
                    clearInterval(this.myInterval)
                    console.log(minutes)
                    console.log('terminou')
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
            <Card>
                <div>
                    {/* { minutes === 0 && seconds === 0
                        ? <h1>Busted!</h1>
                        : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    } */}
                    {this.state.loading === false ? (
                        <Radio.Button onClick={() => this.start()}>GO</Radio.Button>
                    ) : <Button loading={<h1>Carregando...</h1>} onClick={() => this.start()}>GO</Button>}

                    <Radio.Button onClick={() => this.stopTime()}>STOP</Radio.Button>
                    <Radio.Button onClick={() => this.resetTime()}>RESET</Radio.Button>
                    <div>
                        <label htmlFor="minutes">minutes</label>
                        <Input placeholder="Minutos" type="number" value={minutes} name="minutus" onChange={({ target: { value } }) => {
                            console.log(this.state)
                            this.setState({ ...this.state, minutes: value })
                        }} />
                    </div>
                    <div>
                        <label htmlFor="seconds">seconds</label>
                        <Input placeholder="Segundos" type="number" value={seconds} name="seconds" onChange={({ target: { value } }) => {
                            console.log(this.state)
                            this.setState({ ...this.state, seconds: value })
                        }} />
                    </div>
                </div>
            </Card>
        )
    }
}