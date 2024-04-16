import React from "react";
import SideBar from "../../../components/layout/SideBar";
import CommonTable from "../../../components/uiElements/CommonTable";
import Header from "../../../components/layout/Header";
import Toggle from "../../../components/layout/Toggle";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import { HEADER_ACCOUNT, HEADER_ASSET } from "../../../assets/common/constants";
const Customer = () => {
  const dummyData = [
    {
      SNo: 1,
      customerName: "ABC Corp",
      businessUnit: "Finance",
      project: "Financial Analysis",
      customerManager: "Alice Smith",
      engagementStatus: "Active",
    },
    {
      SNo: 2,
      customerName: "XYZ Ltd",
      businessUnit: "Technology",
      project: "Software Development",
      customerManager: "Bob Johnson",
      engagementStatus: "Inactive",
    },
    {
      SNo: 3,
      customerName: "LMN Inc",
      businessUnit: "Marketing",
      project: "Product Launch",
      customerManager: "Charlie Wilson",
      engagementStatus: "Pending",
    },
    {
      SNo: 4,
      customerName: "PQR Co",
      businessUnit: "Operations",
      project: "Supply Chain Optimization",
      customerManager: "David White",
      engagementStatus: "Active",
    },
    {
      SNo: 5,
      customerName: "JKL Ltd",
      businessUnit: "Human Resources",
      project: "Employee Training",
      customerManager: "Eva Brown",
      engagementStatus: "Inactive",
    },
  ];

  const columns = [
    {
      title: "SNo",
      dataIndex: "SNo",
      key: "SNo",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Business Unit",
      dataIndex: "businessUnit",
      key: "businessUnit",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Customer Manager",
      dataIndex: "customerManager",
      key: "customerManager",
    },
    {
      title: "Engagement Status",
      dataIndex: "engagementStatus",
      key: "engagementStatus",
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
                headerName={HEADER_ACCOUNT}
                currentPageName={"Customer"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <Toggle />
              <CommonTable
                columns={columns}
                data={dummyData}
                tableTitle={"All Clients"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Customer;
