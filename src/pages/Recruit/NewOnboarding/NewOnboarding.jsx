import React, { Component } from "react";
import SideBar from "../../../components/layout/SideBar";
import EmployeeForm from "../../../components/uiElements/CommonFormForEmployee";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import { HEADER_RECRUITER } from "../../../assets/common/constants";
import Header from "../../../components/layout/Header";

export default function NewOnboarding() {
  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails().role}
                headerName={HEADER_RECRUITER}
                currentPageName={"New Onboarding"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='card shadow-sm ctm-border-radius'>
                <div className='card-header align-center'>
                  <h4 className='card-title mb-0'>New Onboarding</h4>
                </div>
                <div className='ctm-border-radius p-4'>
                  <EmployeeForm parentComponentName={"newOnboarding"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
