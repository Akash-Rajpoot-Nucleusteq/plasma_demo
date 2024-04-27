import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import LabelAndInputField from "../../../components/uiElements/LabelAndInputField";
import ButtonComponent from "../../../components/uiElements/ButtonComponent";

const ViewTimesheet = ({ employeeData }) => {
  const [formData, setFormData] = useState({
    employeeId: employeeData?.employeeId,
    assigneeName: employeeData?.assigneeName,
    period: employeeData?.period,
    hoursSubmitted: employeeData?.hoursSubmitted,
    clientName: employeeData?.clientName,
    businessUnit: employeeData?.businessUnit,
    project: employeeData?.project,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const weeklyTimesheet = [
    {
      startDate: "2024-01-01",
      days: [
        { date: "2024-01-01", day: "Mon" },
        { date: "2024-01-02", day: "Tue" },
        { date: "2024-01-03", day: "Wed" },
        { date: "2024-01-04", day: "Thu" },
        { date: "2024-01-05", day: "Fri" },
        { date: "2024-01-06", day: "Sat" },
        { date: "2024-01-07", day: "Sun" },
      ],
      tasks: ["8", "8", "8", "8", "8", "0", "0"],
    },
  ];

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <LabelAndInputField
            mdValue={6}
            lgValue={6}
            smValue={12}
            xsValue={12}
            controlId={"employeeId"}
            labelText={"Employee Id"}
            placeholder={'Enter Employee Id'}
            value={formData.employeeId}
            handleInputChange={handleChange}
            isReadOnly={true}
          />
          <LabelAndInputField
            mdValue={6}
            lgValue={6}
            smValue={12}
            xsValue={12}
            controlId={"assigneeName"}
            labelText={"Assignee Name"}
            placeholder={'Enter Assignee Name'}
            value={formData.assigneeName}
            handleInputChange={handleChange}
            isReadOnly={true}
          />
        </Row>

        <Row>
          <LabelAndInputField
            mdValue={6}
            lgValue={6}
            smValue={12}
            xsValue={12}
            controlId={"period"}
            labelText={"Period"}
            placeholder={'Enter Period'}
            value={formData.period}
            handleInputChange={handleChange}
            isReadOnly={true}
          />
          <LabelAndInputField
            mdValue={6}
            lgValue={6}
            smValue={12}
            xsValue={12}
            controlId={"hoursSubmitted"}
            labelText={"Hours Submitted"}
            placeholder={'Enter Hours Submitted'}
            inputType={'number'}
            value={formData.hoursSubmitted}
            handleInputChange={handleChange}
            isReadOnly={true}
          />
        </Row>

        <Row>
          <LabelAndInputField
            mdValue={6}
            lgValue={6}
            smValue={12}
            xsValue={12}
            controlId={"clientName"}
            labelText={"Client Name"}
            placeholder={'Enter Client Name'}
            value={formData.clientName}
            handleInputChange={handleChange}
            isReadOnly={true}
          />
          <LabelAndInputField
            mdValue={6}
            lgValue={6}
            smValue={12}
            xsValue={12}
            controlId={"businessUnit"}
            labelText={"Business Unit"}
            placeholder={'Enter Business Unit'}
            value={formData.businessUnit}
            handleInputChange={handleChange}
            isReadOnly={true}
          />
        </Row>

        <Row>
          <LabelAndInputField
            mdValue={6}
            lgValue={6}
            smValue={12}
            xsValue={12}
            controlId={"project"}
            labelText={"Project"}
            placeholder={'Enter Project'}
            value={formData.project}
            handleInputChange={handleChange}
            isReadOnly={true}
          />
        </Row>

        <div style={{ overflowX: "auto" }}>
          <table className='table table-hover table-striped'>
            <thead>
              <tr>
                <th>Week</th>
                {weeklyTimesheet.length > 0 &&
                  weeklyTimesheet[0].days.map((day, idx) => (
                    <th key={idx}>
                      <div className='date-cell'>
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

        <div className='d-flex justify-content-center'>
          <ButtonComponent
            type={'submit'}
            variant={'primary'}
            buttonText={'Approve'}
            className={'btn btn-theme button-1 text-white ctm-border-radius'}
          />
          <ButtonComponent
            type={'button'}
            buttonText={'Reject'}
            className={'btn btn-danger ctm-border-radius text-white'}
          />
        </div>
      </Form>
    </div>
  );
};

export default ViewTimesheet;
