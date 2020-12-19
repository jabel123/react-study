class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString('en')
    };
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating Time...');
      this.setState({
        currentTime: new Date().toLocaleString('en')
      });
    }, 1000);
  }

  render() {
    console.log("Rendoring..");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AnalogDisplay, {
      time: this.state.currentTime
    }), /*#__PURE__*/React.createElement(DigitalDisplay, {
      time: this.state.currentTime
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById('content'));