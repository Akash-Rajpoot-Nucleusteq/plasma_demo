import React, { useState } from "react";
import CommonTable from "../../../components/uiElements/CommonTable";
import CommonModal from "../../../components/uiElements/CommonModal";
import SideBar from "../../../components/layout/SideBar";
import { HEADER_RECRUITER } from "../../../assets/common/constants";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import Header from "../../../components/layout/Header";
import { Row } from "react-bootstrap";
import LabelAndDropdownField from "../../../components/uiElements/LabelAndDropdownField";
import LabelAndInputField from "../../../components/uiElements/LabelAndInputField";
import LabelAndPhoneNumberInputField from "../../../components/uiElements/LabelAndPhoneNumberInputField";
import {
  getCountryList,
  getNameWithErrorPrefix,
  getStatesListByCountry,
} from "../../../utility/commonFunctions/CommonFunctions";
import InputValidator from "../../../validations/InputValidator";
import ButtonComponent from "../../../components/uiElements/ButtonComponent";

const ManageVendor = () => {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const vendorDataWithVendorId = [
    {
      vendorId: "VN012",
      companyName: "ABC Corporation",
      taxId: "123-45-6789",
      einNumber: "EIN1234567",
      firstName: "Ashish",
      middleName: "Kumar",
      lastName: "Sahu",
      phoneNumber: "19685254367",
      addressLine1: "Om Nagar",
      addressLine2: "",
      city: "Rochester City",
      state: "New York",
      country: "United States",
      stateOfIncorporation: "California",
      noOfResources: "10",
      status: "Active",
    },
    {
      vendorId: "VN013",
      companyName: "XYZ Enterprises",
      taxId: "987-65-4321",
      einNumber: "EIN9876543",
      firstName: "Akash",
      middleName: "",
      lastName: "Rajpoot",
      phoneNumber: "376984568765445",
      addressLine1: "Shantoshi nagar",
      addressLine2: "",
      city: "Caselles",
      state: "Canillo",
      country: "Andorra",
      stateOfIncorporation: "New York",
      noOfResources: "5",
      status: "Active",
    },
    {
      vendorId: "VN014",
      companyName: "Global Solutions Inc.",
      taxId: "456-78-9123",
      einNumber: "EIN4567891",
      firstName: "Diksha",
      middleName: "",
      lastName: "Mandal",
      phoneNumber: "549845687654",
      addressLine1: "Shankar nagar",
      addressLine2: "",
      city: "Salta Villa San Lorenzo",
      state: "Salta",
      country: "Argentina",
      stateOfIncorporation: "Texas",
      noOfResources: "20",
      status: "Active",
    },
    {
      vendorId: "VN015",
      companyName: "Acme Corporation",
      taxId: "321-54-9876",
      einNumber: "EIN3215498",
      firstName: "Abhay",
      middleName: "Kumar",
      lastName: "Gupta",
      phoneNumber: "919845687654",
      addressLine1: "Vip road",
      addressLine2: "",
      city: "Raipur",
      state: "Haryana",
      country: "India",
      stateOfIncorporation: "Illiofficeis",
      noOfResources: "100",
      status: "Active",
    },
    {
      vendorId: "VN016",
      companyName: "Inofficevative Solutions Ltd.",
      taxId: "789-12-3456",
      einNumber: "EIN7891234",
      firstName: "Vivek",
      middleName: "",
      lastName: "Dubey",
      phoneNumber: "36545676876",
      addressLine1: "Om Nagar",
      addressLine2: "",
      city: "Budapest",
      state: "Pest",
      country: "Hungary",
      stateOfIncorporation: "Florida",
      noOfResources: "34",
      status: "Active",
    },
    {
      vendorId: "VN017",
      companyName: "Tech Inofficevations LLC",
      taxId: "567-89-0123",
      einNumber: "EIN5678901",
      firstName: "Krishna",
      middleName: "Kumar",
      lastName: "Bharatiya",
      phoneNumber: "3545675544",
      addressLine1: "Gyan Nagar",
      addressLine2: "",
      city: "Sogn og Fjordane",
      state: "Su urnes",
      country: "Iceland",
      stateOfIncorporation: "New Jersey",
      noOfResources: "24",
      status: "Active",
    },
    {
      vendorId: "VN018",
      companyName: "Elite Services Corp.",
      taxId: "234-56-7890",
      einNumber: "EIN2345678",
      firstName: "Hemant",
      middleName: "Kumar",
      lastName: "Bandi",
      phoneNumber: "986576786567",
      addressLine1: "Om Nagar",
      addressLine2: "",
      city: "Ethofficegraphy",
      state: "Fars",
      country: "Iran",
      stateOfIncorporation: "California",
      noOfResources: "78",
      status: "Active",
    },
    {
      vendorId: "VN019",
      companyName: "Dynamic Solutions Ltd.",
      taxId: "678-90-1234",
      einNumber: "EIN6789012",
      firstName: "Himanshu",
      middleName: "",
      lastName: "Dhoke",
      phoneNumber: "919845687654",
      addressLine1: "Rajendra nagar",
      addressLine2: "",
      city: "Bhilai",
      state: "Chhattisgarh",
      country: "India",
      stateOfIncorporation: "Pennsylvania",
      noOfResources: "30",
      status: "Active",
    },
  ];

  const modalColumnsForVendor = [
    {
      title: "Vendor ID",
      dataIndex: "vendorId",
      key: "vendorId",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "tax ID",
      dataIndex: "taxId",
      key: "taxId",
    },
    {
      title: "EIN Number",
      dataIndex: "einNumber",
      key: "taxId",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Address Line 1",
      dataIndex: "addressLine1",
      key: "addressLine1",
    },
    {
      title: "Address Line 2",
      dataIndex: "addressLine2",
      key: "addressLine2",
    },
    {
      title: "State Of Incorporation",
      dataIndex: "stateOfIncorporation",
      key: "stateOfIncorporation",
    },
    {
      title: "Number of Resources",
      dataIndex: "noOfResources",
      key: "noOfResources",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const columnsForVendorWithoutActionButton = [
    {
      title: "Vendor ID",
      dataIndex: "vendorId",
      key: "vendorId",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "State of Incorporation",
      dataIndex: "stateOfIncorporation",
      key: "stateOfIncorporation",
    },
    {
      title: "Number of Resources",
      dataIndex: "noOfResources",
      key: "noOfResources",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleShowModal(data) {
    setModalData({
      ...modalData,
      ...data,
    });
    const statesList = data.country ? getStatesListByCountry(data.country) : [];
    setStates(statesList);
    setShowModal(true);
  }

  const [countries, setCountries] = useState(getCountryList);
  const [states, setStates] = useState([]);
  const [formError, setFormError] = useState({
    errorCompanyName: "",
    errorTaxId: "",
    errorEinNumber: "",
    errorFirstName: "",
    errorLastName: "",
    errorPhoneNumber: "",
    errorAddressLine1: "",
    errorCity: "",
    errorState: "",
    errorCountry: "",
    errorStateOfIncorporation: "",
  });
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const errorId = getNameWithErrorPrefix(id);
    setModalData((prevState) => ({ ...prevState, [id]: value }));
    setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
  };
  const handleCountryChange = (event) => {
    const { id, value } = event.target;
    const errorId = getNameWithErrorPrefix(id);
    setModalData((prevState) => ({ ...prevState, [id]: value }));
    setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
    setStates(getStatesListByCountry(value));
  };
  const checkForError = () => {
    setFormError({
      ...formError,
      errorCompanyName: InputValidator.isEmpty(modalData.companyName),
      errorTaxId: InputValidator.isEmpty(modalData.taxId),
      errorEinNumber: InputValidator.isEmpty(modalData.einNumber),
      errorFirstName: InputValidator.isEmpty(modalData.firstName),
      errorLastName: InputValidator.isEmpty(modalData.lastName),
      errorPhoneNumber: InputValidator.isEmpty(
        modalData.phoneNumber.toString()
      ),
      errorAddressLine1: InputValidator.isEmpty(modalData.addressLine1),
      errorState: InputValidator.isEmpty(modalData.state),
      errorCountry: InputValidator.isEmpty(modalData.country),
      errorCity: InputValidator.isEmpty(modalData.city),
      errorStateOfIncorporation: InputValidator.isEmpty(
        modalData.stateOfIncorporation
      ),
    });
  };
  function handleModalSubmit() {
    checkForError();
    const mandatoryData = { ...modalData };
    delete mandatoryData.middleName;
    delete mandatoryData.addressLine2;
    if (!InputValidator.isObjectEmpty(mandatoryData)) {
      console.log("modal submitted: ", mandatoryData);
      setShowModal(false);
    } else {
      console.error("Failed from Updating vendor modal");
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
                userRole={getCurrentUserDetails()?.role}
                headerName={HEADER_RECRUITER}
                currentPageName={"Vendor Onboarding History"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <CommonTable
                data={vendorDataWithVendorId}
                columns={columnsForVendorWithoutActionButton}
                tableTitle={"Manage Vendor"}
                rowClickable={true}
                settingModalDataFunction={handleShowModal}
              />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <CommonModal
          data={modalData}
          modalHeading={"Edit Vendor"}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          extraFields={
            <>
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"companyName"}
                labelText={"Company Name"}
                isCompulsary={true}
                placeholder={"Enter Company Name"}
                value={modalData.companyName}
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
                placeholder={"Enter Tax Id"}
                value={modalData.taxId}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorTaxId}
              />

              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"einNumber"}
                labelText={"EIN Number"}
                isCompulsary={true}
                placeholder={"Enter EIN Number"}
                value={modalData.einNumber}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorEinNumber}
              />

              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"firstName"}
                labelText={"First Name"}
                isCompulsary={true}
                placeholder={"Enter First Name"}
                value={modalData.firstName}
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
                value={modalData.middleName}
                handleInputChange={handleInputChange}
              />

              {/* Last name and phone number */}
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"lastName"}
                labelText={"Last Name"}
                isCompulsary={true}
                placeholder={"Enter Last Name"}
                value={modalData.lastName}
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
                value={modalData.phoneNumber}
                onChange={(value) =>
                  handleInputChange({ target: { id: "phoneNumber", value } })
                }
                // error={formError.errorPhoneNumber}
              />

              {/*country and state*/}
              <LabelAndDropdownField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"country"}
                labelText={"Country"}
                isCompulsary={true}
                showDefaultOption={true}
                value={modalData.country}
                optionList={countries}
                handleInputChange={handleCountryChange}
                errorMessage={formError.errorCountry}
              />
              <LabelAndDropdownField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"state"}
                labelText={"State"}
                isCompulsary={true}
                showDefaultOption={true}
                value={modalData.state}
                optionList={states}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorState}
              />

              {/*city and address line 1*/}
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"city"}
                labelText={"City"}
                isCompulsary={true}
                placeholder={"Enter City"}
                value={modalData.city}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorCity}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"addressLine1"}
                labelText={"Address Line 1"}
                isCompulsary={true}
                placeholder={"Enter Address Line 1"}
                value={modalData.addressLine1}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorAddressLine1}
              />

              {/* Address line 1 and zip code */}
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"addressLine2"}
                labelText={"Address Line 2"}
                placeholder={"Enter Address Line 2"}
                value={modalData.addressLine2}
                handleInputChange={handleInputChange}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"stateOfIncorporation"}
                labelText={"State Of Incorpration"}
                isCompulsary={true}
                placeholder={"State Of Incorpration"}
                value={modalData.stateOfIncorporation}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorStateOfIncorporation}
              />
            </>
          }
          extraButton={
            <>
              <ButtonComponent
                variant={"primary"}
                className={
                  "btn btn-theme button-1 text-white ctm-border-radius "
                }
                buttonText={"Update"}
                onClickHandler={handleModalSubmit}
              />
            </>
          }
        />
      )}
    </>
  );
};

export default ManageVendor;
