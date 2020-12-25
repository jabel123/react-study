const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props)
            this.state = {label: 'Run'}
            this.state.handleClick = this.handleClick.bind(this)
        }
        getUrl() {
            return 'https://file1.bobaedream.co.kr/multi_image/girl/2008/08/12/30454/109.jpg'
        }
        handleClick(event) {
            document.getElementById('frame').src = this.getUrl()        
        }
        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this))
        }
        render() {
            console.log(this.state) 
            return <Component {...this.state} {...this.state} />
        }
    }
    _LoadWebsite.displayName = 'EnhancedComponent'
    return _LoadWebsite
}