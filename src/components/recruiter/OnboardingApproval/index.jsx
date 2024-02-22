import React, { Component, useEffect, useState } from 'react'
import Sidebar from '../sidebar'
import CommonTable from '../EmployeeTable/CommonTable'
import CommonTable2 from '../../common-components/CommonTable2'
import { employeeData, column, modalColumnForEmployee } from '../../../assets/lists/dummyData'
import { getRequest } from '../../../service/ApiRequests'
import { GET_PENDING_ONBOARDING_LIST } from '../../../service/URLs'

export default function OnboardingApproval() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        getRequest(GET_PENDING_ONBOARDING_LIST).then(response => {
            console.log('pending onboarding list Response:', response.data);
            setApiData(response.data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }, [])

    return (
        <div className="page-wrapper" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar />
                    </div>
                    <div className="col-xl-9 col-lg-8  col-md-12">
                        <CommonTable2
                            data={apiData}
                            // data={employeeData}
                            columns={column}
                            tableTitle={'Pending Onboarding'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

