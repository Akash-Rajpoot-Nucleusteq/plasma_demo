import React from 'react'
import SideBar from "../sideBar";
import CommonTable from '../../common-components/CommonTable.jsx'
import { Button } from 'react-bootstrap';

export default function index() {

    const tableData = [
        {
            rowTitle: 'Billable Hours',
            jan: 147, feb: 148, mar: 112, apr: 136,
            may: 172, jun: 154, jul: 129, aug: 141,
            sep: 163, oct: 117, nov: 145, dec: 138,
        },
        {
            rowTitle: 'Revenue',
            jan: '$14000', feb: '$13000', mar: '$12000',
        },
        {
            rowTitle: 'Leave Hours',
            jan: 0, feb: 0, mar: 0, apr: 0, 
            may: 0, jun: 0, jul: 0, aug: 0, 
            sep: 0, oct: 0, nov: 0, dec: 0,
        },
        {
            rowTitle: 'Approve Vacation',
            jan: 0, feb: 0, mar: 0, apr: 0, 
            may: 40, jun: 0, jul: 0, aug: 0, 
            sep: 0, oct: 0, nov: 0, dec: 0,
        },
    ]

    const column = [
        { title: 'Month', dataIndex: 'rowTitle', key: 'rowTitle' },
        { title: 'Jan', dataIndex: 'jan', key: 'jan' },
        { title: 'Feb', dataIndex: 'feb', key: 'feb' },
        { title: 'Mar', dataIndex: 'mar', key: 'mar' },
        { title: 'Apr', dataIndex: 'apr', key: 'apr' },
        { title: 'May', dataIndex: 'may', key: 'may' },
        { title: 'Jun', dataIndex: 'jun', key: 'jun' },
        { title: 'Jul', dataIndex: 'jul', key: 'jul' },
        { title: 'Aug', dataIndex: 'aug', key: 'aug' },
        { title: 'Sep', dataIndex: 'sep', key: 'sep' },
        { title: 'Oct', dataIndex: 'oct', key: 'oct' },
        { title: 'Nov', dataIndex: 'nov', key: 'nov' },
        { title: 'Dec', dataIndex: 'dec', key: 'dec' },
    ];

    return (
        <div className='page-wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
                        <SideBar />
                    </div>

                    <div className='col-xl-9 col-lg-8  col-md-12'>
                        <div className='card shadow-sm ctm-border-radius'>
                            <div className='card-body align-center'>
                                <div className='tab-content' id='v-pills-tabContent'>
                                    <div
                                        className='tab-pane fade show active'
                                        id='v-pills-home'
                                        role='tabpanel'
                                        aria-labelledby='v-pills-home-tab'></div>
                                    <div className='employee-office-table'>
                                        <div className='table-responsive'>
                                            <CommonTable columns={column} data={tableData} tableTitle={'Revenue Table'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

