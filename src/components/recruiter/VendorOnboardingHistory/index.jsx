import React from 'react';
import Sidebar from '../sidebar';
import CommonTable from '../EmployeeTable/CommonTable';
import { vendorDataWithVendorId, columnsForVendor, modalColumnsForVendor, columnsForVendorWithoutActionButton } from '../../../assets/lists/dummyData'
import CommonTable2 from '../../common-components/CommonTable2';

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
                            data={vendorDataWithVendorId}
                            columns={columnsForVendor}
                            tableTitle={'Vendor Onboarding History'}
                            rowClickable={true}
                            parentComponentName={'vendor'}
                            modalFieldsName={modalColumnsForVendor}
                            modalHeading={'Vendor Details'}
                        /> */}
                        <CommonTable2
                            data={vendorDataWithVendorId}
                            columns={columnsForVendorWithoutActionButton}
                            tableTitle={'Vendor Onboarding History'}
                            rowClickable={true}
                            parentComponentName={'vendor'}
                            modalFieldsName={modalColumnsForVendor}
                            modalHeading={'Vendor Details'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
