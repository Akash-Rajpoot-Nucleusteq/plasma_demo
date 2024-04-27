import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CLIENT_MANAGER,
  EMPLOYEE,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
  SUPER_ADMIN,
} from "../../assets/common/constants.js";
import RECRUITER_MANAGER1 from "../../assets/images/Ankita.png";
import MANAGER1 from "../../assets/images/Archit.png";
import SUPER_ADMIN1 from "../../assets/images/CEO.png";
import CLIENT_MANAGER1 from "../../assets/images/Manjunath.png";
import Logo from "../../assets/images/NT4-removebg-preview.png";
import RECRUITER1 from "../../assets/images/Prachi.png";
import avatar1 from "../../assets/images/Profile Photo.jpg";
import {
  doLogout,
  getCurrentUserDetails,
} from "../../utility/authentication/auth.js";

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userDetails = getCurrentUserDetails();
  const url = window.location.pathname;

  let navbar = [];
  switch (true) {
    case userDetails?.role === EMPLOYEE:
      navbar = [
        {
          classContent: `mr-1 ${"/dashboard" === url ? "active" : ""} `,
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
          classContent: `mr-1
          ${
            "/assignment" === url ||
            "/future-assignment" === url ||
            "/past-assignment" === url
              ? "active"
              : ""
          }`,
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
          classContent: `mr-1 ${
            "/document" === url || "/edit-document" === url ? "active" : ""
          } `,
          linkTo: "/document",
          linkIcon: "lnr lnr-book pr-0  pr-lg-1",
          linkContent: "Document",
        },
      ];
      break;
    case userDetails?.role === MANAGER:
      navbar = [
        {
          classContent: `mr-1 ${"/dashboard" === url ? "active" : ""} `,
          linkTo: "/dashboard",
          linkIcon: "lnr lnr-home pr-0  pr-lg-1",
          linkContent: "Dashboard",
        },
        {
          classContent: `mr-1 ${
            "/asset" === url || "/allocated-asset" === url ? "active" : ""
          }`,
          linkTo: "/asset",
          linkIcon: "lnr lnr-calendar-full pr-lg-1",
          linkContent: "Assets",
        },
        {
          classContent: `mr-1 ${
            "/timesheet" === url ||
            "/pending-timesheet" === url ||
            "/approved-timesheet" === url
              ? "active"
              : ""
          }`,
          linkTo: "/timesheet",
          linkIcon: "lnr lnr-calendar-full pr-lg-1",
          linkContent: "Timesheet",
        },
        {
          classContent: `mr-1
          ${
            "/assignment" === url ||
            "/future-assignment" === url ||
            "/past-assignment" === url
              ? "active"
              : ""
          }`,
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
          classContent: `mr-1 ${
            "/document" === url || "/edit-document" === url ? "active" : ""
          } `,
          linkTo: "/document",
          linkIcon: "lnr lnr-book pr-0  pr-lg-1",
          linkContent: "Document",
        },
      ];
      break;
    case userDetails?.role === RECRUITER:
      navbar = [
        {
          classContent: `mr-1 ${"/dashboard" === url ? "active" : ""} `,
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
          classContent: `mr-1
          ${
            "/assignment" === url ||
            "/future-assignment" === url ||
            "/past-assignment" === url
              ? "active"
              : ""
          }`,
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
          classContent: `mr-1 ${
            "/document" === url || "/edit-document" === url ? "active" : ""
          } `,
          linkTo: "/document",
          linkIcon: "lnr lnr-book pr-0  pr-lg-1",
          linkContent: "Document",
        },
        {
          classContent: `mr-1 ${("/onboarding" === url)
            || ("/new-onboarding" === url)
            || ("/new-vendor-onboarding" === url)
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
          classContent: `mr-1 ${"/dashboard" === url ? "active" : ""} `,
          linkTo: "/dashboard",
          linkIcon: "lnr lnr-home pr-0  pr-lg-1",
          linkContent: "Dashboard",
        },
        {
          classContent: `mr-1 ${
            "/asset" === url ||
            "/add-asset" === url ||
            "/asset-inventory" === url ||
            "/assign-asset-table" === url ||
            "/assign-asset" === url
              ? "active"
              : ""
          }`,
          linkTo: "/asset",
          linkIcon: "lnr lnr-laptop pr-lg-1",
          linkContent: "Assets",
        },
        {
          classContent: `mr-1 ${
            "/timesheet" === url ||
            "/pending-timesheet" === url ||
            "/approved-timesheet" === url
              ? "active"
              : ""
          } `,
          linkTo: "/timesheet",
          linkIcon: "lnr lnr-calendar-full pr-lg-1",
          linkContent: "Timesheet",
        },
        {
          classContent: `mr-1
          ${
            "/assignment" === url ||
            "/future-assignment" === url ||
            "/past-assignment" === url
              ? "active"
              : ""
          }`,
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
          classContent: `mr-1 ${
            "/document" === url ||
            "/edit-document" === url ||
            "/document-approval" === url ||
            "/document-approval-history" === url
              ? "active"
              : ""
          } `,
          linkTo: "/document",
          linkIcon: "lnr lnr-book pr-0  pr-lg-1",
          linkContent: "Document",
        },
        {
          classContent: `mr-1 ${
            "/onboarding" === url ||
            "/new-onboarding" === url ||
            "/onboarding-approval" === url ||
            "/approval-history" === url ||
            "/onboarding-approval-form" === url ||
            "/new-vendor-onboarding" === url ||
            "/new-vendor-onboarding-approval" === url ||
            "/new-vendor-onboarding-approval-form" === url ||
            "/new-vendor-onboarding-approval-form" === url ||
            "/manage-vendor" === url ||
            "/add-vendor-resource" === url ||
            "/vendor-resources" === url
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
          classContent: `mr-1 ${"/dashboard" === url ? "active" : ""} `,
          linkTo: "/dashboard",
          linkIcon: "lnr lnr-home pr-0  pr-lg-1",
          linkContent: "Dashboard",
        },
        {
          classContent: `mr-1 ${
            "/asset" === url || "/allocated-asset" === url ? "active" : ""
          } `,
          linkTo: "/asset",
          linkIcon: "lnr lnr-laptop",
          linkContent: "Assets",
        },
        {
          classContent: `mr-1 ${
            "/timesheet" === url ||
            "/pending-timesheet" === url ||
            "/approved-timesheet" === url
              ? "active"
              : ""
          } `,
          linkTo: "/timesheet",
          linkIcon: "lnr lnr-calendar-full pr-lg-1",
          linkContent: "Timesheet",
        },
        {
          classContent: `mr-1
          ${
            "/assignment" === url ||
            "/future-assignment" === url ||
            "/past-assignment" === url
              ? "active"
              : ""
          }`,
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
          classContent: `mr-1 ${
            "/document" === url || "/edit-document" === url ? "active" : ""
          } `,
          linkTo: "/document",
          linkIcon: "lnr lnr-book pr-0  pr-lg-1",
          linkContent: "Document",
        },
        {
          classContent: `mr-1 ${("/available-pool" === url) ||
            ("/customer" === url) ||
            ("/client-active" === url) ||
            ("/customer-add" === url) ||
            ("/allocation" === url) ||
            ("/client-employee-timesheet" === url) ||
            ("/revenue" === url) ||
            ("/forecast" === url)
            ? "active"
            : ""
            }`,
          linkTo: "/available-pool",
          linkIcon: "lnr lnr-sync pr-0  pr-lg-1",
          linkContent: "Account",
        },
      ];
      break;
    case userDetails?.role === SUPER_ADMIN:
      navbar = [
        {
          classContent: `mr-1 ${"/dashboard" === url ? "active" : ""} `,
          linkTo: "/dashboard",
          linkIcon: "lnr lnr-home pr-0  pr-lg-1",
          linkContent: "Dashboard",
        },
        {
          classContent: `mr-1 ${("/asset" === url) ||
            ("/add-asset" === url) ||
            ("/asset-inventory" === url) ||
            ("/assign-asset-table" === url) ||
            ("/assign-asset" === url)
            ? "active"
            : ""
            }`,
          linkTo: "/asset",
          linkIcon: "lnr lnr-laptop pr-lg-1",
          linkContent: "Assets",
        },
        {
          classContent: `mr-1 ${("/timesheet" === url) ||
            ("/pending-timesheet" === url) ||
            ("/approved-timesheet" === url)
            ? "active"
            : ""
            } `,
          linkTo: "/timesheet",
          linkIcon: "lnr lnr-calendar-full pr-lg-1",
          linkContent: "Timesheet",
        },
        {
          classContent: `mr-1
          ${("/assignment" === url)
              || ("/future-assignment" === url)
              || ("/past-assignment" === url)

              ? "active" : ""
            }`,
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
          classContent: `mr-1 ${("/document" === url) ||
            ("/edit-document" === url) ||
            ("/document-approval" === url) ||
            ("/document-approval-history" === url)
            ? "active" : ""
            } `,
          linkTo: "/document",
          linkIcon: "lnr lnr-book pr-0  pr-lg-1",
          linkContent: "Document",
        },
        {
          classContent: `mr-1 ${("/onboarding" === url) ||
            ("/new-onboarding" === url) ||
            ("/onboarding-approval" === url) ||
            ("/approval-history" === url) ||
            ("/onboarding-approval-form" === url) ||

            ("/new-vendor-onboarding" === url) ||
            ("/new-vendor-onboarding-approval" === url) ||
            ("/new-vendor-onboarding-approval-form" === url) ||
            ("/new-vendor-onboarding-approval-form" === url) ||
            ("/manage-vendor" === url) ||
            ("/add-vendor-resource" === url) ||
            ("/vendor-resources" === url)
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
        {
          classContent: `mr-1 ${("/available-pool" === url) ||
            ("/customer" === url) ||
            ("/client-active" === url) ||
            ("/customer-add" === url) ||
            ("/allocation" === url) ||
            ("/client-employee-timesheet" === url) ||
            ("/revenue" === url) ||
            ("/forecast" === url)
            ? "active"
            : ""
            }`,
          linkTo: "/available-pool",
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
                <Link to='/dashboard'>
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
                          {userDetails.role === EMPLOYEE && (
                            <img
                              src={avatar1}
                              alt='user avatar'
                              className='rounded-circle img-fluid'
                              width='55'
                            />
                          )}
                          {userDetails.role === RECRUITER && (
                            <img
                              src={RECRUITER1}
                              alt='user avatar'
                              className='rounded-circle img-fluid'
                              width='55'
                            />
                          )}
                          {userDetails.role === RECRUITER_MANAGER && (
                            <img
                              src={RECRUITER_MANAGER1}
                              alt='user avatar'
                              className='rounded-circle img-fluid'
                              width='55'
                            />
                          )}
                          {userDetails.role === CLIENT_MANAGER && (
                            <img
                              src={CLIENT_MANAGER1}
                              alt='user avatar'
                              className='rounded-circle img-fluid'
                              width='55'
                            />
                          )}
                          {userDetails.role === MANAGER && (
                            <img
                              src={MANAGER1}
                              alt='user avatar'
                              className='rounded-circle img-fluid'
                              width='55'
                            />
                          )}
                          {userDetails.role === SUPER_ADMIN && (
                            <img
                              src={SUPER_ADMIN1}
                              alt='user avatar'
                              className='rounded-circle img-fluid'
                              width='55'
                            />
                          )}
                        </div>
                      </a>

                      <div className='dropdown-menu notification-dropdown-menu shadow-lg border-0 p-3 m-0 dropdown-menu-right'>
                        <Link
                          className='dropdown-item p-2'
                          to='/profile/employment'>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
