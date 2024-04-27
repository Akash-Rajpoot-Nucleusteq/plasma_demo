import React from "react";
import {
  CLIENT_MANAGER,
  EMPLOYEE,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
  SUPER_ADMIN,
} from "../../../assets/common/constants";
import { HEADER_PROFILE } from "../../../assets/common/constants";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import SideBar from "../../../components/layout/SideBar";
import Header from "../../../components/layout/Header";

function Details() {

  const clientManagerData = {
    userDetails: {
      firstName: "Manjunath",
      lastName: "Siddaiah",
      nationality: "India",
      dateOfBirth: "05 May 1980",
      gender: "Male",
      bloodGroup: "O+",
    },
    contactDetails: {
      phoneNumber: "987654321",
      personalEmail: "manjunath@gmail.com",
      workEmail: "manjunath.siddaiah@nucleusteq.com",
      secondaryNumber: "986754231",
    },
    datesInfo: {
      startDate: "06 Jun 2017",
      visaStartDate: "09 Jun 2017",
      visaExpiryDate: "06 Jun 2020",
      passportExpiryDate: "06 Aug 2025",
    },
  }
  const recruiterManagerData = {
    userDetails: {
      firstName: "Ankita",
      lastName: "Sharma",
      nationality: "India",
      dateOfBirth: "05 May 1980",
      gender: "Female",
      bloodGroup: "O+",
    },
    contactDetails: {
      phoneNumber: "987654321",
      personalEmail: "ankita@gmail.com",
      workEmail: "ankita.sharma@nucleusteq.com",
      secondaryNumber: "986754231",
    },
    datesInfo: {
      startDate: "06 Jun 2017",
      visaStartDate: "09 Jun 2017",
      visaExpiryDate: "06 Jun 2020",
      passportExpiryDate: "06 Aug 2025",
    },
  }
  const managerData = {
    userDetails: {
      firstName: "Archit",
      lastName: "Ojha",
      nationality: "India",
      dateOfBirth: "05 May 1980",
      gender: "Male",
      bloodGroup: "O+",
    },
    contactDetails: {
      phoneNumber: "987654321",
      personalEmail: "archit@gmail.com",
      workEmail: "archit.ojha@nucleusteq.com",
      secondaryNumber: "986754231",
    },
    datesInfo: {
      startDate: "06 Jun 2017",
      visaStartDate: "09 Jun 2017",
      visaExpiryDate: "06 Jun 2020",
      passportExpiryDate: "06 Aug 2025",
    },
  }
  const recruiterData = {
    userDetails: {
      firstName: "Prachi",
      lastName: "Dua",
      nationality: "India",
      dateOfBirth: "05 May 1980",
      gender: "Female",
      bloodGroup: "O+",
    },
    contactDetails: {
      phoneNumber: "987654321",
      personalEmail: "prachi@gmail.com",
      workEmail: "prachi.dua@nucleusteq.com",
      secondaryNumber: "986754231",
    },
    datesInfo: {
      startDate: "06 Jun 2017",
      visaStartDate: "09 Jun 2017",
      visaExpiryDate: "06 Jun 2020",
      passportExpiryDate: "06 Aug 2025",
    },
  }
  const employeeData = {
    userDetails: {
      firstName: "Ashish",
      lastName: "Sahu",
      nationality: "India",
      dateOfBirth: "05 May 2002",
      gender: "Female",
      bloodGroup: "O+",
    },
    contactDetails: {
      phoneNumber: "987654321",
      personalEmail: "ashish@gmail.com",
      workEmail: "ashish.sahu@nucleusteq.com",
      secondaryNumber: "986754231",
    },
    datesInfo: {
      startDate: "06 Jun 2017",
      visaStartDate: "09 Jun 2017",
      visaExpiryDate: "06 Jun 2020",
      passportExpiryDate: "06 Aug 2025",
    },
  }
  const superAdminData = {
    userDetails: {
      firstName: "Ashish",
      lastName: "Baghel",
      nationality: "India",
      dateOfBirth: "05 May 1977",
      gender: "Male",
      bloodGroup: "O+",
    },
    contactDetails: {
      phoneNumber: "987654321",
      personalEmail: "ashishbaghel@gmail.com",
      workEmail: "ashish.baghel@nucleusteq.com",
      secondaryNumber: "986754231",
    },
    datesInfo: {
      startDate: "06 Jun 2017",
      visaStartDate: "09 Jun 2017",
      visaExpiryDate: "06 Jun 2020",
      passportExpiryDate: "06 Aug 2025",
    },
  }

  const filteredEmployeeData = {
    [RECRUITER_MANAGER]: {
      ...recruiterManagerData
    },
    [RECRUITER]: {
      ...recruiterData
    },
    [CLIENT_MANAGER]: {
      ...clientManagerData
    },
    [MANAGER]: {
      ...managerData
    },
    [EMPLOYEE]: {
      ...employeeData
    },
    [SUPER_ADMIN]: {
      ...superAdminData
    },
  }

  const fillEmpData = filteredEmployeeData[getCurrentUserDetails()?.role]
    ? filteredEmployeeData[getCurrentUserDetails()?.role]
    : {};

  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails()?.role}
                headerName={HEADER_PROFILE}
                currentPageName={"Profile"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='row'>
                <div className='col-xl-4 col-lg-6 col-md-6 d-flex'>
                  <div className='card flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Basic Information</h4>
                    </div>
                    <div className='card-body text-center'>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>First Name : </span>
                        {/* {userDetails.firstName} */}
                        {fillEmpData.userDetails.firstName}
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Last Name : </span>
                        {fillEmpData.userDetails.lastName}
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Nationality : </span>{" "}
                        {fillEmpData.userDetails.nationality}
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Date of Birth : </span>
                        {fillEmpData.userDetails.dateOfBirth}
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Gender : </span>
                        {fillEmpData.userDetails.gender}
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Blood Group : </span>
                        {fillEmpData.userDetails.bloodGroup}
                      </p>
                    </div>
                  </div>
                </div>


                <div className='col-xl-4 col-lg-6 col-md-6 d-flex'>
                  <div className='card flex-fill  ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Contact</h4>
                    </div>
                    <div className='card-body text-center'>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Phone Number : </span>
                        {fillEmpData.contactDetails.phoneNumber}
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Personal Email : </span>
                        {fillEmpData.contactDetails.personalEmail}
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Work Email : </span>
                        {fillEmpData.contactDetails.workEmail}
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Secondary Number : </span>
                        {fillEmpData.contactDetails.secondaryNumber}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-12 col-md-12'>
                  <div className='row'>
                    <div className='col-xl-12 col-lg-6 col-md-6 d-flex'>
                      <div className='card ctm-border-radius shadow-sm flex-fill'>
                        <div className='card-header'>
                          <h4 className='card-title mb-0'>Dates</h4>
                        </div>
                        <div className='card-body text-center'>
                          <p className='card-text mb-3'>
                            <span className='text-primary'>Start Date : </span>
                            {fillEmpData.datesInfo.startDate}
                          </p>
                          <p className='card-text mb-3'>
                            <span className='text-primary'>Visa Start Date : </span>
                            {fillEmpData.datesInfo.visaStartDate}
                          </p>
                          <p className='card-text mb-3'>
                            <span className='text-primary'>Visa Expiry Date : </span>
                            {fillEmpData.datesInfo.visaExpiryDate}
                          </p>
                          <p className='card-text mb-3'>
                            <span className='text-primary'>Passport Expiry Date : </span>
                            {fillEmpData.datesInfo.passportExpiryDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-12 col-lg-6 col-md-6 d-flex'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
