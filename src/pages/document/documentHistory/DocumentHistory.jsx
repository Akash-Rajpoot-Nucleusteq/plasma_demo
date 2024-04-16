import React, { useState } from 'react'
import SideBar from '../../../components/layout/SideBar'
import { HEADER_DOCUMENT } from '../../../assets/common/constants'
import CommonTable from '../../../components/uiElements/CommonTable'
import { CommonPopUpUpload, ViewDocument } from '../../../components/uiElements/PopUpForDocuments'
import { getCurrentUserDetails } from '../../../utility/authentication/auth'
import Header from '../../../components/layout/Header'
import ButtonComponent from '../../../components/uiElements/ButtonComponent'

export default function DocumentHistory() {

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
                        buttonText={'View'}
                        variant={'primary'}
                        className={'btn btn-theme button-1 text-white ctm-border-radius'}
                        onClickHandler={() => viewDocument(record)}
                    />
                    <ButtonComponent
                        buttonText={<i className='lnr lnr-download'></i>}
                        variant={'info'}
                        className={'btn bg-info text-white ctm-border-radius'}
                        onClickHandler={() => handleDownload(record)}
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
            status: "Rejected",
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

    const handleDownload = (record) => {
        console.log('handling download', record);
    };

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
                                            data={data}
                                            columns={columns}
                                            tableTitle={'Approved Document History'}
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
