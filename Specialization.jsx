class Specialization extends React.Component{
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
        const validationStyle={
            color: "blue",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.)",
            fontSize: 18
        };
       
        let validation = this.state.valid === true ? "" : "Заполните поле";
        return (
            <div style={{fontSize: 20}}>
                <label style={{fontSize: 24}}>Specialization:</label>
                <br />
                <label>
                    <input type="checkbox" name="login" value="Desing" onChange={this.onChange} checked={this.state.value === "Desing"} />
                </label>Desing
                <label>
                    <input type="checkbox" name="login" value="Programmer" onChange={this.onChange} checked={this.state.value === "Programmer"}/>
                </label>Programmer
                <label>
                    <input type="checkbox" name="login" value="Administration" onChange={this.onChange} checked={this.state.value === "Administration"}/>
                </label>Administration
              
                
                <br></br>
                <span style={validationStyle}>{validation}</span>
               
            </div>
        );
    }
}