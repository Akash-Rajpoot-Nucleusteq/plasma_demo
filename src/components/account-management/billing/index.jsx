import React, { useState } from "react";
import SideBar from "../sideBar";
import CommonTable from "../../common-components/CommonTable.jsx";
import { Button, Form, Row, Col } from "react-bootstrap";

export default function index() {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const tableData = [
    {
      employeeId: "N0001",
      firstName: "Akash",
      lastName: "Rajput",
      account: "Amex",
      payRate: "4",
      employmentStatus: "Active",
    },
    {
      employeeId: "N0002",
      firstName: "Amit",
      lastName: "Sharma",
      account: "NuoData",
      payRate: "5",
      employmentStatus: "Active",
    },
    {
      employeeId: "N0003",
      firstName: "Neha",
      lastName: "Singh",
      account: "PetSmart",
      payRate: "6",
      employmentStatus: "Active",
    },
    {
      employeeId: "N0004",
      firstName: "Rahul",
      lastName: "Verma",
      account: "PetSmart",
      payRate: "7",
      employmentStatus: "Active",
    },
    {
      employeeId: "N0005",
      firstName: "Priya",
      lastName: "Gupta",
      account: "NuoData",
      payRate: "8",
      employmentStatus: "Notice Period",
    },
    {
      employeeId: "N0006",
      firstName: "Vikas",
      lastName: "Kumar",
      account: "Amex",
      payRate: "9",
      employmentStatus: "Active",
    },
    {
      employeeId: "N0007",
      firstName: "Sonia",
      lastName: "Mishra",
      account: "PetSmart",
      payRate: "10",
      employmentStatus: "Active",
    },
    {
      employeeId: "N0008",
      firstName: "Rohit",
      lastName: "Choudhary",
      account: "NuoData",
      payRate: "11",
      employmentStatus: "Active",
    },
    {
      employeeId: "N0009",
      firstName: "Shreya",
      lastName: "Yadav",
      account: "Amex",
      payRate: "12",
      employmentStatus: "Active",
      role: "Vendor",
    },
    {
      employeeId: "N0010",
      firstName: "Vivek",
      lastName: "Thakur",
      account: "PetSmart",
      payRate: "13",
      employmentStatus: "Sabbatical",
      role: "Vendor",
    },
  ];

  const column = [
    {
      title: "Employee Id",
      dataIndex: "employeeId",
      key: "employeeId",
    },
    {
      title: "Employee Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Pay Rate (USD / H)",
      dataIndex: "payRate",
      key: "payRate",
    },
    {
      title: "Employment Status",
      dataIndex: "employmentStatus",
      key: "employmentStatus",
    },
  ];

  const accounts = [...new Set(tableData.map((item) => item.account))];
  const status = [...new Set(tableData.map((item) => item.employmentStatus))];

  const handleAccountChange = (event) => {
    const { value } = event.target;
    console.log("Account value is: ", value);
    setSelectedAccount(value);
  };

  const handleStatusChange = (event) => {
    const { value } = event.target;
    console.log("Status value is: ", value);
    setSelectedStatus(value);
  };

  const filteredData = tableData.filter(
    (item) =>
      (!selectedAccount || item.account === selectedAccount) &&
      (!selectedStatus || item.employmentStatus === selectedStatus)
  );
  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            <SideBar />
          </div>

          <div className='col-xl-9 col-lg-8  col-md-12'>
            <div className='card shadow-sm ctm-border-radius'>
              <div className='card-body align-center'>
                <div className='tab-content' id='v-pills-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='v-pills-home'
                    role='tabpanel'
                    aria-labelledby='v-pills-home-tab'></div>
                  <div className='employee-office-table'>
                    <div className='col-xl-9 col-lg-8  col-md-12 mb-3'>
                      <Form>
                        <Row className='align-items-center'>
                          <Col md='2'>
                            <Button
                              className='form-control text-white'
                              type='button'>
                              Vendor
                            </Button>
                          </Col>

                          <Col md='4'>
                            <Form.Control
                              as='select'
                              onChange={handleAccountChange}>
                              <option value=''>Select Account</option>
                              {accounts.map((data, index) => (
                                <option key={index} value={data}>
                                  {data}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>

                          <Col md='4'>
                            <Form.Control
                              as='select'
                              onChange={handleStatusChange}>
                              <option value=''>Select Status</option>
                              {status.map((data, index) => (
                                <option key={index} value={data}>
                                  {data}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>
                        </Row>
                      </Form>
                    </div>

                    <div className='table-responsive'>
                      <CommonTable
                        columns={column}
                        data={filteredData}
                        tableTitle={"Billing Table"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
