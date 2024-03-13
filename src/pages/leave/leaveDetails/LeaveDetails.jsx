import React from "react";
import { getStatusBadgeClass } from "../../../utility/commonFunctions/CommonFunctions";
import CommonTable from "../../../components/uiElements/CommonTable";

const Leavedetails = () => {
  const leaveDetailsData = [
    {
      id: 1,
      ApplyDate: "05 May 2023",
      Duration: "2",
      LeaveType: "Sick Leave",
      Status: "Approved",
      Reason: "Medical",
    },
    {
      id: 2,
      ApplyDate: "10 Jun 2023",
      Duration: "2",
      LeaveType: "Paid Leave",
      Status: "Pending",
      Reason: "Vacation",
    },
    {
      id: 3,
      ApplyDate: "20 Aug 2023",
      Duration: "3",
      LeaveType: "Paid Leave",
      Status: "Approved",
      Reason: "Family reasons",
    },
  ];

  const leaveDetailsColumns = [
    {
      title: "Apply Date",
      dataIndex: "ApplyDate",
    },
    {
      title: "Duration (Days)",
      dataIndex: "Duration",
    },
    {
      title: "Leave Type",
      dataIndex: "LeaveType",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (status) => (
        <span className={getStatusBadgeClass(status)}>{status}</span>
      ),
    },
    {
      title: "Reason",
      dataIndex: "Reason",
    },
  ];

  return (
    <CommonTable
      data={leaveDetailsData}
      columns={leaveDetailsColumns}
      tableTitle={"Leave Details"}
    />
  );
};

export default Leavedetails;
