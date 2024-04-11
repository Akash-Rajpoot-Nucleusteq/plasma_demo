
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCurrentUserDetails } from '../../authentication/auth';
import { CLIENT_MANAGER, EMPLOYEE, MANAGER, RECRUITER, RECRUITER_MANAGER } from '../../assets/common/roles';
const Sidebar = () => {

	const userDetails = getCurrentUserDetails();
	const assetData = {
		assetType: 'Laptop',
		assetOs: 'Windows',
		assetId: 'L1234EEf',
		assetProvidedBy: 'NucleusTeq'
	}

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
											<Link to="dashboard" className="text-dark">Home</Link>
										</li>
										<li className="breadcrumb-item d-inline-block active">Asset</li>
									</ol>
									<h4 className="text-dark">Assets</h4>
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
							<NavLink to="/employee/assets/my-assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
						</>
					)}

					{userDetails.role === MANAGER && (
						<>
							<NavLink to="/manager/assets/my-assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
							<NavLink to="/manager/assets/employee-assets" className="list-group-item text-center button-6" activeClassName="active">
								Employee Asset
							</NavLink>
						</>
					)}

					{userDetails.role === RECRUITER && (
						<>
							<NavLink to="/recruiter/assets/my-assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
							<NavLink to="/recruiter/assets/employee-assets" className="list-group-item text-center button-6" activeClassName="active">
								Employee Asset
							</NavLink>
							<NavLink
								to={{
									pathname: "/recruiter/assign-assets",
									state: { assetData: assetData }
								}}
								className="list-group-item text-center button-6"
								activeClassName="active"
							>
								Assign Asset
							</NavLink>
							<NavLink
								to='/recruiter/assets/add'
								className='list-group-item text-center button-6'
								activeClassName='active'>
								Add Assets
							</NavLink>
							<NavLink
								to='/recruiter/assets/inventory'
								className='list-group-item text-center button-6'
								activeClassName='active'>
								Inventory
							</NavLink>
						</>
					)}

					{userDetails.role === RECRUITER_MANAGER && (
						<>
							<NavLink to="/recruiter-manager/assets/my-assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
							<NavLink to="/recruiter-manager/assets/employee-assets" className="list-group-item text-center button-6" activeClassName="active">
								Employee Asset
							</NavLink>
							<NavLink
								to={{
									pathname: "/recruiter-manager/assign-assets",
									state: { assetData: assetData }
								}}
								className="list-group-item text-center button-6"
								activeClassName="active"
							>
								Assign Asset
							</NavLink>
							<NavLink
								to='/recruiter-manager/assets/add'
								className='list-group-item text-center button-6'
								activeClassName='active'>
								Add Assets
							</NavLink>
							<NavLink
								to='/recruiter-manager/assets/inventory'
								className='list-group-item text-center button-6'
								activeClassName='active'>
								Inventory
							</NavLink>
						</>
					)}

					{userDetails.role === CLIENT_MANAGER && (
						<>
							<NavLink to="/client/assets/my-assets" className="list-group-item text-center button-6" activeClassName="active">
								My Asset
							</NavLink>
							<NavLink to="/client/assets/employee-assets" className="list-group-item text-center button-6" activeClassName="active">
								Employee Asset
							</NavLink>
						</>
					)}



				</div>
			</div>
		</aside >
	);
};
export default Sidebar;