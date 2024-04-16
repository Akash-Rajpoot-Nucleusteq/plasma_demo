import React, { useState } from 'react'
import SideBar from '../../../components/layout/SideBar'
import { HEADER_DOCUMENT } from '../../../assets/common/constants'
import CommonTable from '../../../components/uiElements/CommonTable'
import { CommonPopUpUpload, ViewDocument } from '../../../components/uiElements/PopUpForDocuments'
import ButtonComponent from '../../../components/uiElements/ButtonComponent'
import { getCurrentUserDetails } from '../../../utility/authentication/auth'
import Header from '../../../components/layout/Header'

export default function DocumentApproval() {


    const columns = [
        {
            title: "Sl No",
            dataIndex: "slNo",
            key: "slNo",
        },
        {
            title: "Employee Name",
            dataIndex: "employeeName",
            key: "employeeName",
        },
        {
            title: "Document Name",
            dataIndex: "documentName",
            key: "documentName",
        },
        {
            title: "Attachment",
            key: "attachment",
            render: (text, record) => (
                <span>
                    <ButtonComponent
                        buttonText={'View'}
                        variant={'primary'}
                        className={'btn btn-theme button-1 text-white ctm-border-radius '}
                        onClickHandler={() => viewDocument(record.employeeName)}
                    />
                </span>
            ),
        },
        {
            title: "Actions",
            key: "approveReject",
            render: (text, record) => (
                <span>
                    <ButtonComponent
                        buttonText={'Approve'}
                        variant={'primary'}
                        className={'btn btn-theme button-1 text-white ctm-border-radius '}
                        onClickHandler={() => handleApprove(record)}
                    />
                    <ButtonComponent
                        buttonText={'Reject'}
                        variant={'danger'}
                        className={'btn btn-danger ctm-border-radius text-white '}
                        onClickHandler={() => handleReject(record)}
                    />
                </span>
            ),
        },
    ];

    const data = [
        {
            slNo: 1,
            employeeName: 'Akash',
            documentName: "Passport",
            status: "Approved",
            viewDownload: "View",
        },
        {
            slNo: 2,
            employeeName: 'Krishna',
            documentName: "Visa",
            status: "Under Review",
            viewDownload: "Download",
        },
        {
            slNo: 3,
            employeeName: 'Diksha',
            documentName: "Aadhar Card",
            status: "Approved",
            viewDownload: "View",
        },
    ];


    const [document, setDocument] = useState({
        showAttachmentModal: false,
        isDataAvailable: false,
        document: null,
    });

    function viewDocument(document) {
        setDocument({
            ...document,
            showAttachmentModal: true,
            document: null,
        })
    }

    function handleApprove(data) {
        console.log('from handling approve: ', data);
    }
    function handleReject(data) {
        console.log('from handle reject: ', data);
    }

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
                                        <CommonTable
                                            tableTitle={'Approval Table'}
                                            columns={columns}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {document.showAttachmentModal && (
                <ViewDocument
                    data={document}
                    setData={setDocument}
                    heading={"View Document"}
                />
            )}
        </>
    )
}
