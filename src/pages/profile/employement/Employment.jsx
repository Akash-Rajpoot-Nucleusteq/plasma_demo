import React, { useState } from "react";
import { Link } from "react-router-dom";
import CEO from "../../../assets/images/CEO.png";
import Vishesh from "../../../assets/images/Vishesh.png";
import Ankita from "../../../assets/images/Ankita.png";
import Manjunath from "../../../assets/images/Manjunath.png";
import Abhay from "../../../assets/images/Abhay.png";
import Vivek from "../../../assets/images/Vivek.png";
import Krishna from "../../../assets/images/Krishna.png";
import {
  CLIENT_MANAGER,
  EMPLOYEE,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
  SUPER_ADMIN,
} from "../../../assets/common/constants.js";
import { HEADER_PROFILE } from "../../../assets/common/constants.js";
import SideBar from "../../../components/layout/SideBar.jsx";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import Header from "../../../components/layout/Header.jsx";
import { NavLink } from "react-bootstrap";

const Employment = () => {
  const storedData = getCurrentUserDetails() || {};

  const recruiterManagerData = {
    yourAssignments: {
      clientName: "Amex",
      clientManagerName: "Manju",
      workLocation: "Indore",
      clientPartner: "Akash",
      email: "amex@gmail.com",
      contact: "9876789012"
    },
    yourPeers: [
      { name: "Abhay", avatar: Abhay, employeeId: 'N0010' },
      { name: "Krishna", avatar: Krishna, employeeId: 'N0011' },
      { name: "Vivek", avatar: Vivek, employeeId: 'N0012' }
    ],
    yourManager: {
      name: "Manju",
      email: "manju@nucleusteq.com",
      photo: Manjunath,
      employeeId: 'N0003'
    },
    yourReportees: [
      { name: "Abhay", avatar: Abhay, employeeId: 'N0010' },
      { name: "Krishna", avatar: Krishna, employeeId: 'N0011' },
    ],
    yourHRContact: {
      name: "Ankita Sharma",
      email: "ankita@nucluesteq.com",
      photo: Ankita,
      employeeId: 'N0002'
    }
  };

  const recruiterData = {
    yourAssignments: {
      clientName: "Amex",
      clientManagerName: "Manju",
      workLocation: "Indore",
      clientPartner: "Akash",
      email: "amex@gmail.com",
      contact: "9876789012"
    },
    yourPeers: [
      { name: "Abhay", avatar: Abhay, employeeId: 'N0010' },
      { name: "Krishna", avatar: Krishna, employeeId: 'N0011' },
      { name: "Vivek", avatar: Vivek, employeeId: 'N0012' }
    ],
    yourManager: {
      name: "Ankita Sharma",
      email: "ankita.sharma@nucluesteq.com",
      photo: Ankita,
      employeeId: 'N0002'
    },
    yourReportees: [],
    yourHRContact: {
      name: "Ankita Sharma",
      email: "ankita@nucluesteq.com",
      photo: Ankita,
      employeeId: 'N0002'
    }
  };

  const clientManagerData = {
    yourAssignments: {
      clientName: "Amex",
      clientManagerName: "Manju",
      workLocation: "Indore",
      clientPartner: "Akash",
      email: "amex@gmail.com",
      contact: "9876789012"
    },
    yourPeers: [
      { name: "Abhay", avatar: Abhay, employeeId: 'N0010' },
      { name: "Krishna", avatar: Krishna, employeeId: 'N0011' },
      { name: "Vivek", avatar: Vivek, employeeId: 'N0012' }
    ],
    yourManager: {
      name: "Ashish Baghel",
      email: "ashish.baghel@nucleusteq.com",
      photo: CEO,
      employeeId: 'N0001',
    },
    yourReportees: [
      { name: "Abhay", avatar: Abhay, employeeId: 'N0010' },
      { name: "Krishna", avatar: Krishna, employeeId: 'N0011' },
    ],
    yourHRContact: {
      name: "Ankita Sharma",
      email: "ankita@nucluesteq.com",
      photo: Ankita,
      employeeId: 'N0002'
    }
  };
  const superAdminData = {
    yourAssignments: {
      clientName: "Amex",
      clientManagerName: "Manju",
      workLocation: "Indore",
      clientPartner: "Akash",
      email: "amex@gmail.com",
      contact: "9876789012"
    },
    yourPeers: [
      {
        name: "Manju",
        email: "manju@nucleusteq.com",
        avatar: Manjunath,
        employeeId: 'N0003'
      },
    ],
    yourManager: {
      name: "Ashish Baghel",
      email: "ashish.baghel@nucleusteq.com",
      photo: CEO,
      employeeId: 'N0001'
    },
    yourReportees: [
      { name: "Manjunath", avatar: Manjunath, employeeId: 'N0003' },
      { name: "Ankita", avatar: Ankita, employeeId: 'N0002' }
    ],
    yourHRContact: {
      name: "Ashish Baghel",
      email: "ashish.baghel@nucluesteq.com",
      photo: CEO,
      employeeId: 'N0001',
    }
  };

  const managerData = {
    yourAssignments: {
      clientName: "Amex",
      clientManagerName: "Manju",
      workLocation: "Indore",
      clientPartner: "Akash",
      email: "amex@gmail.com",
      contact: "9876789012"
    },
    yourPeers: [
      { name: "Abhay", avatar: Abhay, employeeId: 'N0010' },
      { name: "Krishna", avatar: Krishna, employeeId: 'N0011' },
      { name: "Vivek", avatar: Vivek, employeeId: 'N0012' }
    ],
    yourManager: {
      name: "Ankita Sharma",
      email: "ankita.sharma@nucleusteq.com",
      photo: Ankita,
      employeeId: 'N0002'
    },
    yourReportees: [
      { name: "Abhay", avatar: Abhay, employeeId: 'N0010' },
      { name: "Krishna", avatar: Krishna, employeeId: 'N0011' },
    ],
    yourHRContact: {
      name: "Ankita Sharma",
      email: "ankita.sharma@nucluesteq.com",
      photo: Ankita,
      employeeId: 'N0002',
    }
  };
  const employeeData = {
    yourAssignments: {
      clientName: "Amex",
      clientManagerName: "Manju",
      workLocation: "Indore",
      clientPartner: "Akash",
      email: "amex@gmail.com",
      contact: "9876789012"
    },
    yourManager: {
      name: "Vishesh",
      email: "vishesh.tungare@nucleusteq.com",
      photo: Vishesh,
      employeeId: 'N0004',
    },
    yourReportees: [
    ],
    yourHRContact: {
      name: "Ankita Sharma",
      email: "ankita.sharma@nucluesteq.com",
      photo: Ankita,
      employeeId: 'N0002'
    }
  };

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
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card add-team flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Peers</h4>
                    </div>
                    <div className='card-body'>
                      <div className='form-group mb-3'>
                        {
                          fillEmpData.yourPeers.map((peer, index) => (
                            // <Link to='#' key={index}>
                            <Link to={`/profile/employment/other?employeeId=${encodeURIComponent(peer?.employeeId || '')}`} key={index}>
                              <span
                                className='avatar'
                                data-toggle='tooltip'
                                data-placement='top'
                                title={peer.name}>
                                <img className='img-fluid' alt='avatar' src={peer.avatar} />
                              </span>
                            </Link>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Assignment */}
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card office-card flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header d-flex justify-content-between align-items-center'>
                      <h4 className='d-inline-block card-title mb-0'>
                        Assignments
                      </h4>
                    </div>
                    <div className='card-body text-center'>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Client Name :</span>
                        <b> {fillEmpData?.yourAssignments?.clientName}</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>
                          Client Manager Name :
                        </span>{" "}
                        <b> {fillEmpData?.yourAssignments?.clientManagerName}</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Work Location : </span>
                        <b> {fillEmpData?.yourAssignments?.workLocation}</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Client Partner : </span>
                        <b> {fillEmpData?.yourAssignments?.clientPartner}</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Email : </span>
                        <b> {fillEmpData?.yourAssignments?.email}</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Contact : </span>
                        <b>{fillEmpData?.yourAssignments?.contact}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*My Manager */}
              <div className='row'>
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Manager</h4>
                    </div>
                    <div className='card-body'>
                      <div className='media mb-4'>
                        <Link to={`/profile/employment/other?employeeId=${encodeURIComponent(fillEmpData?.yourManager?.employeeId || '')}`}>
                          <img
                            className='rounded mr-3 img-fluid'
                            src={fillEmpData?.yourManager?.photo}
                            alt='avatar'
                            width='50'
                            height='50'
                          />
                        </Link>
                        <div className='media-body'>
                          <Link
                            to={`/profile/employment/other?employeeId=${encodeURIComponent(fillEmpData?.yourManager?.employeeId || '')}`}
                            className='text-dark text-ellipsis'>
                            {fillEmpData?.yourManager?.name}
                          </Link>
                          <p className='ctm-text-sm mb-0 text-ellipsis'>
                            {fillEmpData?.yourManager?.email}
                          </p>
                        </div>
                      </div>
                      <div className='text-center'></div>
                    </div>
                  </div>
                </div>

                {/* My Reportees */}
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card add-team flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Reportees</h4>
                    </div>
                    <div className='card-body'>
                      {
                        fillEmpData.yourReportees.map((reportee, index) => (
                          <Link
                            to={`/profile/employment/other?employeeId=${encodeURIComponent(reportee?.employeeId || '')}`}
                            key={index}>
                            <span
                              className='avatar'
                              data-toggle='tooltip'
                              data-placement='top'
                              title={reportee.name}>
                              <img className='img-fluid' alt='avatar' src={reportee.avatar} />
                            </span>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>

              {/* My Hr Contact */}
              <div className='card flex-fill ctm-border-radius shadow-sm'>
                <div className='card-header'>
                  <h4 className='card-title mb-0'>HR Contact</h4>
                </div>
                <div className='card-body'>
                  <div className='media mb-4'>
                    <Link to={`/profile/employment/other?employeeId=${encodeURIComponent(fillEmpData?.yourHRContact?.employeeId || '')}`}>
                      <img
                        className='rounded mr-3 img-fluid'
                        src={fillEmpData?.yourHRContact?.photo}
                        alt='avatar'
                        width='50'
                        height='50'
                      />
                    </Link>
                    <div className='media-body'>
                      <Link to={`/profile/employment/other?employeeId=${encodeURIComponent(fillEmpData?.yourHRContact?.employeeId || '')}`}
                        className='text-dark text-ellipsis'
                      >
                        {fillEmpData?.yourHRContact?.name}
                      </Link>
                      <p className='ctm-text-sm mb-0 text-ellipsis'>
                        {fillEmpData?.yourHRContact?.email}
                      </p>
                    </div>
                  </div>
                  <div className='text-center'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employment;
