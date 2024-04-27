import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { HEADER_TIMESHEET } from "../../../assets/common/constants.js";
import Header from "../../../components/layout/Header.jsx";
import SideBar from "../../../components/layout/SideBar";
import ButtonComponent from "../../../components/uiElements/ButtonComponent.jsx";
import CommonModal from "../../../components/uiElements/CommonModal.jsx";
import CommonTable from "../../../components/uiElements/CommonTable.jsx";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import ViewTimesheet from '../viewTimesheet/ViewTimesheet.jsx';

const PendingTimesheet = () => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedTimesheet, setSelectedTimesheet] = useState(null);

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [isApproveLeaveModalOpen, setIsApproveLeaveModalOpen] = useState(false);

  const handleCloseRejectModal = () => {
    setShowRejectModal(false);
  };

  const handleShowRejectModal = () => {
    setShowRejectModal(true);
  };

  function openApprovedLeaveModal() {
    setIsApproveLeaveModalOpen(true);
  }
  function closeApprovedLeaveModal() {
    setIsApproveLeaveModalOpen(false);
  }

  const pendingTimesheetData = [
    {
      employeeId: 'N0006',
      assigneeName: "John Doe",
      period: "01/01/2024",
      hoursSubmitted: 40,
      clientName: "ABC Corp",
      businessUnit: "Sales",
      project: "Project X",
      task: "Task A",
    },
    {
      employeeId: 'N0007',
      assigneeName: "Jane Smith",
      period: "01/01/2024",
      hoursSubmitted: 45,
      clientName: "DEF Ltd",
      businessUnit: "Marketing",
      project: "Project Z",
      task: "Task C",
    },
    {
      employeeId: 'N0008',
      assigneeName: "Alex Johnson",
      period: "26/12/2023",
      hoursSubmitted: 55,
      clientName: "GHI Corporation",
      businessUnit: "Finance",
      project: "Project Y",
      task: "Task D",
    },
    {
      employeeId: 'N0009',
      assigneeName: "Emily Davis",
      period: "08/01/2023",
      hoursSubmitted: 30,
      clientName: "JKL Enterprises",
      businessUnit: "Operations",
      project: "Project W",
      task: "Task E",
    },
  ];

  const pendingTimesheetColumns = [
    { title: "Employee Id", dataIndex: "employeeId", key: "employeeId" },
    { title: "Assignee Name", dataIndex: "assigneeName", key: "assigneeName" },
    { title: "Period (Week)", dataIndex: "period", key: "period" },
    {
      title: "Hours Submitted",
      dataIndex: "hoursSubmitted",
      key: "hoursSubmitted",
    },
    { title: "Client Name", dataIndex: "clientName", key: "clientName" },
    { title: "Business Unit", dataIndex: "businessUnit", key: "businessUnit" },
    { title: "Project", dataIndex: "project", key: "project" },
    { title: "Task", dataIndex: "task", key: "task" },
    {
      title: "Action",
      dataIndex: "Action",
      width: 500,
      render: (text, record) => (
        <div>
          <ButtonComponent
            className={'btn btn-theme ctm-border-radius text-white btn-sm'}
            onClickHandler={openApprovedLeaveModal}
            buttonText={'Approved'}
          />
          <ButtonComponent
            className={'btn btn-danger ctm-border-radius text-white btn-sm'}
            onClickHandler={handleShowRejectModal}
            buttonText={'Reject'}
          />
        </div>
      ),
    },
    {
      title: "View",
      dataIndex: "view",
      render: (text, record) => (
        <ButtonComponent
          variant={'info'}
          className={'ctm-border-radius text-white btn-sm'}
          onClickHandler={() => handleShowViewModal(record)}
          buttonText={'View'}
        />
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
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails().role}
                headerName={HEADER_TIMESHEET}
                currentPageName={"Pending Timesheet"}
              />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-12'>
              <CommonTable
                tableTitle={"Pending Timesheet"}
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
            <ViewTimesheet employeeData={selectedTimesheet} />
          </Modal.Body>
          <Modal.Footer>
            <ButtonComponent
              type={'button'}
              className={'btn btn-danger ctm-border-radius text-white'}
              onClickHandler={handleCloseViewModal}
              buttonText={'Close'}
            />
          </Modal.Footer>
        </Modal>

        {/* Modal for approved  */}
        {isApproveLeaveModalOpen && (
          <CommonModal
            showModal={isApproveLeaveModalOpen}
            modalHeading={"Heading"}
            handleCloseModal={closeApprovedLeaveModal}
            extraFields={
              <div class='container'>
                <div class='row'>
                  <div class='col'>
                    <div class='d-flex justify-content-center'>
                      <h5>Do you really want to approve?</h5>
                    </div>
                  </div>
                </div>
              </div>
            }
            extraButton={
              <>
                <ButtonComponent
                  className={"btn btn-theme button-1 ctm-border-radius text-white text-center"}
                  variant={"primary"}
                  buttonText={"Approve"}
                />
              </>
            }
          />
        )}

        {/* Modal for Reject  */}
        {showRejectModal && (
          <CommonModal
            showModal={showRejectModal}
            modalHeading={"Rejecting Leave Request"}
            handleCloseModal={handleCloseRejectModal}
            extraFields={
              <div class='container'>
                <div class='row'>
                  <div class='col'>
                    <div class='d-flex justify-content-center'>
                      <h5>Do you really want to reject?</h5>
                    </div>
                  </div>
                </div>
              </div>
            }
            extraButton={
              <>
                <ButtonComponent
                  className={"btn btn-theme button-1 ctm-border-radius text-white text-center"}
                  variant={"primary"}
                  buttonText={"Reject"}
                />
              </>
            }
          />
        )}
      </div>
    </>
  );
};

export default PendingTimesheet;
