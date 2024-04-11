import React, { useEffect, useRef, useState } from 'react'
import { Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import InputValidator from '../../../validations/InputValidator'
import 'react-phone-input-2/lib/style.css';
import {
    AdharPopUpUpload,
    PassportPopUpUpload, WorkAuthorizationPopUpUpload,
    PanPopUpUpload, CommonPopUpUpload
} from '../../../components/PopUpForDocuments'
import {
    currencyTypeList, roleList, designationList,
    employmentNatureList, visaStatusList,
    employmentStatusList, onshoreOrOffshoreList,
    genderList, bloodGroupList, workingRemoteList
} from '../../../assets/common/lists';
import { getCountryList, getStatesListByCountry, isFileObject, byteArrayToFile } from '../../../commonFunctions/CommonFunctions';
import LabelAndInputField from '../../../components/LabelAndInputField';
import LabelAndDropdownField from '../../../components/LabelAndDropdownField';
import DocumentAttachmentField from '../../../components/DocumentAttachmentField';
import LabelAndPhoneNumberInputField from '../../../components/LabelAndPhoneNumberInputField';
import ButtonComponent from '../../../components/ButtonComponent';


export default function EmployeeForm({ employeeData, parentComponentName }) {

    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        phoneNumber: '',
        firstName: '',
        middleName: '',
        lastName: '',
        personalEmailId: '',
        dateOfBirth: '',
        gender: '',
        bloodGroup: '',
        visaStatus: '',
        citizenship: '',
        employmentNature: '',
        workMode: '',
        employmentStartDate: '',
        role: '',
        designation: '',
        employmentStatus: employmentStatusList[0],
        employmentCompany: '',
        workLocation: '',
        onshoreOrOffshore: '',
        contractingRate: 0,
        contractingRateCurrency: currencyTypeList[0],
        contractingCompany: '',
        skill: [],
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',


        ctc: '',
        bonus: '',
        visaExpense: '',
        otherExpense: '',
        employmentCompany: '',

        ctcCurrency: currencyTypeList[0],
        bonusCurrency: currencyTypeList[0],
        visaExpenseCurrency: currencyTypeList[0],
        otherExpenseCurrency: currencyTypeList[0],
    })

    const [formError, setFormError] = useState({
        errorFirstName: '',
        errorLastName: '',
        errorPhoneNumber: '',
        errorAddressLine1: '',
        errorState: '',
        errorCountry: '',
        errorCity: '',
        errorZipCode: '',
        errorCitizenship: '',
        errorEmploymentNature: '',
        errorEmploymentCompany: '',
        errorWorkMode: '',
        errorEmploymentStartDate: '',
        errorRole: '',
        errorDesignation: '',
        errorEmploymentStatus: '',
        errorCtc: '',
        errorBonus: '',
        errorEmploymentCompany: '',
        errorContractingCompany: '',
        errorContractingRate: '',

        errorWorkLocation: '',
        errorOnshoreOrOffshore: '',
        errorPersonalEmailId: '',

        errorDateOfBirth: '',
        errorGender: '',

        errorPhoto: '',
        errorResume: '',

        errorAdharCard: '',
        errorRentalAgreement: '',
        errorEducationCertificate: '',
        errorPhotoId: '',
        errorPan: '',

        errorI94TravelHistory: '',
        errorI9Copy: '',
        errorPassport: '',
        errorWorkAuthorization: '',

    })

    const [countries, setCountries] = useState(getCountryList);
    const [states, setStates] = useState([]);

    const [adharCard, setAdharCard] = useState({
        showAttachmentModal: false,
        adharAttachment: null,
        commingFromBackend: false,
        adharNumber: '',
        adharDob: '',
    })
    const [passport, setPassport] = useState({
        showAttachmentModal: false,
        passportAttachment: null,
        commingFromBackend: false,
        passportCountry: '',
        passportIssueDate: '',
        passportNumber: '',
        passportExpDate: '',
    })
    const [workAuthorization, setWorkAuthorization] = useState({
        showAttachmentModal: false,
        workAuthorizationAttachment: null,
        commingFromBackend: false,
        workAuthorizationNumber: '',
        workAuthorizationValidTill: '',
    })
    const [pan, setPan] = useState({
        showAttachmentModal: false,
        panAttachment: null,
        commingFromBackend: false,
        panNumber: '',
    })
    const [photo, setPhoto] = useState({
        showAttachmentModal: false,
        commingFromBackend: false,
        document: null,
    })
    const [resume, setResume] = useState({
        showAttachmentModal: false,
        commingFromBackend: false,
        document: null,
    })
    const [i94TravelHistory, setI94TravelHistory] = useState({
        showAttachmentModal: false,
        commingFromBackend: false,
        document: null,
    })
    const [photoId, setPhotoId] = useState({
        showAttachmentModal: false,
        commingFromBackend: false,
        document: null,
    })
    const [rentalAgreememt, setRentalAgreememt] = useState({
        showAttachmentModal: false,
        commingFromBackend: false,
        document: null,
    })
    const [educationDetails, setEducationDetails] = useState({
        showAttachmentModal: false,
        commingFromBackend: false,
        document: null,
    })
    const [i9Copy, setI9Copy] = useState({
        showAttachmentModal: false,
        commingFromBackend: false,
        document: null,
    })

    const history = useHistory();

    useEffect(() => {

        if (employeeData) {
            const statesList = employeeData.country ? getStatesListByCountry(employeeData.country) : []
            setStates(statesList)
            setFormData({
                ...formData,
                firstName: employeeData.firstName || '',
                middleName: employeeData.middleName || '',
                lastName: employeeData.lastName || '',
                phoneNumber: employeeData.phoneNumber || '',
                addressLine1: employeeData.addressLine1 || '',
                addressLine2: employeeData.addressLine2 || '',
                city: employeeData.city || '',
                state: employeeData.state || '',
                country: employeeData.country || '',
                zipCode: employeeData.zipCode ? employeeData.zipCode.toString() : '',
                visaStatus: employeeData.visaStatus || '',
                citizenship: employeeData.citizenship || '',
                employmentNature: employeeData.employmentNature || '',
                contractingRate: employeeData.contractingRate || '',
                employmentCompany: employeeData.employmentCompany || '',
                workMode: employeeData.workMode || '',
                employmentStartDate: employeeData.employmentStartDate ? employeeData.employmentStartDate.toString() : '',
                role: employeeData.role || '',
                designation: employeeData.designation || '',
                skill: employeeData.skill || '',
                country: employeeData.country || '',
                state: employeeData.state || '',
                citizenship: employeeData.citizenship || '',

                workLocation: employeeData.workLocation || '',
                onshoreOrOffshore: employeeData.onshoreOrOffshore || '',
                personalEmailId: employeeData.personalEmailId || '',

                dateOfBirth: employeeData.dateOfBirth ? employeeData.dateOfBirth.toString() : '',
                gender: employeeData.gender || '',
                bloodGroup: employeeData.bloodGroup || '',
            })

            setResume({
                ...resume,
                commingFromBackend: true,
                document: employeeData.resumeAttachment?.fileContent || null
            })
            setPhoto({
                ...photo,
                commingFromBackend: true,
                document: employeeData.photoAttachment?.fileContent || null
            })

            if (employeeData.onshoreOrOffshore === onshoreOrOffshoreList[0]) {
                setOnshoreDocument();
            } else if (employeeData.onshoreOrOffshore === onshoreOrOffshoreList[1]) {
                setOffshoreDocument();
            }

        }
    }, [employeeData, currencyTypeList])



    function setOnshoreDocument() {
        setI94TravelHistory({
            ...i94TravelHistory,
            commingFromBackend: true,
            document: employeeData.i94TravelHistoryAttachment?.fileContent || null
        })
        setI9Copy({
            ...i9Copy,
            commingFromBackend: true,
            document: employeeData.i9Copy?.fileContent || null
        })
        setPassport({
            ...passport,
            passportNumber: employeeData.passportNumber || '',
            passportIssueDate: employeeData.passportIssueDate || '',
            passportExpDate: employeeData.passportExpDate || '',
            passportCountry: employeeData.passportCountry || '',
            passportAttachment: employeeData.resumeAttachment?.fileContent || null,
            commingFromBackend: true,
        })
        setWorkAuthorization({
            ...workAuthorization,
            workAuthorizationNumber: employeeData.workAuthorizationNumber || '',
            workAuthorizationValidTill: employeeData.workAuthorizationValidTill || '',
            workAuthorizationAttachment: employeeData.workAuthorizationAttachment?.fileContent || null,
            commingFromBackend: true
        })
    }

    function setOffshoreDocument() {
        setAdharCard({
            ...adharCard,
            adharNumber: employeeData.adharNumber || '',
            adharDob: employeeData.adharDob || '',
            adharAttachment: employeeData.adharAttachment?.fileContent || null,
            commingFromBackend: true,
        })
        setRentalAgreememt({
            ...rentalAgreememt,
            commingFromBackend: true,
            document: employeeData.rentalAgreementAttachment?.fileContent || null
        })
        setEducationDetails({
            ...educationDetails,
            commingFromBackend: true,
            document: employeeData.educationCertificateAttachment?.fileContent || null
        })
        setPhotoId({
            ...photoId,
            commingFromBackend: true,
            document: employeeData.photoIdAttachment?.fileContent || null
        })
        setPan({
            ...pan,
            commingFromBackend: true,
            panNumber: employeeData.panNumber || '',
            panAttachment: employeeData.panAttachment?.fileContent || null,
            commingFromBackend: true,

        })
    }

    //Used to handle country change.
    const handleCountryChange = (event) => {
        const { id, value } = event.target;
        const errorId = giveNameWithError(id);
        setFormData(prevState => ({ ...prevState, [id]: value }));
        setFormError(prevState => ({ ...prevState, [errorId]: '' }))
        setStates(getStatesListByCountry(value))
    };

    // Used to return variable name with error prefix.
    const giveNameWithError = (name) => {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        const nameWithError = 'error' + capitalizedName;
        return nameWithError;
    }


    //Used to handle for any input field changes in form.
    const handleInputChange = (event) => {
        const { id, value, files } = event.target;
        const errorId = giveNameWithError(id);
        if (id === 'employmentNature') {
            setFormData(prevState => ({ ...prevState, [id]: value, contractingRate: '', contractingCompany: '' }));
            setFormError(prevState => ({ ...prevState, [errorId]: '', errorContractingRate: '', errorContractingCompany: '' }))
        } else if (id === 'skill') {
            // Split the input value by commas and trim each value
            const skillList = value.split(',').map(skill => skill.trim());
            setFormData({
                ...formData,
                [id]: skillList
            })
        } else {
            setFormData(prevState => ({ ...prevState, [id]: value }));
            setFormError(prevState => ({ ...prevState, [errorId]: '' }))
        }
    };

    //Used to check for the existance of any error by calling the function and storing value.
    const checkForError = () => {
        setFormError(prevState => ({
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
            errorEmploymentNature: InputValidator.isEmpty(formData.employmentNature),
            errorEmploymentCompany: InputValidator.isEmpty(formData.employmentCompany),
            errorWorkMode: InputValidator.isEmpty(formData.workMode),
            errorEmploymentStartDate: InputValidator.isEmpty(formData.employmentStartDate.toString()),
            errorRole: InputValidator.isEmpty(formData.role),
            errorDesignation: InputValidator.isEmpty(formData.designation),
            errorEmploymentStatus: InputValidator.isEmpty(formData.employmentStatus),

            errorCtc: parentComponentName === 'onboardingApprovalFormPage' ? InputValidator.isEmpty(formData.ctc) : '',
            errorBonus: parentComponentName === 'onboardingApprovalFormPage' ? InputValidator.isEmpty(formData.bonus) : '',

            errorEmploymentCompany: InputValidator.isEmpty(formData.employmentCompany),
            errorContractingRate: formData.employmentNature === 'Contract' ? InputValidator.isEmpty(formData.contractingRate) : '',
            errorContractingCompany: formData.employmentNature === 'Contract' ? InputValidator.isEmpty(formData.contractingCompany) : '',

            errorWorkLocation: InputValidator.isEmpty(formData.workLocation),
            errorOnshoreOrOffshore: InputValidator.isEmpty(formData.onshoreOrOffshore),
            errorPersonalEmailId: InputValidator.isEmpty(formData.personalEmailId),

            errorDateOfBirth: InputValidator.isEmpty(formData.dateOfBirth.toString()),
            errorGender: InputValidator.isEmpty(formData.gender),

            errorPhoto: InputValidator.isObjectEmpty(photo) ? "Select Attachment" : '',
            errorResume: InputValidator.isObjectEmpty(resume) ? "Select Attachment" : '',

            errorI94TravelHistory: (formData.onshoreOrOffshore === onshoreOrOffshoreList[0] && InputValidator.isObjectEmpty(i94TravelHistory))
                ? "Select Attachment"
                : '',
            errorI9Copy: (formData.onshoreOrOffshore === onshoreOrOffshoreList[0] && InputValidator.isObjectEmpty(i9Copy))
                ? "Select Attachment"
                : '',
            errorPassport: (formData.onshoreOrOffshore === onshoreOrOffshoreList[0] && InputValidator.isObjectEmpty(passport))
                ? "Select Attachment"
                : '',
            errorWorkAuthorization: (formData.onshoreOrOffshore === onshoreOrOffshoreList[0] && InputValidator.isObjectEmpty(workAuthorization))
                ? "Select Attachment"
                : '',

            errorAdharCard: (formData.onshoreOrOffshore === onshoreOrOffshoreList[1] && InputValidator.isObjectEmpty(adharCard))
                ? "Select Attachment"
                : '',
            errorRentalAgreement: (formData.onshoreOrOffshore === onshoreOrOffshoreList[1] && InputValidator.isObjectEmpty(rentalAgreememt))
                ? "Select Attachment"
                : '',
            errorEducationCertificate: (formData.onshoreOrOffshore === onshoreOrOffshoreList[1] && InputValidator.isObjectEmpty(educationDetails))
                ? "Select Attachment"
                : '',
            errorPhotoId: (formData.onshoreOrOffshore === onshoreOrOffshoreList[1] && InputValidator.isObjectEmpty(photoId))
                ? "Select Attachment"
                : '',
            errorPan: (formData.onshoreOrOffshore === onshoreOrOffshoreList[1] && InputValidator.isObjectEmpty(pan))
                ? "Select Attachment"
                : '',

        }));
    }


    //Used to go to the onboarding approval page.
    function handleBackButtonClick() {
        history.push("/recruiter-manager/onboarding-approval");
    }

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
            ...newData
        } = data;

        if (data.employmentNature === employmentNatureList[0]) {
            delete newData.contractingRate;
            delete newData.contractingCompany;
        }

        return newData;
    }

    function isDocumentFieldEmpty() {
        if (formData.onshoreOrOffshore === onshoreOrOffshoreList[0]) {
            return !(InputValidator.isObjectEmpty(photo)
                && InputValidator.isObjectEmpty(resume)
                && InputValidator.isObjectEmpty(i94TravelHistory)
                && InputValidator.isObjectEmpty(i9Copy)
                && InputValidator.isObjectEmpty(passport)
                && InputValidator.isObjectEmpty(workAuthorization))
        } else if (formData.onshoreOrOffshore === onshoreOrOffshoreList[1]) {
            return !(InputValidator.isObjectEmpty(photo)
                && InputValidator.isObjectEmpty(resume)
                && InputValidator.isObjectEmpty(adharCard)
                && InputValidator.isObjectEmpty(rentalAgreememt)
                && InputValidator.isObjectEmpty(educationDetails)
                && InputValidator.isObjectEmpty(photoId)
                && InputValidator.isObjectEmpty(pan))
        } else {
            return !(InputValidator.isObjectEmpty(photo)
                && InputValidator.isObjectEmpty(resume))
        }
    }

    function getFormDataForApi() {
        let apiData = {};
        if (formData.onshoreOrOffshore === onshoreOrOffshoreList[1]) {
            apiData = {
                ...formData,
                photoAttachment: isFileObject(photo.document) ? photo.document : byteArrayToFile(photo.document, employeeData.photoAttachment?.fileName),
                resumeAttachment: isFileObject(resume.document) ? resume.document : byteArrayToFile(resume.document, employeeData.resumeAttachment?.fileName),
                ...adharCard,
                adharCardAttachment: isFileObject(adharCard.adharAttachment) ? adharCard.adharAttachment : byteArrayToFile(adharCard.adharAttachment, employeeData.adharAttachment?.fileName),
                rentalAgreementAttachment: isFileObject(rentalAgreememt.document) ? rentalAgreememt.document : byteArrayToFile(rentalAgreememt.document, employeeData.rentalAgreementAttachment?.fileName),
                educationCertificateAttachment: isFileObject(educationDetails.document) ? educationDetails.document : byteArrayToFile(educationDetails.document, employeeData.educationDetails?.fileName),
                photoIdAttachment: isFileObject(photoId.document) ? photoId.document : byteArrayToFile(photoId.document, employeeData.photoIdAttachment?.fileName),
                ...pan,
                panAttachment: isFileObject(pan.panAttachment) ? pan.panAttachment : byteArrayToFile(pan.panAttachment, employeeData.panAttachment?.fileName),
            }
        } else if (formData.onshoreOrOffshore === onshoreOrOffshoreList[0]) {
            apiData = {
                ...formData,
                photoAttachment: isFileObject(photo.document) ? photo.document : byteArrayToFile(photo.document, employeeData.photoAttachment?.fileName),
                resumeAttachment: isFileObject(resume.document) ? resume.document : byteArrayToFile(resume.document, employeeData.resumeAttachment?.fileName),
                i94TravelHistoryAttachment: isFileObject(i94TravelHistory.document) ? i94TravelHistory.document : byteArrayToFile(i94TravelHistory.document, employeeData.i94TravelHistoryAttachment?.fileName),
                i9CopyAttachment: isFileObject(i9Copy.document) ? i9Copy.document : byteArrayToFile(i9Copy.document, employeeData.i9CopyAttachment?.fileName),
                ...passport,
                passportAttachment: isFileObject(passport.passportAttachment) ? passport.passportAttachment : byteArrayToFile(passport.passportAttachment, employeeData.passportAttachment?.fileName),
                ...workAuthorization,
                workAuthorizationAttachment: isFileObject(workAuthorization.workAuthorizationAttachment) ? workAuthorization.workAuthorizationAttachment : byteArrayToFile(workAuthorization.workAuthorizationAttachment, employeeData.workAuthorizationAttachment?.fileName)
            }
        }
        delete apiData.showAttachmentModal;
        delete apiData.commingFromBackend;

        if (apiData.employmentNature &&
            apiData.employmentNature === employmentNatureList[0]) {
            delete apiData.contractingRate
            delete apiData.contractingRateCurrency
            delete apiData.contractingCompany
        }
        return apiData;
    }



    //Used to handle event after the form submission.
    function handleSubmit(event) {
        event.preventDefault();
        checkForError();

        const newOnboardingMandatoryFieldData = excludeProperties(formData);
        delete newOnboardingMandatoryFieldData.ctc;
        delete newOnboardingMandatoryFieldData.bonus;

        const onboardingApprovalMandatoryFieldData = excludeProperties(formData);


        if (parentComponentName === 'onboardingApprovalFormPage'
            && InputValidator.isFormErrorEmpty(formError)
            && !InputValidator.isObjectEmpty(onboardingApprovalMandatoryFieldData)
            && isDocumentFieldEmpty()
        ) {
            const apiDataApproveOnboard = {
                id: employeeData.id,
                ctc: formData.ctc,
                bonus: formData.bonus,
                visaExpense: formData.visaExpense,
                otherExpense: formData.otherExpense,
                ctcCurrency: formData.ctcCurrency,
                bonusCurrency: formData.bonusCurrency,
                visaExpenseCurrency: formData.visaExpenseCurrency,
                otherExpenseCurrency: formData.otherExpenseCurrency,
            };


            handleBackButtonClick();
        } else if (parentComponentName === 'newOnboarding'
            && (InputValidator.isFormErrorEmpty(formError)
                && !InputValidator.isObjectEmpty(newOnboardingMandatoryFieldData)
                && isDocumentFieldEmpty())
        ) {

            const apiDataNewOnboard = getFormDataForApi();

            delete apiDataNewOnboard.ctc;
            delete apiDataNewOnboard.bonus;
            delete apiDataNewOnboard.otherExpense;
            delete apiDataNewOnboard.visaExpense;
            delete apiDataNewOnboard.ctcCurrency
            delete apiDataNewOnboard.bonusCurrency
            delete apiDataNewOnboard.otherExpenseCurrency
            delete apiDataNewOnboard.visaExpenseCurrency


            location.reload();
        } else {
            console.error('Failed data error: ', formError);
            console.log('Failed data: ', formData);
        }

    };

    function handleDownload(downloadDocument) {
        if (downloadDocument) {
            const url = window.URL.createObjectURL(new Blob([downloadDocument]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', downloadDocument.name);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }
    }


    function handleRejectButtonClick() {
        const rejectApiData = {
            id: employeeData.id,
            onBoardingStatus: 'REJECT'
        }
    }

    //For adhar Card
    function showAdharAttachment() {
        setFormError({
            ...formError,
            errorAdharCard: '',
        })
        setAdharCard((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveAdharCard() {
        if (InputValidator.isObjectEmpty(adharCard)) {
            setAdharCard((prevState) => ({
                ...prevState,
                showAttachmentModal: false,
                commingFromBackend: false,
                adharAttachment: null,
                adharNumber: '',
                adharDob: '',
            }))
        } else {
            setAdharCard((prevState) => ({
                ...prevState,
                commingFromBackend: false,
                adharAttachment: null,
                adharNumber: '',
                adharDob: '',
            }))
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }
    //End for adhar card

    //Starting for attach Passport
    function showPassportAttachment() {
        setFormError({
            ...formError,
            errorPassport: '',
        })
        setPassport((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemovePassport() {
        if (InputValidator.isObjectEmpty(passport)) {
            setPassport((prevState) => ({
                ...prevState,
                showAttachmentModal: false,
                commingFromBackend: false,
                passportAttachment: null,
                passportCountry: '',
                passportIssueDate: '',
                passportNumber: '',
                passportExpDate: '',
            }))
        } else {
            setPassport((prevState) => ({
                ...prevState,
                commingFromBackend: false,
                passportAttachment: null,
                passportCountry: '',
                passportIssueDate: '',
                passportNumber: '',
                passportExpDate: '',
            }))
        }
    }
    //End for attach Passport

    //Starting for attach Work Autorization
    function showWorkAuthorizationAttachment() {
        setFormError({
            ...formError,
            errorWorkAuthorization: '',
        })
        setWorkAuthorization((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveWorkAuthorization() {
        if (InputValidator.isObjectEmpty(workAuthorization)) {
            setWorkAuthorization((prevState) => ({
                ...prevState,
                showAttachmentModal: false,
                commingFromBackend: false,
                workAuthorizationNumber: '',
                workAuthorizationValidTill: '',
                workAuthorizationAttachment: null,
            }))
        } else {
            setWorkAuthorization((prevState) => ({
                ...prevState,
                commingFromBackend: false,
                workAuthorizationNumber: '',
                workAuthorizationValidTill: '',
                workAuthorizationAttachment: null,
            }))
        }
    }
    //End for attach Work Autorization

    //Starting for attach Pan card.
    function showPanAttachment() {
        setFormError({
            ...formError,
            errorPan: '',
        })
        setPan((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemovePan() {
        if (InputValidator.isObjectEmpty(pan)) {
            setPan((prevState) => ({
                ...prevState,
                showAttachmentModal: false,
                commingFromBackend: false,
                panNumber: '',
                panAttachment: null,
            }))
        } else {
            setPan((prevState) => ({
                ...prevState,
                commingFromBackend: false,
                panNumber: '',
                panAttachment: null,
            }))
        }
    }
    //End for attach Pan card.


    //Starting for attach photo
    function showPhotoAttachment() {
        setFormError({
            ...formError,
            errorPhoto: '',
        })
        setPhoto((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemovePhoto() {
        setPhoto((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            commingFromBackend: false,
            document: null,
        }))
    }
    //End for attach photo


    //Starting for attach Resume
    function showResumeAttachment() {
        setFormError({
            ...formError,
            errorResume: '',
        })
        setResume((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveResume() {
        setResume((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            commingFromBackend: false,
            document: null,
        }))
    }
    //End for attach Resume

    //Starting for attach I94 Travel History
    function showI94TravelHistoryAttachment() {
        setFormError({
            ...formError,
            errorI94TravelHistory: '',
        })
        setI94TravelHistory((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveI94TravelHistory() {
        setI94TravelHistory((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            commingFromBackend: false,
            document: null,
        }))
    }
    //End for attach I94 Travel History

    //Starting for attach Photo id.
    function showPhotoIdAttachment() {
        setFormError({
            ...formError,
            errorPhotoId: '',
        })
        setPhotoId((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemovePhotoId() {
        setPhotoId((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            commingFromBackend: false,
            document: null,
        }))
    }
    //End for attach Photo id

    //Starting for attach Rental Agreement.
    function showRentalAgreememtAttachment() {
        setFormError({
            ...formError,
            errorRentalAgreement: '',
        })
        setRentalAgreememt((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveRentalAgreememt() {
        setRentalAgreememt((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            commingFromBackend: false,
            document: null,
        }))
    }
    //End for attach Rental Agreement

    //Starting for attach Education Details.
    function showEducationDetailsAttachment() {
        setFormError({
            ...formError,
            errorEducationCertificate: '',
        })
        setEducationDetails((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveEducationDetails() {
        setEducationDetails((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            commingFromBackend: false,
            document: null,
        }))
    }
    //End for attach Education Details.

    //Starting for attach I9 copy.
    function showI9CopyAttachment() {
        setFormError({
            ...formError,
            errorI9Copy: '',
        })
        setI9Copy((prevState) => ({
            ...prevState,
            showAttachmentModal: true,
        }))
    }
    function handleRemoveI9Copy() {
        setI9Copy((prevState) => ({
            ...prevState,
            showAttachmentModal: false,
            commingFromBackend: false,
            document: null,
        }))
    }
    //End for attach i9 copy.



    return (
        <>
            <Form onSubmit={handleSubmit} enctype="multipart/form-data">
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
                        placeholder={'Enter Personal Email Id'}
                        value={formData.personalEmailId}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorPersonalEmailId}
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

                {/* state and city */}
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
                        placeholder={'Enter Zip Code'}
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
                        inputType={'date'}
                        placeholder={'Enter DOB'}
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
                        controlId={'gender'}
                        labelText={'Gender'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.gender}
                        optionList={genderList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorGender}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'bloodGroup'}
                        labelText={'Blood Group'}
                        showDefaultOption={true}
                        value={formData.bloodGroup}
                        optionList={bloodGroupList}
                        handleInputChange={handleInputChange}
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
                        placeholder={'Enter Work Location'}
                        value={formData.workLocation}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorWorkLocation}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'onshoreOrOffshore'}
                        labelText={'On Shore / Off Shore'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.onshoreOrOffshore}
                        optionList={onshoreOrOffshoreList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorOnshoreOrOffshore}
                    />
                </Row>

                {/* Visa status and citizenship */}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'visaStatus'}
                        labelText={'Visa Status'}
                        showDefaultOption={true}
                        value={formData.visaStatus}
                        optionList={visaStatusList}
                        handleInputChange={handleInputChange}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'citizenship'}
                        labelText={'Citizenship'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.citizenship}
                        optionList={countries}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorCitizenship}
                    />
                </Row>

                {/* Employment nature and employment company */}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'employmentNature'}
                        labelText={'Employment Nature'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.employmentNature}
                        optionList={employmentNatureList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorEmploymentNature}
                    />
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"employmentCompany"}
                        labelText={"Employment Company"}
                        isCompulsary={true}
                        placeholder={'Enter Employment Company'}
                        value={formData.employmentCompany}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorEmploymentCompany}
                    />
                </Row>

                {/* Contracting rate and currency and company */}
                {formData.employmentNature === employmentNatureList[1] &&
                    <Row>
                        <LabelAndInputField
                            mdValue={3}
                            lgValue={3}
                            smValue={12}
                            xsValue={12}
                            controlId={"contractingRate"}
                            labelText={"Contracting Rate"}
                            isCompulsary={formData.employmentNature === 'Contract'}
                            placeholder={'Enter Contracting Rate'}
                            value={formData.contractingRate}
                            handleInputChange={handleInputChange}
                            errorMessage={formError.errorContractingRate}
                        />
                        <LabelAndDropdownField
                            mdValue={3}
                            lgValue={3}
                            smValue={12}
                            xsValue={12}
                            controlId={'contractingRateCurrency'}
                            labelText={'Contracting Rate Currency'}
                            isCompulsary={formData.employmentNature === 'Contract'}
                            value={formData.contractingRateCurrency}
                            optionList={currencyTypeList}
                            handleInputChange={handleInputChange}
                        />
                        <LabelAndInputField
                            mdValue={6}
                            lgValue={6}
                            smValue={12}
                            xsValue={12}
                            controlId={"contractingCompany"}
                            labelText={"Contracting Company"}
                            isCompulsary={formData.employmentNature === 'Contract'}
                            placeholder={'Enter Contracting Company'}
                            value={formData.contractingCompany}
                            handleInputChange={handleInputChange}
                            errorMessage={formError.errorContractingCompany}
                        />
                    </Row>}

                {/* Working remote and employment start date */}
                <Row>
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'workMode'}
                        labelText={'Working Remote'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.workMode}
                        optionList={workingRemoteList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorWorkMode}
                    />
                    <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"employmentStartDate"}
                        labelText={"Employment Start Date (dd-mm-yyyy)"}
                        isCompulsary={true}
                        inputType={'date'}
                        placeholder={'Enter Employment Start Date'}
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
                        controlId={'role'}
                        labelText={'Role'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.role}
                        optionList={roleList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorRole}
                    />
                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'designation'}
                        labelText={'Designation'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.designation}
                        optionList={designationList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorDesignation}
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
                        placeholder={'Enter Skill'}
                        value={formData.skill}
                        handleInputChange={handleInputChange}
                    />

                    <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={'employmentStatus'}
                        labelText={'Employment Status'}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.employmentStatus}
                        optionList={employmentStatusList}
                        handleInputChange={handleInputChange}
                        errorMessage={formError.errorEmploymentStatus}
                        isReadOnly={true}
                    />
                </Row>

                {/* Attachment for photo and resume. */}
                <Row>
                    <DocumentAttachmentField
                        mdValue={6}
                        controlId={"photo"}
                        labelText={'Photo (pdf only)'}
                        isCompulsary={true}
                        documentState={photo}
                        handleUpload={showPhotoAttachment}
                        handleView={showPhotoAttachment}
                        handleRemove={handleRemovePhoto}
                        fileName={'Photo'}
                        downloadDocument={handleDownload}
                        documentForDownload={photo.document}
                        errorMessage={formError.errorPhoto}
                    />
                    <DocumentAttachmentField
                        mdValue={6}
                        controlId={"resume"}
                        labelText={'Resume (pdf only)'}
                        isCompulsary={true}
                        documentState={resume}
                        handleUpload={showResumeAttachment}
                        handleView={showResumeAttachment}
                        handleRemove={handleRemoveResume}
                        fileName={'Resume'}
                        downloadDocument={handleDownload}
                        documentForDownload={resume.document}
                        errorMessage={formError.errorResume}
                    />
                </Row>

                {formData.onshoreOrOffshore === onshoreOrOffshoreList[1] &&
                    <>
                        {/* Attachment for adhar card and rental agreement. */}
                        <Row>
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"adhar"}
                                labelText={'Aadhar Card (pdf only)'}
                                isCompulsary={true}
                                documentState={adharCard}
                                handleUpload={showAdharAttachment}
                                handleView={showAdharAttachment}
                                handleRemove={handleRemoveAdharCard}
                                fileName={'AadharCard'}
                                downloadDocument={handleDownload}
                                documentForDownload={adharCard.adharAttachment}
                                errorMessage={formError.errorAdharCard}
                            />
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"rentalAgreememt"}
                                labelText={'Rental Agreememt (pdf only)'}
                                isCompulsary={true}
                                documentState={rentalAgreememt}
                                handleUpload={showRentalAgreememtAttachment}
                                handleView={showRentalAgreememtAttachment}
                                handleRemove={handleRemoveRentalAgreememt}
                                fileName={'RentalAgreement'}
                                downloadDocument={handleDownload}
                                documentForDownload={rentalAgreememt.document}
                                errorMessage={formError.errorRentalAgreement}
                            />
                        </Row>

                        {/* attachment for Highest education certificates and Photo id */}
                        <Row>
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"educationCertificate"}
                                labelText={'Education Certificate (pdf only)'}
                                isCompulsary={true}
                                documentState={educationDetails}
                                handleUpload={showEducationDetailsAttachment}
                                handleView={showEducationDetailsAttachment}
                                handleRemove={handleRemoveEducationDetails}
                                fileName={'EducationCertificate'}
                                downloadDocument={handleDownload}
                                documentForDownload={educationDetails.document}
                                errorMessage={formError.errorEducationCertificate}
                            />

                            {/* Photo id */}
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"photoId"}
                                labelText={'photoId (pdf only)'}
                                isCompulsary={true}
                                documentState={photoId}
                                handleUpload={showPhotoIdAttachment}
                                handleView={showPhotoIdAttachment}
                                handleRemove={handleRemovePhotoId}
                                fileName={'PhotoId'}
                                downloadDocument={handleDownload}
                                documentForDownload={photoId.document}
                                errorMessage={formError.errorPhotoId}
                            />
                        </Row>

                        {/* pan */}
                        <Row>
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"pan"}
                                labelText={'Pan Card (pdf only)'}
                                isCompulsary={true}
                                documentState={pan}
                                handleUpload={showPanAttachment}
                                handleView={showPanAttachment}
                                handleRemove={handleRemovePan}
                                fileName={'PanCard'}
                                downloadDocument={handleDownload}
                                documentForDownload={pan.panAttachment}
                                errorMessage={formError.errorPan}
                            />
                        </Row>
                    </>
                }




                {formData.onshoreOrOffshore === onshoreOrOffshoreList[0] &&
                    <>
                        {/* Education Certificate and I9 copy. */}
                        <Row>
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"i94TravelHistory"}
                                labelText={'I94 Travel History (pdf only)'}
                                isCompulsary={true}
                                documentState={i94TravelHistory}
                                handleUpload={showI94TravelHistoryAttachment}
                                handleView={showI94TravelHistoryAttachment}
                                handleRemove={handleRemoveI94TravelHistory}
                                fileName={'I94TravelHistory'}
                                downloadDocument={handleDownload}
                                documentForDownload={i94TravelHistory.document}
                                errorMessage={formError.errorI94TravelHistory}
                            />
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"i9Copy"}
                                labelText={'I9 Copy (pdf only)'}
                                isCompulsary={true}
                                documentState={i9Copy}
                                handleUpload={showI9CopyAttachment}
                                handleView={showI9CopyAttachment}
                                handleRemove={handleRemoveI9Copy}
                                fileName={'I9Copy'}
                                downloadDocument={handleDownload}
                                documentForDownload={i9Copy.document}
                                errorMessage={formError.errorI9Copy}
                            />
                        </Row>

                        {/* Attachment for passport and work authorization. */}
                        <Row Row >
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"passport"}
                                labelText={'Passport (pdf only)'}
                                isCompulsary={true}
                                documentState={passport}
                                handleUpload={showPassportAttachment}
                                handleView={showPassportAttachment}
                                handleRemove={handleRemovePassport}
                                fileName={'Passport'}
                                downloadDocument={handleDownload}
                                documentForDownload={passport.passportAttachment}
                                errorMessage={formError.errorPassport}
                            />
                            <DocumentAttachmentField
                                mdValue={6}
                                controlId={"workAuthorization"}
                                labelText={'Work Authorization (pdf only)'}
                                isCompulsary={true}
                                documentState={workAuthorization}
                                handleUpload={showWorkAuthorizationAttachment}
                                handleView={showWorkAuthorizationAttachment}
                                handleRemove={handleRemoveWorkAuthorization}
                                fileName={'WorkAuthorization'}
                                downloadDocument={handleDownload}
                                documentForDownload={workAuthorization.workAuthorizationAttachment}
                                errorMessage={formError.errorWorkAuthorization}
                            />
                        </Row>
                    </>
                }


                {parentComponentName === 'onboardingApprovalFormPage' &&
                    (<>
                        {/* CTC and Bonus */}
                        <Row>
                            <LabelAndInputField
                                mdValue={3}
                                lgValue={3}
                                smValue={12}
                                xsValue={12}
                                controlId={"ctc"}
                                labelText={"CTC"}
                                isCompulsary={true}
                                placeholder={'Enter CTC'}
                                value={formData.ctc}
                                handleInputChange={handleInputChange}
                                errorMessage={formError.errorCtc}
                            />
                            <LabelAndDropdownField
                                mdValue={3}
                                lgValue={3}
                                smValue={12}
                                xsValue={12}
                                controlId={'ctcCurrency'}
                                labelText={'CTC Currency'}
                                isCompulsary={true}
                                value={formData.ctcCurrency}
                                optionList={currencyTypeList}
                                handleInputChange={handleInputChange}
                            />

                            <LabelAndInputField
                                mdValue={3}
                                lgValue={3}
                                smValue={12}
                                xsValue={12}
                                controlId={"bonus"}
                                labelText={"Bonus"}
                                isCompulsary={true}
                                placeholder={'Enter Bonus'}
                                value={formData.bonus}
                                handleInputChange={handleInputChange}
                                errorMessage={formError.errorBonus}
                            />
                            <LabelAndDropdownField
                                mdValue={3}
                                lgValue={3}
                                smValue={12}
                                xsValue={12}
                                controlId={'bonusCurrency'}
                                labelText={'Bonus Currency'}
                                isCompulsary={true}
                                value={formData.bonusCurrency}
                                optionList={currencyTypeList}
                                handleInputChange={handleInputChange}
                            />
                        </Row>

                        {/* Visa expense and Other expense */}
                        <Row>
                            <LabelAndInputField
                                mdValue={3}
                                lgValue={3}
                                smValue={12}
                                xsValue={12}
                                controlId={"visaExpense"}
                                labelText={"Visa Expense"}
                                placeholder={'Enter Visa Expense'}
                                value={formData.visaExpense}
                                handleInputChange={handleInputChange}
                            />
                            <LabelAndDropdownField
                                mdValue={3}
                                lgValue={3}
                                smValue={12}
                                xsValue={12}
                                controlId={'visaExpenseCurrency'}
                                labelText={'Visa Expense Currency'}
                                value={formData.visaExpenseCurrency}
                                optionList={currencyTypeList}
                                handleInputChange={handleInputChange}
                            />

                            <LabelAndInputField
                                mdValue={3}
                                lgValue={3}
                                smValue={12}
                                xsValue={12}
                                controlId={"otherExpense"}
                                labelText={"Other Expense"}
                                placeholder={'Enter Other Expense'}
                                value={formData.otherExpense}
                                handleInputChange={handleInputChange}
                            />
                            <LabelAndDropdownField
                                mdValue={3}
                                lgValue={3}
                                smValue={12}
                                xsValue={12}
                                controlId={'otherExpenseCurrency'}
                                labelText={'Other Expense Currency'}
                                value={formData.otherExpenseCurrency}
                                optionList={currencyTypeList}
                                handleInputChange={handleInputChange}
                            />
                        </Row>

                        <div>
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
                                <div>
                                    <ButtonComponent
                                        variant={'primary'}
                                        type={'text'}
                                        className={'btn bg-secondary ctm-border-radius text-center'}
                                        buttonText={'Back'}
                                        onClickHandler={handleBackButtonClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                    )
                }

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

            </Form >

            {/* Upload Adhar*/}
            {
                adharCard.showAttachmentModal &&
                <AdharPopUpUpload
                    adharCard={adharCard}
                    setAdharCard={setAdharCard}
                />
            }
            {/* Upload Passport*/}
            {
                passport.showAttachmentModal &&
                <PassportPopUpUpload
                    passport={passport}
                    setPassport={setPassport}
                    handleCloseButton={handleRemovePassport}
                />
            }
            {/* Upload Work Authorization*/}
            {
                workAuthorization.showAttachmentModal &&
                <WorkAuthorizationPopUpUpload
                    workAuthorization={workAuthorization}
                    setWorkAuthorization={setWorkAuthorization}
                    handleCloseButton={handleRemoveWorkAuthorization}
                />
            }
            {/* Upload Pan card*/}
            {
                pan.showAttachmentModal &&
                <PanPopUpUpload
                    pan={pan}
                    setPan={setPan}
                    handleCloseButton={handleRemovePan}
                />
            }


            {/* Upload Photo*/}
            {
                photo.showAttachmentModal &&
                <CommonPopUpUpload
                    data={photo}
                    setData={setPhoto}
                    heading={"Upload Photo"}
                />
            }
            {/* Upload Resume*/}
            {
                resume.showAttachmentModal &&
                <CommonPopUpUpload
                    data={resume}
                    setData={setResume}
                    heading={"Upload Resume"}
                />
            }

            {/* Upload I94 Travel History*/}
            {
                i94TravelHistory.showAttachmentModal &&
                <CommonPopUpUpload
                    data={i94TravelHistory}
                    setData={setI94TravelHistory}
                    heading={"Upload I94 Travel History"}
                />
            }
            {/* Upload Photo id*/}
            {
                photoId.showAttachmentModal &&
                <CommonPopUpUpload
                    data={photoId}
                    setData={setPhotoId}
                    heading={"Upload Photo Id"}
                />
            }
            {/* Upload Rental Agreeement*/}
            {
                rentalAgreememt.showAttachmentModal &&
                <CommonPopUpUpload
                    data={rentalAgreememt}
                    setData={setRentalAgreememt}
                    heading={"Upload Rental Agreement"}
                />
            }
            {/* Upload Education Details*/}
            {
                educationDetails.showAttachmentModal &&
                <CommonPopUpUpload
                    data={educationDetails}
                    setData={setEducationDetails}
                    heading={'Upload Education Detail'}
                />
            }
            {/* Upload I9 Copy*/}
            {
                i9Copy.showAttachmentModal &&
                <CommonPopUpUpload
                    data={i9Copy}
                    setData={setI9Copy}
                    heading={"Upload I9 Copy"}
                />
            }
        </>
    )
}