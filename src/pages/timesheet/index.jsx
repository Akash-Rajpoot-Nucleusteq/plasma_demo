import React, { useState } from 'react';
import TimesheetSidebar from './sidebar';
import ViewTimesheet from './viewtimesheet';
import { Modal, Button } from 'react-bootstrap';
import CommonTable from '../../components/CommonTable'
import CommonModal from '../../components/CommonModal';
import ButtonComponent from '../../components/ButtonComponent';

const PendingTimesheetPage = () => {

    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedTimesheet, setSelectedTimesheet] = useState(null);

    const [showRejectModal, setShowRejectModal] = useState(false);
    const [isApproveLeaveModalOpen, setIsApproveLeaveModalOpen] = useState(false);

    const handleCloseRejectModal = () => {
        setShowRejectModal(false);
    }

    const handleShowRejectModal = () => {
        setShowRejectModal(true);
    }

    function openApprovedLeaveModal() {
        setIsApproveLeaveModalOpen(true);
    }
    function closeApprovedLeaveModal() {
        setIsApproveLeaveModalOpen(false);
    }

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
        {
            title: 'Action',
            dataIndex: 'Action',
            width: 500,
            render: (text, record) => (
                <div>
                    <a href="#0" className="btn btn-theme ctm-border-radius text-white btn-sm" onClick={openApprovedLeaveModal}>Approve</a>
                    <a href="#0" className="btn btn-danger ctm-border-radius text-white btn-sm" onClick={handleShowRejectModal}>
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
                        <CommonTable
                            tableTitle={'Pending Timesheet'}
                            columns={pendingTimesheetColumns}
                            data={pendingTimesheetData}
                        />
                    </div>
                </div>
            </div>


            {/* View Timesheet Modal */}
            <Modal show={showViewModal} onHide={handleCloseViewModal} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>View Timesheet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ViewTimesheet />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseViewModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for approved  */}
            {isApproveLeaveModalOpen &&
                <CommonModal
                    showModal={isApproveLeaveModalOpen}
                    modalHeading={'Heading'}
                    handleCloseModal={closeApprovedLeaveModal}
                    extraFields={
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="d-flex justify-content-center">
                                        <h5>Do you really want to approve?</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    extraButton={
                        <>
                            <ButtonComponent
                                className={'btn btn-theme button-1 ctm-border-radius text-white text-center'}
                                variant={'primary'}
                                buttonText={'Approve'}
                            />
                        </>
                    }
                />}

            {/* Modal for Reject  */}
            {showRejectModal &&
                <CommonModal
                    showModal={showRejectModal}
                    modalHeading={'Rejecting Leave Request'}
                    handleCloseModal={handleCloseRejectModal}
                    extraFields={
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="d-flex justify-content-center">
                                        <h5>Do you really want to reject?</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    extraButton={
                        <>
                            <ButtonComponent
                                className={'btn btn-theme button-1 ctm-border-radius text-white text-center'}
                                variant={'primary'}
                                buttonText={'Reject'}
                            />
                        </>
                    }
                />}
        </div>
    );
}
export default PendingTimesheetPage;