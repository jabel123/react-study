class Button extends React.Component {
    render() {
        return <button className="btn">{this.props.buttonLabel}</button>
    }
}

Button.defaultProps = {"buttonLabel": "submit"}

Button.propTypes = {
    handler: PropTypes.func.isRequired,
    title: PropTypes.String,
    email(Props, propName, componentName) {
        let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (Props[propName] && !emailRegularExpression.test(Props[propName])) {
            return new Error("Email validation failed!");
        }
    }
}
