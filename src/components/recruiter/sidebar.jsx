import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';

export default class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storedData: JSON.parse(localStorage.getItem('data')) || {},
        }
    }

    render() {
        return (
            <>
                <div className="card ctm-border-radius shadow-sm">
                    <div className="card-body py-4">
                        <div className="row">
                            <div className="col-md-12 mr-auto text-left">
                                <div className="custom-search input-group">
                                    <div className="custom-breadcrumb">
                                        <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                            <li className="breadcrumb-item d-inline-block"><Link to="employee-dashboard" className="text-dark">Home</Link></li>
                                            <li className="breadcrumb-item d-inline-block active">Recruiter</li>
                                        </ol>
                                        <h4 className="text-dark">Recruiter</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                    <div className="card-body">
                        {
                            this.state.storedData.role === 'Recruiter' && (
                                <div className="flex-column list-group" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <NavLink to="/recruiter/recent-onboarding" className="list-group-item text-center button-6" activeClassName="active">Recent Onboarding</NavLink>
                                    <NavLink to="/recruiter/new-onboarding" className="list-group-item text-center button-6">New Employee Onboarding</NavLink>
                                    <NavLink to="/recruiter/new-vendor-onboarding" className="list-group-item text-center button-6">New Vendor Onboarding</NavLink>
                                </div>
                            )
                        }
                        {
                            this.state.storedData.role === 'Recruiter Manager' && (
                                <div className="flex-column list-group" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <NavLink to="/recruiter-manager/recent-onboarding" className="list-group-item text-center button-6" activeClassName="active">Recent Onboarding</NavLink>
                                    <NavLink to="/recruiter-manager/new-onboarding" className="list-group-item text-center button-6">New Employee Onboarding</NavLink>
                                    <NavLink to="/recruiter-manager/onboarding-approval"
                                        className={`list-group-item text-center button-6 ${location.pathname === '/recruiter-manager/onboarding-approval-form' ? 'active' : ''}`}
                                    >Onboarding Approval</NavLink>
                                    <NavLink to="/recruiter-manager/approval-history" className="list-group-item text-center button-6">Approval History</NavLink>
                                    <NavLink to="/recruiter-manager/new-vendor-onboarding" className="list-group-item text-center button-6">New Vendor Onboarding</NavLink>
                                    <NavLink to="/recruiter-manager/new-vendor-onboarding-approval" className={`list-group-item text-center button-6 ${location.pathname === '/recruiter-manager/new-vendor-onboarding-approval-form' ? 'active' : ''}`}>
                                        Vendor Onboarding Approval</NavLink>
                                    <NavLink to="/recruiter-manager/vendor-onboarding-history" className="list-group-item text-center button-6">Vendor Onboarding History</NavLink>
                                </div>
                            )
                        }

                    </div>
                </div>
            </>
        )
    }
}
