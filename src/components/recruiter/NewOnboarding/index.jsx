import React, { Component } from 'react'
import Sidebar from '../sidebar'
import 'react-phone-input-2/lib/style.css';
import EmployeeForm from '../CommonForm/CommonFormForEmployee'


export default function NewOnboarding() {
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <Sidebar />
          </div>

          <div className="col-xl-9 col-lg-8  col-md-12">
            <div className="card shadow-sm ctm-border-radius">
              <div className="card-header align-center">
                <h4 className="card-title mb-0">New Onboarding</h4>
              </div>
              <div className='ctm-border-radius p-4'>
                <EmployeeForm parentComponentName={"newOnboarding"} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

