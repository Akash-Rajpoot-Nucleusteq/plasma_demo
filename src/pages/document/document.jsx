<<<<<<< Updated upstream
// import React, { useState } from "react";
// import SideBar from "../../components/documents/sidebar";
// import { Form, Col } from "react-bootstrap";
// import {
//   AdharPopUpUpload,
//   PhotoPopUpUpload,
//   ResumePopUpUpload,
//   PassportPopUpUpload,
//   WorkAuthorizationPopUpUpload,
//   I94TravelHistoryPopUpUpload,
//   PhotoIdPopUpUpload,
//   RentalAgreementPopUpUpload,
//   EducationDetailsPopUpUpload,
//   I9CopyPopUpUpload,
//   PanPopUpUpload,
// } from "../../components/recruiter/commonform/PopUpForDocuments";
// import { Link } from "react-router-dom/cjs/react-router-dom";

// const Document = () => {
//   const [adharCard, setAdharCard] = useState({
//     showAttachmentModal: false,
//     showViewModal: false,
//     document: null,
//     adharNumber: "",
//     dob: "",
//   });
//   function showAdharAttachment() {
//     setAdharCard((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemoveAdharCard() {
//     setAdharCard((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       showViewModal: false,
//       document: null,
//       adharNumber: "",
//     }));
//   }
//   //End for adhar card

//   //Starting for attach photo
//   const [photo, setPhoto] = useState({
//     showAttachmentModal: false,
//     document: null,
//   });
//   function showPhotoAttachment() {
//     setPhoto((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemovePhoto() {
//     setPhoto((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   //End for attach photo

//   //Starting for attach Resume
//   const [resume, setResume] = useState({
//     showAttachmentModal: false,
//     document: null,
//   });
//   function showResumeAttachment() {
//     setResume((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemoveResume() {
//     setResume((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   //End for attach Resume

//   //Starting for attach Passport
//   const [passport, setPassport] = useState({
//     showAttachmentModal: false,
//     document: null,
//     country: "",
//     issueDate: "",
//     passportNumber: "",
//     expDate: "",
//   });
//   function showPassportAttachment() {
//     setPassport((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemovePassport() {
//     setPassport((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//       country: "",
//       issueDate: "",
//       passportNumber: "",
//       expDate: "",
//     }));
//   }
//   //End for attach Passport

//   //Starting for attach Work Autorization
//   const [workAuthorization, setWorkAuthorization] = useState({
//     showAttachmentModal: false,
//     document: null,
//     workAuthorizationNumber: "",
//     validTill: "",
//   });
//   function showWorkAuthorizationAttachment() {
//     setWorkAuthorization((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemoveWorkAuthorization() {
//     setWorkAuthorization((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   //End for attach Work Autorization

//   //Starting for attach I94 Travel History
//   const [i94TravelHistory, setI94TravelHistory] = useState({
//     showAttachmentModal: false,
//     document: null,
//   });
//   function showI94TravelHistoryAttachment() {
//     setI94TravelHistory((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemoveI94TravelHistory() {
//     setI94TravelHistory((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   //End for attach I94 Travel History

//   //Starting for attach Photo id.
//   const [photoId, setPhotoId] = useState({
//     showAttachmentModal: false,
//     document: null,
//   });
//   function showPhotoIdAttachment() {
//     setPhotoId((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemovePhotoId() {
//     setPhotoId((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   //End for attach Photo id

//   //Starting for attach Rental Agreement.
//   const [rentalAgreememt, setRentalAgreememt] = useState({
//     showAttachmentModal: false,
//     document: null,
//   });
//   function showRentalAgreememtAttachment() {
//     setRentalAgreememt((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemoveRentalAgreememtd() {
//     setRentalAgreememt((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   //End for attach Rental Agreement

//   //Starting for attach Education Details.
//   const [educationDetails, setEducationDetails] = useState({
//     showAttachmentModal: false,
//     document: null,
//   });
//   function showEducationDetailsAttachment() {
//     setEducationDetails((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemoveEducationDetails() {
//     setEducationDetails((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   //End for attach Education Details.

