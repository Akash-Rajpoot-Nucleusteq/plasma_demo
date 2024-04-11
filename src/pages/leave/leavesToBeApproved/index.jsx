import React, { useState } from "react";
import { Table } from 'antd';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import IMG01 from '../../../assets/images/Krishna.png';
import IMG02 from '../../../assets/images/Profile Photo.jpg';
import IMG04 from '../../../assets/images/Vivek.png';
import CommonModal from "../../../components/CommonModal";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTable from "../../../components/CommonTable";

const LeavesToBeApproved = () => {

  const todaysLeaveData = [
    { id: 1, image: IMG01, Employee: 'Krishna ', Leave: 'Paid Leave', From: '05 Dec 2019', To: '07 Dec 2019', Days: '3', Remaining: '9', Notes: 'Parenting Leave', Status: 'approved' },
    { id: 2, image: IMG02, Employee: 'Ashish Kumar Sahu', Leave: 'Sick Leave', From: '05 Dec 2019', To: '07 Dec 2019', Days: '3', Remaining: '9', Notes: 'Parenting Leave', Status: 'approved' },
    { id: 3, image: IMG04, Employee: 'Vivek Dubey', Leave: 'Casual Leave', From: '05 Dec 2019', To: '07 Dec 2019', Days: '3', Remaining: '9', Notes: 'Parenting Leave', Status: 'approved' },
  ];

  const todaysLeaveColumns = [
    {
      title: 'Team Member',
      dataIndex: 'Employee',
      render: (text, record) => (
        <>
          <Link to="employment" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></Link>
          <h2 className="table-avatar"><Link to="employment">{text}</Link></h2>
        </>
      ),
    },

    {
      title: 'Leave Type',
      dataIndex: 'Leave',
    },
    {
      title: 'From',
      dataIndex: 'From',
    },
    {
      title: 'To',
      dataIndex: 'To',
    },
    {
      title: 'Remaining Days',
      dataIndex: 'Days',
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      render: (text, record) => (
        <div>
          <a href="#0" className="btn btn-theme ctm-border-radius text-white btn-sm" onClick={openApprovedLeaveModal}>Approve</a>
          <a href="#0" className="btn btn-danger ctm-border-radius text-white btn-sm" onClick={handleShowRejectModal}>
            Reject
          </a>
        </div>
      ),
    },
  ];
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



  return (
    <>
      <CommonTable
        data={todaysLeaveData}
        columns={todaysLeaveColumns}
        tableTitle={'Leaves To Approve'}
      />

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
    </>
  );
}

export default LeavesToBeApproved;
