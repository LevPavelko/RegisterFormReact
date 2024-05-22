class PasswordConfig extends React.Component{
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
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            fontSize: 18
        }

        const inputStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            textAlign: "center",
            borderRadius: 10,
            width: 250,
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "3px solid  #0E0782",
            boxSizing: "border-box",
           outline: "none",
           marginTop: 10,
           fontSize: 22
        };
        let validation = this.state.valid === true ? "" : "Заполните поле";
        return (
            <div>
                <br></br>
                <label style={{fontSize: 24}}>Password Config:</label>
                <br />
                <input type="password" name="password" value={this.state.value} onChange={this.onChange} style={inputStyle}/>
                <span  style={validationStyle}>{validation}</span>
                <br></br>
               
            </div>
            
        );
    }
}