import React, { useRef, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InputValidator from "../../../validations/InputValidator.jsx";
import "react-phone-input-2/lib/style.css";

import {
    roleList,
    designationList,
    employmentNatureList,
    visaStatusList,
    employmentStatusList,
    onshoreOrOffshoreList,
    genderList,
    bloodGroupList,
    workingRemoteList,
} from "../../../assets/common/lists.js";
import {
    getCountryList,
    getNameWithErrorPrefix,
    getStatesListByCountry,
} from "../../../utility/commonFunctions/CommonFunctions.jsx";
import LabelAndInputField from "../../../components/uiElements/LabelAndInputField";
import LabelAndDropdownField from "../../../components/uiElements/LabelAndDropdownField";
import LabelAndPhoneNumberInputField from "../../../components/uiElements/LabelAndPhoneNumberInputField";
import ButtonComponent from "../../../components/uiElements/ButtonComponent";
import LabelAndDropdownFieldForObject from "../../../components/uiElements/LabelAndDropdownFieldForObject.jsx";

export default function AddVendorResourceForm() {

    const vendorDetailsList = [
        { vendorName: "ABC Corp", vendorId: "V1001" },
        { vendorName: "XYZ Ltd", vendorId: "V1002" },
        { vendorName: "LMN Inc", vendorId: "V1003" },
        { vendorName: "PQR Enterprises", vendorId: "V1004" },
        { vendorName: "EFG Solutions", vendorId: "V1005" }
    ]


    const [formData, setFormData] = useState({
        phoneNumber: "",
        firstName: "",
        middleName: "",
        lastName: "",
        personalEmailId: "",
        dateOfBirth: "",
        gender: "",
        bloodGroup: "",
        visaStatus: "",
        citizenship: "",
        workMode: "",
        employmentStartDate: "",
        role: [],
        designation: "",
        employementStatus: employmentStatusList[0],
        workLocation: "",
        vendor: "",
        skill: [],
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
    });

    const [formError, setFormError] = useState({
        errorFirstName: "",
        errorLastName: "",
        errorPhoneNumber: "",
        errorAddressLine1: "",
        errorState: "",
        errorCountry: "",
        errorCity: "",
        errorZipCode: "",
        errorCitizenship: "",
        errorWorkMode: "",
        errorEmploymentStartDate: "",
        errorRole: "",
        errorDesignation: "",
        errorEmployementStatus: "",
        errorCtc: "",
        errorBonus: "",

        errorWorkLocation: "",
        errorVendor: "",
        errorPersonalEmailId: "",

        errorDateOfBirth: "",
        errorGender: "",

    });

    const [countries, setCountries] = useState(getCountryList);
    const [states, setStates] = useState([]);
    const [listOfRoles, setListOfRoles] = useState(roleList);

    //Used to handle country change.
    const handleCountryChange = (event) => {
        const { id, value } = event.target;
        const errorId = giveNameWithError(id);
        setFormData((prevState) => ({ ...prevState, [id]: value }));
        setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
        setStates(getStatesListByCountry(value));
    };

    // Used to return variable name with error prefix.
    const giveNameWithError = (name) => {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        const nameWithError = "error" + capitalizedName;
        return nameWithError;
    };

    //Used to handle for any input field changes in form.
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const errorId = giveNameWithError(id);
        if (id === "skill") {
            const skillList = value.split(",").map((skill) => skill.trim());
            setFormData({
                ...formData,
                [id]: skillList,
            });
        } else if (id === "role") {
            const roleValue = [];
            roleValue.push(value);
            setFormData({
                ...formData,
                [id]: roleValue,
            });
            setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
        } else {
            setFormData((prevState) => ({ ...prevState, [id]: value }));
            setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
        }
    };

    //Used to check for the existance of any error by calling the function and storing value.
    const checkForError = () => {
        setFormError((prevState) => ({
            ...prevState,
            errorFirstName: InputValidator.isEmpty(formData.firstName),
            errorLastName: InputValidator.isEmpty(formData.lastName),
            errorPhoneNumber: InputValidator.isEmpty(formData.phoneNumber.toString()),
            errorAddressLine1: InputValidator.isEmpty(formData.addressLine1),
            errorState: InputValidator.isEmpty(formData.state),
            errorCountry: InputValidator.isEmpty(formData.country),
            errorCity: InputValidator.isEmpty(formData.city),
            errorZipCode: InputValidator.isEmpty(formData.zipCode.toString()),
            errorCitizenship: InputValidator.isEmpty(formData.citizenship),
            errorWorkMode: InputValidator.isEmpty(formData.workMode),
            errorEmploymentStartDate: InputValidator.isEmpty(
                formData.employmentStartDate.toString()
            ),
            errorRole: InputValidator.isArrayEmpty(formData.role) ? 'Field should not be empty.' : '',
            errorDesignation: InputValidator.isEmpty(formData.designation),
            errorEmployementStatus: InputValidator.isEmpty(formData.employementStatus),

            errorWorkLocation: InputValidator.isEmpty(formData.workLocation),
            errorVendor: InputValidator.isEmpty(
                formData.vendor
            ),
            errorPersonalEmailId: InputValidator.isEmpty(formData.personalEmailId),

            errorDateOfBirth: InputValidator.isEmpty(formData.dateOfBirth.toString()),
            errorGender: InputValidator.isEmpty(formData.gender),
        }));
    };

    function excludeProperties(data) {
        const {
            middleName,
            addressLine2,
            bloodGroup,
            visaStatus,
            skill,
            visaExpense,
            otherExpense,
            ctcCurrency,
            bonusCurrency,
            visaExpenseCurrency,
            otherExpenseCurrency,
            contractingRateCurrency,
            employmentCompany,
            ...newData
        } = data;

        if (data.employmentNature === employmentNatureList[0]) {
            delete newData.contractingRate;
            delete newData.contractingCompany;
        }

        return newData;
    }

    //Used to handle event after the form submission.
    function handleSubmit(event) {
        event.preventDefault();
        checkForError();

        let newOnboardingMandatoryFieldData = excludeProperties(formData);

        delete newOnboardingMandatoryFieldData.ctc;
        delete newOnboardingMandatoryFieldData.bonus;

        const onboardingApprovalMandatoryFieldData = excludeProperties(formData);

        if (
            InputValidator.isFormErrorEmpty(formError)
            && !InputValidator.isObjectEmpty(newOnboardingMandatoryFieldData)
        ) {

            let apiDataNewOnboard = { ...formData }

            let selectedRoleObject = [listOfRoles.find(role => role.name === formData.role[0])];

            apiDataNewOnboard.role = selectedRoleObject;

            console.log('succeded from the new onboarding, data is :', apiDataNewOnboard);
            // location.reload();
        } else {
            console.error("Failed data error: ", formError);
            console.log('formError is ', formError, 'value is : ', InputValidator.isFormErrorEmpty(formError))
            console.log('newOnboardingMandatoryFieldData is ', newOnboardingMandatoryFieldData, 'value is : ', !InputValidator.isObjectEmpty(newOnboardingMandatoryFieldData))
            console.log('isDocumentFieldEmpty value is : ', isDocumentFieldEmpty())
        }
    }

    function setSelectedValueFromDropdown(value, controlId) {
        const idWithError = getNameWithErrorPrefix(controlId);
        switch (controlId) {
            case 'vendor':
                setFormData({ ...formData, vendor: value.vendorId })
                setFormError({ ...formError, [idWithError]: '' })
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit} enctype='multipart/form-data'>
                {/* First name and middle name */}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"firstName"}
                        labelText={"First Name"}
                        isCompulsary={true}
                        placeholder={"Enter First Name"}
                        value={formData.firstName}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorFirstName}
                    />
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"middleName"}
                        labelText={"Middle Name"}
                        placeholder={"Enter Middle Name"}
                        value={formData.middleName}
                        handleInputChange={handleInputChange}
                    />
                </Row>

                {/* Last name and phone number */}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"lastName"}
                        labelText={"Last Name"}
                        isCompulsary={true}
                        placeholder={"Enter Last Name"}
                        value={formData.lastName}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorLastName}
                    />
                    <LabelAndPhoneNumberInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"phoneNumber"}
                        labelText={"Phone Number"}
                        isCompulsary={true}
                        value={formData.phoneNumber}
                        onChange={(value) =>
                            handleInputChange({ target: { id: "phoneNumber", value } })
                        }
                        error={formError.errorPhoneNumber}
                    />
                </Row>

                {/* email id and country */}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"personalEmailId"}
                        labelText={"Personal Email Id"}
                        isCompulsary={true}
                        placeholder={"Enter Personal Email Id"}
                        value={formData.personalEmailId}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorPersonalEmailId}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"country"}
                        labelText={"Country"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.country}
                        optionList={countries}
                        handleInputChange={handleCountryChange}
                        errorMessage={formError.errorCountry}
                    />
                </Row>

                {/* state and city */}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"state"}
                        labelText={"State"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.state}
                        optionList={states}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorState}
                    />
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"city"}
                        labelText={"City"}
                        isCompulsary={true}
                        placeholder={"Enter City"}
                        value={formData.city}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorCity}
                    />
                </Row>

                {/* Address line 1 and zip code */}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"addressLine1"}
                        labelText={"Address Line 1"}
                        isCompulsary={true}
                        placeholder={"Enter Address Line 1"}
                        value={formData.addressLine1}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorAddressLine1}
                    />
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"addressLine2"}
                        labelText={"Address Line 2"}
                        placeholder={"Enter Address Line 2"}
                        value={formData.addressLine2}
                        handleInputChange={handleInputChange}
                    />
                </Row>

                {/* Gender and DOB */}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"zipCode"}
                        labelText={"Zip Code"}
                        isCompulsary={true}
                        placeholder={"Enter Zip Code"}
                        value={formData.zipCode}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorZipCode}
                    />
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"dateOfBirth"}
                        labelText={"DOB"}
                        isCompulsary={true}
                        inputType={"date"}
                        placeholder={"Enter DOB"}
                        value={formData.dateOfBirth}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorDateOfBirth}
                    />
                </Row>

                {/*Gendere and Blood Group */}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"gender"}
                        labelText={"Gender"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.gender}
                        optionList={genderList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorGender}
                        formatOption={true}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"bloodGroup"}
                        labelText={"Blood Group"}
                        showDefaultOption={true}
                        value={formData.bloodGroup}
                        optionList={bloodGroupList}
                        handleInputChange={handleInputChange}
                        formatOption={true}
                    />
                </Row>

                {/* Work location and onshore and offshore field */}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"workLocation"}
                        labelText={"Work Location (City)"}
                        isCompulsary={true}
                        placeholder={"Enter Work Location"}
                        value={formData.workLocation}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorWorkLocation}
                    />
                    <LabelAndDropdownFieldForObject
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'vendor'}
                        labelText={'Select Vendor'}
                        optionList={vendorDetailsList.map((vendor) => ({
                            label: `${vendor.vendorName}`,
                            value: vendor,
                        }))}
                        handleInputChange={setSelectedValueFromDropdown}
                        isCompulsary={true}
                        errorMessage={formError.errorVendor}
                    />
                </Row>

                {/* Visa status and citizenship */}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"visaStatus"}
                        labelText={"Visa Status"}
                        showDefaultOption={true}
                        value={formData.visaStatus}
                        optionList={visaStatusList}
                        handleInputChange={handleInputChange}
                        formatOption={true}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"citizenship"}
                        labelText={"Citizenship"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.citizenship}
                        optionList={countries}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorCitizenship}
                    />
                </Row>

                {/* Working remote and employment start date */}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"workMode"}
                        labelText={"Working Remote"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.workMode}
                        optionList={workingRemoteList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorWorkMode}
                        formatOption={true}
                    />
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"employmentStartDate"}
                        labelText={"Employment Start Date (dd-mm-yyyy)"}
                        isCompulsary={true}
                        inputType={"date"}
                        placeholder={"Enter Employment Start Date"}
                        value={formData.employmentStartDate}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorEmploymentStartDate}
                    />
                </Row>

                {/* role and designation */}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"role"}
                        labelText={"Role"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.role}
                        optionList={listOfRoles}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorRole}
                        formatOption={true}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"designation"}
                        labelText={"Designation"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.designation}
                        optionList={designationList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorDesignation}
                        formatOption={true}
                    />
                </Row>

                {/* skills and employment status */}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"skill"}
                        labelText={"Skill (Give Comma Separated Value)"}
                        placeholder={"Enter Skill"}
                        value={formData.skill}
                        handleInputChange={handleInputChange}
                    />

                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"employementStatus"}
                        labelText={"Employment Status"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.employementStatus}
                        optionList={employmentStatusList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorEmployementStatus}
                        isReadOnly={true}
                        formatOption={true}
                    />
                </Row>

                <div className='d-flex justify-content-between align-items-center mt-2 mb-2 mr-2 float-right'>
                    <ButtonComponent
                        variant={"primary"}
                        type={"submit"}
                        className={"btn btn-theme button-1 text-white ctm-border-radius "}
                        buttonText={"Onboard"}
                    />
                </div>
            </Form>

        </>
    );
}
