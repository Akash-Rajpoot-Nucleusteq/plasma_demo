import React, { Component } from 'react'
import Sidebar from '../sidebar'
import CommonTable from '../EmployeeTable/CommonTable'
import { vendorData, columnsForVendor } from '../../../assets/lists/dummyData'
import CommonTable2 from '../../common-components/CommonTable2'

export default function index() {

    return (
        <div className="page-wrapper" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar />
                    </div>
                    <div className="col-xl-9 col-lg-8  col-md-12">
                        {/* <CommonTable
                            data={vendorData}
                            columns={columnsForVendor}
                            tableTitle={'New Vendor Onboarding Approval'}
                            rowClickable={false}
                            showActionButton={true}
                            actionButtonText={'Approve / Reject'}
                            actionButtonLink={'new-vendor-onboarding-approval-form'}
                        /> */}
                        <CommonTable2
                            data={vendorData}
                            columns={columnsForVendor}
                            tableTitle={'New Vendor Onboarding Approval'}
                            rowClickable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

