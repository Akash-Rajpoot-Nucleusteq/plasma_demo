import React, { useEffect, useState } from 'react';
import SideBar from "../../../components/layout/SideBar";
import { Button, Row } from 'react-bootstrap';
import CommonTable from '../../../components/uiElements/CommonTable';
import { HEADER_ACCOUNT } from '../../../assets/common/constants';
import { getCurrentUserDetails } from '../../../utility/authentication/auth';
import Header from '../../../components/layout/Header';
import LabelAndDropdownField from '../../../components/uiElements/LabelAndDropdownField';

export default function EmployeeTimesheet() {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [resourceTableData, setResourceTableData] = useState([])
    const [selectedClient, setSelectedClient] = useState("");

    const allResourceTableData = [
        {
            employeeId: 'N0001',
            clientName: 'AAA',
            firstName: 'Akash',
            lastName: 'Rajpoot',
            billingRate: '$80',
            year: '2022',
            jan: 47, feb: 88, mar: 12, apr: 36,
            may: 72, jun: 54, jul: 29, aug: 91,
            sep: 63, oct: 17, nov: 45, dec: 78,
            total: null,
        },
        {
            employeeId: 'N0002',
            clientName: 'Amex',
            firstName: 'Emily',
            lastName: 'Smith',
            billingRate: '$75',
            year: '2022',
            jan: 65, feb: 42, mar: 55, apr: 78,
            may: 29, jun: 91, jul: 17, aug: 53,
            sep: 44, oct: 69, nov: 25, dec: 82,
            total: null,
        },
        {
            employeeId: 'N0003',
            clientName: 'AAA',
            firstName: 'John',
            lastName: 'Doe',
            billingRate: '$90',
            year: '2022',
            jan: 82, feb: 37, mar: 60, apr: 45,
            may: 78, jun: 51, jul: 23, aug: 69,
            sep: 34, oct: 76, nov: 49, dec: 94,
            total: null,
        },
        {
            employeeId: 'N0004',
            clientName: 'Amex',
            firstName: 'Sophia',
            lastName: 'Johnson',
            billingRate: '$85',
            year: '2023',
            jan: 58, feb: 79, mar: 38, apr: 64,
            may: 27, jun: 93, jul: 16, aug: 75,
            sep: 41, oct: 68, nov: 32, dec: 87,
            total: null,
        },
        {
            employeeId: 'N0005',
            clientName: 'AAA',
            firstName: 'Daniel',
            lastName: 'Williams',
            billingRate: '$95',
            year: '2023',
            jan: 73, feb: 28, mar: 49, apr: 87,
            may: 36, jun: 66, jul: 20, aug: 82,
            sep: 54, oct: 42, nov: 59, dec: 91,
            total: null,
        },
        {
            employeeId: 'N0006',
            clientName: 'Amex',
            firstName: 'Olivia',
            lastName: 'Brown',
            billingRate: '$78',
            year: '2023',
            jan: 64, feb: 54, mar: 77, apr: 39,
            may: 48, jun: 85, jul: 30, aug: 62,
            sep: 57, oct: 33, nov: 70, dec: 43,
            total: null,
        },
        {
            employeeId: 'N0007',
            clientName: 'AAA',
            firstName: 'Liam',
            lastName: 'Jones',
            billingRate: '$88',
            year: '2024',
            jan: 91, feb: 41, mar: 68, apr: 53,
            may: 22, jun: 76, jul: 19, aug: 47,
            sep: 35, oct: 80, nov: 59, dec: 74,
            total: null,
        },
        {
            employeeId: 'N0008',
            clientName: 'Amex',
            firstName: 'Ava',
            lastName: 'Davis',
            billingRate: '$82',
            year: '2024',
            jan: 53, feb: 67, mar: 24, apr: 81,
            may: 45, jun: 58, jul: 36, aug: 69,
            sep: 72, oct: 50, nov: 43, dec: 88,
            total: null,
        },
        {
            employeeId: 'N0009',
            clientName: 'AAA',
            firstName: 'Noah',
            lastName: 'Miller',
            billingRate: '$87',
            year: '2024',
            jan: 76, feb: 29, mar: 62, apr: 47,
            may: 83, jun: 38, jul: 55, aug: 71,
            sep: 40, oct: 64, nov: 27, dec: 79,
            total: null,
        },
        {
            employeeId: 'N0010',
            clientName: 'Amex',
            firstName: 'Isabella',
            lastName: 'Moore',
            billingRate: '$91',
            year: '2024',
            jan: 44, feb: 72, mar: 37, apr: 59,
            may: 68, jun: 21, jul: 50, aug: 84,
            sep: 32, oct: 78, nov: 45, dec: 66,
            total: null,
        },
    ];

    const resourceColumn = [
        { title: 'Employee Id', dataIndex: 'employeeId', key: 'employeeId', },
        { title: "Client Name", dataIndex: "clientName", key: "clientName" },
        {
            title: 'Resource Name',
            dataIndex: 'fullName',
            key: 'fullName',
            render: (_, record) => `${record.firstName} ${record.lastName}`
        },
        { title: 'Billing Rate (USD/hr)', dataIndex: 'billingRate', key: 'billingRate', },
        { title: 'Jan', dataIndex: 'jan', key: 'jan', },
        { title: 'Feb', dataIndex: 'feb', key: 'feb', },
        { title: 'Mar', dataIndex: 'mar', key: 'mar', },
        { title: 'Apr', dataIndex: 'apr', key: 'apr', },
        { title: 'May', dataIndex: 'may', key: 'may', },
        { title: 'Jun', dataIndex: 'jun', key: 'jun', },
        { title: 'Jul', dataIndex: 'jul', key: 'jul', },
        { title: 'Aug', dataIndex: 'aug', key: 'aug', },
        { title: 'Sep', dataIndex: 'sep', key: 'sep', },
        { title: 'Oct', dataIndex: 'oct', key: 'oct', },
        { title: 'Nov', dataIndex: 'nov', key: 'nov', },
        { title: 'Dec', dataIndex: 'dec', key: 'dec', },
        {
            title: 'Total (Hour)',
            dataIndex: 'total',
            key: 'total',
            fixed: 'right',
            render: (_, record) => {
                const total = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
                    .reduce((acc, month) => acc + (record[month] || 0), 0);
                return total;
            }
        },

    ]

    const clientsList = [...new Set(allResourceTableData.map(item => item.clientName))];

    useEffect(() => {
        const filteredResourceData = filterDataByYear(allResourceTableData, selectedYear);
        setResourceTableData(filteredResourceData);
        setSelectedClient('')
    }, [selectedYear]);

    const filterDataByYear = (data, year) => {
        return data.filter(item => item.year.toString() === year.toString());
    };

    const handlePreviousYearClick = () => {
        setSelectedYear(selectedYear - 1);
    };

    const handleNextYearClick = () => {
        setSelectedYear(selectedYear + 1);
    };

    const handleClientChange = (event) => {
        setSelectedClient(event.target.value);
    };

    const filteredData = selectedClient
        ? resourceTableData.filter(item => item.clientName === selectedClient)
        : resourceTableData;

    return (
        <>
            <Header />
            <div className='page-wrapper'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
                            <SideBar userRole={getCurrentUserDetails()?.role} headerName={HEADER_ACCOUNT} currentPageName={'Timesheet'} />
                        </div>

                        <div className='col-xl-9 col-lg-8 col-md-12'>
                            <div className='card shadow-sm ctm-border-radius'>
                                <div className='card-body align-center'>
                                    <div className='tab-content' id='v-pills-tabContent'>
                                        <div
                                            className='tab-pane fade show active'
                                            id='v-pills-home'
                                            role='tabpanel'
                                            aria-labelledby='v-pills-home-tab'></div>
                                        <div className='employee-office-table'>
                                            <div className='mb-3'>

                                            </div>

                                            <div className='mb-3 d-flex justify-content-between'>
                                                <Button
                                                    className='ml-2'
                                                    onClick={handlePreviousYearClick}
                                                >
                                                    Previous Year
                                                </Button>

                                                <div className="d-flex align-items-center justify-content-center">
                                                    <h4>{selectedYear}</h4>
                                                </div>

                                                <Button
                                                    className='ml-2'
                                                    onClick={handleNextYearClick}
                                                >
                                                    Next Year
                                                </Button>
                                            </div>

                                            <div className="col-xl-9 col-lg-8  col-md-12 mb-3">
                                                <Row className='align-items-center'>
                                                    <LabelAndDropdownField
                                                        mdValue={6}
                                                        lgValue={6}
                                                        smValue={12}
                                                        xsValue={12}
                                                        controlId={"client"}
                                                        labelText={"Select Client"}
                                                        showDefaultOption={true}
                                                        value={selectedClient}
                                                        optionList={clientsList}
                                                        handleInputChange={handleClientChange}
                                                    />
                                                </Row>
                                            </div>

                                            <div className='table-responsive'>
                                                <CommonTable
                                                    columns={resourceColumn}
                                                    data={filteredData}
                                                    tableTitle={'Timesheet'}
                                                />

                                            </div>
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
