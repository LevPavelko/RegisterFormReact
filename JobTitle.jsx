class JobTitle extends React.Component{
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
            <p>
                <label style={{fontSize: 24}}>Job Title:</label><br />
                <select value={this.state.value} onChange={this.onChange} style={inputStyle}>
                    <option value="">Select a job title</option>
                    <option name="dev" value="Developer"  checked={this.state.value === "Developer"}>Developer</option>
                    <option name="designer" value="Designer"  checked={this.state.value === "Designer"}>Designer</option>

                    <option name="teamLead" value="Team Lead"  checked={this.state.value === "Team Lead"}>Team Lead</option>
                    <option name="pm" value="Project Manager"  checked={this.state.value === "Project Manager"}>Project Manager</option>

                </select>

                <br></br>
                <span style={validationStyle}>{validation}</span>
               
            </p>
        );
    }
}