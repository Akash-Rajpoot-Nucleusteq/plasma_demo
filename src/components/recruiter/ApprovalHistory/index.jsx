import React from 'react';
import Sidebar from '../sidebar';
// import CommonTable from '../EmployeeTable/CommonTable';
import CommonTable2 from '../../common-components/CommonTable2';
import { employeeDataWithEmployeeId, column, modalColumnForEmployee, columnWithoutActionButton } from '../../../assets/lists/dummyData'

const index = () => {
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar />
                    </div>
                    <div className="col-xl-9 col-lg-8  col-md-12">
                        {/* <CommonTable
                            data={employeeDataWithEmployeeId}
                            columns={column}
                            tableTitle={'Approval History'}
                            rowClickable={true}
                            modalFieldsName={modalColumnForEmployee}
                            modalHeading={'Employee Details'}
                        /> */}
                        <CommonTable2
                            data={employeeDataWithEmployeeId}
                            columns={columnWithoutActionButton}
                            tableTitle={'Approval History'}
                            rowClickable={true}
                            modalFieldsName={modalColumnForEmployee}
                            modalHeading={'Employee Details'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
