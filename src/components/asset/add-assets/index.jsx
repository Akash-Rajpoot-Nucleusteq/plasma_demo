import React, { useState } from "react";
import Sidebar from "../sidebar";

export const AddAssets = () => {
  const [formData, setFormData] = useState({
    assetName: "",
    serialNo: "",
    modelNo: "",
    allocationDate: "",
    provider: "",
    clientPartner: "",
    clientName: "",
    workLocation: "",
    workType: "",
    assetType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            <Sidebar />
          </div>
          <div className='col-xl-9 col-lg-8 col-md-12'>
            <div className='card shadow-sm ctm-border-radius'>
              <div className='card-header align-center'>
                <h4 className='card-title mb-0'>Add Assets</h4>
              </div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    {/* First Column */}
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label>Asset Name <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='assetName'
                          value={formData.assetName}
                          onChange={handleChange}
                          placeholder='Enter Asset Name'
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Serial No <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='serialNo'
                          value={formData.serialNo}
                          onChange={handleChange}
                          placeholder='Enter Serial No'
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Model No <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='modelNo'
                          value={formData.modelNo}
                          onChange={handleChange}
                          placeholder='Enter model No'
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Allocation Date <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='allocationDate'
                          value={formData.allocationDate}
                          onChange={handleChange}
                          placeholder='Enter Allocation Date'
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Provider <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='provider'
                          value={formData.provider}
                          onChange={handleChange}
                          placeholder='Enter Provider'
                          className='form-control'
                        />
                      </div>
                    </div>
                    {/* Second Column */}
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label>Asset Type <span className='text-danger'>*</span></label>
                        <select
                          name='assetType'
                          value={formData.assetType}
                          onChange={handleChange}
                          className='form-control'>
                          <option value='' disabled>
                            Select Asset Type
                          </option>
                          <option value='Laptop'>Laptop</option>
                          <option value='Desktop'>Desktop</option>
                          <option value='Printer'>Printer</option>
                          {/* Add more asset types as needed */}
                        </select>
                      </div>
                      <div className='form-group'>
                        <label>Client Name <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='clientName'
                          value={formData.clientName}
                          onChange={handleChange}
                          placeholder='Enter Client Name'
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Client Partner <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='clientPartner'
                          value={formData.clientPartner}
                          onChange={handleChange}
                          placeholder='Enter Client Partner'
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Work Location <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='workLocation'
                          value={formData.workLocation}
                          onChange={handleChange}
                          placeholder='Enter Work Location'
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Work Type <span className='text-danger'>*</span></label>
                        <input
                          type='text'
                          name='workType'
                          value={formData.workType}
                          onChange={handleChange}
                          placeholder='Enter Work Type'
                          className='form-control'
                        />
                      </div>
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

