class SaveButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this) // 클래스에 대한 'this'문맥을 바인딩하고, 이 'this'를 사용하여 이벤트 핸들러에서 클래스를 참조한다.
    }
    handleSave(event) { 
        console.log(this, event)
    }
    render() {
        return <button onClick={this.handleSave}>
            Save
        </button>
    }
}