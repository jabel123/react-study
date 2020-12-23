class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)

        this.state = {
            selectedValue: 'node',
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            },
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            },
            description: '안녕 현태'
        }
    }
    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked
        console.log(obj[event.target.value] + " " + obj)
        console.dir(obj)
        this.setState({ radioGroup: obj })
    }
    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup)
        obj[event.target.value] = event.target.checked
        console.log(obj[event.target.value] + " " + obj)
        console.dir(obj)
        this.setState({ radioGroup: obj })
    }
    handleSelectChange(event) {
        this.setState({selectedValue: event.target.value})
    }
    render() {
        return <form>
            <input type="radio"
                name="radioGroup"
                value='angular'
                checked={this.state.radioGroup['angular']}
                onChange={this.handleRadio} /> angular
            <input type="radio"
                name="radioGroup"
                value='react'
                checked={this.state.radioGroup['react']}
                onChange={this.handleRadio} /> react
            <input type="radio"
                name="radioGroup"
                value='polymer'
                checked={this.state.radioGroup['polymer']}
                onChange={this.handleRadio} /> polymer
            <br />
            <input type="checkbox"
                name="checkboxGroup"
                value='node'
                checked={this.state.checkboxGroup['node']}
                onChange={this.handleCheckbox} />
            <input type="checkbox"
                name="checkboxGroup"
                value='react'
                checked={this.state.checkboxGroup['react']}
                onChange={this.handleCheckbox} />
            <input type="checkbox"
                name="checkboxGroup"
                value='express'
                checked={this.state.checkboxGroup['express']}
                onChange={this.handleCheckbox} />
            <input type="checkbox"
                name="checkboxGroup"
                value='mongodb'
                checked={this.state.checkboxGroup['mongodb']}
                onChange={this.handleCheckbox} />
            <textarea
                name="description"
                value={this.state.description}
                readOnly
            />
            <select
                value={this.state.selectedValue}
                onChange={this.handleSelectChange}>
                    <option value="ruby">Ruby</option>
                    <option value="node">Node</option>
                    <option value="python">Python</option>
            </select>
        </form>
    }
}