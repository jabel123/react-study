class Menu extends React.Component {
  render() {
    const menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];
    return /*#__PURE__*/React.createElement("div", null, menus.map((v, i) => {
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, /*#__PURE__*/React.createElement(Link, {
        label: v
      }));
    }));
  }

}

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
    return /*#__PURE__*/React.createElement("a", {
      href: url
    }, this.props.label);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Menu, null), document.getElementById('menu'));