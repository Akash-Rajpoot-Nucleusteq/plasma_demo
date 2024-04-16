import React, { useEffect } from 'react'
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import Toggle from '../../../../components/layout/Toggle';
import ButtonComponent from '../../../../components/uiElements/ButtonComponent';
import LabelAndInputField from '../../../../components/uiElements/LabelAndInputField';
import LabelAndDropdownField from '../../../../components/uiElements/LabelAndDropdownField';
import LabelAndPhoneNumberInputField from '../../../../components/uiElements/LabelAndPhoneNumberInputField';
import SideBar from '../../../../components/layout/SideBar';
import Header from '../../../../components/layout/Header';
import { HEADER_ACCOUNT } from '../../../../assets/common/constants';
import { getCurrentUserDetails } from '../../../../utility/authentication/auth';
import LabelAndDropdownFieldForObject from '../../../../components/uiElements/LabelAndDropdownFieldForObject';
import { getNameWithErrorPrefix } from '../../../../utility/commonFunctions/CommonFunctions'
import InputValidator from '../../../../validations/InputValidator';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    // Client Information
    clientName: "",
    businessUnit: "",
    project: "",
    // Client Manager Information
    clientManagerFirstName: "",
    clientManagerMiddleName: "",
    clientManagerLastName: "",
    // Additional Contacts
    directContract: "",
    // // Pass Through Vendor Information
    vendorId: '',
    // Client Partner Information
    clientPartnerId: "",
    // Engagement Manager Information
    engagementManagerId: "",
    // HR Information
    accountHrId: "",
  });

  const [formError, setFormError] = useState({
    errorClientName: '',
    errorBusinessUnit: '',
    errorProject: '',
    errorClientManagerFirstName: '',
    errorClientManagerMiddleName: '',
    errorClientManagerLastName: '',
    errorDirectContract: '',
    errorVendor: '',
    errorClientPartner: '',
    errorEngagementManager: '',
    errorAccountHR: '',
  })

  const employeeList = [
    {
      employeeId: 'N0001',
      firstName: "John",
      lastName: "Doe",
      phone: "11234567890",
      email: "john.doe@example.com"
    },
    {
      employeeId: 'N0002',
      firstName: "Alice",
      lastName: "Smith",
      phone: "+198765432100",
      email: "alice.smith@example.com"
    },
    {
      employeeId: 'N0003',
      firstName: "Bob",
      lastName: "Johnson",
      phone: "+15555555555",
      email: "bob.johnson@example.com"
    }
  ]
  const vendorList = [
    {
      vendorId: "1",
      vendorName: "Vendor A",
      vendorContract: "Contract 1",
      contactFirstName: "John",
      contactLastName: "Doe",
      contactPhone: "+1234567890",
      contactEmail: "john.doe@example.com"
    },
    {
      vendorId: "2",
      vendorName: "Vendor B",
      vendorContract: "Contract 2",
      contactFirstName: "Jane",
      contactLastName: "Smith",
      contactPhone: "+1987654321",
      contactEmail: "jane.smith@example.com"
    },
    {
      vendorId: "3",
      vendorName: "Vendor C",
      vendorContract: "Contract 3",
      contactFirstName: "Alice",
      contactLastName: "Johnson",
      contactPhone: "+1122334455",
      contactEmail: "alice.johnson@example.com"
    },
    {
      vendorId: "4",
      vendorName: "Vendor D",
      vendorContract: "Contract 4",
      contactFirstName: "Bob",
      contactLastName: "Williams",
      contactPhone: "+1567890123",
      contactEmail: "bob.williams@example.com"
    },
    {
      vendorId: "5",
      vendorName: "Vendor E",
      vendorContract: "Contract 5",
      contactFirstName: "Emily",
      contactLastName: "Davis",
      contactPhone: "+1678901234",
      contactEmail: "emily.davis@example.com"
    }
  ]

  const [selectedClientPartner, setSelectedClientPartner] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  })
  const [selectedEngagementManager, setSelectedEngagementManager] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  })
  const [selectedVendor, setSelectedVendor] = useState({
    vendorName: "",
    vendorContract: "",
    contactFirstName: "",
    contactLastName: "",
    contactPhone: "",
    contactEmail: "",
  })

  function setSelectedValueFromDropdown(value, controlId) {
    const idWithError = getNameWithErrorPrefix(controlId);
    switch (controlId) {
      case 'engagementManager':
        setFormData({ ...formData, engagementManagerId: value.employeeId })
        setFormError({ ...formError, [idWithError]: '' })
        setSelectedEngagementManager({
          ...selectedEngagementManager,
          firstName: value.firstName,
          lastName: value.lastName,
          phone: value.phone,
          email: value.email,
        })
        break;
      case 'clientPartner':
        setFormData({ ...formData, clientPartnerId: value.employeeId })
        setFormError({ ...formError, [idWithError]: '' })
        setSelectedClientPartner({
          ...selectedClientPartner,
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          phone: value.phone
        })
        break;
      case 'accountHR':
        setFormData({ ...formData, accountHrId: value.employeeId })
        setFormError({ ...formError, [idWithError]: '' })
        break;
      case 'vendor':
        setFormData({ ...formData, vendorId: value.vendorId })
        setFormError({ ...formError, [idWithError]: '' })
        setSelectedVendor({
          ...selectedVendor,
          vendorName: value.vendorName,
          vendorContract: value.vendorContract,
          contactFirstName: value.contactFirstName,
          contactLastName: value.contactLastName,
          contactPhone: value.contactPhone,
          contactEmail: value.contactEmail
        })
        break;
      default:
      // Handle default case if needed
    }
  }


  const directContractList = ['Yes', 'No']
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const errorId = getNameWithErrorPrefix(id);
    setFormData({
      ...formData,
      [id]: value,
    });
    setFormError({
      ...formError,
      [errorId]: '',
    })
  };

  const checkForError = () => {
    setFormError((prevState) => ({
      ...prevState,
      errorClientName: InputValidator.isEmpty(formData.clientName),
      errorBusinessUnit: InputValidator.isEmpty(formData.businessUnit),
      errorProject: InputValidator.isEmpty(formData.project),
      errorClientManagerFirstName: InputValidator.isEmpty(formData.clientManagerFirstName),
      errorClientManagerMiddleName: InputValidator.isEmpty(formData.clientManagerMiddleName),
      errorClientManagerLastName: InputValidator.isEmpty(formData.clientManagerLastName),
      errorDirectContract: InputValidator.isEmpty(formData.directContract),
      errorVendor: formData.directContract === directContractList[1] ? InputValidator.isEmpty(formData.vendorId) : '',
      errorClientPartner: InputValidator.isEmpty(formData.clientPartnerId),
      errorEngagementManager: InputValidator.isEmpty(formData.engagementManagerId),
      errorAccountHR: InputValidator.isEmpty(formData.accountHrId),
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    checkForError();
    let mandatoryFieldData = {};
    mandatoryFieldData = {
      ...formData
    };

    formData.directContract === directContractList[0] && delete mandatoryFieldData.vendorId;

    if (InputValidator.isFormErrorEmpty(formError) && !InputValidator.isObjectEmpty(mandatoryFieldData)) {
      console.log('success: ', formData);
    } else {
      console.error('error:', formError);
    }
  }

  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                headerName={HEADER_ACCOUNT}
                userRole={getCurrentUserDetails()?.role}
                currentPageName={'Add Customer'}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <Toggle />
              <div className='card shadow-sm ctm-border-radius'>
                <div className='card-body align-center'>
                  <Form onSubmit={handleSubmit}>
                    {/* Client Information */}
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientName'}
                        labelText={'Client Name'}
                        isCompulsary={true}
                        placeholder={'Enter client name'}
                        inputType={'text'}
                        value={formData.clientName}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorClientName}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'businessUnit'}
                        labelText={'Business Unit'}
                        isCompulsary={true}
                        placeholder={'Enter Business Unit'}
                        inputType={'text'}
                        value={formData.businessUnit}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorBusinessUnit}
                      />
                    </Row>

                    {/* Client Contact Information */}
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'project'}
                        labelText={'Project'}
                        isCompulsary={true}
                        placeholder={'Enter Project'}
                        inputType={'text'}
                        value={formData.project}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorProject}
                      />
                    </Row>

                    {/* Client Manager Information */}
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientManagerFirstName'}
                        labelText={'Client Manager First Name'}
                        isCompulsary={true}
                        placeholder={'Enter Client Manager First Name'}
                        inputType={'text'}
                        value={formData.clientManagerFirstName}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorClientManagerFirstName}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientManagerMiddleName'}
                        labelText={'Client Manager Middle Name'}
                        placeholder={'Enter Client Manager Middle Name'}
                        inputType={'text'}
                        value={formData.clientManagerMiddleName}
                        handleInputChange={handleInputChange}
                      />
                    </Row>

                    {/* Additional Contacts */}
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientManagerLastName'}
                        labelText={'Client Manager Last Name'}
                        placeholder={'Enter Client Manager Last Name'}
                        isCompulsary={true}
                        inputType={'text'}
                        value={formData.clientManagerLastName}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorClientManagerLastName}
                      />
                      <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'directContract'}
                        labelText={'Direct Contract'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.directContract}
                        optionList={directContractList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorDirectContract}
                        formatOption={true}
                      />
                    </Row>

                    {/* Pass Through Vendor Information */}
                    {formData.directContract === directContractList[1] &&
                      (
                        <>
                          <Row>
                            <LabelAndDropdownFieldForObject
                              mdValue={6}
                              lgValue={6}
                              smValue={12}
                              xsValue={12}
                              controlId={'vendor'}
                              labelText={'Select Vendor'}
                              optionList={vendorList.map((vendor) => ({
                                label: `${vendor.vendorName}`,
                                value: vendor,
                              }))}
                              handleInputChange={setSelectedValueFromDropdown}
                              isCompulsary={true}
                              errorMessage={formError.errorVendor}
                            />
                          </Row>

                          <Row>
                            <LabelAndInputField
                              mdValue={6}
                              lgValue={6}
                              smValue={12}
                              xsValue={12}
                              controlId={'passThroughVendorName'}
                              labelText={'Pass Through Vendor Name'}
                              isCompulsary={true}
                              placeholder={'Enter Pass Through Vendor Name'}
                              inputType={'text'}
                              value={selectedVendor.vendorName}
                              isReadOnly={true}
                            />

                          </Row>

                          {/* Contact Person Information */}
                          <Row>
                            <LabelAndInputField
                              mdValue={6}
                              lgValue={6}
                              smValue={12}
                              xsValue={12}
                              controlId={'contactFirstName'}
                              labelText={'Contact First Name'}
                              isCompulsary={true}
                              placeholder={'Enter Contact First Name'}
                              inputType={'text'}
                              value={selectedVendor.contactFirstName}
                              isReadOnly={true}
                            />
                            <LabelAndInputField
                              mdValue={6}
                              lgValue={6}
                              smValue={12}
                              xsValue={12}
                              controlId={'contactLastName'}
                              labelText={'Contact Last Name'}
                              isCompulsary={true}
                              placeholder={'Enter Contact Last Name'}
                              inputType={'text'}
                              value={selectedVendor.contactLastName}
                              isReadOnly={true}
                            />
                          </Row>

                          {/* Phone and Email */}
                          <Row>
                            <LabelAndPhoneNumberInputField
                              mdValue={6}
                              lgValue={6}
                              smValue={12}
                              xsValue={12}
                              controlId={'contactPhone'}
                              labelText={'Contact Phone'}
                              isCompulsary={true}
                              value={selectedVendor.contactPhone}
                              isReadOnly={true}
                            />
                            <LabelAndInputField
                              mdValue={6}
                              lgValue={6}
                              smValue={12}
                              xsValue={12}
                              controlId={'contactEmail'}
                              labelText={'Contact Email'}
                              isCompulsary={true}
                              placeholder={'Enter Contact Email'}
                              inputType={'text'}
                              value={selectedVendor.contactEmail}
                              isReadOnly={true}
                            />
                          </Row>
                        </>
                      )}
                    {/* Client Partner Information */}
                    <Row>
                      <LabelAndDropdownFieldForObject
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientPartner'}
                        labelText={'Select Client Partner'}
                        isCompulsary={true}
                        optionList={employeeList.map((employee) => ({
                          label: `${employee.firstName} ${employee.lastName}`,
                          value: employee,
                        }))}
                        handleInputChange={setSelectedValueFromDropdown}
                        errorMessage={formError.errorClientPartner}
                      />
                    </Row>

                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientPartnerFirstName'}
                        labelText={'Client Partner First Name'}
                        isCompulsary={true}
                        placeholder={'Enter Client Partner First Name'}
                        inputType={'text'}
                        value={selectedClientPartner.firstName}
                        isReadOnly={true}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientPartnerLastName'}
                        labelText={'Client Partner Last Name'}
                        isCompulsary={true}
                        placeholder={'Enter Client Partner Last Name'}
                        inputType={'text'}
                        value={selectedClientPartner.lastName}
                        isReadOnly={true}
                      />
                    </Row>

                    {/* Phone and Email */}
                    <Row>
                      <LabelAndPhoneNumberInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientPartnerPhone'}
                        labelText={'Client Partner Phone'}
                        isCompulsary={true}
                        value={selectedClientPartner.phone}
                        isReadOnly={true}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'clientPartnerEmail'}
                        labelText={'Client Partner Email'}
                        isCompulsary={true}
                        placeholder={'Enter Client Partner Email'}
                        inputType={'text'}
                        value={selectedClientPartner.email}
                        isReadOnly={true}
                      />
                    </Row>

                    {/* Engagement Manager Information */}
                    <Row>
                      <LabelAndDropdownFieldForObject
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'engagementManager'}
                        labelText={'Select Engagement Manager'}
                        isCompulsary={true}
                        optionList={employeeList.map((employee) => ({
                          label: `${employee.firstName} ${employee.lastName}`,
                          value: employee,
                        }))}
                        handleInputChange={setSelectedValueFromDropdown}
                        errorMessage={formError.errorEngagementManager}
                      />
                    </Row>
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'engagementManagerFirstName'}
                        labelText={'Engagement Manager First Name'}
                        isCompulsary={true}
                        placeholder={'Enter Engagement Manager First Name'}
                        inputType={'text'}
                        value={selectedEngagementManager.firstName}
                        handleInputChange={handleInputChange}
                        isReadOnly={true}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'engagementManagerLastName'}
                        labelText={'Engagement Manager Last Name'}
                        isCompulsary={true}
                        placeholder={'Enter Engagement Manager Last Name'}
                        inputType={'text'}
                        value={selectedEngagementManager.lastName}
                        handleInputChange={handleInputChange}
                        isReadOnly={true}
                      />
                    </Row>

                    {/* Phone and Email */}
                    <Row>
                      <LabelAndPhoneNumberInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'engagementManagerPhone'}
                        labelText={'Engagement Manager Phone Number'}
                        isCompulsary={true}
                        value={selectedEngagementManager.phone}
                        onChange={(value) => handleInputChange({ target: { id: 'engagementManagerPhone', value } })}
                        isReadOnly={true}
                      />

                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'engagementManagerEmail'}
                        labelText={'Engagement Manager Email Id'}
                        isCompulsary={true}
                        placeholder={'Enter Engagement Manager Email Id'}
                        inputType={'text'}
                        value={selectedEngagementManager.email}
                        handleInputChange={handleInputChange}
                        isReadOnly={true}
                      />
                    </Row>

                    {/* HR Information */}
                    <Row>
                      <LabelAndDropdownFieldForObject
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'accountHR'}
                        labelText={'Select Account HR'}
                        isCompulsary={true}
                        optionList={employeeList.map((employee) => ({
                          label: `${employee.firstName} ${employee.lastName}`,
                          value: employee,
                        }))}
                        handleInputChange={setSelectedValueFromDropdown}
                        errorMessage={formError.errorAccountHR}
                      />
                    </Row>

                    <ButtonComponent
                      variant={'primary'}
                      type={'submit'}
                      className={'btn btn-theme button-1 text-white ctm-border-radius '}
                      buttonText={'Submit'}
                    />

                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer
