class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: false,
            top: 0,
            left: 0
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity ,
            top: tooltipNode.offsetTop ,
            left: tooltipNode.offsetLeft
        })
    }
    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) 
        }
        return (
            <div style={{ display: 'inline' }}>
                <span style={{ color: 'blue' }}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}>
                    {this.props.children}
                </span>
                
                <div className="tooltip bottom" style={style} role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Tooltip text="애기현태짱">React Quickly</Tooltip>
    </div>
    , document.getElementById('tooltip')
)