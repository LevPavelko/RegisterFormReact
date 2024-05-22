class Password extends React.Component{
   
    constructor(props){
        super(props);
        let isValid = this.validate(props.value);
        this.state = { value: props.value, valid: isValid };
        this.onChange = this.onChange.bind(this);

        
    }
    validate(val) {
        return val !== '' && val.length >= 3 && val.length <= 10;
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({ value: val, valid: isValid });
    }
    render() {
        let validation = "";
        if (this.state.value === '') {
            validation = "Заполните поле";
        } else if (!this.state.valid) {
            validation = "Пароль должен быть от 3 до 10 символов";
        }
       
      
        return (
            <div>
                <label>Password:</label>
                <br />
                <input type="text" name="password" value={this.state.value} onChange={this.onChange}/>
                <br></br>
                <span >{validation}</span>
                
               
            </div>
            
        );
    }
}