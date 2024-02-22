import React, { useState } from 'react';
import TimesheetSidebar from './sidebar';
import ViewTimesheet from './viewtimesheet';
import { Modal, Button } from 'react-bootstrap';
import { Table } from 'antd';



const PendingTimesheetPage = () => {

    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedTimesheet, setSelectedTimesheet] = useState(null);

    const pendingTimesheetData = [
        {
            sno: 1,
            assigneeName: 'John Doe',
            period: '1st January 2024',
            hoursSubmitted: 40,
            clientName: 'ABC Corp',
            businessUnit: 'Sales',
            project: 'Project X',
            task: 'Task A',
        },
        {
            sno: 2,
            assigneeName: 'Jane Smith',
            period: '1st January 2024',
            hoursSubmitted: 45,
            clientName: 'DEF Ltd',
            businessUnit: 'Marketing',
            project: 'Project Z',
            task: 'Task C',
        },
        {
            sno: 3,
            assigneeName: 'Alex Johnson',
            period: '26 December 2023',
            hoursSubmitted: 55,
            clientName: 'GHI Corporation',
            businessUnit: 'Finance',
            project: 'Project Y',
            task: 'Task D',
        },
        {
            sno: 4,
            assigneeName: 'Emily Davis',
            period: '8th January 2023',
            hoursSubmitted: 30,
            clientName: 'JKL Enterprises',
            businessUnit: 'Operations',
            project: 'Project W',
            task: 'Task E',
        },
    ];

    const pendingTimesheetColumns = [
        { title: 'S.No', dataIndex: 'sno', key: 'sno' },
        { title: 'Assignee Name', dataIndex: 'assigneeName', key: 'assigneeName' },
        { title: 'Period (Week)', dataIndex: 'period', key: 'period' },
        { title: 'Hours Submitted', dataIndex: 'hoursSubmitted', key: 'hoursSubmitted' },
        { title: 'Client Name', dataIndex: 'clientName', key: 'clientName' },
        { title: 'Business Unit', dataIndex: 'businessUnit', key: 'businessUnit' },
        { title: 'Project', dataIndex: 'project', key: 'project' },
        { title: 'Task', dataIndex: 'task', key: 'task' },
        // {
        //     title: 'Status',
        //     dataIndex: 'Status',
        //     render: (text, record) => (
        //         <a href="#0" className="btn btn-theme ctm-border-radius text-white btn-sm">Approved</a>
        //     ),
        // },
        {
            title: 'Action',
            dataIndex: 'Action',
            width: 500,
            render: (text, record) => (
              <div>
                <a href="#0" className="btn btn-theme ctm-border-radius text-white btn-sm" style={{ marginRight: '5px' }}>
                  Approve
                </a>
                <a
                  href="#0"
                  className="btn btn-danger ctm-border-radius text-white btn-sm"
                  onClick={() => handleShow()}
                >
                   Reject
                </a>
              </div>
            ),
          },
        {
            title: 'View',
            dataIndex: 'view',
            render: (text, record) => (
                <Button variant="info" className="ctm-border-radius text-white btn-sm" onClick={() => handleShowViewModal(record)}>
                    View
                </Button>
            ),
        },
    ];

    

    const handleShowViewModal = (timesheet) => {
        setSelectedTimesheet(timesheet);
        setShowViewModal(true);
    };

    const handleCloseViewModal = () => {
        setShowViewModal(false);
    };

    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <TimesheetSidebar />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-12">

                        <div className="card ctm-border-radius shadow-sm">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Pending Timesheet Table</h4>
                            </div>
                            <div className="card-body table-scroll">

                                <Table className="table-striped"
                                    style={{ overflowX: 'auto' }}
                                    columns={pendingTimesheetColumns}
                                    // bordered
                                    dataSource={pendingTimesheetData}
                                    rowKey={record => record.id}
                                    pagination={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* View Timesheet Modal */}
            <Modal show={showViewModal} onHide={handleCloseViewModal} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>View Timesheet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ViewTimesheet/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseViewModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default PendingTimesheetPage;