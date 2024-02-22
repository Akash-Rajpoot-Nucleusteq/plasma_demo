import React from "react";
import config from "config";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import progress from "../src/assets/images/progress.gif";
import Header from "./components/header/index";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpassword/index";
import ChangePassword from "./components/change-password/index";

import Assignment from "./components/assignment/Assignment";
import { getCurrentUserDetails } from "./authentication/auth";
import { EmployeeRoutes } from "./routes/employee-route";
import { ManagerRoute } from "./routes/manager-route";
import { RecruiterRotes } from "./routes/recruiter-route";
import { ClientManagerRoute } from "./routes/client-manager-route";
import { RecruiterManagerRoute } from "./routes/recruiter-manager-route";

import { AddAssets } from "./components/asset/add-assets";
import { Inventory } from "./components/asset/asset-inventory";
import { TalentDashboard } from "./components/dashboard/talent-dashboard";
import { ClientDashboard } from "./components/dashboard/client_dashboard";


//import Assignment from "./components/assignment/Assignment";
import { AccountManagementRecentOnboarding } from "./components/account-management";


const Customer = lazy(() => import("./components/customer"));
const AddClient = lazy(() => import("./components/customer/add-client"));
const ActiveClient = lazy(() => import("./components/customer/active-client"));
const Allocation = lazy(() =>
  import("./components/account-management/allocation")
);
const Billing = lazy(() =>
  import("./components/account-management/billing/index")
);
const ResourceRevenue = lazy(() =>
  import("./components/account-management/resource-revenue/index")
);
const Revenue = lazy(() =>
  import("./components/account-management/revenue/index")
);

const EmployeeDashboard = lazy(() =>
  import("./components/dashboard/employee_dashboard")
);
const Leave = lazy(() => import("./components/leave"));
const Employment = lazy(() => import("./components/profile/employement/"));
//profile
const Details = lazy(() => import("./components/profile/details"));
const Document = lazy(() => import("./components/documents/index"));
//Recruiter
// const Recruiter = lazy(() => import("./components/recruiter"));
const RecruiterRecentOnboarding = lazy(() =>
  import("./components/recruiter/recentonboarding")
);
//Client Report
const ClientReport = lazy(() =>
  import("./components/account-management/client-reports")
);

const CalendarPage = lazy(() =>
  import("./components/calendar/index")
);


const NewOnboarding = lazy(() =>
  import("./components/recruiter/newonboarding")
);
const OnboardingApproval = lazy(() =>
  import("./components/recruiter/OnboardingApproval")
);
const ApprovalHistory = lazy(() =>
  import("./components/recruiter/ApprovalHistory")
);
const OnboardingApprovalForm = lazy(() =>
  import("./components/recruiter/onboardingapprovalform")
);
//For vendor in recruiter tab
const NewVendorOnboarding = lazy(() =>
  import("./components/recruiter/NewVendorOnboarding/index")
);
const NewVendorOnboardingApproval = lazy(() =>
  import("./components/recruiter/NewVendorOnboardingApproval/index")
);
const NewVendorOnboardingApprovalForm = lazy(() =>
  import("./components/recruiter/NewVendorOnboardingApprovalForm/index")
);
const VendorOnboardingHistory = lazy(() =>
  import("./components/recruiter/VendorOnboardingHistory/index")
);

