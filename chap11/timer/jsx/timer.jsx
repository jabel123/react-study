class TimerWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeLeft: null,
            timer: null
        }
        this.startTimer = this.startTimer.bind(this)
    }
    startTimer(timeLeft) {
        clearInterval(this.state.timer)
        this.state.timeLeft = timeLeft

        let timer = setInterval(() => {
            console.log('set Interval' + this.state.timeLeft)
            var timeLeft = this.state.timeLeft - 1
            if (timeLeft == 0) clearInterval(timer)            
            this.setState({ timeLeft: timeLeft })
        }, 1000)
        console.log('1: After setInterval')
        return this.setState({ timeLeft: timeLeft, timer: timer })
    }
    render() {
        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group">
                    <Button time="5" startTimer={this.startTimer} />
                    <Button time="10" startTimer={this.startTimer} />
                    <Button time="15" startTimer={this.startTimer} />
                </div>
                <Timer timeLeft={this.state.timeLeft} />
            </div>
        )
    }
}

class Timer extends React.Component {
    render() {
        console.log(this.props.timeLeft)
        if (this.props.timeLeft == 0) {
            return <div>타이머 종료</div>
        }
        if (this.props.timeLeft == null || this.props.timeLeft == 0) {
            return <div />
        }
        return <h1>Time Left : {this.props.timeLeft}</h1>
    }
}

class Button extends React.Component {
    startTimer(event) {    
        return this.props.startTimer(this.props.time)
    }
    render() {
        return <button type="button" className="btn-default btn"
            onClick={this.startTimer.bind(this)}>
            {this.props.time} second
        </button>
    }
}

ReactDOM.render(
    <TimerWrapper />
    , document.getElementById('timer-app')
)