class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.registerSubmit = this.registerSubmit.bind(this);

        this.state = { 
            wrongPassword: true,
            submitted: false,
            login: "",
            specialization: ""
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
        // let jobTitle = this.jobTitleRef.current.state.value;
        if (this.loginRef.current.state.valid &&
            this.fullNameRef.current.state.valid &&
            this.genderRef.current.state.valid && 
            this.passwordRef.current.state.valid &&
            this.passwordConfigRef.current.state.valid )
            
        {
            if(password != passwordComfig){
                alert("asa");
                this.setState({wrongPassword: false})
            }
            else{
                this.setState({ 
                    submitted: true, 
                    login: login,
                    specialization: specialization
                });
            } 
           
        }

    }
    render(){
        return (
            <div>
                 {!this.state.submitted && (
                    <div>
                        <form onSubmit={this.registerSubmit}>
                            <Login value="" ref={this.loginRef} />
                            <Password value="" ref={this.passwordRef} />
                            <PasswordConfig value="" ref={this.passwordConfigRef} />

                            {!this.state.wrongPassword && (
                                <span>Paaaaa</span>
                            )}
                            <FullName value="" ref={this.fullNameRef} />
                            <Gender value="" ref={this.genderRef} />
                            <Specialization value="" ref={this.specializationRef}></Specialization>
                            <input type="submit" value="Отправить" />
                        </form>
                    </div>
                )}
            
                {this.state.submitted && (
                    <div>
                        <p>{this.state.login}</p>
                        <p>{this.state.specialization}</p>
                        <p>hh</p>
                    </div>
                )}
            </div>
        );
    }
}