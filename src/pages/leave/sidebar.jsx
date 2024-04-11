import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./sidebar.css";
import HolidayListComponent from "../../components/HolidayListComponent";
import LeaveCircleComponent from "../../components/LeaveCircleComponent";


const Sidebar = () => {
    const totalSickLeave = 7;
    const sickLeavesConsumed = 2;
    const sickLeavesRemaining = totalSickLeave - sickLeavesConsumed;

    const consumptionPercentage = (sickLeavesConsumed / totalSickLeave) * 100;
    const ringRadius = 40;
    const circumference = 2 * Math.PI * ringRadius;
    const dashOffset = circumference - (consumptionPercentage / 100) * circumference;

    const totalPaidLeave = 18;
    const leavesAddedAfterMonth = 1.5;
    const totalPaidLeaveAfterMonth = totalPaidLeave + leavesAddedAfterMonth;

    const consumedPaidLeave = 2;
    const remainingPaidLeave = totalPaidLeaveAfterMonth - consumedPaidLeave;

    const paidRingRadius = 40;
    const paidCircumference = 2 * Math.PI * paidRingRadius;
    const paidConsumptionPercentage = (consumedPaidLeave / totalPaidLeaveAfterMonth) * 100;
    const paidDashOffset = paidCircumference - (paidConsumptionPercentage / 100) * paidCircumference;

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
                                            <Link to="dashboard" className="text-dark">Home</Link></li>
                                        <li className="breadcrumb-item d-inline-block active">Leave</li>
                                    </ol>
                                    <h4 className="text-dark">Leave</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LeaveCircleComponent
                title={'Sick Leave Details'}
                leavesConsumed={sickLeavesConsumed}
                leavesRemaining={sickLeavesRemaining}
                totalLeave={totalSickLeave}
            />
            <LeaveCircleComponent
                title={'Paid Leave Details'}
                leavesConsumed={consumedPaidLeave}
                leavesRemaining={remainingPaidLeave}
                totalLeave={totalPaidLeave}
                additionalInfo={`Added After a Month: +${leavesAddedAfterMonth} days`}
            />

            <HolidayListComponent />

        </aside>

    );

}

export default Sidebar;