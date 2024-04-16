import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { RecentOnboarding } from "../../pages/accountManagement/recentOnboarding/RecentOnboarding.jsx";
import Allocation from "../../pages/accountManagement/allocations/Allocation.jsx";
import AvailablePool from "../../pages/accountManagement/availablePool/AvailablePool.jsx";
import Customer from "../../pages/accountManagement/customer/Customer.jsx";
import ActiveCustomer from "../../pages/accountManagement/customer/active/ActiveCustomer.jsx";
import AddCustomer from "../../pages/accountManagement/customer/addCustomer/AddCustomer.jsx";
import MyAsset from "../../pages/assets/myAsset/MyAsset.jsx";
import Assignment from "../../pages/assignment/Assignment.jsx";
import Dashboard from "../../pages/dashboard/Dashboard.jsx";
import { TalentDashboard } from "../../pages/dashboard/talentDashboard/TalentDashboard.jsx";
import Document from "../../pages/document/document.jsx";

import DocumentApproval from "../../pages/document/documentApproval/DocumentApproval.jsx";
import DocumentHistory from "../../pages/document/documentHistory/DocumentHistory.jsx";
import EditDocument from "../../pages/document/editDocument/editDocument.jsx";

import Leave from "../../pages/leave/Leave.jsx";
import Timesheet from "../../pages/timesheet/Timesheet.jsx";
import Onboarding from "../../pages/recruit/recentOnboarding/RecentOnboarding.jsx";
import { AssetInventory } from "../../pages/assets/inventory/AssetInventory.jsx";
import EmployeeAsset from "../../pages/assets/employeeAsset/EmployeeAsset.jsx";
import PendingTimesheet from "../../pages/timesheet/pendingTimesheet/PendingTimesheet.jsx";
import ApprovedTimesheet from "../../pages/timesheet/timesheetApproved/ApprovedTimesheet.jsx";
import NewOnboarding from "../../pages/recruit/newOnboarding/NewOnboarding.jsx";
import { AddAssets } from "../../pages/assets/addAsset/AddAssets.jsx";

import AssignAsset from "../../pages/assets/assignAsset/AssignAsset.jsx";
import AssignAssetTable from "../../pages/assets/assignAsset/AssignAssetTable.jsx";
import OnboardingApproval from "../../pages/recruit/OnboardingApproval/OnboardingApproval.jsx";
import OnboardingApprovalForm from "../../pages/recruit/onboardingApprovalForm/OnboardingApprovalForm.jsx";
import ApprovedHistory from "../../pages/recruit/ApprovalHistory/ApprovedHistory.jsx";
import Revenue from "../../pages/accountManagement/revenue/Revenue.jsx";
import NotFound from "../../pages/notFound/NotFound.jsx";
import Login from "../../pages/login/Login.jsx";
import { getCurrentUserDetails, isLoggedIn } from "../authentication/auth.js";
import {
  CLIENT_MANAGER,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
} from "../../assets/common/constants.js";
import EmployeeTimesheet from "../../pages/accountManagement/employeeTimesheet/EmployeeTimesheet.jsx";
import CalendarPage from "../../pages/calendar/index.jsx";
import Employment from "../../pages/profile/employement/Employment.jsx";
import Details from "../../pages/profile/details/Details.jsx";
import ForgotPassword from "../../pages/forgotPassword/ForgotPassword.jsx";

import NewVendorOnboarding from "../../pages/recruit/newVendorOnboarding/NewVendorOnboarding.jsx";
import NewVendorOnboardingApproval from "../../pages/recruit/newVendorOnboardingApproval/NewVendorOnboardingApproval.jsx";
import NewVendorOnboardingApprovalForm from "../../pages/recruit/newVendorOnboardingApprovalForm/NewVendorOnboardingAprovalForm.jsx";
import ManageVendor from "../../pages/recruit/manageVendor/ManageVendor.jsx";
import VendorResources from "../../pages/recruit/vendorResources/VendorResources.jsx";
import AddVendorResource from "../../pages/recruit/addVendorResource/AddVendorResource.jsx";
import PastAssignment from "../../pages/assignment/pastAssignment/PastAssignment.jsx";
import FutureAssignment from "../../pages/assignment/futureAssignment/FutureAssignment.jsx";

