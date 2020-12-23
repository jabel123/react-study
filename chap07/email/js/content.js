class Content extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.prompt = 'Please enter your email to win $1,000,000.';
  }

  submit(event) {
    let emailAddress = this.refs.emailAddress;
    let comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "well"
    }, /*#__PURE__*/React.createElement("p", null, this.prompt), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, "Email: ", /*#__PURE__*/React.createElement("input", {
      ref: "emailAddress",
      className: "form-control",
      type: "text",
      placeholder: "jabel@naver.com"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, "Comments: ", /*#__PURE__*/React.createElement("textarea", {
      ref: "comments",
      className: "form-control",
      type: "text",
      placeholder: "i like your website"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("a", {
      className: "btn btn-primary",
      value: "Submit",
      onClick: this.submit
    }, "Submit")));
  }

}