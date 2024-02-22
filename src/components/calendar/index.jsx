import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import DatePicker from "react-datepicker";
import Modal from 'react-bootstrap/Modal';
import Sidebar from '../account-management/sideBar'

const CalendarPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(null);
  const [iseditdelete, setIsEditDelete] = useState(false);
  const [addneweventobj, setAddNewEventObj] = useState(null);
  const [isnewevent, setIsNewEvent] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [categoryColor, setCategoryColor] = useState('');
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [calenderevent, setCalendarEvent] = useState(null);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [defaultEvents, setDefaultEvents] = useState([
    {
      title: 'Event Name 4',
      start: Date.now() + 148000000,
      className: 'bg-purple'
    },
    {
      title: 'Test Event 1',
      start: Date.now(),
      end: Date.now(),
      className: 'bg-success'
    },
    {
      title: 'Test Event 2',
      start: Date.now() + 168000000,
      className: 'bg-info'
    },
    {
      title: 'Test Event 3',
      start: Date.now() + 338000000,
      className: 'bg-primary'
    }
  ]);

  const handleClose = () => {
    setIsNewEvent(false);
    setIsEditDelete(false);
    setShow(false);
  };

  const handleShow = (id) => {
    setShow(id);
  };

  const handleChange = date => {
    setStartDate(date);
  };

  const handleEventClick = (clickInfo) => {
    setIsEditDelete(true);
    setEventTitle(clickInfo.event.title);
    setCalendarEvent(clickInfo.event);
  };

  const handleDateSelect = (selectInfo) => {
    setIsNewEvent(true);
    setAddNewEventObj(selectInfo);
  };

  const addNewEvent = () => {
    const { eventTitle, categoryColor, addneweventobj } = this.state;
    let calendarApi = addneweventobj.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (eventTitle) {
      calendarApi.addEvent({
        id: 10,
        title: eventTitle,
        className: categoryColor,
        start: addneweventobj.startStr,
        end: addneweventobj.endStr,
        allDay: addneweventobj.allDay
      });
    }
    setIsNewEvent(false);
  };

  const onupdateModalClose = () => {
    setIsEditDelete(false);
    setEventTitle("");
  };

  const oncreateeventModalClose = () => {
    setIsNewEvent(false);
    setEventTitle("");
  };

  const removeEvent = () => {
    calenderevent.remove();
    setIsEditDelete(false);
  };

  const clickUpdateEvent = () => {
    const newArray = [...defaultEvents];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(calenderevent.id)) {
        newArray[i].title = eventTitle;
      }
    }
    setDefaultEvents(newArray);
    setIsEditDelete(false);
  };

  const renderEventClick = () => {
    return (
      <form className='event-form'>
        <label>Change event name</label>
        <div className='input-group'>
          <input
            className='form-control'
            type="text"
            value={eventTitle}
            onChange={(event) => setEventTitle(event.target.value)}
          />
          <span className='input-group-append'>
            <button
              type="button"
              className='btn btn-success btn-md'
              onClick={() => clickUpdateEvent()}
            >
              Save
            </button>
          </span>
        </div>
      </form>
    );
  };

  const renderAddNewEvent = () => {
    return (
      <form>
        <div className='row'>
          <div className='col-md-12'>
            <div className='form-group'>
              <label className='control-label'>Event Name</label>
              <input
                className='form-control'
                type='text'
                name='title'
                value={eventTitle}
                onChange={(event) => setEventTitle(event.target.value)}
              />
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-group'>
              <label className='control-label'>Category</label>
              <select
                className='select form-control'
                name='category'
                onChange={(event) => setCategoryColor(event.target.value)}
              >
                <option value='bg-danger'>Danger</option>
                <option value='bg-success'>Success</option>
                <option value='bg-purple'>Purple</option>
                <option value='bg-primary'>Primary</option>
                <option value='bg-pink'>Pink</option>
                <option value='bg-info'>Info</option>
                <option value='bg-inverse'>Inverse</option>
                <option value='bg-orange'>Orange</option>
                <option value='bg-brown'>Brown</option>
                <option value='bg-teal'>Teal</option>
                <option value='bg-warning'>Warning</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const handleNavLinkClick = (label) => {
    // Handle NavLink click logic
  };

  const handleClick = () => {
    setShow(true);
  };

  const options = [
    { value: 'Danger', label: 'Danger' },
    { value: 'Success', label: 'Success' },
    { value: 'Purple', label: 'Purple' },
    { value: 'Primary', label: 'Primary' },
    { value: 'Pink', label: 'Pink' },
    { value: 'Info', label: 'Info' },
    { value: 'Inverse', label: 'Inverse' },
    { value: 'Orange', label: 'Orange' },
    { value: 'Brown', label: 'Brown' },
    { value: 'Teal', label: 'Teal' },
    { value: 'Warning', label: 'Warning' },
  ];

  return (

    <div className="page-wrapper">


      {/* Page Content */}
      <div className="content container-fluid">
        <div className="row">
          {/* <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div className='card ctm-border-radius shadow-sm'>
              <div className='card-body py-4'>
                <div className='row'>
                  <div className='col-md-12 mr-auto text-left'>
                    <div className='custom-search input-group'>
                      <div className='custom-breadcrumb'>
                        <ol className='breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2'>
                          <li className='breadcrumb-item d-inline-block'>
                            <Link to='admin' className='text-dark'>
                              Home
                            </Link>
                          </li>
                          <li className='breadcrumb-item d-inline-block active'>
                            Profile
                          </li>
                        </ol>
                        <h4 className='text-dark'>Account Management</h4>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card'>
              <div className='card-body'>
                <div
                  className='flex-column list-group'
                  id='v-pills-tab'
                  role='tablist'
                  aria-orientation='vertical'>
                  <NavLink
                    to='/client/recent-onboarding'
                    className='list-group-item text-center button-6'
                    activeClassName='active'
                    onClick={() => handleNavLinkClick("Recent Onboarding")}>
                    Available Pool
                  </NavLink>
                  <NavLink
                    to='/client/customer'
                    className='list-group-item text-center button-6'
                    activeClassName='active'
                    onClick={() => handleNavLinkClick("active")}>
                    Customer
                  </NavLink>
                  <NavLink
                    to='/client/allocation'
                    className='list-group-item text-center button-6'
                    activeClassName='active'
                    onClick={() => handleNavLinkClick("Allocations")}>
                    Allocations
                  </NavLink>
                  <NavLink
                    to='/client/reports'
                    className='list-group-item text-center button-6'
                    activeClassName='active'
                    onClick={() => handleNavLinkClick("ClientReport")}>
                    Reports
                  </NavLink>
                  <NavLink
                    to='/client/forecast'
                    className='list-group-item text-center button-6'
                    activeClassName='active'
                    onClick={() => handleNavLinkClick("ClientReport")}>
                    Forcasting
                  </NavLink>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <Sidebar />
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card mb-0">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <FullCalendar
                      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                      }}

                      initialView='dayGridMonth'
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      weekends={weekendsVisible}
                      initialEvents={defaultEvents}
                      select={handleDateSelect}
                      eventClick={clickInfo => handleEventClick(clickInfo)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Event Modal */}


      {/* /Add Event Modal */}
      {/* Event Modal */}
      <div className="modal custom-modal fade" id="event-modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Event</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" />
            <div className="modal-footer text-center">
              <button type="button" className="btn btn-success submit-btn save-event">Create event</button>
              <button type="button" className="btn btn-danger submit-btn delete-event" data-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
      {/* /Event Modal */}
      {/* Add Category Modal*/}
      <div className="modal custom-modal fade" id="add-category">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">×</button>
              <h4 className="modal-title">Add a category</h4>
            </div>
            <div className="modal-body p-20">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label className="col-form-label">Category Name</label>
                    <input className="form-control" placeholder="Enter name" type="text" name="category-name" />
                  </div>
                  <div className="col-md-6">
                    <label className="col-form-label">Choose Category Color</label>
                    <select className="form-control" data-placeholder="Choose a color..." name="category-color">
                      <option value="success">Success</option>
                      <option value="danger">Danger</option>
                      <option value="info">Info</option>
                      <option value="pink">Pink</option>
                      <option value="primary">Primary</option>
                      <option value="warning">Warning</option>
                      <option value="orange">Orange</option>
                      <option value="brown">Brown</option>
                      <option value="teal">Teal</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-white" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger save-category" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Category Modal*/}
      {/*add category */}
      <Modal show={show === 'addcategory'} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h4 className="modal-title">Add Category</h4>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Category Name</label>
              <input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
            </div>
            <div className="form-group mb-0">
              <label>Choose Category Color</label>
              <select className="form-control select form-white" data-placeholder="Choose a color..." name="category-color">
                <option value="success">Success</option>
                <option value="danger">Danger</option>
                <option value="info">Info</option>
                <option value="primary">Primary</option>
                <option value="warning">Warning</option>
                <option value="inverse">Inverse</option>
              </select>
            </div>
            <div className="submit-section text-center">
              <button type="button"
                className="btn btn-theme ctm-border-radius text-white save-category submit-btn mt-3 button-1" >Save</button>
            </div>

          </form>
        </Modal.Body>
      </Modal>
      {/* {Event Click} */}
      <Modal centered show={iseditdelete} onHide={handleClose}>
        <Modal.Header toggle={() => this.onupdateModalClose()}>
          Event
        </Modal.Header>
        <Modal.Body>
          {renderEventClick()}
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-danger submit-btn delete-event"
            data-dismiss="modal" onClick={() => removeEvent()}>Delete</button>
        </Modal.Footer>
      </Modal>
      <Modal centered show={isnewevent} onHide={handleClose}>
        <Modal.Header toggle={() => this.oncreateeventModalClose()}>
          Event
        </Modal.Header>
        <Modal.Body>
          {renderAddNewEvent()}
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-success submit-btn delete-event"
            data-dismiss="modal" onClick={() => addNewEvent()}>Create event</button>
        </Modal.Footer>
      </Modal>

      <Modal show={show === 'createnew'} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Event Name <span className="text-danger">*</span></label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label>Event Date <span className="text-danger">*</span></label>
              <DatePicker
                selected={startDate}
                onChange={handleChange}
                className="form-control datetimepicker"
              />
            </div>
            <div className="submit-section">
              <button className="btn btn-theme ctm-border-radius text-white submit-btn button-1">Submit</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CalendarPage;

