import React from 'react'
import Sidebar from '../sidebar'
import CommonFormForVendor from '../CommonForm/CommonFormForVendor'
export default function index() {
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
                                <h4 className="card-title mb-0">New Vendor Onboarding</h4>
                            </div>
                            <div className='ctm-border-radius p-4'>
                                <CommonFormForVendor parentComponentName={'newOnboarding'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
