import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCurrentUserDetails } from '../../authentication/auth';
import { CLIENT_MANAGER, EMPLOYEE, MANAGER, RECRUITER, RECRUITER_MANAGER } from '../../assets/common/roles';

const TimesheetSidebar = () => {
    const userDetails = getCurrentUserDetails();

    return (
        <aside className="sidebar sidebar-user">
            <div className="card ctm-border-radius shadow-sm">
                <div className="card-body py-4">
                    <div className="row">
                        <div className="col-md-12 mr-auto text-left">
                            <div className="custom-search input-group">
                                <div className="custom-breadcrumb">
                                    <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                        <li className="breadcrumb-item d-inline-block">
                                            <Link to="admin" className="text-dark">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item d-inline-block active">Timesheet</li>
                                    </ol>
                                    <h4 className="text-dark">Timesheet</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                <div className="card-body">
                    {userDetails.role === EMPLOYEE && (
                        <>
                            <NavLink exact to="/employee/timesheet" className="list-group-item text-center button-6" activeClassName="active">
                                My Timesheet
                            </NavLink>
                        </>
                    )}

                    {userDetails.role === MANAGER && (
                        <>
                            <NavLink exact to="/manager/timesheet" className="list-group-item text-center button-6" activeClassName="active">
                                My Timesheet
                            </NavLink>
                            <NavLink to="/manager/timesheet/pending" className="list-group-item text-center button-6" activeClassName="active">
                                Pending Timesheet
                            </NavLink>
                            <NavLink to="/manager/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
                                Approved Timesheet
                            </NavLink>
                        </>
                    )}

                    {userDetails.role === RECRUITER && (
                        <>
                            <NavLink exact to="/recruiter/timesheet" className="list-group-item text-center button-6" activeClassName="active">
                                My Timesheet
                            </NavLink>
                        </>
                    )}

                    {userDetails.role === RECRUITER_MANAGER && (
                        <>
                            <NavLink exact to="/recruiter-manager/timesheet" className="list-group-item text-center button-6" activeClassName="active">
                                My Timesheet
                            </NavLink>
                            <NavLink to="/recruiter-manager/timesheet/pending" className="list-group-item text-center button-6" activeClassName="active">
                                Pending Timesheet
                            </NavLink>
                            <NavLink to="/recruiter-manager/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
                                Approved Timesheet
                            </NavLink>
                        </>
                    )}

                    {userDetails.role === CLIENT_MANAGER && (
                        <>
                            <NavLink exact to="/client/timesheet" className="list-group-item text-center button-6" activeClassName="active">
                                My Timesheet
                            </NavLink>
                            <NavLink to="/client/timesheet/pending" className="list-group-item text-center button-6" activeClassName="active">
                                Pending Timesheet
                            </NavLink>
                            <NavLink to="/client/timesheet/approved" className="list-group-item text-center button-6" activeClassName="active">
                                Approved Timesheet
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default TimesheetSidebar;
