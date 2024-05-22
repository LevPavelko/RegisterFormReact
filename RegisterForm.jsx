class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.registerSubmit = this.registerSubmit.bind(this);

        this.state = { 
            wrongPassword: true,
            submitted: false,
            login: "",
            fullName: "",
            gender: "",
            specialization: "",
            jobTitle: ""
        };

        this.loginRef = React.createRef();
        this.passwordRef = React.createRef();
        this.passwordConfigRef = React.createRef();
        this.fullNameRef = React.createRef();
        this.genderRef = React.createRef();
        this.specializationRef = React.createRef();
        this.jobTitleRef = React.createRef();
    }
    registerSubmit(e){
        e.preventDefault();
        console.log("a");
        let login = this.loginRef.current.state.value;
        let password = this.passwordRef.current.state.value;
        let passwordComfig = this.passwordConfigRef.current.state.value;
        let fullName = this.fullNameRef.current.state.value;
        let gender = this.genderRef.current.state.value;

        let specialization = this.specializationRef.current.state.value;
        let jobTitle = this.jobTitleRef.current.state.value;

        
        if (this.loginRef.current.state.valid &&
            this.fullNameRef.current.state.valid &&
            this.genderRef.current.state.valid && 
            this.passwordRef.current.state.valid &&
            this.passwordConfigRef.current.state.valid&&
            this.jobTitleRef.current.state.valid &&
            this.specializationRef.current.state.valid )
            
        {
            if(password != passwordComfig){
                
                this.setState({wrongPassword: false})
            }
            else{
                this.setState({ 
                    submitted: true, 
                    login: login,
                    fullName: fullName,
                    gender: gender,
                    specialization: specialization,
                    jobTitle: jobTitle
                });
            } 
           
        }

    }
    render(){
        
        const formStyle ={
            backgroundColor: "#76A8B5", 
            textAlign: "center", 
            position: "relative", 
            display: "inline-block",
            borderRadius: 20, 
            margin: 25,
            padding: 10
            
        };
        const buttonStyle ={
            backgroundColor: "#00A2E8",
            border: "none",
            color: "white",
            padding: 15 ,
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: 16,
            margin: 4 , 
            cursor: "pointer",
            borderRadius: 12,
            boxShadow: "6px 6px 6px rgba(1, 0.2, 0.2, 0.2)",
            fontWeight: "bold"
        };
        const validationStyle={
            color: "blue",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            fontSize: 18
        }
        
        return (
            
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                
                 {!this.state.submitted && (
                    <div style={formStyle}>

                        <form onSubmit={this.registerSubmit} style={{margin: 15}}>
                            <Login value="" ref={this.loginRef} />
                            <Password value="" ref={this.passwordRef} />
                            <PasswordConfig value="" ref={this.passwordConfigRef} />

                            {!this.state.wrongPassword && (
                                <span style={validationStyle}>Passwords doesn't match</span>
                            )}
                            <FullName value="" ref={this.fullNameRef} />
                            <Gender value="" ref={this.genderRef} />
                            <Specialization value="" ref={this.specializationRef} />
                            <JobTitle  value="" ref={this.jobTitleRef}/>
                            <input type="submit" value="Register" style={buttonStyle}/>
                        </form>
                    </div>
                )}
            
                {this.state.submitted && (
                    <div style={formStyle}>
                        <h1>Welcome {this.state.login}</h1>
                        <p>{this.state.login}</p>
                        <p>{this.state.fullName}</p>
                        <p>{this.state.gender}</p>
                        <p>{this.state.specialization}</p>
                        <p>{this.state.jobTitle}</p>
                        
                    </div>
                )}
            </div>
        );
    }
}