//   //Starting for attach I9 copy.
//   const [i9Copy, setI9Copy] = useState({
//     showAttachmentModal: false,
//     document: null,
//   });
//   function showI9CopyAttachment() {
//     setI9Copy((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemoveI9Copy() {
//     setI9Copy((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   //End for attach i9 copy.

//   //Starting for attach Pan card.
//   const [pan, setPan] = useState({
//     showAttachmentModal: false,
//     document: null,
//     panNumber: "",
//   });
//   function showPanAttachment() {
//     setPan((prevState) => ({
//       ...prevState,
//       showAttachmentModal: true,
//     }));
//   }
//   function handleRemovePan() {
//     setPan((prevState) => ({
//       ...prevState,
//       showAttachmentModal: false,
//       document: null,
//     }));
//   }
//   return (
//     <>
//       <div className='page-wrapper'>
//         <div className='container-fluid'>
//           <div className='row'>
//             <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
//               <SideBar />
//             </div>

//             <div className='col-xl-9 col-lg-8  col-md-12'>
//               <div className='card ctm-border-radius shadow-sm'>
//                 <div className='card-header'>
//                   <h4 className='card-title doc d-inline-block mb-0'>
//                     Documents
//                   </h4>
//                 </div>

//                 <div className='card-body doc-boby'>
//                   <div className='card shadow-none'>
//                     <div className='card-header'>
//                       <h5 className='card-title text-primary mb-0'>Resume</h5>
//                     </div>
//                     <div className='card-body'>
//                       <div className='row'>
//                         <div className='col-12'>
//                           <div className='document-up'>
//                             <Col>
//                               <Form.Group controlId='resume'>
//                                 <div className='document-up col-12'>
//                                   <i
//                                     className='mr-2 text-primary fa fa-file-pdf-o'
//                                     aria-hidden='true'></i>
//                                   {resume.document
//                                     ? "View Your Document"
//                                     : "Select Document"}

//                                   {resume.document ? (
//                                     <>
//                                       <button
//                                         type='button'
//                                         className='float-right btn bg-danger text-white ctm-border-radius'
//                                         onClick={handleRemoveResume}>
//                                         Remove
//                                       </button>
//                                       <button
//                                         type='button'
//                                         className='float-right ml-2 btn bg-success text-white ctm-border-radius'
//                                         onClick={showResumeAttachment}>
//                                         View
//                                       </button>
//                                     </>
//                                   ) : (
//                                     <button
//                                       variant='danger'
//                                       type='button'
//                                       className='float-right btn btn-info text-white ctm-border-radius'
//                                       onClick={showResumeAttachment}>
//                                       Upload
//                                     </button>
//                                   )}
//                                 </div>
//                               </Form.Group>
//                             </Col>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='card shadow-none'>
//                     <div className='card-header'>
//                       <h5 className='card-title text-primary mb-0'>Photo</h5>
//                     </div>
//                     <div className='card-body'>
//                       <div className='row'>
//                         <div className='col-12'>
//                           <div className='document-up'>
//                             <Col>
//                               <Form.Group controlId='photo'>
//                                 <div className='document-up col-12'>
//                                   <i
//                                     className='mr-2 text-primary fa fa-file-pdf-o'
//                                     aria-hidden='true'></i>
//                                   {photo.document
//                                     ? "View Your Document"
//                                     : "Select Document"}

//                                   {photo.document ? (
//                                     <>
//                                       <button
//                                         type='button'
//                                         className='float-right btn bg-danger text-white ctm-border-radius'
//                                         onClick={handleRemovePhoto}>
//                                         Remove
//                                       </button>
//                                       <button
//                                         type='button'
//                                         className='float-right ml-2 btn bg-success text-white ctm-border-radius'
//                                         onClick={showPhotoAttachment}>
//                                         View
//                                       </button>
//                                     </>
//                                   ) : (
//                                     <button
//                                       variant='danger'
//                                       type='button'
//                                       className='float-right btn btn-info text-white ctm-border-radius'
//                                       onClick={showPhotoAttachment}>
//                                       Upload
//                                     </button>
//                                   )}
//                                 </div>
//                               </Form.Group>
//                             </Col>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Aadhar Card */}
//                   <div className='card shadow-none'>
//                     <div className='card-header'>
//                       <h5 className='card-title text-primary mb-0'>
//                         Aadhaar Card
//                       </h5>
//                     </div>
//                     <div className='card-body'>
//                       <div className='row'>
//                         <div className='col-12'>
//                           <div className='document-up'>
//                             <Col>
//                               <Form.Group controlId='adhar'>
//                                 <div className='document-up col-12'>
//                                   <i
//                                     className='mr-2 text-primary fa fa-file-pdf-o'
//                                     aria-hidden='true'></i>
//                                   {adharCard.document
//                                     ? "View Your Document"
//                                     : "Select Document"}

