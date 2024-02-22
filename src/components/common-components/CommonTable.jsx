import React from 'react'

export default function CommonTable({ data, columns, tableTitle, showSN }) {

    data.forEach((row) => {
        if (!row.hasOwnProperty('total')) {
            return;
        }

        row.total = Object.values(row)
            .filter(value => typeof value === 'number')
            .reduce((sum, value) => sum + value, 0);
    });

    const stickyCellStyle = {
        position: 'sticky',
        right: 0,
        backgroundColor: '#fff',
        zIndex: 0
    };

    return (
        <div className="card ctm-border-radius shadow-sm">
            <div className="card-header">
                <h4 className="card-title mb-0">{tableTitle}</h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">

                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                {showSN && <th>S. N.</th>}
                                {columns.map((column, index) => (
                                    // <th key={column.key}>{column.title}</th>
                                    <th key={column.key} style={column.title === 'Total' ? stickyCellStyle : {}}>
                                        {column.title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    {showSN && <td>{index + 1}</td>}
                                    {columns.map((column) => (
                                        <td key={column.key} style={column.title === 'Total' ? stickyCellStyle : {}}>
                                            {column.dataIndex === 'fullName'
                                                ? `${item.firstName} ${item.lastName}`
                                                : item[column.dataIndex] || '-'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {data.length === 0 &&
                        <div className="d-flex justify-content-center align-items-center" >
                            No Data
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}


// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import EmployeeDataModal from '../recruiter/CommonForm/EmployeeDataModal';

// export default function CommonTable({ data, columns, tableTitle, showSN, rowClickable, tabPageName }) {
//     //from other component
//     const [selectedRow, setSelectedRow] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [totalCalculated, setTotalCalculated] = useState(false);

//     let count = 0;
//     data.forEach((row) => {
//         if (!row.hasOwnProperty('total')) {
//             return;
//         }
//         console.log(count++);
//         row.total = Object.values(row)
//             .filter(value => typeof value === 'number')
//             .reduce((sum, value) => sum + value, 0);
//     });

//     const handleRowClick = (index) => {
//         setSelectedRow(index);
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };
//     //from other component

//     const stickyCellStyle = {
//         position: 'sticky',
//         right: 0,
//         backgroundColor: '#fff',
//         zIndex: 0
//     };

//     return (
//         <>
//             <div className="card ctm-border-radius shadow-sm">
//                 <div className="card-header">
//                     <h4 className="card-title mb-0">{tableTitle}</h4>
//                 </div>
//                 <div className="card-body">
//                     <div className="table-responsive">
//                         <table className="table table-hover table-striped">
//                             <thead>
//                                 <tr>
//                                     {showSN && <th>S. N.</th>}
//                                     {tabPageName && tabPageName === 'onboardingApproval' && <th>Action</th>}
//                                     {columns.map((column, index) => (
//                                         <th key={column.key} style={column.title === 'Total' ? stickyCellStyle : {}}>
//                                             {column.title}
//                                         </th>
//                                     ))}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.map((item, index) => (
//                                     <tr key={item.id} onClick={rowClickable ? () => handleRowClick(index) : null}>
//                                         {showSN && <td>{index + 1}</td>}
//                                         {tabPageName && tabPageName === 'onboardingApproval' && (
//                                             <td>
//                                                 <span className='btn btn-theme button-1 text-dark ctm-border-radius btn-block mr-1'>
//                                                     <Link to={{
//                                                         pathname: "onboarding-approval-form",
//                                                         state: { employeeData: item }
//                                                     }}
//                                                         className=" btn-ctm-space text-white ">
//                                                         <span className="d-none d-lg-inline ">Approve/Reject</span>
//                                                     </Link>
//                                                 </span>
//                                             </td>
//                                         )}
//                                         {columns.map((column) => (
//                                             <td key={column.key} style={column.title === 'Total' ? stickyCellStyle : {}}>
//                                                 {column.dataIndex === 'fullName'
//                                                     ? `${item.firstName} ${item.lastName}`
//                                                     : item[column.dataIndex] || '-'}
//                                             </td>
//                                         ))}
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <EmployeeDataModal data={data[selectedRow]} showModal={showModal} handleCloseModal={handleCloseModal} />
//         </>
//     )
// }
