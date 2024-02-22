import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Form, Button, Col, Alert } from 'react-bootstrap';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (formData.newPassword !== formData.confirmPassword) {
      setError('New password and confirm password do not match. Please try again.');
      return;
    }





    setFormData({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });


    setError('Password changed successfully!');
  };

  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <Sidebar />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12">
            <div className="card shadow-sm ctm-border-radius">
              <div className="card-header align-center">
                <h4 className="card-title mb-0">Change Password</h4>
              </div>
              <div className="card-body align-center">
                <div className="table-responsive">
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} controlId="oldPassword">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="oldPassword"
                          value={formData.oldPassword}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="newPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                      Change Password
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
