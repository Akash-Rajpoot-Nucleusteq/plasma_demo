import React, { Component } from "react";
import CommonTable from "../../components/uiElements/CommonTable";
import Header from "../../components/layout/Header";
import SideBar from "../../components/layout/SideBar";
import { getCurrentUserDetails } from "../../utility/authentication/auth";
import { HEADER_DOCUMENT } from "../../assets/common/constants";

const Document = () => {
  const handleView = (record) => {};

  const handleDownload = (record) => {};
  const columns = [
    {
      title: "Sl No",
      dataIndex: "slNo",
      key: "slNo",
    },
    {
      title: "Document",
      dataIndex: "document",
      key: "document",
    },
    {
      title: "Document Number",
      dataIndex: "documentNumber",
      key: "documentNumber",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "View/Download",
      key: "viewDownload",
      render: (text, record) => (
        <span>
          <button
            className='btn btn-primary mr-2'
            onClick={() => handleView(record)}>
            View
          </button>
          <button
            className='btn btn-success'
            onClick={() => handleDownload(record)}>
            Download
          </button>
        </span>
      ),
    },
  ];
  const data = [
    {
      slNo: 1,
      document: "Passport",
      documentNumber: "g98798798",
      status: "Approved",
      viewDownload: "View",
    },
    {
      slNo: 2,
      document: "Visa",
      documentNumber: "H987983",
      status: "Under Review",
      viewDownload: "Download",
    },
    {
      slNo: 3,
      document: "Aadhar Card",
      documentNumber: "9879879",
      status: "Approved",
      viewDownload: "View",
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
                headerName={HEADER_DOCUMENT}
                currentPageName={"Document"}
              />
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
                      <div className='table-responsive'>
                        <CommonTable
                          className='table-striped'
                          // style={{ overflowX: "auto", zIndex: 9999 }}
                          columns={columns}
                          dataSource={data}
                          rowKey={(record) => record.id}
                          pagination={false}
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
    </>
  );
};

export default Document;
