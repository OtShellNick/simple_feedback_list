import React, { Component, ReactNode } from 'react';

export default class Watch extends Component {

    state: Readonly<{
        time: string,
        interval: number
    }> = {
            time: '',
            interval: 0
        };

    setTime = (): void => {
        const offset = new Date().getTimezoneOffset() / 60;
        const currentTime = new Date().getTime();

        const hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - offset;
        const minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((currentTime % (1000 * 60)) / 1000);

        this.setState({
            time:
                `${hours < 10 ?
                    '0' + hours :
                    hours
                }:${minutes < 10 ?
                    '0' + minutes :
                    minutes}:${seconds < 10 ?
                        '0' + seconds :
                        seconds}`
        });
    }

    componentWillMount(): void {
        this.setTime();

        const interval = setInterval(() => {
            this.setTime();
        }, 1000);

        this.setState({ interval });
    };

    componentWillUnmount(): void {
        const { interval } = this.state;

        if (interval) {
            clearInterval(interval);
            this.setState({ interval: 0 });
        }
    }

    render(): ReactNode {

        const { time } = this.state;

        return <div>{time}</div>
    }
}