//                                   {adharCard.document ? (
//                                     <>
//                                       <button
//                                         type='button'
//                                         className='float-right btn bg-danger text-white ctm-border-radius'
//                                         onClick={handleRemoveAdharCard}>
//                                         Remove
//                                       </button>
//                                       <button
//                                         type='button'
//                                         className='float-right ml-2 btn bg-success text-white ctm-border-radius'
//                                         onClick={showAdharAttachment}>
//                                         View
//                                       </button>
//                                     </>
//                                   ) : (
//                                     <button
//                                       variant='danger'
//                                       type='button'
//                                       className='float-right btn btn-info text-white ctm-border-radius'
//                                       onClick={showAdharAttachment}>
//                                       Upload
//                                     </button>
//                                   )}
//                                 </div>
//                               </Form.Group>
//                             </Col>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Pan Card */}
//                   <div className='card shadow-none'>
//                     <div className='card-header'>
//                       <h5 className=' text-primary card-title mb-0'>
//                         Pan Card
//                       </h5>
//                     </div>
//                     <div className='card-body'>
//                       <div className='row'>
//                         <div className='col-12'>
//                           <div className='document-up'>
//                             <Col>
//                               <Form.Group controlId='panCard'>
//                                 <div className='document-up col-12'>
//                                   <i
//                                     className='mr-2 text-primary fa fa-file-pdf-o'
//                                     aria-hidden='true'></i>
//                                   {pan.document
//                                     ? "View Your Document"
//                                     : "Select Document"}

//                                   {pan.document ? (
//                                     <>
//                                       <button
//                                         type='button'
//                                         className='float-right btn bg-danger text-white ctm-border-radius'
//                                         onClick={handleRemovePan}>
//                                         Remove
//                                       </button>
//                                       <button
//                                         type='button'
//                                         className='float-right ml-2 btn bg-success text-white ctm-border-radius'
//                                         onClick={showPanAttachment}>
//                                         View
//                                       </button>
//                                     </>
//                                   ) : (
//                                     <button
//                                       variant='danger'
//                                       type='button'
//                                       className='float-right btn btn-info text-white ctm-border-radius'
//                                       onClick={showPanAttachment}>
//                                       Upload
//                                     </button>
//                                   )}
//                                 </div>
//                               </Form.Group>
//                             </Col>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Passport */}
//                   <div className='card shadow-none'>
//                     <div className='card-header'>
//                       <h5 className=' text-primary card-title mb-0'>
//                         Passport
//                       </h5>
//                     </div>
//                     <div className='card-body'>
//                       <div className='row'>
//                         <div className='col-12'>
//                           <div className='document-up'>
//                             <Col>
//                               <Form.Group controlId='passport'>
//                                 <div className='document-up col-12'>
//                                   <i
//                                     className='mr-2 text-primary fa fa-file-pdf-o'
//                                     aria-hidden='true'></i>
//                                   {passport.document
//                                     ? "View Your Document"
//                                     : "Select Document"}

