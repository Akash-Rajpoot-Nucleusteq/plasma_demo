import React from "react";
import Sidebar from "../sidebar";
import { Table } from "antd";

export const Inventory = () => {
  const numberOfRows = 10;

  // Generate sample data using Array.from and map
  const dataSource = Array.from({ length: numberOfRows }, (_, index) => ({
    id: index + 1,
    "S.no": index + 1,
    "Asset Id": `A${index + 1}`,
    "Asset Type": `Type ${index + 1}`,
    "Asset Name": `Asset ${index + 1}`,
    Provider: `Provider ${index + 1}`,
    "Allocation Date": `2024-01-${
      index + 1 < 10 ? "0" + (index + 1) : index + 1
    }`,
    Employee: `Employee ${index + 1}`,
    Assignee: `Assignee ${index + 1}`,
    Status: (index + 1) % 2 === 0 ? "Assigned" : "Available",
    "Work Location": `Location ${index + 1}`,
    "Work Type": `Type ${(index % 3) + 1}`, // Just an example, you can modify this as needed
  }));

  // Columns for the table
  const columns = [
    {
      title: "S.no",
      dataIndex: "S.no",
      key: "S.no",
    },
    {
      title: "Asset Id",
      dataIndex: "Asset Id",
      key: "Asset Id",
    },
    {
      title: "Asset Type",
      dataIndex: "Asset Type",
      key: "Asset Type",
    },
    {
      title: "Asset Name",
      dataIndex: "Asset Name",
      key: "Asset Name",
    },
    {
      title: "Provider",
      dataIndex: "Provider",
      key: "Provider",
    },
    {
      title: "Allocation Date",
      dataIndex: "Allocation Date",
      key: "Allocation Date",
    },
    {
      title: "Employee",
      dataIndex: "Employee",
      key: "Employee",
    },
    {
      title: "Assignee",
      dataIndex: "Assignee",
      key: "Assignee",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Work Location",
      dataIndex: "Work Location",
      key: "Work Location",
    },
    {
      title: "Work Type",
      dataIndex: "Work Type",
      key: "Work Type",
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
            <div className='card ctm-border-radius shadow-sm'>
              <div className='card-header align-center'>
                <h4 className='card-title mb-0'>Inventory</h4>
              </div>
              <div className='card-body align-center'>
                <div className='table-responsive'>
                  <Table
                    className='table-striped'
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    dataSource={dataSource}
                    rowKey={(record) => record.id}
                    pagination={false}
                    scroll={{ x: "max-content", y: 300 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
