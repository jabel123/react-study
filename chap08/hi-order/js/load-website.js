function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const LoadWebsite = Component => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        label: 'Run'
      };
      this.state.handleClick = this.handleClick.bind(this);
    }

    getUrl() {
      return 'https://file1.bobaedream.co.kr/multi_image/girl/2008/08/12/30454/109.jpg';
    }

    handleClick(event) {
      document.getElementById('frame').src = this.getUrl();
    }

    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this));
    }

    render() {
      console.log(this.state);
      return /*#__PURE__*/React.createElement(Component, _extends({}, this.state, this.state));
    }

  }

  _LoadWebsite.displayName = 'EnhancedComponent';
  return _LoadWebsite;
};