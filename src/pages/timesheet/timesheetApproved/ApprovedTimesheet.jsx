import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { HEADER_TIMESHEET } from "../../../assets/common/constants";
import Header from "../../../components/layout/Header.jsx";
import SideBar from "../../../components/layout/SideBar";
import ButtonComponent from "../../../components/uiElements/ButtonComponent.jsx";
import CommonTable from "../../../components/uiElements/CommonTable";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import ViewTimesheet from "../viewTimesheet/ViewTimesheet.jsx";

const ApprovedTimesheet = () => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedTimesheet, setSelectedTimesheet] = useState(null);
  const [approvedTimesheetData] = useState([
    {
      employeeId: 'N0008',
      assigneeName: "Alice Smith",
      period: "02/02/2023",
      hoursSubmitted: 35,
      clientName: "XYZ Inc",
      businessUnit: "Marketing",
      project: "Project Y",
      task: "Task B",
      status: "Approved",
    },
  ]);

  const approvedTimesheetColumns = [
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
                currentPageName={"Approved Timesheet"}
              />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-12'>
              <CommonTable
                tableTitle={"Approved Timesheet"}
                columns={approvedTimesheetColumns}
                data={approvedTimesheetData}
              />
            </div>
          </div>
        </div>
        <Modal show={showViewModal} onHide={handleCloseViewModal} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>View Timesheet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ViewTimesheet employeeData={selectedTimesheet}/>
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
      </div>
    </>
  );
};

export default ApprovedTimesheet;
