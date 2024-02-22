import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./sidebar.css";
import Holiday from './holidays';
import { Modal, Button } from 'react-bootstrap';
import LeaveDetailsInCircle from './ring-of-leave'


const Sidebar = () => {
    const totalSickLeave = 7;
    const sickLeavesConsumed = 0;
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

    //holiday modal function

    const [showHolidayModal, setShowHolidayModal] = useState(false);

    const handleShowHolidayModal = () => {
        setShowHolidayModal(true);
    };

    const handleCloseHolidayModal = () => {
        setShowHolidayModal(false);
    };

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

            <LeaveDetailsInCircle
                title="Sick Leave Details"
                ringRadius={ringRadius}
                circumference={circumference}
                dashOffset={dashOffset}
                remainingLeave={sickLeavesRemaining}
                consumedLeave={sickLeavesConsumed}
                totalLeave={totalSickLeave}
            />

            <LeaveDetailsInCircle
                title="Paid Leave Details"
                ringRadius={ringRadius}
                circumference={paidCircumference}
                dashOffset={paidDashOffset}
                remainingLeave={remainingPaidLeave}
                consumedLeave={consumedPaidLeave}
                additionalInfo={`Added After a Month: +${leavesAddedAfterMonth} days`}
                totalLeave={totalPaidLeaveAfterMonth}
            />

            {/* Display the Holiday component */}
            <div className="card ctm-border-radius shadow-sm mt-4">
                <div className="card-body py-4">
                    <h5 className="card-title">Holiday List</h5>
                    <Holiday upcomingCount={3} />
                    <br></br>
                    <Button variant="primary" onClick={handleShowHolidayModal}>
                        Show Holiday List
                    </Button>
                    <Modal show={showHolidayModal} onHide={handleCloseHolidayModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Holiday List</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Holiday />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseHolidayModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </aside>

    );

}

export default Sidebar;