const role = getCurrentUserDetails()?.role;
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    errorElement: <NotFound />,
  },

  ...(isLoggedIn()
    ? [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/asset",
          element: <MyAsset />,
        },
        {
          path: "/leave",
          element: <Leave />,
        },
        {
          path: "/timesheet",
          element: <Timesheet />,
        },
        {
          path: "/assignment",
          element: <Assignment />,
        },
        {
          path: "/past-assignment",
          element: <PastAssignment />,
        },
        {
          path: "/future-assignment",
          element: <FutureAssignment />,
        },
        {
          path: "/document",
          element: <Document />,
        },
        {
          path: "/edit-document",
          element: <EditDocument />,
        },
        {
          path: "/profile/employment",
          element: <Employment />,
        },
        {
          path: "/profile/details",
          element: <Details />,
        },
      ]
    : []),

  ...(role === MANAGER
    ? [
        {
          path: "/allocated-asset",
          element: <EmployeeAsset />,
        },
        {
          path: "/pending-timesheet",
          element: <PendingTimesheet />,
        },
        {
          path: "/approved-timesheet",
          element: <ApprovedTimesheet />,
        },
      ]
    : []),

  ...(role === RECRUITER
    ? [
        {
          path: "/onboarding",
          element: <Onboarding />,
        },
        {
          path: "/new-onboarding",
          element: <NewOnboarding />,
        },
        {
          path: "/new-vendor-onboarding",
          element: <NewVendorOnboarding />,
        },
      ]
    : []),

  ...(role === RECRUITER_MANAGER
    ? [
        {
          path: "/talent",
          element: <TalentDashboard />,
        },
        {
          path: "/onboarding",
          element: <Onboarding />,
        },
        {
          path: "/new-onboarding",
          element: <NewOnboarding />,
        },
        {
          path: "/onboarding-approval",
          element: <OnboardingApproval />,
        },
        {
          path: "/onboarding-approval-form",
          element: <OnboardingApprovalForm />,
        },
        {
          path: "/approval-history",
          element: <ApprovedHistory />,
        },
        {
          path: "/add-asset",
          element: <AddAssets />,
        },
        {
          path: "/assign-asset-table",
          element: <AssignAssetTable />,
        },
        {
          path: "/assign-asset",
          element: <AssignAsset />,
        },
        {
          path: "/asset-inventory",
          element: <AssetInventory />,
        },
        {
          path: "/pending-timesheet",
          element: <PendingTimesheet />,
        },
        {
          path: "/approved-timesheet",
          element: <ApprovedTimesheet />,
        },
        {
          path: "/edit-document",
          element: <EditDocument />,
        },
        {
          path: "/document-approval-history",
          element: <DocumentHistory />,
        },
        {
          path: "/document-approval",
          element: <DocumentApproval />,
        },
        {
          path: "/new-vendor-onboarding",
          element: <NewVendorOnboarding />,
        },
        {
          path: "/new-vendor-onboarding-approval",
          element: <NewVendorOnboardingApproval />,
        },
        {
          path: "/new-vendor-onboarding-approval-form",
          element: <NewVendorOnboardingApprovalForm />,
        },
        {
          path: "/manage-vendor",
          element: <ManageVendor />,
        },
        {
          path: "/add-vendor-resource",
          element: <AddVendorResource />,
        },
        {
          path: "/vendor-resources",
          element: <VendorResources />,
        },
      ]
    : []),

  ...(role === CLIENT_MANAGER
    ? [
        {
          path: "/allocated-asset",
          element: <EmployeeAsset />,
        },
        {
          path: "/pending-timesheet",
          element: <PendingTimesheet />,
        },
        {
          path: "/approved-timesheet",
          element: <ApprovedTimesheet />,
        },
        {
          path: "/pool",
          element: <AvailablePool />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
        {
          path: "/client-active",
          element: <ActiveCustomer />,
        },
        {
          path: "/customer-add",
          element: <AddCustomer />,
        },
        {
          path: "/recent-onboarding",
          element: <RecentOnboarding />,
        },
        {
          path: "/allocation",
          element: <Allocation />,
        },
        {
          path: "/revenue",
          element: <Revenue />,
        },
        {
          path: "/client-employee-timesheet",
          element: <EmployeeTimesheet />,
        },
        {
          path: "/forecast",
          element: <CalendarPage />,
        },
      ]
    : []),
]);