//                                   {passport.document ? (
//                                     <>
//                                       <button
//                                         type='button'
//                                         className='float-right btn bg-danger text-white ctm-border-radius'
//                                         onClick={handleRemovePassport}>
//                                         Remove
//                                       </button>
//                                       <button
//                                         type='button'
//                                         className='float-right ml-2 btn bg-success text-white ctm-border-radius'
//                                         onClick={showPassportAttachment}>
//                                         View
//                                       </button>
//                                     </>
//                                   ) : (
//                                     <button
//                                       variant='danger'
//                                       type='button'
//                                       className='float-right btn btn-info text-white ctm-border-radius'
//                                       onClick={showPassportAttachment}>
//                                       Upload
//                                     </button>
//                                   )}
//                                 </div>
//                               </Form.Group>
//                             </Col>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='add-doc text-center'>
//                     <Link
//                       href='#0'
//                       className='btn btn-theme  button-1 ctm-border-radius text-white text-center'
//                       // onClick={() => this.handleShow("add")}
//                     >
//                       Submit Documents
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Upload Adhar card*/}
//       <AdharPopUpUpload adharCard={adharCard} setAdharCard={setAdharCard} />
//       {/* Upload Photo*/}
//       <PhotoPopUpUpload photo={photo} setPhoto={setPhoto} />
//       {/* Upload Resume*/}
//       <ResumePopUpUpload resume={resume} setResume={setResume} />
//       {/* Upload Passport*/}
//       <PassportPopUpUpload passport={passport} setPassport={setPassport} />
//       {/* Upload Work Authorization*/}
//       <WorkAuthorizationPopUpUpload
//         workAuthorization={workAuthorization}
//         setWorkAuthorization={setWorkAuthorization}
//       />
//       {/* Upload I94 Travel History*/}
//       <I94TravelHistoryPopUpUpload
//         i94TravelHistory={i94TravelHistory}
//         setI94TravelHistory={setI94TravelHistory}
//       />
//       {/* Upload Photo id*/}
//       <PhotoIdPopUpUpload photoId={photoId} setPhotoId={setPhotoId} />
//       {/* Upload Rental Agreeement*/}
//       <RentalAgreementPopUpUpload
//         rentalAgreement={rentalAgreememt}
//         setRentalAgreement={setRentalAgreememt}
//       />
//       {/* Upload Education Details*/}
//       <EducationDetailsPopUpUpload
//         educationDetails={educationDetails}
//         setEducationDetails={setEducationDetails}
//       />
//       {/* Upload I9 Copy*/}
//       <I9CopyPopUpUpload i9Copy={i9Copy} setI9Copy={setI9Copy} />
//       {/* Upload Pan card*/}
//       <PanPopUpUpload pan={pan} setPan={setPan} />
//     </>
//   );
// };

// export default Document;
import React, { Component } from "react";
import { Table } from 'antd';
import SideBar from '../../components/documents/sidebar'
import { Dropdown } from "react-bootstrap";


const Document = () => {
    const columns = [
        {
            title: 'Sl No',
            dataIndex: 'slNo',
            key: 'slNo',
        },
        {
            title: 'Document',
            dataIndex: 'document',
            key: 'document',
        },
        {
            title: 'Document Number',
            dataIndex: 'documentNumber',
            key: 'documentNumber',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'View/Download',
            dataIndex: 'viewDownload',
            key: 'viewDownload',
        },
    ];

    const data = [
        {
            slNo: 1,
            document: 'Passport',
            documentNumber: 'g98798798',
            status: 'Approved',
            viewDownload: 'View',
        },
        {
            slNo: 2,
            document: 'Visa',
            documentNumber: 'H987983',
            status: 'Under Review',
            viewDownload: 'Download',
        },
        {
            slNo: 3,
            document: 'Aadhar Card',
            documentNumber: '9879879',
            status: 'Approved',
            viewDownload: 'View',
        },
    ];

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
                                        <div className='table-responsive'>
                                            <Table className="table-striped"
                                                style={{ overflowX: 'auto', zIndex: 9999 }}
                                                columns={columns}
                                                // bordered
                                                dataSource={data}
                                                rowKey={record => record.id}
                                                pagination={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
=======
import React, { Component, useState } from "react";
import CommonTable from "../../components/uiElements/CommonTable";
import SideBar from "../../components/layout/SideBar";
import { HEADER_DOCUMENT } from "../../assets/common/constants";
import { ViewDocument } from "../../components/uiElements/PopUpForDocuments";
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
      title: "View/Download",
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
                          tableTitle={"Document"}
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
>>>>>>> Stashed changes
                    </div>
                </div>
            </div>
        </div>
<<<<<<< Updated upstream
    )
}
=======
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
>>>>>>> Stashed changes

export default Document
