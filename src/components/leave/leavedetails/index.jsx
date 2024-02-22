import React, { useState } from "react";
import { Table } from 'antd';
import { getStatusBadgeClass } from "../../../common-function/commonFunction";

const Leavedetails = () => {
    const [data] = useState([
        { id: 1, ApplyDate: '05 May 2023', Duration: '2', LeaveType: 'Sick Leave', Status: 'Approved', Reason: 'Medical' },
        { id: 2, ApplyDate: '10 Jun 2023', Duration: '2', LeaveType: 'Paid Leave', Status: 'Pending', Reason: 'Vacation' },
        { id: 3, ApplyDate: '20 Aug 2023', Duration: '3', LeaveType: 'Paid Leave', Status: 'Approved', Reason: 'Family reasons' },
    ]);

    const columns = [
        {
            title: 'Apply Date',
            dataIndex: 'ApplyDate',
        },
        {
            title: 'Duration (Days)',
            dataIndex: 'Duration'
        },
        {
            title: 'Leave Type',
            dataIndex: 'LeaveType'
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            render: (status) => <span className={getStatusBadgeClass(status)}>{status}</span>
        },
        {
            title: 'Reason',
            dataIndex: 'Reason'
        },
    ];

    return (
        <Table
            className="table-striped"
            style={{ overflowX: 'auto' }}
            columns={columns}
            dataSource={data}
            rowKey={record => record.id}
            pagination={false}
        />
    );
}

export default Leavedetails;
