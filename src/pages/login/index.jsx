import React, { Component } from "react";
import IMG01 from "../../assets/images/logo_nucleusteq.png";
import { Link } from "react-router-dom";
import InputValidator from "../../validations/InputValidator";
import { determineUserRole, doLogin } from "../../authentication/auth";
import InputFieldWithValidation from '../../components/InputFieldWithValidation'
import ButtonComponent from '../../components/ButtonComponent'
import { CLIENT_MANAGER, EMPLOYEE, MANAGER, RECRUITER, RECRUITER_MANAGER } from "../../assets/common/roles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorEmail: "",
      errorPassword: "",
      emailId: "",
      password: "",
      showPassword: false,
      recipientEmail: "recipient@gmail.com",
      gmailLink: `https://mail.google.com/mail/?view=cm&fs=1&to=ashish.sahu@nucleusteq.com`,
    };
  }

  componentDidMount = () => {
    localStorage.clear();
  };


  // Used to change the variable's value according to the inputfield name.
  handleChange = (event) => {
    if (event.target.name === "email") {
      const errorEmail = InputValidator.isValidEmail(event.target.value);
      this.setState({ emailId: event.target.value.trim(), errorEmail });
    }
    if (event.target.name === "password") {
      const errorPassword = InputValidator.isValidPassword(event.target.value);
      this.setState({ password: event.target.value.trim(), errorPassword });
    }
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }

  // Used to checking for error before the api call.
  checkForError = () => {
    this.setState({
      errorEmail: InputValidator.isValidEmail(this.state.emailId),
      errorPassword: InputValidator.isValidPassword(this.state.password),
    });
  };

  //Used to validate data and make an api call.
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.checkForError();
    if (this.state.errorEmail === "" && this.state.errorPassword === "") {
      const userData = {
        email: this.state.emailId,
        password: this.state.password,
      };
      doLogin(userData);
      let role = determineUserRole(this.state.emailId);
      ;
      if (role === EMPLOYEE) {
        this.props.history.push("employee/dashboard")
      } else if (role === MANAGER) {
        this.props.history.push("/manager/dashboard")
      } else if (role === RECRUITER) {
        this.props.history.push("/recruiter/dashboard")
      } else if (role === RECRUITER_MANAGER) {
        this.props.history.push("recruiter-manager/dashboard")
      } else if (role === CLIENT_MANAGER) {
        this.props.history.push("client/dashboard")
      }
    }
  };
  render() {
    return (
      <div className='inner-wrapper login-body'>
        <div className='login-wrapper'>
          <div className='container'>
            <div className='loginbox shadow-sm'>
              <div className='login-left'>
                <img className='img-fluid' src={IMG01} alt='Logo' />
              </div>
              <div className='login-right'>
                <div className='login-right-wrap'>
                  <h1>Login</h1>
                  <p className='account-subtitle'>Access to our NucleusTeq dashboard</p>

                  {/* Form */}
                  <form onSubmit={this.handleSubmit}>

                    <InputFieldWithValidation
                      type={'text'}
                      name={'email'}
                      placeholder={"Email"}
                      onBlur={this.handleChange}
                      error={this.state.errorEmail}
                    />
                    <InputFieldWithValidation
                      type={'password'}
                      name={'password'}
                      placeholder={"Password"}
                      onBlur={this.handleChange}
                      error={this.state.errorPassword}
                    />

                    <div className='form-group'>
                      <ButtonComponent
                        className={'btn btn-theme button-1 text-white ctm-border-radius btn-block'}
                        type={'submit'}
                        buttonText={'Login'}
                      />
                    </div>
                  </form>

                  {/* forgot password */}
                  <div className='text-center forgotpass'>
                    <Link to='forgot-password'>Forgot Password?</Link>
                  </div>
                  <div className='login-or'>
                    <span className='or-line'></span>
                    <span className='span-or'>or</span>
                  </div>

                  {/* Register page */}
                  <div className='text-center dont-have'>
                    Don’t have an account?{" "}
                    <div>
                      <a
                        href={this.state.gmailLink}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Contact Administrator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
