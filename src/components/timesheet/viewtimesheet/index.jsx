import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const ViewTimesheet = () => {
    const [formData, setFormData] = useState({
        sno: '',
        assigneeName: '',
        period: '',
        hoursSubmitted: '',
        clientName: '',
        businessUnit: '',
        project: '',
        task: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add logic for handling form submission
    };

    const weeklyTimesheet = [
        {
            startDate: '2024-01-01',
            days: [
                { date: '2024-01-01', day: 'Mon' },
                { date: '2024-01-02', day: 'Tue' },
                { date: '2024-01-03', day: 'Wed' },
                { date: '2024-01-04', day: 'Thu' },
                { date: '2024-01-05', day: 'Fri' },
                { date: '2024-01-06', day: 'Sat' },
                { date: '2024-01-07', day: 'Sun' },
            ],
            tasks: ['8', '8', '8', '8', '8', '0', '0'],
        },
    ];

    return (
        <div>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="sno">
                            <Form.Label>Sno:</Form.Label>
                            <Form.Control
                                type="number"
                                name="sno"
                                value={formData.sno}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="assigneeName">
                            <Form.Label>Assignee Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="assigneeName"
                                value={formData.assigneeName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="period">
                            <Form.Label>Period:</Form.Label>
                            <Form.Control
                                type="text"
                                name="period"
                                value={formData.period}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="hoursSubmitted">
                            <Form.Label>Hours Submitted:</Form.Label>
                            <Form.Control
                                type="number"
                                name="hoursSubmitted"
                                value={formData.hoursSubmitted}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="clientName">
                            <Form.Label>Client Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="clientName"
                                value={formData.clientName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="businessUnit">
                            <Form.Label>Business Unit:</Form.Label>
                            <Form.Control
                                type="text"
                                name="businessUnit"
                                value={formData.businessUnit}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="project">
                            <Form.Label>Project:</Form.Label>
                            <Form.Control
                                type="text"
                                name="project"
                                value={formData.project}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="task">
                            <Form.Label>Task:</Form.Label>
                            <Form.Control
                                type="text"
                                name="task"
                                value={formData.task}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div style={{ overflowX: 'auto' }}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Week</th>
                                {weeklyTimesheet.length > 0 &&
                                    weeklyTimesheet[0].days.map((day, idx) => (
                                        <th key={idx}>
                                            <div className="date-cell">
                                                <div>{day.date}</div>
                                                <div className='day-cell'>({day.day})</div>
                                            </div>
                                        </th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Task</td>
                                {weeklyTimesheet.map((week, index) =>
                                    week.days.map((day, idx) => (
                                        <td key={idx}>{week.tasks[idx]}</td>
                                    ))
                                )}
                            </tr>
                            <tr>
                                <td>Leave</td>
                                {weeklyTimesheet.map((week, index) =>
                                    week.days.map((day, idx) => <td key={idx}>0</td>)
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                        Approve
                    </Button>
                    <Button variant="primary" type="button" >
                        Reject
                    </Button>
                </div>

            </Form>
        </div>
    );
};

export default ViewTimesheet;