// Assset
const AssetsPage = lazy(() => import("./components/asset/index"));
const EmployeeAssetsPage = lazy(() => import("./components/asset/employee-assets/index"));
const AssignAssets = lazy(() => import("./components/asset/assign-assets-to-employee/index"));
// Timesheet
const PendingTimesheetPage = lazy(() => import("./components/timesheet/index"));
const ApprovedTimesheetPage = lazy(() => import("./components/timesheet/timesheet-approved/index"));
const EmployeeTimesheetPage = lazy(() =>
  import("./components/timesheet/employeetimesheet/index")
);
const AppUniversal = function (props) {
  const userDetails = getCurrentUserDetails();
  return (
    <Router basename={`${config.publicPath}`}>
      <div>
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          {/* PUBLIC ROUTES */}
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/forgot-password' exact component={ForgotPassword} />
          <Route path='/change-password' exact component={ChangePassword} />

          {/* employee route */}
          {userDetails?.role === "Employee" && (
            <Route path='/employee' element={<EmployeeRoutes />}>
              <Route
                path='/employee/dashboard'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeDashboard {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/employee/leave'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Leave {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/employee/employment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Employment {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/employee/details'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Details {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/employee/document'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Document />
                  </Suspense>
                )}
              />
              <Route
                path='/employee/assets/my-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AssetsPage {...props} />
                  </Suspense>
                )}
              />

              <Route
                path='/employee/timesheet'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/employee/assignment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Assignment />
                  </Suspense>
                )}
              />
            </Route>
          )}

          {/* Manager Route */}
          {userDetails?.role === "Manager" && (
            <Route path='/manager' element={<ManagerRoute />}>
              <Route
                path='/manager/dashboard'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeDashboard {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/leave'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Leave {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/employment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Employment {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/details'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Details {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/document'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Document />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/assets/my-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AssetsPage {...props} />
                  </Suspense>
                )}
              />

              <Route
                path='/manager/assets/employee-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeAssetsPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/timesheet/pending'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <PendingTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/timesheet/approved'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ApprovedTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/timesheet'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/manager/assignment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Assignment />
                  </Suspense>
                )}
              />
            </Route>
          )}

          {/* Recruiter route */}
          {userDetails?.role === "Recruiter" && (
            <Route path='/recruiter' element={<RecruiterRotes />}>
              <Route
                path='/recruiter/dashboard'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeDashboard {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/timesheet'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/timesheet/pending'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <PendingTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/timesheet/approved'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ApprovedTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/assignment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Assignment />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/employment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Employment {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/recent-onboarding'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <RecruiterRecentOnboarding {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/new-onboarding'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <NewOnboarding {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/new-vendor-onboarding'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <NewVendorOnboarding />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/leave'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Leave {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/employment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Employment {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/details'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Details {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/document'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Document />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/assets/my-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AssetsPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/assets/employee-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeAssetsPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/assets/inventory'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Inventory />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/assets/add'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AddAssets />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter/assign-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AssignAssets {...props} />
                  </Suspense>
                )}
              />
            </Route>
          )}
          {userDetails?.role === "Client Manager" && (
            <Route path='/client' element={<ClientManagerRoute />}>
              <Route
                path='/client/dashboard'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeDashboard {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/leave'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Leave {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/timesheet'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/timesheet/pending'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <PendingTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/timesheet/approved'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ApprovedTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/employment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Employment {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/details'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Details {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/assignment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Assignment />
                  </Suspense>
                )}
              />
              <Route
                path='/client/document'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Document />
                  </Suspense>
                )}
              />
              <Route
                path='/client/analyze'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ClientDashboard />
                  </Suspense>
                )}
              />
              <Route
                path='/client/reports'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ClientReport />
                  </Suspense>
                )}
              />
              <Route
                path='/client/forecast'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <CalendarPage />
                  </Suspense>
                )}
              />
              <Route
                path='/client/assets/my-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AssetsPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/assets/employee-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeAssetsPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/employment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Employment {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/client/recent-onboarding'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AccountManagementRecentOnboarding />
                  </Suspense>
                )}
              />
              <Route
                path='/client/allocation'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Allocation />
                  </Suspense>
                )}
              />
              <Route
                path='/client/customer'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Customer />
                  </Suspense>
                )}
              />
              <Route
                path='/client/customer-add'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AddClient />
                  </Suspense>
                )}
              />
              <Route
                path='/client/client-active'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ActiveClient />
                  </Suspense>
                )}
              />

              <Route
                path='/client/billing'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Billing />
                  </Suspense>
                )}
              />
              <Route
                path='/client/resource-revenue'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ResourceRevenue />
                  </Suspense>
                )}
              />
              <Route
                path='/client/revenue'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Revenue />
                  </Suspense>
                )}
              />
            </Route>
          )}
          {userDetails?.role === "Recruiter Manager" && (
            <Route
              path='/recruiter-manager'
              element={<RecruiterManagerRoute />}>
              <Route
                path='/recruiter-manager/dashboard'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeDashboard {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/talent'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <TalentDashboard />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/leave'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Leave {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/employment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Employment {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/details'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Details {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/document'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Document />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/assets/my-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AssetsPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/assets/employee-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeAssetsPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/assets/inventory'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Inventory />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/assets/add'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AddAssets />
                  </Suspense>
                )}
              />
              {/* Assign assets */}
              <Route
                path='/recruiter-manager/assign-assets'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <AssignAssets {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/timesheet'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <EmployeeTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/timesheet/pending'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <PendingTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/timesheet/approved'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ApprovedTimesheetPage {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/assignment'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <Assignment />
                  </Suspense>
                )}
              />
              {/* Recruiter manager routs */}
              <Route
                path='/recruiter-manager/recent-onboarding'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <RecruiterRecentOnboarding />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/new-onboarding'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <NewOnboarding />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/onboarding-approval'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <OnboardingApproval />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/onboarding-approval-form'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <OnboardingApprovalForm {...props} />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/approval-history'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <ApprovalHistory />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/new-vendor-onboarding'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <NewVendorOnboarding />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/new-vendor-onboarding-approval'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <NewVendorOnboardingApproval />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/new-vendor-onboarding-approval-form'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <NewVendorOnboardingApprovalForm />
                  </Suspense>
                )}
              />
              <Route
                path='/recruiter-manager/vendor-onboarding-history'
                exact
                render={(props) => (
                  <Suspense
                    fallback={
                      <div id='loader-wrapper'>
                        <img src={progress} alt='loading...' />
                      </div>
                    }>
                    <VendorOnboardingHistory />
                  </Suspense>
                )}
              />

            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default AppUniversal;
