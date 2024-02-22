import React from 'react';
import { getCurrentUserDetails } from '../../authentication/auth';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Sidebar = () => {

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
											<Link to="dashboard" className="text-dark">Home</Link>
										</li>
										<li className="breadcrumb-item d-inline-block active">Password</li>
									</ol>
									<h4 className="text-dark">Password</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</aside>
	);
};
export default Sidebar;