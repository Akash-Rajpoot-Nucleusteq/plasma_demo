import React, { useEffect, useState } from 'react';
import SideBar from "../sideBar";
import CommonTable from '../../common-components/CommonTable.jsx';
import { Button } from 'react-bootstrap';

export default function Index() {
    const [currentTable, setCurrentTable] = useState('resourceRevenue');
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [resourceTableData, setResourceTableData] = useState([])
    const [customerTableData, setCustomerTableData] = useState([])

    const allResourceTableData = [
        {
            employeeId: 'N0001',
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
        { title: 'Resouce Name', dataIndex: 'fullName', key: 'fullName', },
        { title: 'Billing Rate (USD / H)', dataIndex: 'billingRate', key: 'billingRate', },
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
        { title: 'Total', dataIndex: 'total', key: 'total', },

    ]

    const allCustomerTableData = [
        {
            customerName: 'Amex',
            year: '2022',
            jan: 47, feb: 88, mar: 12, apr: 36,
            may: 72, jun: 54, jul: 29, aug: 91,
            sep: 63, oct: 17, nov: 45, dec: 78,
            total: null,
        },
        {
            customerName: 'ABC Corp',
            year: '2022',
            jan: 65, feb: 78, mar: 43, apr: 56,
            may: 29, jun: 88, jul: 12, aug: 71,
            sep: 34, oct: 62, nov: 90, dec: 14,
            total: null,
        },
        {
            customerName: 'Tech Solutions',
            year: '2022',
            jan: 34, feb: 67, mar: 45, apr: 21,
            may: 78, jun: 89, jul: 32, aug: 57,
            sep: 68, oct: 43, nov: 56, dec: 78,
            total: null,
        },
        {
            customerName: 'Global Innovations',
            year: '2023',
            jan: 22, feb: 45, mar: 68, apr: 34,
            may: 57, jun: 29, jul: 83, aug: 41,
            sep: 19, oct: 76, nov: 52, dec: 37,
            total: null,
        },
        {
            customerName: 'Future Enterprises',
            year: '2023',
            jan: 73, feb: 56, mar: 29, apr: 84,
            may: 51, jun: 38, jul: 62, aug: 47,
            sep: 55, oct: 91, nov: 24, dec: 69,
            total: null,
        },
        {
            customerName: 'Innovate Solutions',
            year: '2023',
            jan: 49, feb: 67, mar: 82, apr: 36,
            may: 27, jun: 55, jul: 73, aug: 41,
            sep: 68, oct: 14, nov: 93, dec: 28,
            total: null,
        },
        {
            customerName: 'Digital Systems',
            year: '2024',
            jan: 56, feb: 23, mar: 41, apr: 78,
            may: 29, jun: 62, jul: 85, aug: 37,
            sep: 47, oct: 68, nov: 12, dec: 74,
            total: null,
        },
        {
            customerName: 'Data Innovations',
            year: '2024',
            jan: 38, feb: 81, mar: 59, apr: 27,
            may: 46, jun: 72, jul: 14, aug: 93,
            sep: 65, oct: 37, nov: 84, dec: 21,
            total: null,
        },
        {
            customerName: 'Tech Dynamics',
            year: '2024',
            jan: 72, feb: 39, mar: 57, apr: 84,
            may: 26, jun: 49, jul: 68, aug: 32,
            sep: 91, oct: 18, nov: 63, dec: 47,
            total: null,
        },
        {
            customerName: 'InnoTech Solutions',
            year: '2024',
            jan: 58, feb: 33, mar: 72, apr: 45,
            may: 19, jun: 86, jul: 51, aug: 37,
            sep: 69, oct: 24, nov: 53, dec: 78,
            total: null,
        },
    ];

    const customerColumn = [
        { title: 'Customer Name', dataIndex: 'customerName', key: 'customerName', },
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
        { title: 'Total', dataIndex: 'total', key: 'total', },
    ]

    useEffect(() => {
        const filteredResourceData = filterDataByYear(allResourceTableData, selectedYear);
        setResourceTableData(filteredResourceData);
        const filteredCustomerData = filterDataByYear(allCustomerTableData, selectedYear);
        setCustomerTableData(filteredCustomerData);
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

    const settingCurrentTable = (data) => {
        setCurrentTable(data)
        setSelectedYear(new Date().getFullYear())
        const filteredResourceData = filterDataByYear(allResourceTableData, selectedYear);
        setResourceTableData(filteredResourceData);
        const filteredCustomerData = filterDataByYear(allCustomerTableData, selectedYear);
        setCustomerTableData(filteredCustomerData);
    }

    return (
        <div className='page-wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
                        <SideBar />
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
                                            <Button
                                                className={`ml-2 ${currentTable === 'resourceRevenue' ? 'active' : ''}`}
                                                onClick={() => settingCurrentTable('resourceRevenue')}
                                            >
                                                Resource Revenue
                                            </Button>
                                            <Button
                                                className={`ml-2 ${currentTable === 'customerRevenue' ? 'active' : ''}`}
                                                onClick={() => settingCurrentTable('customerRevenue')}
                                            >
                                                Customer Revenue
                                            </Button>
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
                                        <div className='table-responsive'>
                                            {currentTable === 'resourceRevenue' && <CommonTable columns={resourceColumn} data={resourceTableData} tableTitle={'Resource Revenue Table'} />}
                                            {currentTable === 'customerRevenue' && <CommonTable columns={customerColumn} data={customerTableData} tableTitle={'Customer Revenue Table'} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
