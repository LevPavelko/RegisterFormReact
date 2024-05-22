class FullName extends React.Component{
    constructor(props){
        super(props);
        let isValid = this.validate(props.value);
        this.state = { value: props.value, valid: isValid };
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
        return val !== ''; 
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({ value: val, valid: isValid });
    }
    render() {
        let validation = this.state.valid === true ? "" : "Заполните поле";
        return (
            <p>
                <label>Full Name:</label><br />
                <input type="text" name="name" value={this.state.value} onChange={this.onChange}/>
                <br></br>
                <span >{validation}</span>
               
            </p>
        );
    }
}