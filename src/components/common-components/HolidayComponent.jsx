import React, { useState } from 'react'
import Holiday from '../leave/holidays'
import { Button, Modal } from 'react-bootstrap'

export default function HolidayComponent() {

    const [showHolidayModal, setShowHolidayModal] = useState(false);

    const handleShowHolidayModal = () => {
        setShowHolidayModal(true);
    };

    const handleCloseHolidayModal = () => {
        setShowHolidayModal(false);
    };
    return (
        <>
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
        </>
    )
}
