class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    this.state.timeLeft = timeLeft;
    let timer = setInterval(() => {
      console.log('set Interval' + this.state.timeLeft);
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) clearInterval(timer);
      this.setState({
        timeLeft: timeLeft
      });
    }, 1000);
    console.log('1: After setInterval');
    return this.setState({
      timeLeft: timeLeft,
      timer: timer
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "row-fluid"
    }, /*#__PURE__*/React.createElement("h2", null, "Timer"), /*#__PURE__*/React.createElement("div", {
      className: "btn-group",
      role: "group"
    }, /*#__PURE__*/React.createElement(Button, {
      time: "5",
      startTimer: this.startTimer
    }), /*#__PURE__*/React.createElement(Button, {
      time: "10",
      startTimer: this.startTimer
    }), /*#__PURE__*/React.createElement(Button, {
      time: "15",
      startTimer: this.startTimer
    })), /*#__PURE__*/React.createElement(Timer, {
      timeLeft: this.state.timeLeft
    }));
  }

}

class Timer extends React.Component {
  render() {
    console.log(this.props.timeLeft);

    if (this.props.timeLeft == 0) {
      return /*#__PURE__*/React.createElement("div", null, "\uD0C0\uC774\uBA38 \uC885\uB8CC");
    }

    if (this.props.timeLeft == null || this.props.timeLeft == 0) {
      return /*#__PURE__*/React.createElement("div", null);
    }

    return /*#__PURE__*/React.createElement("h1", null, "Time Left : ", this.props.timeLeft);
  }

}

class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.time);
  }

  render() {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn-default btn",
      onClick: this.startTimer.bind(this)
    }, this.props.time, " second");
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(TimerWrapper, null), document.getElementById('timer-app'));