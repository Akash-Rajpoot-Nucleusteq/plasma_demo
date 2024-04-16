import React, { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import { HEADER_RECRUITER } from "../../../assets/common/constants";
import EmployeeForm from "../../../components/uiElements/CommonFormForEmployee";
import SideBar from "../../../components/layout/SideBar";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import Header from "../../../components/layout/Header";
import { useLocation } from "react-router-dom";

export default function OnboardingApprovalForm() {
  const location = useLocation();
  const { employeeData } = location.state || {};
  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails()?.role}
                headerName={HEADER_RECRUITER}
                currentPageName={"Onboarding Approval"}
              />
            </div>

            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='card shadow-sm ctm-border-radius'>
                <div className='card-header align-center'>
                  <h4 className='card-title mb-0'>
                    Approve / Reject Onboarding
                  </h4>
                </div>
                <div className='ctm-border-radius p-4'>
                  <EmployeeForm
                    employeeData={employeeData}
                    parentComponentName={"onboardingApprovalFormPage"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
