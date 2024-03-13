import React from 'react'
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import SideBar from '../../../../components/account-management/sideBar';
import { Toggle } from '../../../../components/customer/toggle/toggle';
import ButtonComponent from '../../../../commonComponents/ButtonComponent';
import LabelAndInputField from '../../../../commonComponents/LabelAndInputField';
import LabelAndDropdownField from '../../../../commonComponents/LabelAndDropdownField';
import LabelAndPhoneNumberInputField from '../../../../commonComponents/LabelAndPhoneNumberInputField';

const AddCustomer = () => {
    const [formData, setFormData] = useState({
        // Client Information
        clientName: "",
        businessUnit: "",
        project: "",
    
        // Client Contact Information
        clientMiddleName: "",
        clientLastName: "",
        phoneNumber: "",
        email: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
    
        // Client Manager Information
        clientManagerFirstName: "",
        clientManagerMiddleName: "",
        clientManagerLastName: "",
    
        // Additional Contacts
        directContract: "",
    
        // Pass Through Vendor Information
        passThroughVendorName: "",
        passThroughVendorContract: "",
    
        // Contact Person Information
        contactFirstName: "",
        contactLastName: "",
        contactPhone: "",
        contactEmail: "",
    
        // Client Partner Information
        clientPartnerFirstName: "",
        clientPartnerLastName: "",
        clientPartnerPhone: "",
        clientPartnerEmail: "",
    
        // Engagement Manager Information
        engagementManagerFirstName: "",
        engagementManagerLastName: "",
        engagementManagerPhone: "",
        engagementManagerEmail: "",
    
        // HR Information
        accountHr: "",
        // Add more fields as needed
      });
    
      const directContractList = ['Yes', 'No']
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };
    
      function handleSubmit(event) {
        event.preventDefault();
      }
    
      return (
        <div className='page-wrapper'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
                <SideBar />
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
                          isRequired={true}
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
                          isRequired={true}
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
                          isRequired={true}
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
                          isRequired={true}
                        />
                        <LabelAndInputField
                          mdValue={6}
                          lgValue={6}
                          smValue={12}
                          xsValue={12}
                          controlId={'clientManagerMiddleName'}
                          labelText={'Client Manager Middle Name'}
                          isCompulsary={true}
                          placeholder={'Enter Client Manager Middle Name'}
                          inputType={'text'}
                          value={formData.clientManagerMiddleName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          isCompulsary={true}
                          placeholder={'Enter Client Manager Last Name'}
                          inputType={'text'}
                          value={formData.clientManagerLastName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                        />
    
                      </Row>
    
                      {/* Pass Through Vendor Information */}
                      <Row>
                        <LabelAndInputField
                          mdValue={6}
                          lgValue={6}
                          smValue={12}
                          xsValue={12}
                          controlId={'passThroughVendorName'}
                          labelText={'Pass Through Vendor Name'}
                          isCompulsary={true}
                          placeholder={'enter Pass Through Vendor Name'}
                          inputType={'text'}
                          value={formData.passThroughVendorName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
                        />
                        <LabelAndInputField
                          mdValue={6}
                          lgValue={6}
                          smValue={12}
                          xsValue={12}
                          controlId={'passThroughVendorContract'}
                          labelText={'Pass Through Vendor Contract'}
                          isCompulsary={true}
                          placeholder={'Enter Pass Through Vendor Contract'}
                          inputType={'text'}
                          value={formData.passThroughVendorContract}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          value={formData.contactFirstName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          value={formData.contactLastName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          value={formData.contactPhone}
                          onChange={(value) => handleInputChange({ target: { id: 'contactPhone', value } })}
                        />
                        <LabelAndInputField
                          mdValue={6}
                          lgValue={6}
                          smValue={12}
                          xsValue={12}
                          controlId={'contactEmail'}
                          labelText={'Contact Phone Email'}
                          isCompulsary={true}
                          placeholder={'Enter Contact Email'}
                          inputType={'text'}
                          value={formData.contactEmail}
                          handleInputChange={handleInputChange}
                          isRequired={true}
                        />
                      </Row>
    
                      {/* Client Partner Information */}
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
                          value={formData.clientPartnerFirstName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          value={formData.clientPartnerLastName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          value={formData.directContact}
                          onChange={(value) => handleInputChange({ target: { id: 'directContact', value } })}
                        />
    
                        <LabelAndInputField
                          mdValue={6}
                          lgValue={6}
                          smValue={12}
                          xsValue={12}
                          controlId={'clientPartnerPhone'}
                          labelText={'Client Partner Phone Number'}
                          isCompulsary={true}
                          placeholder={'Enter Client Partner Phone Number'}
                          inputType={'text'}
                          value={formData.clientPartnerPhone}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          value={formData.clientPartnerEmail}
                          handleInputChange={handleInputChange}
                          isRequired={true}
                        />
                      </Row>
    
                      {/* Engagement Manager Information */}
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
                          value={formData.engagementManagerFirstName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          value={formData.engagementManagerLastName}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
                          value={formData.engagementManagerPhone}
                          onChange={(value) => handleInputChange({ target: { id: 'engagementManagerPhone', value } })}
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
                          value={formData.engagementManagerEmail}
                          handleInputChange={handleInputChange}
                          isRequired={true}
                        />
                      </Row>
    
                      {/* HR Information */}
                      <Row>
                        <LabelAndInputField
                          mdValue={6}
                          lgValue={6}
                          smValue={12}
                          xsValue={12}
                          controlId={'accountHr'}
                          labelText={'Account HR'}
                          isCompulsary={true}
                          placeholder={'Enter Account HR'}
                          inputType={'text'}
                          value={formData.accountHr}
                          handleInputChange={handleInputChange}
                          isRequired={true}
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
      );
};

export default AddCustomer
