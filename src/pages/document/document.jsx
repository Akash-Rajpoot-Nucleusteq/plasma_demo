import React, { Component, useState } from "react";
import CommonTable from "../../components/uiElements/CommonTable";
import SideBar from "../../components/layout/SideBar";
import { HEADER_DOCUMENT } from "../../assets/common/constants";
import {
  CommonPopUpUpload,
  ViewDocument,
} from "../../components/uiElements/PopUpForDocuments";
import { Button } from "antd";
import ButtonComponent from "../../components/uiElements/ButtonComponent";
import { getCurrentUserDetails } from "../../utility/authentication/auth";
import Header from "../../components/layout/Header";
import { useNavigate } from "react-router-dom";

const Document = () => {
  const navigate = useNavigate();

  const [documentToShow, setDocumentToShow] = useState({
    showAttachmentModal: false,
    isDataAvailable: false,
    document: null,
  });

  const handleView = (record) => {
    setDocumentToShow({
      ...documentToShow,
      showAttachmentModal: true,
    });
  };

  const handleDownload = (record) => {
    console.log("handling download", record);
  };

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
      title: "Actions",
      key: "viewDownload",
      render: (text, record) => (
        <span>
          <ButtonComponent
            buttonText={"View"}
            variant={"primary"}
            className={"btn btn-theme button-1 text-white ctm-border-radius"}
            onClickHandler={() => handleView(record)}
          />
          <ButtonComponent
            buttonText={<i className='lnr lnr-download'></i>}
            variant={"info"}
            className={"btn bg-info text-white ctm-border-radius"}
            onClickHandler={() => handleDownload(record)}
          />
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
                userRole={getCurrentUserDetails()?.role}
                headerName={HEADER_DOCUMENT}
                currentPageName={"Document"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='card shadow-sm ctm-border-radius'>
                <div className='card-body align-center'>
                  <div className='tab-content' id='v-pills-tabContent'>
                    <div className='employee-office-table'>
                      <div className='table-responsive'>
                        <CommonTable
                          data={data}
                          columns={columns}
                          tableTitle={"Documents"}
                        />
                      </div>
                    </div>

                    <div className='row justify-content-center'>
                      <div className='col-auto'>
                        <ButtonComponent
                          buttonText={"Upload/Edit Doucment"}
                          variant={"primary"}
                          className={
                            "btn btn-theme button-1 text-white ctm-border-radius "
                          }
                          onClickHandler={() => {
                            navigate("/edit-document");
                          }}
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

      {documentToShow.showAttachmentModal && (
        <ViewDocument
          data={documentToShow}
          setData={setDocumentToShow}
          heading={"View Data"}
        />
      )}
    </>
  );
};

export default Document;
