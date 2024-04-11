import React from "react";
import Sidebar from "../sidebar";
import CommonTable from "../../../components/CommonTable";

export const Inventory = () => {
  const numberOfRows = 10;

  // Generate sample data using Array.from and map
  const dataSource = Array.from({ length: numberOfRows }, (_, index) => ({
    id: index + 1,
    "sNo": index + 1,
    "assetId": `A${index + 1}`,
    "assetType": `Type ${index + 1}`,
    "assetName": `Asset ${index + 1}`,
    provider: `Provider ${index + 1}`,
    "allocationDate": `2024-01-${index + 1 < 10 ? "0" + (index + 1) : index + 1
      }`,
    employee: `Employee ${index + 1}`,
    assignee: `Assignee ${index + 1}`,
    status: (index + 1) % 2 === 0 ? "Assigned" : "Available",
    "workLocation": `Location ${index + 1}`,
    "workType": `Type ${(index % 3) + 1}`, // Just an example, you can modify this as needed
  }));

  // Columns for the table
  const columns = [
    {
      title: "S.No",
      dataIndex: "sNo",
      key: "sNo",
    },
    {
      title: "Asset Id",
      dataIndex: "assetId",
      key: "assetId",
    },
    {
      title: "Asset Type",
      dataIndex: "assetType",
      key: "assetType",
    },
    {
      title: "Asset Name",
      dataIndex: "assetName",
      key: "assetName",
    },
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
    },
    {
      title: "Allocation Date",
      dataIndex: "allocationDate",
      key: "allocationDate",
    },
    {
      title: "Employee",
      dataIndex: "employee",
      key: "employee",
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Work Location",
      dataIndex: "workLocation",
      key: "workLocation",
    },
    {
      title: "Work Type",
      dataIndex: "workType",
      key: "workType",
    },
  ];
  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            <Sidebar />
          </div>
          <div className='col-xl-9 col-lg-8 col-md-12'>
            <CommonTable
              tableTitle={'Inventory'}
              columns={columns}
              data={dataSource}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
