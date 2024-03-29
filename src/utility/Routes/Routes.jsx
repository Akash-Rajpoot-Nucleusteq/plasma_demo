import { RecentOnboarding } from "../../pages/accountManagement/recentOnboarding/RecentOnboarding.jsx";
import Allocation from "../../pages/accountManagement/allocations/Allocation.jsx";
import AvailablePool from "../../pages/accountManagement/availablePool/AvailablePool.jsx";
import Customer from "../../pages/accountManagement/customer/Customer.jsx";
import MyAsset from "../../pages/assets/my-asset/MyAsset.jsx";
import Assignment from "../../pages/assignment/Assignment.jsx";
import Dashboard from "../../pages/dashboard/Dashboard.jsx";
import { TalentDashboard } from "../../pages/dashboard/talentDashboard/TalentDashboard.jsx";
import Document from "../../pages/document/document.jsx";
import Leave from "../../pages/leave/Leave.jsx";
import Timesheet from "../../pages/timesheet/Timesheet.jsx";
import React from "react";
import Onboarding from "../../pages/Recruit/RecentOnboarding/RecentOnboarding.jsx";
import { AssetInventory } from "../../pages/assets/inventory/AssetInventory.jsx";
import EmployeeAsset from "../../pages/assets/employeeAsset/EmployeeAsset.jsx";
import PendingTimesheet from "../../pages/timesheet/pendingTimesheet/PendingTimesheet.jsx";
import ApprovedTimesheet from "../../pages/timesheet/timesheetApproved/ApprovedTimesheet.jsx";
import NewOnboarding from "../../pages/Recruit/NewOnboarding/NewOnboarding.jsx";
import { AddAssets } from "../../pages/assets/add-asset/AddAssets.jsx";
import AssignAsset from "../../pages/assets/assignAsset/AssignAsset.jsx";
import OnboardingApproval from "../../pages/Recruit/OnboardingApproval/OnboardingApproval.jsx";
import ApprovedHistory from "../../pages/Recruit/ApprovalHistory/ApprovedHistory.jsx";
import Revenue from "../../pages/accountManagement/revenue/Revenue.jsx";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../pages/notFound/NotFound.jsx";
import Login from "../../pages/login/Login.jsx";
import ProtectedRoute from "../../components/routing/ProtectedRoute.jsx";
import { getCurrentUserDetails } from "../authentication/auth.js";
import VendorOnboarding from "../../pages/Recruit/vendorOnboarding/vendorOnboarding.jsx";
import Vendors from "../../pages/Recruit/allVendors/Vendors.jsx";
import ManageVendor from "../../pages/Recruit/manageVendor/ManageVendor.jsx";
import ActiveCustomer from "../../pages/accountManagement/customer/active/ActiveCustomer.jsx";
import DocumentHistory from "../../pages/document/documentHistory/DocumentHistory.jsx";
import DocumentApproval from "../../pages/document/documentApproval/DocumentApproval.jsx";
import EditDocument from "../../pages/document/documentEdit/DocumentEdit.jsx";

export const commonRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/asset", element: <MyAsset /> },
  { path: "/leave", element: <Leave /> },
  { path: "/timesheet", element: <Timesheet /> },
  { path: "/assignment", element: <Assignment /> },
  { path: "/document", element: <Document /> },
];

export const roleSpecificRoutes = {
  EMPLOYEE: [],
  MANAGER: [
    { path: "/allocated-asset", element: <EmployeeAsset /> },
    { path: "/pending-timesheet", element: <PendingTimesheet /> },
    { path: "/approved-timesheet", element: <ApprovedTimesheet /> },
  ],
  RECRUITER: [
    { path: "/onboarding", element: <Onboarding /> },
    { path: "/new-onboarding", element: <NewOnboarding /> },
    { path: "/vendor-onboarding", element: <VendorOnboarding /> },
    { path: "/vendors", element: <Vendors /> },
  ],
  RECRUITER_MANAGER: [
    { path: "/talent", element: <TalentDashboard /> },
    { path: "/onboarding", element: <Onboarding /> },
    { path: "/new-onboarding", element: <NewOnboarding /> },
    { path: "/onboarding-approval", element: <OnboardingApproval /> },
    { path: "/approval-history", element: <ApprovedHistory /> },
    { path: "/add-asset", element: <AddAssets /> },
    { path: "/assign-asset", element: <AssignAsset /> },
    { path: "/asset-inventory", element: <AssetInventory /> },
    { path: "/pending-timesheet", element: <PendingTimesheet /> },
    { path: "/approved-timesheet", element: <ApprovedTimesheet /> },
    { path: "/vendor-onboarding", element: <VendorOnboarding /> },
    { path: "/vendors", element: <Vendors /> },
    { path: "/manage-vendor", element: <ManageVendor /> },
    { path: "/document-history", element: <DocumentHistory /> },
    { path: "/document-approval", element: <DocumentApproval /> },
    { path: "/edit-document", element: <EditDocument /> },
  ],
  CLIENT_MANAGER: [
    { path: "/allocated-asset", element: <EmployeeAsset /> },
    { path: "/pool", element: <AvailablePool /> },
    { path: "/customer", element: <Customer /> },
    { path: "/recent-onboarding", element: <RecentOnboarding /> },
    { path: "/allocation", element: <Allocation /> },
    { path: "/pending-timesheet", element: <PendingTimesheet /> },
    { path: "/approved-timesheet", element: <ApprovedTimesheet /> },
    { path: "/revenue", element: <Revenue /> },
    { path: "/client-active", element: <ActiveCustomer /> },
  ],
};

export const getRoutesForRole = (role) => {
  console.log(role + "in getroutes");
  const routesForRole = roleSpecificRoutes[role] || [];
  return [...commonRoutes, ...routesForRole];
};

const role = getCurrentUserDetails()?.role;
console.log(role + " Role in routes");
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    element: <ProtectedRoute />,
    children: getRoutesForRole(role),
  },
]);
