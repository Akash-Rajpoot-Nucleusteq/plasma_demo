import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputValidator from "../../validations/fieldValidation/InputValidator";
import { determineUserRole, doLogin } from "../../authentication/auth";
import IMG01 from "../../assets/images/logo_nucleusteq.png";

const Login = (props) => {
  const history = useHistory();

  const [state, setState] = useState({
    errorEmail: "",
    errorPassword: "",
    emailId: "",
    password: "",
    recipientEmail: "recipient@gmail.com",
    gmailLink: `https://mail.google.com/mail/?view=cm&fs=1&to=ashish.sahu@nucleusteq.com`,
  });

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const errorEmail = InputValidator.isValidEmail(event.target.value);
      setState((prevState) => ({
        ...prevState,
        emailId: event.target.value,
        errorEmail,
      }));
    }
    if (event.target.name === "password") {
      const errorPassword = InputValidator.isValidPassword(event.target.value);
      setState((prevState) => ({
        ...prevState,
        password: event.target.value,
        errorPassword,
      }));
    }
    
  };

  const checkForError = () => {
    const errorEmail = InputValidator.isValidEmail(state.emailId);
    const errorPassword = InputValidator.isValidPassword(state.password);

    setState((prevState) => ({
      ...prevState,
      errorEmail: errorEmail || "",
      errorPassword: errorPassword || "",
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    await checkForError();
    if (state.errorEmail === "" && state.errorPassword === "") {
      const userData = {
        email: state.emailId,
        password: state.password,
      };
      doLogin(userData);
      let role = determineUserRole(state.emailId);
      console.log(role + 'The role is');
      props.setRole(true);
      switch (role) {
        case "Employee":
          history.push("employee/dashboard");
          return;
        case "Manager":
          history.push("/manager/dashboard");
          return;
        case "Recruiter":
          history.push("/recruiter/dashboard");
          return;
        case "Recruiter Manager":
          history.push("recruiter/manager/dashboard");
          return;
        case "Client Manager":
          history.push("client/dashboard");
          return;
        default:
          return;
      }
    }
  };

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
                <p className='account-subtitle'>Access to our dashboard</p>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Email'
                      name='email'
                      onBlur={handleChange}
                    />
                    {state.errorEmail && (
                      <span className='text-danger small'>
                        {state.errorEmail}
                      </span>
                    )}
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Password'
                      name='password'
                      onBlur={handleChange}
                    />
                    {state.errorPassword && (
                      <span className='text-danger small'>
                        {state.errorPassword}
                      </span>
                    )}
                  </div>
                  <div className='form-group'>
                    <button
                      className='btn btn-theme button-1 text-white ctm-border-radius btn-block'
                      type='submit'>
                      Login
                    </button>
                  </div>
                </form>
                <div className='text-center forgotpass'>
                  <Link to='forgot-password'>Forgot Password?</Link>
                </div>
                <div className='login-or'>
                  <span className='or-line'></span>
                  <span className='span-or'>or</span>
                </div>
                <div className='text-center dont-have'>
                  Don’t have an account?{" "}
                  <div>
                    <a
                      href={state.gmailLink}
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
};

export default Login;
