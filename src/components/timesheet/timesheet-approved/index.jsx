import React, { useState } from "react";
import { Table } from 'antd';
import Sidebar from "./sidebar";
import ViewTimesheet from '../viewtimesheet/index';
import { Modal, Button } from 'react-bootstrap';

const ApprovedTimesheetPage = () => {
    console.log("object")
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedTimesheet, setSelectedTimesheet] = useState(null);
    const [approvedTimesheetData] = useState([
            {
                sno: 1,
                assigneeName: 'Alice Smith',
                period: 'February 2023',
                hoursSubmitted: 35,
                clientName: 'XYZ Inc',
                businessUnit: 'Marketing',
                project: 'Project Y',
                task: 'Task B',
                status: 'Approved',
            },
        ]);

    const approvedTimesheetColumns = [
        { title: 'S.No', dataIndex: 'sno', key: 'sno' },
        { title: 'Assignee Name', dataIndex: 'assigneeName', key: 'assigneeName' },
        { title: 'Period (Week)', dataIndex: 'period', key: 'period' },
        { title: 'Hours Submitted', dataIndex: 'hoursSubmitted', key: 'hoursSubmitted' },
        { title: 'Client Name', dataIndex: 'clientName', key: 'clientName' },
        { title: 'Business Unit', dataIndex: 'businessUnit', key: 'businessUnit' },
        { title: 'Project', dataIndex: 'project', key: 'project' },
        { title: 'Task', dataIndex: 'task', key: 'task' },
        // { title: 'Status', dataIndex: 'status', key: 'status' },
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
                        <Sidebar />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-12">

                        <div className="card ctm-border-radius shadow-sm mt">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Approved Timesheets Table</h4>
                            </div>
                            <div className="card-body table-scroll">

                                <Table className="table-striped"
                                    style={{ overflowX: 'auto' }}
                                    columns={approvedTimesheetColumns}
                                    // bordered
                                    dataSource={approvedTimesheetData}
                                    rowKey={record => record.id}
                                    pagination={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showViewModal} onHide={handleCloseViewModal} size="lg">
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

export default ApprovedTimesheetPage;