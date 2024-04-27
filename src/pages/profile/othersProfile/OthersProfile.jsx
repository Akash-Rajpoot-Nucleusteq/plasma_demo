import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import SideBar from './Sidebar.jsx'
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import Header from "../../../components/layout/Header.jsx";
import { Col, Row } from "react-bootstrap";

const OthersProfile = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const employeeId = queryParams.get('employeeId');
    console.log('employee id is:', employeeId);

    const recruiterManagerData = {
        yourPeers: [
            { name: "Abhay", avatar: Abhay },
            { name: "Krishna", avatar: Krishna },
            { name: "Vivek", avatar: Vivek }
        ],
        yourManager: {
            name: "Manju",
            email: "manju@nucleusteq.com",
            photo: Manjunath
        },
        yourReportees: [
            { name: "Abhay", avatar: Abhay },
            { name: "Krishna", avatar: Krishna }
        ],
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
            { name: "Abhay", avatar: Abhay },
            { name: "Krishna", avatar: Krishna },
            { name: "Vivek", avatar: Vivek }
        ],
        yourManager: {
            name: "Ankita Sharma",
            email: "ankita.sharma@nucleusteq.com",
            photo: Ankita
        },
        yourReportees: [],
        yourHRContact: {
            name: "Ankita Sharma",
            email: "ankita.sharma@nucluesteq.com",
            photo: Ankita
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
            { name: "Abhay", avatar: Abhay },
            { name: "Krishna", avatar: Krishna },
            { name: "Vivek", avatar: Vivek }
        ],
        yourManager: {
            name: "Ashish Baghel",
            email: "ashish.baghel@nucleusteq.com",
            photo: CEO
        },
        yourReportees: [
            { name: "Abhay", avatar: Abhay },
            { name: "Krishna", avatar: Krishna }
        ],
        yourHRContact: {
            name: "Ankita Sharma",
            email: "ankita.sharma@nucluesteq.com",
            photo: Ankita
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
            { name: "Manjunath", avatar: Manjunath },
        ],
        yourManager: {
            name: "Ashish Baghel",
            email: "ashish.baghel@nucleusteq.com",
            photo: CEO
        },
        yourReportees: [
            { name: "Manjunath", avatar: Manjunath },
            { name: "Ankita", avatar: Ankita }
        ],
        yourHRContact: {
            name: "Ashish Baghel",
            email: "ashish.baghel@nucluesteq.com",
            photo: CEO
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
            { name: "Abhay", avatar: Abhay },
            { name: "Krishna", avatar: Krishna },
            { name: "Vivek", avatar: Vivek }
        ],
        yourManager: {
            name: "Ankita Sharma",
            email: "ankita.sharma@nucleusteq.com",
            photo: Ankita
        },
        yourReportees: [
            { name: "Abhay", avatar: Abhay },
            { name: "Krishna", avatar: Krishna }
        ],
        yourHRContact: {
            name: "Ankita Sharma",
            email: "ankita.sharma@nucluesteq.com",
            photo: Ankita
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
            photo: Vishesh
        },
        yourReportees: [
        ],
        yourHRContact: {
            name: "Ankita Sharma",
            email: "ankita.sharma@nucluesteq.com",
            photo: Ankita
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
                            {/* Basic information */}
                            <div className='card flex-fill ctm-border-radius shadow-sm'>
                                <div className='card-header'>
                                    <h4 className='card-title mb-0'>Basic Information</h4>
                                </div>
                                <div className='card-body'>
                                    <div className='container-fluid'>
                                        <div className='ctm-border-radius p-4 justify-content-center'>
                                            <Row>
                                                <Col Col md={6} sm={12} xs={12} lg={6}>
                                                    <p className='card-text mb-3'>
                                                        <span className='text-primary'>First Name : </span>
                                                        {fillEmpData.userDetails?.firstName || 'Krishna'}
                                                    </p>
                                                </Col>
                                                <Col md={6} sm={12} xs={12} lg={6}>
                                                    <p className='card-text mb-3'>
                                                        <span className='text-primary'>Last Name : </span>
                                                        {fillEmpData.userDetails?.lastName || 'Bharateeya'}
                                                    </p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md={6} sm={12} xs={12} lg={6}>
                                                    <p className='card-text mb-3'>
                                                        <span className='text-primary'>Nationality : </span>{" "}
                                                        {fillEmpData.userDetails?.nationality || "India"}
                                                    </p>
                                                </Col>
                                                <Col md={6} sm={12} xs={12} lg={6}>
                                                    <p className='card-text mb-3'>
                                                        <span className='text-primary'>Date of Birth : </span>
                                                        {fillEmpData.userDetails?.dateOfBirth || "24/04/1998"}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6} sm={12} xs={12} lg={6}>
                                                    <p className='card-text mb-3'>
                                                        <span className='text-primary'>Gender : </span>
                                                        {fillEmpData.userDetails?.gender || "Male"}
                                                    </p>
                                                </Col>
                                                <Col md={6} sm={12} xs={12} lg={6}>
                                                    <a href={`mailto:${fillEmpData.userDetails?.email || 'krishna.bharateeya@nucleusteq.com'}`}>
                                                        <span className='text-primary'>Email Id : </span>
                                                        {fillEmpData.userDetails?.email || 'krishna.bharateeya@nucleusteq.com'}
                                                    </a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6} sm={12} xs={12} lg={6}>
                                                    <p className='card-text mb-3'>
                                                        <span className='text-primary'>Phone Number : </span>
                                                        {fillEmpData.userDetails?.bloodGroup || '9876543210'}
                                                    </p>
                                                </Col>
                                                <Col md={6} sm={12} xs={12} lg={6}>
                                                    <p className='card-text mb-3'>
                                                        <span className='text-primary'>Employment Start Date : </span>
                                                        {fillEmpData.userDetails?.startDate || '12/12/2023'}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6} sm={12} xs={12} lg={6}>
                                                    <p className='card-text mb-3'>
                                                        <span className='text-primary'>Work Location : </span>
                                                        {fillEmpData.userDetails?.workLocation || 'Raipur'}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    {/*  */}
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
                                                <Link>
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
                                                        to='#'
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
                                                    <Link to='#' key={index}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OthersProfile;
