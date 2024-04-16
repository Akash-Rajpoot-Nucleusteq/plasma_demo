import React, { useState } from "react";
import SideBar from "../../../components/layout/SideBar.jsx";
import CommonTable from "../../../components/uiElements/CommonTable.jsx";
import ButtonComponent from "../../../components/uiElements/ButtonComponent.jsx";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header.jsx";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import { HEADER_RECRUITER } from "../../../assets/common/constants.js";

const OnboardingApproval = () => {
const navigate = useNavigate();

const handleApproveReject = (record) => {
  navigate("/onboarding-approval-form", { state: { employeeData: record } });
};
  const employeeData = [
    {
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
      employmentCompany: "NucleusTeq",
      employeeId: "",
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
      employeeId: "",
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
      employeeId: "",
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
      employeeId: "",
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
      employeeId: "",
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
      employeeId: "",
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
      employeeId: "",
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
      employeeId: "",
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
      employeeId: "",
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
  const column = [
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ButtonComponent
          buttonText={"Approve / Reject"}
          className={"btn btn-theme button-1 text-white ctm-border-radius"}
          onClickHandler={() => handleApproveReject(record)}
        />
      ),
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
                currentPageName={"Onboarding Approval"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <CommonTable
                data={employeeData}
                columns={column}
                tableTitle={"Pending Onboarding"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingApproval;
