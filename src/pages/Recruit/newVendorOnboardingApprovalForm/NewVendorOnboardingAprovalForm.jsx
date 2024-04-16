import React, { useState, useEffect } from 'react'
import 'react-phone-input-2/lib/style.css';
// import Sidebar from '../SideBar'
// import CommonFormForVendor from '../CommonForm/CommonFormForVendor'
// import { getCurrentUserDetails } from '../../../authentication/auth';
import { HEADER_RECRUITER } from '../../../assets/common/constants';
import SideBar from '../../../components/layout/SideBar';
import { useLocation } from 'react-router';
import CommonFormForVendor from '../../../components/uiElements/CommonFormForVendor';
import { getCurrentUserDetails } from '../../../utility/authentication/auth';
import Header from '../../../components/layout/Header';

export default function NewVendorOnboardingApprovalForm(props) {

    const location = useLocation();
    const [employeeData, setEmployeeData] = useState({});

    useEffect(() => {
        const { employeeData } = location.state ? location.state : '';
        setEmployeeData(employeeData);
    })

    return (
        <>
            <Header />
            < div className="page-wrapper" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <SideBar userRole={getCurrentUserDetails()?.role} headerName={HEADER_RECRUITER} currentPageName={'New Vendor Onboarding'} />
                        </div>

                        <div className="col-xl-9 col-lg-8  col-md-12">
                            <div className="card shadow-sm ctm-border-radius">
                                <div className="card-header align-center">
                                    <h4 className="card-title mb-0">Approve Vendor Onboarding</h4>
                                </div>
                                <div className='ctm-border-radius p-4'>
                                    <CommonFormForVendor employeeData={employeeData} parentComponentName={'onboardingApprovalFormPage'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
