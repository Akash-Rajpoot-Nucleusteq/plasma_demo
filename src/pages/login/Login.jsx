import React, { useState } from "react";
import IMG01 from "../../assets/images/logo_nucleusteq.png";
import { Link, useNavigate } from "react-router-dom";
import InputValidator from "../../validations/InputValidator.jsx";
import { determineUserRole, doLogin } from "../../utility/authentication/auth";
import InputFieldWithValidation from "../../components/uiElements/InputFieldWithValidation.jsx";
import ButtonComponent from "../../components/uiElements/ButtonComponent.jsx";
import gmailLink from "../../assets/common/constants.js";
import { useAuth } from "../../components/routing/AuthProvider.jsx";

function Login() {
  const navigate = useNavigate();
  let userRole = "";
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    errorEmail: "",
    errorPassword: "",
  });

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const errorEmail = InputValidator.isValidEmail(event.target.value);
      setFormData({
        ...formData,
        email: event.target.value.trim(),
      });
      setFormError({
        ...formError,
        errorEmail: errorEmail,
      });
    }
    if (event.target.name === "password") {
      const errorPassword = InputValidator.isValidPassword(event.target.value);
      setFormData({
        ...formData,
        password: event.target.value.trim(),
      });
      setFormError({
        ...formError,
        errorPassword: errorPassword,
      });
    }
  };
  const checkForError = () => {
    setFormError({
      errorEmail: InputValidator.isValidEmail(formData.email),
      errorPassword: InputValidator.isValidPassword(formData.password),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await checkForError();
    if (!InputValidator.isObjectEmpty(formData)) {
      const userData = {
        email: formData.email,
        password: formData.password,
      };
      userRole = determineUserRole(userData.email);
      doLogin(userData);
      login({ id: 1, role: userRole });
      navigate("/dashboard");
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
                <p className='account-subtitle'>
                  Access to our NucleusTeq dashboard
                </p>
                <form onSubmit={handleSubmit}>
                  <InputFieldWithValidation
                    type={"text"}
                    name={"email"}
                    placeholder={"Email"}
                    onBlur={handleChange}
                    error={formError.errorEmail}
                  />
                  <InputFieldWithValidation
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    onBlur={handleChange}
                    error={formError.errorPassword}
                  />
                  <div className='form-group'>
                    <ButtonComponent
                      className={
                        "btn btn-theme button-1 text-white ctm-border-radius btn-block"
                      }
                      type={"submit"}
                      buttonText={"Login"}
                    />
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
                      href={gmailLink}
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
export default Login;
