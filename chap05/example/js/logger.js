class Logger extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount 실행');
  }

  componentDidMound(e) {
    console.log('componentDidMount 실행');
    console.log('Dom Node : ', ReactDOM.findDOMNode(this));
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate');
    console.log('new state : ' + newState);
    console.log('new props : ' + newProps);
    return true;
  }

  componentWillUpdate(newProps, newState) {
    console.log('componentWillUpdate');
    console.log('new state : ' + newState);
    console.log('new props : ' + newProps);
  }

  componentDidUpdate(oldProps, oldState) {
    console.log('componentWillUpdate');
    console.log('old state : ' + oldState);
    console.log('old props : ' + oldProps);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.props.time);
  }

}