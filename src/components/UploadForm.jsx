import React, { useState } from "react";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    taxId: "",
    einNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    attachment: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      attachment: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const newErrors = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
    }
    // Add validation for other fields

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log(formData);
      // Reset form
      setFormData({
        companyName: "",
        taxId: "",
        einNumber: "",
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        attachment: null,
      });
    } else {
      // Update errors
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-6'>
          <div className='mb-3'>
            <label htmlFor='companyName' className='form-label'>
              Company Name
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='companyName'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && (
              <div className='text-danger'>{errors.companyName}</div>
            )}
          </div>

          <div className='mb-3'>
            <label htmlFor='einNumber' className='form-label'>
              EIN Number
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='einNumber'
              name='einNumber'
              value={formData.einNumber}
              onChange={handleChange}
            />
            {errors.einNumber && (
              <div className='text-danger'>{errors.einNumber}</div>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>
              First Name
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className='text-danger'>{errors.firstName}</div>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className='text-danger'>{errors.lastName}</div>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='addressLine2' className='form-label'>
              Address Line 2
            </label>
            <input
              type='text'
              className='form-control'
              id='addressLine2'
              name='addressLine2'
              value={formData.addressLine2}
              onChange={handleChange}
            />
            {errors.addressLine2 && (
              <div className='text-danger'>{errors.addressLine2}</div>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='state' className='form-label'>
              State
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='state'
              name='state'
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && (
              <div className='text-danger'>{errors.addressLine2}</div>
            )}
          </div>
        </div>
        <div className='col-md-6'>
          <div className='mb-3'>
            <label htmlFor='taxId' className='form-label'>
              Tax ID
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='taxId'
              name='taxId'
              value={formData.taxId}
              onChange={handleChange}
            />
            {errors.taxId && <div className='text-danger'>{errors.taxId}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='phoneNumber' className='form-label'>
              Phone Number
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <div className='text-danger'>{errors.phoneNumber}</div>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='middleName' className='form-label'>
              Middle Name
            </label>
            <input
              type='text'
              className='form-control'
              id='middleName'
              name='middleName'
              value={formData.middleName}
              onChange={handleChange}
            />
            {errors.middleName && (
              <div className='text-danger'>{errors.middleName}</div>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='addressLine1' className='form-label'>
              Address Line 1
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='addressLine1'
              name='addressLine1'
              value={formData.addressLine1}
              onChange={handleChange}
            />
            {errors.addressLine1 && (
              <div className='text-danger'>{errors.addressLine1}</div>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='city' className='form-label'>
              City
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='city'
              name='city'
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <div className='text-danger'>{errors.city}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='zipCode' className='form-label'>
              zipCode
            </label>
            <span className='text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='city'
              name='city'
              value={formData.zipCode}
              onChange={handleChange}
            />
            {errors.zipCode && (
              <div className='text-danger'>{errors.zipCode}</div>
            )}
          </div>
        </div>
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default UploadForm;
