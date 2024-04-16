import React, { useState } from 'react';
import CommonTable from '../../../components/uiElements/CommonTable';
import SideBar from '../../../components/layout/SideBar';
import Header from '../../../components/layout/Header';
import { getCurrentUserDetails } from '../../../utility/authentication/auth';
import { HEADER_RECRUITER } from '../../../assets/common/constants'
import LabelAndDropdownField from '../../../components/uiElements/LabelAndDropdownField'
import { Row } from 'react-bootstrap';

export default function VendorResources() {

    const vendorResourceList = [
        {
            employeeId: '1',
            vendorCompany: 'Vendor A',
            firstName: 'John',
            lastName: 'Doe',
            startDate: '2022-01-01',
            client: 'Client A',
            clientPartner: 'Partner A',
            rate: '50',
            employmentStatus: 'Active',
        },
        {
            employeeId: '2',
            vendorCompany: 'Vendor A',
            firstName: 'Jane',
            lastName: 'Smith',
            startDate: '2022-01-15',
            client: 'Client A',
            clientPartner: 'Partner A',
            rate: '55',
            employmentStatus: 'Active',
        },
        {
            employeeId: '3',
            vendorCompany: 'Vendor B',
            firstName: 'Alice',
            lastName: 'Johnson',
            startDate: '2022-02-01',
            client: 'Client B',
            clientPartner: 'Partner B',
            rate: '60',
            employmentStatus: 'Active',
        },
        {
            employeeId: '4',
            vendorCompany: 'Vendor B',
            firstName: 'Bob',
            lastName: 'Williams',
            startDate: '2022-02-15',
            client: 'Client B',
            clientPartner: 'Partner B',
            rate: '65',
            employmentStatus: 'Active',
        },
        {
            employeeId: '5',
            vendorCompany: 'Vendor C',
            firstName: 'Emily',
            lastName: 'Davis',
            startDate: '2022-03-01',
            client: 'Client C',
            clientPartner: 'Partner C',
            rate: '70',
            employmentStatus: 'Active',
        },
        {
            employeeId: '6',
            vendorCompany: 'Vendor C',
            firstName: 'David',
            lastName: 'Brown',
            startDate: '2022-03-15',
            client: 'Client C',
            clientPartner: 'Partner C',
            rate: '75',
            employmentStatus: 'Active',
        },
        {
            employeeId: '7',
            vendorCompany: 'Vendor D',
            firstName: 'Sarah',
            lastName: 'Miller',
            startDate: '2022-04-01',
            client: 'Client D',
            clientPartner: 'Partner D',
            rate: '80',
            employmentStatus: 'Active',
        },
        {
            employeeId: '8',
            vendorCompany: 'Vendor D',
            firstName: 'Michael',
            lastName: 'Wilson',
            startDate: '2022-04-15',
            client: 'Client D',
            clientPartner: 'Partner D',
            rate: '85',
            employmentStatus: 'Active',
        },
    ];
    const columnsForVendorResourceList = [
        {
            title: "Employee Id",
            dataIndex: "employeeId",
            key: "employeeId",
        },
        {
            title: "Vendor Company",
            dataIndex: "vendorCompany",
            key: "company",
        },
        {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName",
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "Start Date",
            dataIndex: "startDate",
            key: "startDate",
        },
        {
            title: "Client",
            dataIndex: "client",
            key: "client",
        },
        {
            title: "Client Partner",
            dataIndex: "clientPartner",
            key: "clientPartner",
        },
        {
            title: "Employment Status",
            dataIndex: "employmentStatus",
            key: "employmentStatus",
        },
    ]

    // Get unique client names
    const clients = [...new Set(vendorResourceList.map(item => item.vendorCompany))];

    const [filteredList, setFilteredList] = useState(vendorResourceList);

    const handleClientChange = (event) => {
        const selectedOption = event.target.value;
        setFilteredList(selectedOption ? vendorResourceList.filter(item => item.vendorCompany === selectedOption) : vendorResourceList)
    };

    return (
        <>
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <SideBar userRole={getCurrentUserDetails()?.role} headerName={HEADER_RECRUITER} currentPageName={'Vendor Resources'} />
                        </div>
                        <div className='col-xl-9 col-lg-8  col-md-12'>
                            <div className='card shadow-sm ctm-border-radius'>
                                <div className='card-body align-center'>
                                    <div className="col-xl-9 col-lg-8  col-md-12 mb-3">
                                        <Row className='align-items-center'>
                                            <LabelAndDropdownField
                                                mdValue={6}
                                                lgValue={6}
                                                smValue={12}
                                                xsValue={12}
                                                controlId={'accountChange'}
                                                labelText={'Select Vendor'}
                                                showDefaultOption={true}
                                                optionList={clients}
                                                handleInputChange={handleClientChange}
                                                defaultOptionName={'Vendor'}
                                                formatOption={true}
                                            />
                                        </Row>
                                    </div>

                                    <div className='table-responsive'>
                                        <CommonTable
                                            data={filteredList}
                                            columns={columnsForVendorResourceList}
                                            tableTitle={'Vendor Resources'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
