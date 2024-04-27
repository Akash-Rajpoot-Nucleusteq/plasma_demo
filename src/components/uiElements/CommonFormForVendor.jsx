import React, { useEffect, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import 'react-phone-input-2/lib/style.css';
import LabelAndInputField from './LabelAndInputField';
import LabelAndDropdownField from './LabelAndDropdownField';
import DocumentAttachmentField from './DocumentAttachmentField';
import ButtonComponent from './ButtonComponent';
import LabelAndPhoneNumberInputField from './LabelAndPhoneNumberInputField'
import { useNavigate } from 'react-router';
import InputValidator from '../../validations/InputValidator';
import { CommonPopUpUpload } from './PopUpForDocuments';
import { getCountryList, getStatesListByCountry, handleDownload } from '../../utility/commonFunctions/CommonFunctions';

export default function CommonFormForVendor({ employeeData, parentComponentName }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        taxId: '',
        einNumber: '',
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        stateOfIncorpration: '',
    })
    const [formError, setFormError] = useState({
        errorCompanyName: '',
        errorTaxId: '',
        errorEinNumber: '',
        errorFirstName: '',
        errorLastName: '',
        errorPhoneNumber: '',
        errorAddressLine1: '',
        errorCity: '',
        errorState: '',
        errorCountry: '',
        errorStateOfIncorpration: '',

        errorW9Copy: '',
        errorGoodStandingCertificate: '',
        errorCertificateOfInsurance: '',
        errorVoidCheque: '',
    })

    const [countries, setCountries] = useState(getCountryList);
    const [states, setStates] = useState([]);

    const [w9Copy, setW9Copy] = useState({
        showAttachmentModal: false,
        document: null,
    })
    const [goodStandingCertificate, setGoodStandingCertificate] = useState({
        showAttachmentModal: false,
        document: null,
    })
    const [certificateOfInsurance, setCertificateOfInsurance] = useState({
        showAttachmentModal: false,
        document: null,
    })
    const [voidCheque, setVoidCheque] = useState({
        showAttachmentModal: false,
        document: null,
    })

    //Start for w9copy
    function showW9CopyAttachment() {
        setFormError({
            ...formError,
            errorW9Copy: '',
        })
        setW9Copy((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveW9Copy() {
        setW9Copy((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //end for w9copy

    //Start for goodStandingCertificate
    function showGoodStandingCertificateAttachment() {
        setFormError({
            ...formError,
            errorGoodStandingCertificate: '',
        })
        setGoodStandingCertificate((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveGoodStandingCertificate() {
        setGoodStandingCertificate((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //end for goodStandingCertificate

    //Start for certificateOfInsurance
    function showCertificateOfInsuranceAttachment() {
        setFormError({
            ...formError,
            errorCertificateOfInsurance: '',
        })
        setCertificateOfInsurance((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveCertificateOfInsurance() {
        setCertificateOfInsurance((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //end for certificateOfInsurance

    //Start for voidCheque
    function showVoidChequeAttachment() {
        setFormError({
            ...formError,
            errorVoidCheque: '',
        })
        setVoidCheque((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveVoidCheque() {
        setVoidCheque((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            document: null,
        }))
    }
    //end for voidCheque


    useEffect(() => {
        if (employeeData) {
            const statesList = employeeData.country ? getStatesListByCountry(employeeData.country) : []
            setStates(statesList)
            setFormData({
                ...formData,
                companyName: employeeData.companyName || '',
                taxId: employeeData.taxId || '',
                einNumber: employeeData.einNumber || '',
                firstName: employeeData.firstName || '',
                middleName: employeeData.middleName || '',
                lastName: employeeData.lastName || '',
                phoneNumber: employeeData.phoneNumber || '',
                addressLine1: employeeData.addressLine1 || '',
                addressLine2: employeeData.addressLine2 || '',
                city: employeeData.city || '',
                state: employeeData.state || '',
                country: employeeData.country || '',
                stateOfIncorpration: employeeData.stateOfIncorpration || '',
            })

        }
    }, [employeeData])

    const giveNameWithError = (name) => {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        const nameWithError = 'error' + capitalizedName;
        return nameWithError;
    }

    const handleCountryChange = (event) => {
        const { id, value } = event.target;
        const errorId = giveNameWithError(id);
        setFormData(prevState => ({ ...prevState, [id]: value }));
        setFormError(prevState => ({ ...prevState, [errorId]: '' }))
        setStates(getStatesListByCountry(value))
    };

    const checkForError = () => {
        return new Promise(resolve => {
            setFormError({
                ...formError,
                errorCompanyName: InputValidator.isEmpty(formData.companyName),
                errorTaxId: InputValidator.isEmpty(formData.taxId),
                errorEinNumber: InputValidator.isEmpty(formData.einNumber),
                errorFirstName: InputValidator.isEmpty(formData.firstName),
                errorLastName: InputValidator.isEmpty(formData.lastName),
                errorPhoneNumber: InputValidator.isEmpty(formData.phoneNumber.toString()),
                errorAddressLine1: InputValidator.isEmpty(formData.addressLine1),
                errorState: InputValidator.isEmpty(formData.state),
                errorCountry: InputValidator.isEmpty(formData.country),
                errorCity: InputValidator.isEmpty(formData.city),
                errorStateOfIncorpration: InputValidator.isEmpty(formData.stateOfIncorpration),

                errorW9Copy: InputValidator.isObjectEmpty(w9Copy) ? "Select Attachment" : '',
                errorGoodStandingCertificate: InputValidator.isObjectEmpty(goodStandingCertificate) ? "Select Attachment" : '',
                errorCertificateOfInsurance: InputValidator.isObjectEmpty(certificateOfInsurance) ? "Select Attachment" : '',
                errorVoidCheque: InputValidator.isObjectEmpty(voidCheque) ? "Select Attachment" : '',
            });
            resolve();
        })
    }

    function handleBackButtonClick() {
        navigate('/new-vendor-onboarding-approval');
    }

    const handleInputChange = (event) => {
        const { id, value, files } = event.target;
        const errorId = giveNameWithError(id);

        setFormData(prevState => ({ ...prevState, [id]: value }));
        setFormError(prevState => ({ ...prevState, [errorId]: '' }))

    };

    function excludeProperties(data) {
        const {
            middleName,
            addressLine2,
            ...newData
        } = data;
        return newData;
    }

    function isDocumentFieldEmpty() {
        return !(InputValidator.isObjectEmpty(w9Copy)
            && InputValidator.isObjectEmpty(goodStandingCertificate)
            && InputValidator.isObjectEmpty(certificateOfInsurance)
            && InputValidator.isObjectEmpty(voidCheque)
        )
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await checkForError();

        const newOnboardingMandatoryFieldData = excludeProperties(formData);

        if (InputValidator.isFormErrorEmpty(formError) &&
            isDocumentFieldEmpty()
        ) {
        } else {
            console.error('Failed vendor onboard error: ', formError);
        }

    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"companyName"}
                        labelText={"Company Name"}
                        isCompulsary={true}
                        placeholder={'Enter Company Name'}
                        value={formData.companyName}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorCompanyName}
                    />
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"taxId"}
                        labelText={"Tax ID"}
                        isCompulsary={true}
                        placeholder={'Enter Tax Id'}
                        value={formData.taxId}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorTaxId}
                    />
                </Row>

                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"einNumber"}
                        labelText={"EIN Number"}
                        isCompulsary={true}
                        placeholder={'Enter EIN Number'}
                        value={formData.einNumber}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorEinNumber}
                    />
                </Row>

                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"firstName"}
                        labelText={"First Name"}
                        isCompulsary={true}
                        placeholder={'Enter First Name'}
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
                        placeholder={'Enter Middle Name'}
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
                        placeholder={'Enter Last Name'}
                        value={formData.lastName}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorLastName}
                    />

                    <LabelAndPhoneNumberInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'phoneNumber'}
                        labelText={'Phone Number'}
                        isCompulsary={true}
                        value={formData.phoneNumber}
                        onChange={(value) => handleInputChange({ target: { id: 'phoneNumber', value } })}
                        error={formError.errorPhoneNumber}
                    />

                </Row>

                {/*State Of Incorpration and country*/}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"stateOfIncorpration"}
                        labelText={"State Of Incorpration"}
                        isCompulsary={true}
                        placeholder={'State Of Incorpration'}
                        value={formData.stateOfIncorpration}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorStateOfIncorpration}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'country'}
                        labelText={'Country'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.country}
                        optionList={countries}
                        handleInputChange={handleCountryChange}
                        errorMessage={formError.errorCountry}
                    />
                </Row>

                {/*state and city*/}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'state'}
                        labelText={'State'}
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
                        placeholder={'Enter City'}
                        value={formData.city}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorCity}
                    />
                </Row>

                {/* Address line 1 and 2 */}
                <Row>
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"addressLine1"}
                        labelText={"Address Line 1"}
                        isCompulsary={true}
                        placeholder={'Enter Address Line 1'}
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
                        placeholder={'Enter Address Line 2'}
                        value={formData.addressLine2}
                        handleInputChange={handleInputChange}
                    />
                </Row>

                {/* Attachments for documents */}
                <Row>
                    <DocumentAttachmentField
                        mdValue={6}
                        controlId={"w9Copy"}
                        labelText={'W9 Copy (pdf only)'}
                        isCompulsary={true}
                        documentState={w9Copy}
                        handleUpload={showW9CopyAttachment}
                        handleView={showW9CopyAttachment}
                        handleRemove={handleRemoveW9Copy}
                        fileName={'W9Copy'}
                        downloadDocument={handleDownload}
                        documentForDownload={w9Copy.document}
                        errorMessage={formError.errorW9Copy}
                    />
                    <DocumentAttachmentField
                        mdValue={6}
                        controlId={"goodStandingCertificate"}
                        labelText={'Good Standing Certificate (pdf only)'}
                        isCompulsary={true}
                        documentState={goodStandingCertificate}
                        handleUpload={showGoodStandingCertificateAttachment}
                        handleView={showGoodStandingCertificateAttachment}
                        handleRemove={handleRemoveGoodStandingCertificate}
                        fileName={'GoodStandingCertificate'}
                        downloadDocument={handleDownload}
                        documentForDownload={goodStandingCertificate.document}
                        errorMessage={formError.errorGoodStandingCertificate}
                    />
                    <DocumentAttachmentField
                        mdValue={6}
                        controlId={"certificateOfInsurance"}
                        labelText={'Certificate Of Insurance (pdf only)'}
                        isCompulsary={true}
                        documentState={certificateOfInsurance}
                        handleUpload={showCertificateOfInsuranceAttachment}
                        handleView={showCertificateOfInsuranceAttachment}
                        handleRemove={handleRemoveCertificateOfInsurance}
                        fileName={'CertificateOfInsurance'}
                        downloadDocument={handleDownload}
                        documentForDownload={certificateOfInsurance.document}
                        errorMessage={formError.errorCertificateOfInsurance}
                    />
                    <DocumentAttachmentField
                        mdValue={6}
                        controlId={"voidCheck"}
                        labelText={'Void Check (pdf only)'}
                        isCompulsary={true}
                        documentState={voidCheque}
                        handleUpload={showVoidChequeAttachment}
                        handleView={showVoidChequeAttachment}
                        handleRemove={handleRemoveVoidCheque}
                        fileName={'VoidCheck'}
                        downloadDocument={handleDownload}
                        documentForDownload={voidCheque.document}
                        errorMessage={formError.errorVoidCheque}
                    />

                </Row>

                {parentComponentName === 'newOnboarding' &&
                    <div className='d-flex justify-content-between align-items-center mt-2 mb-2 mr-2 float-right'>
                        <ButtonComponent
                            variant={'primary'}
                            type={'submit'}
                            className={'btn btn-theme button-1 text-white ctm-border-radius '}
                            buttonText={'Onboard'}
                        />
                    </div>
                }
                {parentComponentName === 'onboardingApprovalFormPage' && <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex">
                            <ButtonComponent
                                variant={'primary'}
                                type={'submit'}
                                className={'btn btn-theme button-1 text-white ctm-border-radius '}
                                buttonText={'Approve'}
                            />
                            <ButtonComponent
                                variant={'danger'}
                                type={'text'}
                                className={'btn btn-danger ctm-border-radius text-center'}
                                buttonText={'Reject'}
                            />
                        </div>
                        <div className='mt-2 mb-2 mr-2'>
                            <ButtonComponent
                                variant={'primary'}
                                type={'button'}
                                className={'btn bg-secondary ctm-border-radius text-center'}
                                buttonText={'Back'}
                                onClickHandler={handleBackButtonClick}
                            />
                        </div>
                    </div>
                </div>}

                {/* For w9 copy */}
                <CommonPopUpUpload
                    data={w9Copy}
                    setData={setW9Copy}
                    heading={"Upload W9 Copy"}
                />
                {/* For good Standing Certificate*/}
                <CommonPopUpUpload
                    data={goodStandingCertificate}
                    setData={setGoodStandingCertificate}
                    heading={"Upload Good Standing Certificate"}
                />
                {/* For Certificate Of Insurance*/}
                <CommonPopUpUpload
                    data={certificateOfInsurance}
                    setData={setCertificateOfInsurance}
                    heading={"Upload Certificate Of Insurance"}
                />
                {/* For Void Cheque*/}
                <CommonPopUpUpload
                    data={voidCheque}
                    setData={setVoidCheque}
                    heading={"Upload Void Cheque"}
                />
            </Form >

        </>
    )
}
