import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  CLIENT_MANAGER,
  EMPLOYEE,
  HEADER_DOCUMENT,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
} from "../../assets/common/constants";
import {
  HEADER_ACCOUNT,
  HEADER_ASSET,
  HEADER_ASSIGNMENT,
  HEADER_DASHBOARD,
  HEADER_LEAVE,
  HEADER_PROFILE,
  HEADER_RECRUITER,
  HEADER_TIMESHEET,
} from "../../assets/common/constants";
import UserDetailsCard from "../uiElements/UserDetailsCard";
import QuoteComponent from "../dashboard/QuoteComponent";
import HolidayListComponent from "../holiday/HolidayListComponent";
import LeaveCircleComponent from "../leave/LeaveCircleComponent";

export default function SideBar({ headerName, userRole, currentPageName }) {
  const totalSickLeave = 7;
  const sickLeavesConsumed = 2;
  const sickLeavesRemaining = totalSickLeave - sickLeavesConsumed;

  const totalPaidLeave = 18;
  const leavesAddedAfterMonth = 1.5;
  const totalPaidLeaveAfterMonth = totalPaidLeave + leavesAddedAfterMonth;
  const consumedPaidLeave = 2;
  const remainingPaidLeave = totalPaidLeaveAfterMonth - consumedPaidLeave;

  const assetData = {
    assetType: "Laptop",
    assetOs: "Windows",
    assetId: "L1234EEf",
    assetProvidedBy: "NucleusTeq",
  };

  const employeeNav = {
    timesheet: [{ title: "My Timesheet", pageLink: "/timesheet" }],
    assets: [{ title: "My Asset", pageLink: "/asset" }],
    assignment: [
      { title: "Current Assignment", pageLink: "/assignment" },
      { title: "Past Assignment", pageLink: "/past-assignment" },
      { title: "Future Assignment", pageLink: "/future-assignment" },
    ],
    profile: [
      { title: "Employment", pageLink: "/employment" },
      { title: "Detail", pageLink: "/details" },
    ],
  };

  const managerNav = {
    timesheet: [
      { title: "My Timesheet", pageLink: "/timesheet" },
      {
        title: "Pending Timesheet",
        pageLink: "/pending-timesheet",
      },
      { title: "Approved Timesheet", pageLink: "/approved-timesheet" },
    ],
    assets: [
      { title: "My Asset", pageLink: "/asset" },
      { title: "Employee Asset", pageLink: "/allocated-asset" },
    ],
    assignment: [
      { title: "Current Assignment", pageLink: "/assignment" },
      { title: "Past Assignment", pageLink: "/past-assignment" },
      { title: "Future Assignment", pageLink: "/future-assignment" },
    ],
    profile: [
      { title: "Employment", pageLink: "/employment" },
      { title: "Detail", pageLink: "/details" },
    ],
  };

  const recruiterNav = {
    timesheet: [{ title: "My Timesheet", pageLink: "/timesheet" }],
    assets: [{ title: "My Asset", pageLink: "/asset" }],
    assignment: [
      { title: "Current Assignment", pageLink: "/assignment" },
      { title: "Past Assignment", pageLink: "/past-assignment" },
      { title: "Future Assignment", pageLink: "/future-assignment" },
    ],
    recruiter: [
      { title: "Recent Onboarding", pageLink: "/onboarding" },
      {
        title: "New Employee Onboarding",
        pageLink: "/new-onboarding",
      },
      {
        title: "New Vendor Onboarding",
        pageLink: "/vendor-onboarding",
      },
      {
        title: "Vendors",
        pageLink: "/vendors",
      },
    ],
    profile: [
      { title: "Employment", pageLink: "/recruiter/employment" },
      { title: "Detail", pageLink: "/recruiter/details" },
    ],
  };

  const recruiterManagerNav = {
    timesheet: [
      { title: "My Timesheet", pageLink: "/timesheet" },
      {
        title: "Pending Timesheet",
        pageLink: "/pending-timesheet",
      },
      {
        title: "Approved Timesheet",
        pageLink: "/approved-timesheet",
      },
    ],
    assets: [
      { title: "My Asset", pageLink: "/asset" },
      { title: "Add Asset", pageLink: "/add-asset" },
      { title: "Inventory", pageLink: "/asset-inventory" },

      {
        title: "Assign Asset",
        pageLink: {
          pathname: "/assign-asset",
          state: { assetData: assetData },
        },
      },
    ],
    assignment: [
      { title: "Current Assignment", pageLink: "/assignment" },
      { title: "Past Assignment", pageLink: "/past-assignment" },
      { title: "Future Assignment", pageLink: "/future-assignment" },
    ],
    recruiter: [
      {
        title: "Recent Onboarding",
        pageLink: "/onboarding",
      },
      {
        title: "New Employee Onboarding",
        pageLink: "/new-onboarding",
      },
      {
        title: "Onboarding Approval",
        pageLink: "/onboarding-approval",
      },
      {
        title: "Approval History",
        pageLink: "/approval-history",
      },
      {
        title: "New Vendor Onboarding",
        pageLink: "/vendor-onboarding",
      },
      {
        title: "Vendors",
        pageLink: "/vendors",
      },
      {
        title: "Manage Vendor",
        pageLink: "/manage-vendor",
      },
      {
        title: "Approve Vendor",
        pageLink: "/vendor-approval",
      },
      {
        title: "Vendor Resources",
        pageLink: "/vendor-approval",
      },
    ],
    profile: [
      { title: "Employment", pageLink: "/employment" },
      { title: "Detail", pageLink: "/details" },
    ],
    document: [
      { title: "My Document", pageLink: "/document" },
      { title: "Document Approval", pageLink: "/document-approval" },
      { title: "Approval History", pageLink: "/document-history" },
    ],
  };

  const clientManagerNav = {
    timesheet: [
      { title: "My Timesheet", pageLink: "/timesheet" },
      {
        title: "Pending Timesheet",
        pageLink: "/pending-timesheet",
      },
      {
        title: "Approved Timesheet",
        pageLink: "/approved-timesheet",
      },
    ],
    assets: [
      { title: "My Asset", pageLink: "/asset" },
      { title: "Employee Asset", pageLink: "/allocated-asset" },
    ],
    assignment: [
      { title: "Current Assignment", pageLink: "/assignment" },
      { title: "Past Assignment", pageLink: "/past-assignment" },
      { title: "Future Assignment", pageLink: "/future-assignment" },
    ],
    account: [
      { title: "Available Pool", pageLink: "/recent-onboarding" },
      { title: "Customer", pageLink: "/customer" },
      { title: "Allocations", pageLink: "/allocation" },
      { title: "Revenue", pageLink: "/revenue" },
      { title: "Resource Revenue", pageLink: "/resource-revenue" },
      { title: "Forecasting", pageLink: "/client/forecast" },
      // { title: 'Billing', pageLink: '/client/billing' },
      // { title: 'Report', pageLink: '/client/reports' },
    ],
    profile: [
      { title: "Employment", pageLink: "/client/employment" },
      { title: "Detail", pageLink: "/client/details" },
    ],
  };

  // Define navigation data for each user role
  const navigationData = {
    [MANAGER]: {
      [HEADER_ASSET]: managerNav.assets,
      [HEADER_TIMESHEET]: managerNav.timesheet,
      [HEADER_ASSIGNMENT]: managerNav.assignment,
      [HEADER_PROFILE]: managerNav.profile,
    },
    [EMPLOYEE]: {
      [HEADER_ASSET]: employeeNav.assets,
      [HEADER_TIMESHEET]: employeeNav.timesheet,
      [HEADER_ASSIGNMENT]: employeeNav.assignment,
      [HEADER_PROFILE]: employeeNav.profile,
    },
    [RECRUITER]: {
      [HEADER_ASSET]: recruiterNav.assets,
      [HEADER_TIMESHEET]: recruiterNav.timesheet,
      [HEADER_ASSIGNMENT]: recruiterNav.assignment,
      [HEADER_PROFILE]: recruiterNav.profile,
      [HEADER_RECRUITER]: recruiterNav.recruiter,
    },
    [RECRUITER_MANAGER]: {
      [HEADER_ASSET]: recruiterManagerNav.assets,
      [HEADER_TIMESHEET]: recruiterManagerNav.timesheet,
      [HEADER_ASSIGNMENT]: recruiterManagerNav.assignment,
      [HEADER_RECRUITER]: recruiterManagerNav.recruiter,
      [HEADER_PROFILE]: recruiterManagerNav.profile,
      [HEADER_DOCUMENT]: recruiterManagerNav.document,
    },
    [CLIENT_MANAGER]: {
      [HEADER_ASSET]: clientManagerNav.assets,
      [HEADER_TIMESHEET]: clientManagerNav.timesheet,
      [HEADER_ASSIGNMENT]: clientManagerNav.assignment,
      [HEADER_ACCOUNT]: clientManagerNav.account,
      [HEADER_PROFILE]: clientManagerNav.profile,
    },
  };

  const navData = navigationData[userRole]
    ? navigationData[userRole][headerName]
      ? navigationData[userRole][headerName]
      : []
    : [];

  return (
    <>
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
                        <Link to='dashboard' className='text-dark'>
                          Home
                        </Link>
                      </li>
                      <li className='breadcrumb-item d-inline-block active'>
                        {currentPageName}
                      </li>
                    </ol>
                    <h4 className='text-dark'>{currentPageName}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {(headerName === HEADER_DASHBOARD || headerName === HEADER_PROFILE) && (
          <UserDetailsCard userRole={userRole} />
        )}

        {headerName === HEADER_DASHBOARD && <QuoteComponent />}

        {/* Sidebar links */}
        {navData.length !== 0 && (
          <div className='quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card'>
            <div className='card-body'>
              {navData.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.pageLink}
                  className='list-group-item text-center button-6'
                  activeClassName='active'
                  exact>
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        )}

        {/*Paid Leave Circles */}
        {headerName === HEADER_LEAVE && (
          <LeaveCircleComponent
            title={"Paid Leave Details"}
            leavesConsumed={consumedPaidLeave}
            leavesRemaining={remainingPaidLeave}
            totalLeave={totalPaidLeave}
            additionalInfo={`Added After a Month: +${leavesAddedAfterMonth} days`}
          />
        )}

        {/*Sick Leave circle */}
        {(headerName === HEADER_DASHBOARD || headerName === HEADER_LEAVE) && (
          <LeaveCircleComponent
            title={"Sick Leave Details"}
            totalLeave={totalSickLeave}
            leavesConsumed={sickLeavesConsumed}
            leavesRemaining={sickLeavesRemaining}
          />
        )}

        {/* holiday list */}
        {headerName === HEADER_DASHBOARD && <HolidayListComponent />}
      </aside>
    </>
  );
}
