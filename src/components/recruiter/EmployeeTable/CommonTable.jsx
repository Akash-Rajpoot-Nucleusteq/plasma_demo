
import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CommonModal from '../CommonForm/CommonModal'
export default function CommonTable({
    data,
    columns,
    tableTitle,
    rowClickable,
    showActionButton,
    actionButtonText,
    actionButtonLink,
    parentComponentName,
    modalFieldsName,
    modalHeading, 
}) {

    const [selectedRow, setSelectedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleRowClick = (index) => {
        setSelectedRow(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <div className="card ctm-border-radius shadow-sm">
                <div className="card-header">
                    <h4 className="card-title mb-0">{tableTitle}</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>S. N.</th>
                                    {showActionButton && <th>Action</th>}
                                    {columns.map((column) => (
                                        <th key={column.key}>{column.title}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id} onClick={rowClickable ? () => handleRowClick(index) : null}>
                                        <td>{index + 1}</td>
                                        {showActionButton && (
                                            <td>
                                                <span className='btn btn-theme button-1 text-dark ctm-border-radius btn-block mr-1'>
                                                    <Link to={{
                                                        pathname: actionButtonLink,
                                                        state: { employeeData: item }
                                                    }}
                                                        className=" btn-ctm-space text-white ">
                                                        <span className="d-none d-lg-inline ">{actionButtonText}</span>
                                                    </Link>
                                                </span>
                                            </td>
                                        )}
                                        {columns.map((column) => (
                                            <td key={column.key}>{item[column.dataIndex] || '-'}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            < CommonModal
                modalHeading={modalHeading}
                data={data[selectedRow]}
                fieldNames={modalFieldsName}
                handleCloseModal={handleCloseModal}
                showModal={showModal}

            />
        </>
    )
}
