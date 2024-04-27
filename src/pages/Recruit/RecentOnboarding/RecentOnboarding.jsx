import React, { useState } from "react";
import SideBar from "../../../components/layout/SideBar.jsx";
import CommonModal from "../../../components/uiElements/CommonModal.jsx";
import CommonTable from "../../../components/uiElements/CommonTable.jsx";
import Header from "../../../components/layout/Header.jsx";
import { HEADER_RECRUITER } from "../../../assets/common/constants.js";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import { formatDropdownOption, formatPhoneNumber } from '../../../utility/commonFunctions/CommonFunctions.jsx'

const RecentOnboarding = () => {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);


  const employeeDataWithEmployeeId = [
    {
      employeeId: "N0005",
      firstName: "Ashish",
      middleName: "Kumar",
      lastName: "Sahu",
      phoneNumber: "19685254367",
      addressLine1: "Om Nagar",
      addressLine2: "",
      city: "Rochester City",
      state: "New York",
      country: "United States",
      zipCode: "492013",
      visaStatus: "H1B",
      citizenship: "Albania",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "Nucleuseq",
      workMode: "REMOTE",
      employmentStartDate: "2023-12-11",
      role: "EMPLOYEE",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
      personalEmailId: "ashish@nucleusteq.com",
    },
    {
      employeeId: "N0006",
      firstName: "Akash",
      middleName: "",
      lastName: "Rajpoot",
      phoneNumber: "376984568765445",
      addressLine1: "Shantoshi nagar",
      addressLine2: "",
      city: "Caselles",
      state: "Canillo",
      country: "Andorra",
      zipCode: "545454",
      visaStatus: "H1B",
      citizenship: "Andorra",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "NucleusTeq",

      workMode: "OFFICE",
      employmentStartDate: "2023-11-10",
      role: "EMPLOYEE",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
      personalEmailId: "akash@nucleusteq.com",
    },
    {
      employeeId: "N0007",
      firstName: "Diksha",
      middleName: "",
      lastName: "Mandal",
      phoneNumber: "549845687654",
      addressLine1: "Shankar nagar",
      addressLine2: "",
      city: "Salta Villa San Lorenzo",
      state: "Salta",
      country: "Argentina",
      zipCode: "492001",
      visaStatus: "H1B",
      citizenship: "Argentina",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "NucleusTeq",

      workMode: "OFFICE",
      employmentStartDate: "2021-10-12",
      role: "EMPLOYEE",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",
      personalEmailId: "diksha@nucleusteq.com",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
    },
    {
      employeeId: "N0008",
      firstName: "Abhay",
      middleName: "Kumar",
      lastName: "Gupta",
      phoneNumber: "919845687654",
      addressLine1: "Vip road",
      addressLine2: "",
      city: "Raipur",
      state: "Haryana",
      country: "India",
      zipCode: "492001",
      visaStatus: "H1B",
      citizenship: "India",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "NucleusTeq",

      workMode: "REMOTE",
      employmentStartDate: "2020-12-11",
      role: "Manager",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
      personalEmailId: "abhay@nucleusteq.com",
    },
    {
      employeeId: "N0009",
      firstName: "Vivek",
      middleName: "",
      lastName: "Dubey",
      phoneNumber: "36545676876",
      addressLine1: "Om Nagar",
      addressLine2: "",
      city: "Budapest",
      state: "Pest",
      country: "Hungary",
      zipCode: "492014",
      visaStatus: "H1B",
      citizenship: "Hungary",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "NucleusTeq",

      workMode: "REMOTE",
      employmentStartDate: "2020-12-18",
      role: "EMPLOYEE",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
      personalEmailId: "vivek@nucleusteq.com",
    },
    {
      employeeId: "N0010",
      firstName: "Krishna",
      middleName: "Kumar",
      lastName: "Bharatiya",
      phoneNumber: "3545675544",
      addressLine1: "Gyan Nagar",
      addressLine2: "",
      city: "Sogn og Fjordane",
      state: "Su urnes",
      country: "Iceland",
      zipCode: "492013",
      visaStatus: "H1B",
      citizenship: "Iceland",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "NucleusTeq",

      workMode: "REMOTE",
      employmentStartDate: "2022-11-23",
      role: "EMPLOYEE",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
      personalEmailId: "krishna@nucleusteq.com",
    },
    {
      employeeId: "N0011",
      firstName: "Hemant",
      middleName: "Kumar",
      lastName: "Bandi",
      phoneNumber: "986576786567",
      addressLine1: "Om Nagar",
      addressLine2: "",
      city: "Ethofficegraphy",
      state: "Fars",
      country: "Iran",
      zipCode: "492017",
      visaStatus: "H1B",
      citizenship: "Iran",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "NucleusTeq",

      workMode: "REMOTE",
      employmentStartDate: "2023-10-10",
      role: "EMPLOYEE",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
      personalEmailId: "hemant@nucleusteq.com",
    },
    {
      employeeId: "N0012",
      firstName: "Himanshu",
      middleName: "",
      lastName: "Dhoke",
      phoneNumber: "919845687654",
      addressLine1: "Rajendra nagar",
      addressLine2: "",
      city: "Bhilai",
      state: "Chhattisgarh",
      country: "India",
      zipCode: "492013",
      visaStatus: "H1B",
      citizenship: "India",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "NucleusTeq",

      workMode: "REMOTE",
      employmentStartDate: "2022-11-19",
      role: "EMPLOYEE",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
      personalEmailId: "himanshu@nucleusteq.com",
    },
    {
      employeeId: "N0013",
      firstName: "Chetan",
      middleName: "",
      lastName: "Verma",
      phoneNumber: "396786456766",
      addressLine1: "Om Nagar",
      addressLine2: "",
      city: "Adelfia",
      state: "Bari",
      country: "Italy",
      zipCode: "492013",
      visaStatus: "H1B",
      citizenship: "Italy",
      employmentNature: "FULLTIME",
      contractingRate: "",
      employmentCompany: "NucleusTeq",

      workMode: "REMOTE",
      employmentStartDate: "2021-12-01",
      role: "EMPLOYEE",
      designation: "ENGINEER",
      skill: "",
      employmentStatus: "ACTIVE",

      dateOfBirth: "2001-01-01",
      gender: "MALE",
      bloodGroup: "O_POSITIVE",
      workLocation: "Raipur",
      onshoreOrOffshore: "ONSHORE",
      personalEmailId: "chetan@nucleusteq.com",
    },
  ];
  const modalColumnForEmployee = [
    {
      title: "Employee Id",
      dataIndex: "employeeId",
      key: "employeeId",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
      key: "middleName",
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
      title: "Personal Email Id",
      dataIndex: "personalEmailId",
      key: "personalEmailId",
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
      key: "addressLine1",
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
    },
    {
      title: "DOB",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      key: "bloodGroup",
    },
    {
      title: "Work Location",
      dataIndex: "workLocation",
      key: "workLocation",
    },
    {
      title: "On Shore / Off Shore",
      dataIndex: "onshoreOrOffshore",
      key: "onshoreOrOffshore",
    },
    {
      title: "Visa Status",
      dataIndex: "visaStatus",
      key: "visaStatus",
    },
    {
      title: "Citizenship",
      dataIndex: "citizenship",
      key: "citizenship",
    },
    {
      title: "Employment Nature",
      dataIndex: "employmentNature",
      key: "employmentNature",
    },
    {
      title: "Employment Company",
      dataIndex: "employmentCompany",
      key: "employmentNature",
    },
    {
      title: "Work Location Type",
      dataIndex: "workMode",
      key: "workMode",
    },
    {
      title: "Start Date",
      dataIndex: "employmentStartDate",
      key: "employemntStartDate",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Skills",
      dataIndex: "skill",
      key: "skill",
    },
    {
      title: "Employment Status",
      dataIndex: "employmentStatus",
      key: "employmentStatus",
    },
  ];
  const columnWithoutActionButton = [
    {
      title: "Employee Id",
      dataIndex: "employeeId",
      key: "employeeId",
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
      title: "Start Date",
      dataIndex: "employmentStartDate",
      key: "employemntStartDate",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (_, record) => formatPhoneNumber(record.phoneNumber),
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
  ];

  function handleCloseModal() {
    setShowModal(false);
  }

  function setingModalData(data) {
    const formattedData = ({
      ...data,
      phoneNumber: formatPhoneNumber(data.phoneNumber),
      gender: formatDropdownOption(data.gender),
      bloodGroup: formatDropdownOption(data.bloodGroup),
      onshoreOrOffshore: formatDropdownOption(data.onshoreOrOffshore),
      visaStatus: formatDropdownOption(data.visaStatus),
      employmentNature: formatDropdownOption(data.employmentNature),
      workMode: formatDropdownOption(data.workMode),
      role: formatDropdownOption(data.role),
      designation: formatDropdownOption(data.designation),
      employmentStatus: formatDropdownOption(data.employmentStatus),
    });
    setModalData({
      ...modalData,
      ...formattedData,
    });
    setShowModal(true);
  }

  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails().role}
                headerName={HEADER_RECRUITER}
                currentPageName={"Recent Onboarding"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <CommonTable
                columns={columnWithoutActionButton}
                data={employeeDataWithEmployeeId}
                tableTitle={"Recent Onboarding"}
                rowClickable={true}
                settingModalDataFunction={setingModalData}
              />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <CommonModal
          data={modalData}
          modalHeading={"Employee Details"}
          fieldNames={modalColumnForEmployee}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default RecentOnboarding;
