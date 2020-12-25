class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: false,
      top: 0,
      left: 0
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  }

  render() {
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: this.state.left || 0
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'blue'
      },
      onMouseEnter: this.toggle,
      onMouseOut: this.toggle
    }, this.props.children), /*#__PURE__*/React.createElement("div", {
      className: "tooltip bottom",
      style: style,
      role: "tooltip"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tooltip-arrow"
    }), /*#__PURE__*/React.createElement("div", {
      className: "tooltip-inner"
    }, this.props.text)));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
  text: "\uC560\uAE30\uD604\uD0DC\uC9F1"
}, "React Quickly")), document.getElementById('tooltip'));