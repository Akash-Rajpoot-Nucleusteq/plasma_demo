import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Krishna from '../../../assets/images/Krishna.png'
import moment from 'moment';

export default function Sidebar() {
    const [employeeData, seetEmployeeData] = useState({
        profilePhoto: Krishna,
        employeeName: 'Krishna',
        employeeId: 'N0006',
        designation: 'Engineer',
    });
    const formattedDate = moment().format("dddd, MMMM D, YYYY");

    return (
        <aside className='sidebar sidebar-user'>
            {/* Links */}
            <div className='card ctm-border-radius shadow-sm'>
                <div className='card-body py-4'>
                    <div className='row'>
                        <div className='col-md-12 mr-auto text-left'>
                            <div className='custom-search input-group'>
                                <div className='custom-breadcrumb'>
                                    <ol className='breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2'>
                                        <li className='breadcrumb-item d-inline-block'>
                                            <Link to='/dashboard' className='text-dark'>
                                                Home
                                            </Link>
                                        </li>
                                        <li className='breadcrumb-item d-inline-block active'>
                                            {'Other'}
                                        </li>
                                    </ol>
                                    <h4 className='text-dark'>{'Other'}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='user-card card shadow-sm bg-white text-center ctm-border-radius'>
                <div className='user-info card-body'>
                    <div className='user-avatar mb-4'>
                        <img
                            src={employeeData.profilePhoto}
                            alt='User Avatar'
                            className='img-fluid rounded-circle'
                            width='100'
                        />
                    </div>
                    <div className='user-details'>
                        <h4>
                            <b>{employeeData.employeeName}</b>
                        </h4>
                        <p>Employee Id - {employeeData.employeeId}</p>
                        <p>{employeeData.designation}</p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </div>

        </aside >
    )
}
