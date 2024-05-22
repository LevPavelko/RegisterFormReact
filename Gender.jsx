class Gender extends React.Component{
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
                <label>Gender:</label><br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.value === 'male'}
                        onChange={this.onChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.value === 'female'}
                        onChange={this.onChange}
                    />
                    Female
                </label>
                <br></br>
                <span >{validation}</span>
               
            </p>
        );
    }
}