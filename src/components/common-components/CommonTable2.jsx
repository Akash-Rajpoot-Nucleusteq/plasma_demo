// import React, { useState } from 'react';
// import { Table, Modal, Button, Form, Row, Col } from 'antd';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import CommonModal from '../recruiter/CommonForm/CommonModal'

// const CommonTable2 = ({
//     data, 
//     columns,
//     tableTitle,
//     rowClickable,
//     modalFieldsName,
//     modalHeading,
// }) => {
//     const [selectedRow, setSelectedRow] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const handleRowClick = (index) => {
//         setSelectedRow(index);
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <>
//             <div className="card ctm-border-radius shadow-sm">
//                 <div className="card-header">
//                     <h4 className="card-title mb-0">{tableTitle}</h4>
//                 </div>
//                 <div className="card-body">
//                     <div className="table-responsive">
//                         <Table
//                             dataSource={data}
//                             columns={columns}
//                             rowKey={(record) => record.id}
//                             onRow={(record, index) => ({
//                                 onClick: () => (rowClickable ? handleRowClick(index) : null),
//                             })}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <CommonModal
//                 data={data[selectedRow]}
//                 modalHeading={modalHeading}
//                 fieldNames={modalFieldsName}
//                 showModal={showModal}
//                 handleCloseModal={handleCloseModal}
//             />
//         </>
//     );
// };

// export default CommonTable2;


import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import CommonModal from './../recruiter/CommonForm/CommonModal'

const CommonTable2 = ({
    data,
    columns,
    tableTitle,
    rowClickable,
    modalFieldsName,
    modalHeading,
    // showActionButton,
    // actionButtonText,
    // actionButtonLink,
}) => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleRowClick = (index) => {
        setSelectedRow(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Add action button column to the columns array
    // if (showActionButton) {
    //     columns.push({
    //         title: 'Action',
    //         key: 'action',
    //         render: (_, record) => (
    //             <Button type="primary">
    //                 <Link to={{
    //                     pathname: actionButtonLink,
    //                     state: { employeeData: record }
    //                 }}>
    //                     {actionButtonText}
    //                 </Link>
    //             </Button>
    //         ),
    //     });
    // }

    return (
        <>
            <div className="card ctm-border-radius shadow-sm">
                <div className="card-header">
                    <h4 className="card-title mb-0">{tableTitle}</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <Table
                            className="table-striped"
                            dataSource={data}
                            columns={columns}
                            rowKey={(record) => record.id}
                            onRow={(record, index) => ({
                                onClick: () => (rowClickable ? handleRowClick(index) : null),
                            })}
                            pagination={false}
                        />
                    </div>
                </div>
            </div>
            <CommonModal
                data={data[selectedRow]}
                modalHeading={modalHeading}
                fieldNames={modalFieldsName}
                showModal={showModal}
                handleCloseModal={handleCloseModal}
            />
        </>
    );
};

export default CommonTable2;
