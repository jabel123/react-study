class Mouse extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid red'
      },
      onMouseOverCapture: (event => {
        console.log('mouse over on capture event');
        console.dir(event, this);
      }).bind(this),
      onMouseOver: (event => {
        console.log('mouse over on bubblin event');
        console.dir(event, this);
      }).bind(this)
    }, "Open DevTools and move your mouse cursor over here"));
  }

}