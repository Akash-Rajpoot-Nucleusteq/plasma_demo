import React, { useState } from "react";
// import Sidebar from './SideBar';
import SideBar from "./../../components/SideBar";
import { Form, Button, Col, Alert, Row } from "react-bootstrap";
import InputFieldWithValidation from "../../components/InputFieldWithValidation";
import Label from "../../components/Label";
import ButtonComponent from "../../components/ButtonComponent";
import { getCurrentUserDetails } from "../../authentication/auth";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };
  const handleChangeById = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError(`Passwords doesn't match. Please try again`);
      return;
    }

    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setError("Password changed successfully!");
  };

  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            {/* <Sidebar /> */}
            <SideBar
              userRole={getCurrentUserDetails().role}
              currentPageName={"Change Password"}
            />
          </div>
          <div className='col-xl-9 col-lg-8 col-md-12'>
            <div className='card shadow-sm ctm-border-radius'>
              <div className='card-header align-center'>
                <h4 className='card-title mb-0'>Change Password</h4>
              </div>
              <div className='card-body align-center'>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Label labelText={"Password"} />
                      <InputFieldWithValidation
                        type={"password"}
                        name={"oldPassword"}
                        placeholder={"Eneter Old Password"}
                        onChange={handleChange}
                        required={true}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label labelText={"New Password"} />
                      <InputFieldWithValidation
                        type={"password"}
                        name={"newPassword"}
                        placeholder={"Eneter New Password"}
                        onChange={handleChange}
                        required={true}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label labelText={"Confirm New Password"} />
                      <InputFieldWithValidation
                        type={"password"}
                        name={"confirmPassword"}
                        placeholder={"Confirm New Password"}
                        onChange={handleChange}
                        required={true}
                      />
                    </Col>
                  </Row>

                  <ButtonComponent
                    variant={"primary"}
                    type={"submit"}
                    className={
                      "btn btn-theme button-1 text-white ctm-border-radius "
                    }
                    buttonText={"Change Password"}
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
