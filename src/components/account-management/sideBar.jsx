import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const handleNavLinkClick = (tab) => { };

  return (
    <aside className='sidebar sidebar-user'>
      <div className='card ctm-border-radius shadow-sm'>
        <div className='card-body py-4'>
          <div className='row'>
            <div className='col-md-12 mr-auto text-left'>
              <div className='custom-search input-group'>
                <div className='custom-breadcrumb'>
                  <ol className='breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2'>
                    <li className='breadcrumb-item d-inline-block'>
                      <Link to='admin' className='text-dark'>
                        Home
                      </Link>
                    </li>
                    <li className='breadcrumb-item d-inline-block active'>
                      Profile
                    </li>
                  </ol>
                  <h4 className='text-dark'>Account Management</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card'>
        <div className='card-body'>
          <div
            className='flex-column list-group'
            id='v-pills-tab'
            role='tablist'
            aria-orientation='vertical'>
            <NavLink
              to='/client/recent-onboarding'
              className='list-group-item text-center button-6'
              activeClassName='active'
              onClick={() => handleNavLinkClick("Recent Onboarding")}>
              Available Pool
            </NavLink>
            <NavLink
              to='/client/customer'
              className='list-group-item text-center button-6'
              activeClassName='active'
              onClick={() => handleNavLinkClick("active")}>
              Customer
            </NavLink>
            <NavLink
              to='/client/allocation'
              className='list-group-item text-center button-6'
              activeClassName='active'
              onClick={() => handleNavLinkClick("Allocations")}>
              Allocations
            </NavLink>
            <NavLink
              to='/client/resource-revenue'
              className='list-group-item text-center button-6'
              activeClassName='active'
              onClick={() => handleNavLinkClick("Resource Revenue")}>
              Resource Revenue
            </NavLink>
            <NavLink
              to='/client/revenue'
              className='list-group-item text-center button-6'
              activeClassName='active'
              onClick={() => handleNavLinkClick("Revenue")}>
              Revenue
            </NavLink>
            <NavLink
              to='/client/forecast'
              className='list-group-item text-center button-6'
              activeClassName='active'
              onClick={() => handleNavLinkClick("ClientReport")}>
              Forcasting
            </NavLink>
            <NavLink
              to='/client/billing'
              className='list-group-item text-center button-6'
              activeClassName='active'
              onClick={() => handleNavLinkClick("Billing")}>
              Billing
            </NavLink>
            <NavLink
              to='/client/reports'
              className='list-group-item text-center button-6'
              activeClassName='active'
              onClick={() => handleNavLinkClick("ClientReport")}>
              Reports
            </NavLink>

          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
