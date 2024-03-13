import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/NT4-removebg-preview.png";
import {
  doLogout,
  getCurrentUserDetails,
} from "../../utility/authentication/auth.js";
import avatar1 from "../../assets/images/Profile Photo.jpg";
import RECRUITER1 from "../../assets/images/Prachi.png";
import RECRUITER_MANAGER1 from "../../assets/images/Ankita.png";
import CLIENT_MANAGER1 from "../../assets/images/Vishesh.png";
import MANAGER1 from "../../assets/images/Jitendra.png";
import {
  CLIENT_MANAGER,
  EMPLOYEE,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
} from "../../assets/common/constants.js";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedData: JSON.parse(localStorage.getItem("data")) || {},
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const url = window.location.pathname;
    const userDetails = getCurrentUserDetails();
    let navbar = [];
    switch (true) {
      case userDetails?.role === EMPLOYEE:
        navbar = [
          {
            classContent: `mr-2 ${"/dashboard" === url ? "active" : ""} `,
            linkTo: "/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${url.includes("/asset") ? "active" : ""} `,
            linkTo: "/asset",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${"/timesheet" === url ? "active" : ""} `,
            linkTo: "/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/assignment" === url ? "active" : ""} `,
            linkTo: "/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/leave" === url ? "active" : ""} `,
            linkTo: "/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/document" === url ? "active" : ""} `,
            linkTo: "/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
        ];
        break;
      case userDetails?.role === MANAGER:
        navbar = [
          {
            classContent: `mr-2 ${"/dashboard" === url ? "active" : ""} `,
            linkTo: "/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${
              ("/asset" === url) | ("/employee-asset" === url) ? "active" : ""
            }`,
            linkTo: "/asset",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${
              ("/timesheet" === url) |
              ("/pending-timesheet" === url) |
              ("/approved-timesheet" === url)
                ? "active"
                : ""
            }`,
            linkTo: "/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/assignment" === url ? "active" : ""} `,
            linkTo: "/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/leave" === url ? "active" : ""} `,
            linkTo: "/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/document" === url ? "active" : ""} `,
            linkTo: "/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
        ];
        break;
      case userDetails?.role === RECRUITER:
        navbar = [
          {
            classContent: `mr-2 ${"/dashboard" === url ? "active" : ""} `,
            linkTo: "/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${url.includes("/asset") ? "active" : ""} `,
            linkTo: "/asset",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${url.includes("/timesheet") ? "active" : ""} `,
            linkTo: "/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/assignment" === url ? "active" : ""} `,
            linkTo: "/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/leave" === url ? "active" : ""} `,
            linkTo: "/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/document" === url ? "active" : ""} `,
            linkTo: "/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
          {
            classContent: `mr-1 ${
              ("/onboarding" === url) | ("/new-onboarding" === url)
                ? "active"
                : ""
            } `,
            linkTo: "/onboarding",
            linkIcon: "lnr lnr-user pr-0  pr-lg-1",
            linkContent: "Recruiter",
          },
        ];
        break;
      case userDetails?.role === RECRUITER_MANAGER:
        navbar = [
          {
            classContent: `mr-2 ${"/dashboard" === url ? "active" : ""} `,
            linkTo: "/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${
              ("/asset" === url) |
              ("/add-asset" === url) |
              ("/asset-inventory" === url) |
              ("/assign-asset" === url)
                ? "active"
                : ""
            }`,
            linkTo: "/asset",
            linkIcon: "lnr lnr-laptop pr-lg-1",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${url.includes("/timesheet") ? "active" : ""} `,
            linkTo: "/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/assignment" === url ? "active" : ""} `,
            linkTo: "/assignment",
            linkIcon: "lnr lnr-select pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/leave" === url ? "active" : ""} `,
            linkTo: "/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/document" === url ? "active" : ""} `,
            linkTo: "/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
          {
            classContent: `mr-1 ${
              ("/onboarding" === url) |
              ("/new-onboarding" === url) |
              ("/onboarding-approval" === url) |
              ("/approval-history" === url) |
              ("/onboarding-approval-form" === url)
                ? "active"
                : ""
            }`,
            linkTo: "/onboarding",
            linkIcon: "lnr lnr-users pr-0  pr-lg-1",
            linkContent: "Recruiter",
          },
          {
            classContent: `mr-1 ${"/talent" === url ? "active" : ""} `,
            linkTo: "/talent",
            linkIcon: "lnr lnr-chart-bars pr-0  pr-lg-1",
            linkContent: "Talent Report",
          },
        ];
        break;
      case userDetails?.role === CLIENT_MANAGER:
        navbar = [
          {
            classContent: `mr-2 ${"/dashboard" === url ? "active" : ""} `,
            linkTo: "/dashboard",
            linkIcon: "lnr lnr-home pr-0  pr-lg-1",
            linkContent: "Dashboard",
          },
          {
            classContent: `mr-1 ${url.includes("/asset") ? "active" : ""} `,
            linkTo: "/asset",
            linkIcon: "lnr lnr-laptop",
            linkContent: "Assets",
          },
          {
            classContent: `mr-1 ${url.includes("/timesheet") ? "active" : ""} `,
            linkTo: "/timesheet",
            linkIcon: "lnr lnr-calendar-full pr-lg-1",
            linkContent: "Timesheet",
          },
          {
            classContent: `mr-1 ${"/assignment" === url ? "active" : ""} `,
            linkTo: "/assignment",
            linkIcon: "lnr lnr-apartment pr-0  pr-lg-1",
            linkContent: "Assignment",
          },
          {
            classContent: `mr-1 ${"/leave" === url ? "active" : ""} `,
            linkTo: "/leave",
            linkIcon: "lnr lnr-briefcase pr-0  pr-lg-1",
            linkContent: "Leave",
          },
          {
            classContent: `mr-1 ${"/document" === url ? "active" : ""} `,
            linkTo: "/document",
            linkIcon: "lnr lnr-book pr-0  pr-lg-1",
            linkContent: "Document",
          },
          {
            classContent: `mr-1 ${
              "/recent-onboarding" === url ? "active" : ""
            } `,
            linkTo: "/recent-onboarding",
            linkIcon: "lnr lnr-sync pr-0  pr-lg-1",
            linkContent: "Account",
          },
        ];
        break;
      default:
        break;
    }
    return (
      <header className='header'>
        <div className='top-header-section'>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
                <div className='logo my-3 my-sm-0'>
                  <Link to='dashboard'>
                    <img
                      src={Logo}
                      alt='logo'
                      className='img-fluid'
                      width='100'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-lg-9 col-md-9 col-sm-9 col-6 text-right'>
                <div className='user-block d-none d-lg-block'>
                  <div className='row align-items-center'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                      <div className='user-info align-right dropdown d-inline-block header-dropdown'>
                        <a
                          href='#0'
                          data-toggle='dropdown'
                          className=' menu-style dropdown-toggle'>
                          <div className='user-avatar d-inline-block'>
                            {this.state.storedData.role === EMPLOYEE && (
                              <img
                                src={avatar1}
                                alt='user avatar'
                                className='rounded-circle img-fluid'
                                width='55'
                              />
                            )}
                            {this.state.storedData.role === RECRUITER && (
                              <img
                                src={RECRUITER1}
                                alt='user avatar'
                                className='rounded-circle img-fluid'
                                width='55'
                              />
                            )}
                            {this.state.storedData.role ===
                              RECRUITER_MANAGER && (
                              <img
                                src={RECRUITER_MANAGER1}
                                alt='user avatar'
                                className='rounded-circle img-fluid'
                                width='55'
                              />
                            )}
                            {this.state.storedData.role === CLIENT_MANAGER && (
                              <img
                                src={CLIENT_MANAGER1}
                                alt='user avatar'
                                className='rounded-circle img-fluid'
                                width='55'
                              />
                            )}
                            {this.state.storedData.role === MANAGER && (
                              <img
                                src={MANAGER1}
                                alt='user avatar'
                                className='rounded-circle img-fluid'
                                width='55'
                              />
                            )}
                            {this.state.storedData.role !== RECRUITER_MANAGER &&
                              this.state.storedData.role !== RECRUITER &&
                              this.state.storedData.role !== EMPLOYEE &&
                              this.state.storedData.role !== CLIENT_MANAGER &&
                              this.state.storedData.role !== MANAGER && (
                                <img
                                  alt='user avatar'
                                  className='rounded-circle img-fluid'
                                  width='55'
                                />
                              )}
                          </div>
                        </a>
                        <div className='dropdown-menu notification-dropdown-menu shadow-lg border-0 p-3 m-0 dropdown-menu-right'>
                          <Link className='dropdown-item p-2' to='employment'>
                            <span className='media align-items-center'>
                              <span className='lnr lnr-user mr-3'></span>
                              <span className='media-body text-truncate'>
                                <span className='text-truncate'>Profile</span>
                              </span>
                            </span>
                          </Link>
                          <Link
                            className='dropdown-item p-2'
                            onClick={() => {
                              doLogout();
                            }}
                            to={"/"}>
                            <span className='media align-items-center'>
                              <span className='lnr lnr-power-switch mr-3'></span>
                              <span className='media-body text-truncate'>
                                <span className='text-truncate'>Logout</span>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-block d-lg-none'>
                  <a href='#0'>
                    <span
                      className='lnr lnr-user d-block display-5 text-white'
                      id='open_navSidebar'></span>
                  </a>

                  <div className='offcanvas-menu' id='offcanvas_menu'>
                    <span
                      className='lnr lnr-cross float-left display-6 position-absolute t-1 l-1 text-white'
                      id='close_navSidebar'></span>
                    <div className='user-info align-center bg-theme text-center'>
                      <a href='#0' className='d-block menu-style text-white'>
                        <div className='user-avatar d-inline-block mr-3'>
                          <img
                            src={avatar1}
                            alt='user avatar'
                            className='rounded-circle'
                            width='50'
                          />
                        </div>
                      </a>
                    </div>
                    <div className='user-notification-block align-center'>
                      <div className='top-nav-search item-animated'>
                        <form>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Search here'
                          />
                          <button className='btn' type='submit'>
                            <i className='fa fa-search'></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <hr />
                    <div className='user-menu-items px-3 m-0'>
                      <Link className='px-0 pb-2 pt-0' to='/'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-home mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Dashboard
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='employee'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-users mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Employees
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='company'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-apartment mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Company
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='calendar'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-calendar-full mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Calendar
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='leave'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-briefcase mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Leave
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='overview-reviews'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-star mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Document
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='reports'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-rocket mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Reports
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='manage'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-sync mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Manage
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='settings'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-cog mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Settings
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='profile-settings'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-user mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Profile
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link className='p-2' to='/'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-power-switch mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Logout
                            </span>
                          </span>
                        </span>
                      </Link>
                      {/* Recruiter */}
                      <Link className='p-2' to='/recruiter/recent-onboarding'>
                        <span className='media align-items-center'>
                          <span className='lnr lnr-power-switch mr-3'></span>
                          <span className='media-body text-truncate text-left'>
                            <span className='text-truncate text-left'>
                              Recruiter
                            </span>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='header-wrapper d-none d-sm-none d-md-none d-lg-block'>
          <div className='container-fluid'>
            <div className='row'>
              <div className={"col-12"}>
                <div className='header-menu-list d-flex bg-white rt_nav_header horizontal-layout nav-bottom'>
                  <div className='append mr-auto my-0 my-md-0 mr-auto'>
                    <ul className='list-group list-group-horizontal-md mr-auto'>
                      {navbar?.map((k) => {
                        return (
                          <li className={k.classContent}>
                            <Link
                              to={k.linkTo}
                              className='text-dark btn-ctm-space'>
                              <span className={k.linkIcon}></span>
                              <span className='text-truncate text-left'>
                                {k.linkContent}
                              </span>
                            </Link>
                          </li>
                        );
                      })}

                      {(localStorage.getItem("userRole") === "Recruiter" ||
                        localStorage.getItem("userRole") ===
                          "Recruiter Manager") && (
                        <li
                          className={`mr-1 ${
                            ("recruiter" === url) |
                            ("recent-onboarding" === url) |
                            ("new-onboarding" === url) |
                            ("onboarding-approval" === url) |
                            ("approval-history" === url) |
                            ("onboarding-approval-form" === url)
                              ? "active"
                              : ""
                          } `}>
                          <Link
                            to='/recruiter/recent-onboarding'
                            className='btn-ctm-space text-dark'>
                            <span className='lnr lnr-user pr-0  pr-lg-1'></span>
                            <span className='d-none d-lg-inline'>
                              Recruiter
                            </span>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
