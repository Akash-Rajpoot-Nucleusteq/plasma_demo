
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LeaveCircleComponent from '../../components/LeaveCircleComponent';
import HolidayListComponent from '../../components/HolidayListComponent';

const Sidebar = ({ url, employeeRole, employeeName, profilePhoto, employeeId }) => {
	const today = new Date();
	const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(today);

	const totalSickLeave = 7;
	const sickLeavesConsumed = 2;
	const sickLeavesRemaining = totalSickLeave - sickLeavesConsumed;

	return (

		<aside className="sidebar sidebar-user">
			<div className="card ctm-border-radius shadow-sm">
				<div className="card-body py-4">
					<div className="row">
						<div className="col-md-12 mr-auto text-left">
							<div className="custom-search input-group">
								<div className="custom-breadcrumb">
									<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
										<li className="breadcrumb-item d-inline-block"><Link to="dashboard" className="text-dark">Home</Link></li>
										<li className="breadcrumb-item d-inline-block active">Dashboard</li>
									</ol>
									<h4 className="text-dark">Dashboard</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="user-card card shadow-sm bg-white text-center ctm-border-radius">
				<div className="user-info card-body">
					<div className="user-avatar mb-4">
						<img src={profilePhoto} alt="User Avatar" className="img-fluid rounded-circle" width="100" />
					</div>
					<div className="user-details">
						<h4><b>Welcome {employeeName}</b></h4>
						<p>Employee Id - {employeeId}</p>
						<p>{formattedDate}</p>
					</div>
				</div>
			</div>


			<div className="card shadow-sm">
				<div className="card-header">
					<h4 className="card-title mb-0 d-inline-block">Today's Quote</h4>
				</div>
				<div className="card-body text-center">
					<h6>Time is the best teacher.</h6>
				</div>
			</div>

			<LeaveCircleComponent
				title={"Sick Leave"}
				totalLeave={totalSickLeave}
				leavesConsumed={sickLeavesConsumed}
				leavesRemaining={sickLeavesRemaining}
			/>

			<HolidayListComponent />

		</aside>
	);
};

export default Sidebar;