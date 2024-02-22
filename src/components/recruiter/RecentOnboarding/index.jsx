import React, { Component } from 'react'
import Sidebar from '../sidebar'
import CommonTable from '../EmployeeTable/CommonTable';
import { employeeDataWithEmployeeId, column, modalColumnForEmployee, columnWithoutActionButton } from '../../../assets/lists/dummyData'
import CommonTable2 from '../../common-components/CommonTable2';

export default function RecruiterRecentOnboarding() {

  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <Sidebar />
          </div>
          <div className="col-xl-9 col-lg-8  col-md-12">
            {/* <CommonTable
              columns={column}
              data={employeeDataWithEmployeeId}
              tableTitle={'Recent Onboarding'}
              rowClickable={true}
              modalFieldsName={modalColumnForEmployee}
              modalHeading={'Employee Details'}
            /> */}
            <CommonTable2
              columns={columnWithoutActionButton}
              data={employeeDataWithEmployeeId}
              tableTitle={'Recent Onboarding'}
              rowClickable={true}
              modalFieldsName={modalColumnForEmployee}
              modalHeading={'Employee Details'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}