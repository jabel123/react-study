class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textbook: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      textbook: event.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: this.handleChange,
      placeholder: "Eloquent Typescript: Myth or Reality"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, this.state.textbook));
  }

}