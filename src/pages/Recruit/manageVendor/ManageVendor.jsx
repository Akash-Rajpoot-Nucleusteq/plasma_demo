import React, { useState } from "react";
import Header from "../../../components/layout/Header";
import SideBar from "../../../components/layout/SideBar";
import { HEADER_RECRUITER } from "../../../assets/common/constants";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import CommonTable from "../../../components/uiElements/CommonTable";
import CommonModal from "../../../components/uiElements/CommonModal";

const ManageVendor = () => {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }

  function updateModalData(data) {
    setModalData({
      ...modalData,
      ...data,
    });
    setShowModal(true);
  }

  const columns = [
    {
      title: "S.No",
      dataIndex: "s.no",
      key: "s.no",
    },
    {
      title: "Company Name",
      dataIndex: "company name",
      key: "company name",
    },
    {
      title: "Vendor ID",
      dataIndex: "vendorId",
      key: "vendorId",
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "State of Incorporation",
      dataIndex: "state of incorporation",
      key: "state of incorporation",
    },
    {
      title: "No of Resources",
      dataIndex: "no of resources",
      key: "no of resources",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const dummyData = [
    {
      "s.no": 1,
      "company name": "ABC Inc.",
      vendorId: "V1001",
      firstname: "John",
      lastName: "Doe",
      "state of incorporation": "California",
      "no of resources": 10,
      status: "Active",
    },
    {
      "s.no": 2,
      "company name": "XYZ Corporation",
      vendorId: "V1002",
      firstname: "Jane",
      lastName: "Smith",
      "state of incorporation": "New York",
      "no of resources": 8,
      status: "Inactive",
    },
    {
      "s.no": 3,
      "company name": "ACME Corp",
      vendorId: "V1003",
      firstname: "Alice",
      lastName: "Johnson",
      "state of incorporation": "Texas",
      "no of resources": 15,
      status: "Active",
    },
    {
      "s.no": 4,
      "company name": "Beta Enterprises",
      vendorId: "V1004",
      firstname: "Bob",
      lastName: "Brown",
      "state of incorporation": "Florida",
      "no of resources": 12,
      status: "Active",
    },
    {
      "s.no": 5,
      "company name": "Gamma Ltd.",
      vendorId: "V1005",
      firstname: "Grace",
      lastName: "Lee",
      "state of incorporation": "Illinois",
      "no of resources": 20,
      status: "Active",
    },
    {
      "s.no": 6,
      "company name": "Delta Industries",
      vendorId: "V1006",
      firstname: "David",
      lastName: "Wilson",
      "state of incorporation": "Ohio",
      "no of resources": 7,
      status: "Inactive",
    },
  ];
  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails().role}
                headerName={HEADER_RECRUITER}
                currentPageName={"Manage Vendor"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <CommonTable
                tableTitle={"Vendors"}
                data={dummyData}
                columns={columns}
                rowClickable={true}
                settingModalDataFunction={updateModalData}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <CommonModal
          data={modalData}
          modalHeading={"Edit Vendor Details"}
          fieldNames={columns}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default ManageVendor;
