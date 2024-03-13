import React, { useState } from "react";
import SideBar from "../../../components/layout/SideBar";
import CommonModal from "../../../components/uiElements/CommonModal";
import CommonTable from "../../../components/uiElements/CommonTable";
import Header from "../../../components/layout/Header";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import { HEADER_ACCOUNT } from "../../../assets/common/constants";

const Allocation = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const columns = [
    {
      title: "S.no",
      dataIndex: "sNo",
      key: "sNo",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
      key: "middleName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Start Date Customer",
      dataIndex: "startDateCustomer",
      key: "startDateCustomer",
    },
    {
      title: "Client Partner",
      dataIndex: "clientPartner",
      key: "clientPartner",
    },
    {
      title: "Engagement",
      dataIndex: "engagement",
      key: "engagement",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const dummyData = [
    {
      id: 1,
      sNo: 1,
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
      startDateCustomer: "2022-01-01",
      clientPartner: "Alice Johnson",
      engagement: "Project X",
      status: "Active",
    },
    {
      id: 2,
      sNo: 2,
      firstName: "Jane",
      middleName: "M.",
      lastName: "Doe",
      startDateCustomer: "2022-02-15",
      clientPartner: "Bob Williams",
      engagement: "Project Y",
      status: "Inactive",
    },
  ];

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedEmployee(null);
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
                headerName={HEADER_ACCOUNT}
                currentPageName={"Allocations"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <CommonTable
                tableTitle={"Allocated Employee Details"}
                data={dummyData}
                columns={columns}
                rowClickable={true}
                settingModalDataFunction={handleRowClick}
              />
            </div>
          </div>
        </div>
        <CommonModal
          modalHeading={"Employee Details"}
          data={selectedEmployee}
          fieldNames={columns}
          showModal={showModal}
          handleCloseModal={handleModalClose}
        />
      </div>
    </>
  );
};

export default Allocation;
