import React, { useState, useEffect } from "react";
import "./index.css";
import { Form } from "react-bootstrap";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import { HEADER_TIMESHEET } from "../../../assets/common/constants";
import SideBar from "../../../components/layout/SideBar";

const EmployeeTimesheetPage = () => {
  const [weeklyTimesheet, setWeeklyTimesheet] = useState([]);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  const generateWeekDates = (startDate) => {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      weekDays.push({
        date: day.toISOString().slice(0, 10),
        day: day.toLocaleDateString("en-US", { weekday: "short" }),
      });
    }
    return weekDays;
  };

  useEffect(() => {
    const currentDate = new Date();
    const today = currentDate.getDay();
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - today + (today === 0 ? -6 : 1));
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      weekDays.push({
        date: day.toISOString().slice(0, 10),
        day: day.toLocaleDateString("en-US", { weekday: "short" }),
      });
    }

    setWeeklyTimesheet([
      {
        startDate: weekStart.toISOString().slice(0, 10),
        days: weekDays,
        tasks: ["", "", "", "", "", "", ""],
        leaves: ["", "", "", "", "", "", ""],
      },
    ]);
  }, []);

  const handleTaskChange = (e, row, col) => {
    const updatedTimesheet = [...weeklyTimesheet];
    updatedTimesheet[0].tasks[col] = e.target.value;
    setWeeklyTimesheet(updatedTimesheet);
  };
  const handleLeaveChange = (e, row, col) => {
    const updatedTimesheet = [...weeklyTimesheet];
    updatedTimesheet[0].leaves[col] = e.target.value;
    setWeeklyTimesheet(updatedTimesheet);
  };

  const handlePreviousWeek = () => {
    const prevWeekStartDate = new Date(currentWeekStart);
    prevWeekStartDate.setDate(currentWeekStart.getDate() - 7);

    prevWeekStartDate.setDate(
      prevWeekStartDate.getDate() - ((prevWeekStartDate.getDay() + 6) % 7)
    );

    setCurrentWeekStart(prevWeekStartDate);

    const weekDays = generateWeekDates(prevWeekStartDate);

    setWeeklyTimesheet([
      {
        startDate: prevWeekStartDate.toISOString().slice(0, 10),
        days: weekDays,
        leaves: weekDays,
        tasks: ["", "", "", "", "", "", ""],
        leaves: ["", "", "", "", "", "", ""],
      },
    ]);
  };

  const handleNextWeek = () => {
    const nextWeekStartDate = new Date(currentWeekStart);
    nextWeekStartDate.setDate(currentWeekStart.getDate() + 7);

    nextWeekStartDate.setDate(
      nextWeekStartDate.getDate() - ((nextWeekStartDate.getDay() + 6) % 7)
    );

    setCurrentWeekStart(nextWeekStartDate);

    const weekDays = generateWeekDates(nextWeekStartDate);

    setWeeklyTimesheet([
      {
        startDate: nextWeekStartDate.toISOString().slice(0, 10),
        days: weekDays,
        leaves: weekDays,
        tasks: ["", "", "", "", "", "", ""],
        leaves: ["", "", "", "", "", "", ""],
      },
    ]);
  };

  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            {/* <Sidebar /> */}
            <SideBar
              userRole={getCurrentUserDetails().role}
              headerName={HEADER_TIMESHEET}
              currentPageName={"My Timesheet"}
            />
          </div>
          <div className='col-xl-9 col-lg-8 col-md-12'>
            <div className='card ctm-border-radius shadow-sm'>
              <div className='card-header'>
                <h4 className='card-title mb-0'>My Timesheet</h4>
              </div>
              <div className='card-body'>
                <div className='week-navigation d-flex justify-content-between mb-3'>
                  <button
                    className='btn btn-primary'
                    onClick={handlePreviousWeek}>
                    Previous Week
                  </button>
                  <button className='btn btn-primary' onClick={handleNextWeek}>
                    Next Week
                  </button>
                </div>
                <div className='table-wrapper'>
                  <div className='table-responsive'>
                    <Form>
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
                          {weeklyTimesheet.map((week, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td>Task</td>
                                {week.days.map((day, idx) => (
                                  <td key={idx}>
                                    <input
                                      type='number'
                                      value={week.tasks[idx]}
                                      onChange={(e) =>
                                        handleTaskChange(e, index, idx)
                                      }
                                    />
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td>Leave</td>
                                {week.days.map((day, idx) => (
                                  <td key={idx}>
                                    <input
                                      type='number'
                                      value={week.leaves[idx]}
                                      onChange={(e) =>
                                        handleLeaveChange(e, index, idx)
                                      }
                                    />
                                  </td>
                                ))}
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                      {/* submit button */}
                      <div className='mt-3 d-flex justify-content-center'>
                        <div className='text-center'>
                          <a
                            href='#0'
                            className='btn btn-theme button-1 text-white ctm-border-radius mt-4'>
                            Submit
                          </a>
                          <a
                            href='#0'
                            className='btn btn-danger text-white ctm-border-radius mt-4'>
                            Cancel
                          </a>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTimesheetPage;
