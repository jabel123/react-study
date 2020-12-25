const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

class Content extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EnhancedButton, null), /*#__PURE__*/React.createElement(EnhancedLink, null), /*#__PURE__*/React.createElement(EnhancedLogo, null));
  }

}