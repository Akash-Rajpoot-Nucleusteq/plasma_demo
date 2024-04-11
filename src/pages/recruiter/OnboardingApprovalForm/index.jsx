import React, { useState, useEffect } from 'react'
import 'react-phone-input-2/lib/style.css';
import Sidebar from '../sidebar'
import EmployeeForm from '../CommonForm/CommonFormForEmployee'
import { GET_PENDING_ONBOARDING_USER_DETAIL } from '../../../service/URLs';
import { getRequest } from '../../../service/ApiRequests';

export default function index(props) {

    const [employeeData, setEmployeeData] = useState({});
    const [apiData, setApiData] = useState({});

    useEffect(() => {
        const { employeeData } = props.location.state ? props.location.state : '';
        setEmployeeData(employeeData);
    }, [])

    return (
        < div className="page-wrapper" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar />
                    </div>

                    <div className="col-xl-9 col-lg-8  col-md-12">
                        <div className="card shadow-sm ctm-border-radius">
                            <div className="card-header align-center">
                                <h4 className="card-title mb-0">Approve / Reject Onboarding</h4>
                            </div>
                            <div className='ctm-border-radius p-4'>
                                <EmployeeForm
                                    employeeData={employeeData}
                                    parentComponentName={'onboardingApprovalFormPage'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
