import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Sidebar from "../sidebar.jsx";
import IMG01 from "../../../assets/images/img-1.jpg";
import IMG02 from "../../../assets/images/img-2.jpg";
import IMG03 from "../../../assets/images/img-3.jpg";
import IMG04 from "../../../assets/images/img-4.jpg";
import IMG05 from "../../../assets/images/img-5.jpg";
import EMPLOYEE_IMAGE from '../../../assets/images/Profile Photo.jpg'
import MANAGER_IMAGE from '../../../assets/images/Jitendra.png'
import CLIENT_MANAGER_IMAGE from '../../../assets/images/Vishesh.png'
import RECRUITER_IMAGE from '../../../assets/images/Prachi.png'
import RECRUITER_MANAGER_IMAGE from '../../../assets/images/Ankita.png'
import { CLIENT_MANAGER, EMPLOYEE, MANAGER, RECRUITER, RECRUITER_MANAGER } from "../../../assets/common/roles";

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      storedData: JSON.parse(localStorage.getItem('data')) || {},
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {
    const options = [
      { value: "PHP", label: "PHP" },
      { value: "IOS", label: "IOS" },
      { value: "Design", label: "Design" },
    ];

    let employeeName;
    let profilePhoto;

    switch (this.state.storedData.role) {
      case EMPLOYEE:
        employeeName = "Ashish";
        profilePhoto = EMPLOYEE_IMAGE;
        break;
      case MANAGER:
        employeeName = "Jitendra";
        profilePhoto = MANAGER_IMAGE;
        break;
      case CLIENT_MANAGER:
        employeeName = "Vishesh";
        profilePhoto = CLIENT_MANAGER_IMAGE;
        break;
      case RECRUITER:
        employeeName = "Prachi";
        profilePhoto = RECRUITER_IMAGE;
        break;
      case RECRUITER_MANAGER:
        employeeName = "Ankita";
        profilePhoto = RECRUITER_MANAGER_IMAGE;
        break;
      default:
      // Handle default case if necessary
    }

    return (
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <Sidebar employeeName={employeeName} profilePhoto={profilePhoto} />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='row'>
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card add-team flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Your Peers</h4>
                    </div>
                    <div className='card-body'>
                      <div className='form-group mb-3'>
                        <Link to='employment'>
                          <span
                            className='avatar'
                            data-toggle='tooltip'
                            data-placement='top'
                            title='Danny Ward'>
                            <img alt='avatar' src={IMG01} className='img-fluid' />
                          </span>
                        </Link>
                        <Link to='employment'>
                          <span
                            className='avatar'
                            data-toggle='tooltip'
                            data-placement='top'
                            title='Linda Craver'>
                            <img className='img-fluid' alt='avatar' src={IMG02} />
                          </span>
                        </Link>
                        <Link to='employment'>
                          <span
                            className='avatar'
                            data-toggle='tooltip'
                            data-placement='top'
                            title='Jenni Sims'>
                            <img className='img-fluid' alt='avatar' src={IMG03} />
                          </span>
                        </Link>
                        <Link to='employment'>
                          <span
                            className='avatar'
                            data-toggle='tooltip'
                            data-placement='top'
                            title='Maria Cotton'>
                            <img alt='avatar' src={IMG04} className='img-fluid' />
                          </span>
                        </Link>
                        <Link to='employment'>
                          <span
                            className='avatar'
                            data-toggle='tooltip'
                            data-placement='top'
                            title='John Gibbs'>
                            <img className='img-fluid' alt='avatar' src={IMG05} />
                          </span>
                        </Link>
                        <Link to='employment'>
                          <span
                            className='avatar'
                            data-toggle='tooltip'
                            data-placement='top'
                            title='Richard Wilson'>
                            <img className='img-fluid' alt='avatar' src={IMG01} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Assignment */}
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card office-card flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header d-flex justify-content-between align-items-center'>
                      <h4 className='d-inline-block card-title mb-0'>
                        Your Assignments
                      </h4>
                    </div>
                    <div className='card-body text-center'>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Client Name :</span>
                        <b> Maria</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>
                          Client Manager Name :
                        </span>{" "}
                        <b> Jhonny</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Work Location : </span>
                        <b> Indore</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Client Partner : </span>
                        <b> Akash</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Email : </span>
                        <b> employee@gmail.com</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Contact : </span>
                        <b>9876789012</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              {/*My Manager */}
              <div className='row'>
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>My Manager</h4>
                    </div>
                    <div className='card-body'>
                      <div className='media mb-4'>
                        <img
                          className='rounded mr-3 img-fluid'
                          src={IMG02}
                          alt='avatar'
                          width='50'
                          height='50'
                        />
                        <div className='media-body'>
                          <Link
                            to='employment'
                            className='text-dark text-ellipsis'>
                            Richard Wilson
                          </Link>
                          <p className='ctm-text-sm mb-0 text-ellipsis'>
                            richardwilson@example.com
                          </p>
                        </div>
                      </div>
                      <div className='text-center'></div>
                    </div>
                  </div>
                </div>

                {/* My Reportees */}
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card add-team flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>
                        My reportees
                      </h4>
                    </div>
                    <div className='card-body'>
                      <Link to='employment'>
                        <span
                          className='avatar'
                          data-toggle='tooltip'
                          data-placement='top'
                          title='John Gibbs'>
                          <img className='img-fluid' alt='avatar' src={IMG01} />
                        </span>
                      </Link>
                      <Link to='employment'>
                        <span
                          className='avatar'
                          data-toggle='tooltip'
                          data-placement='top'
                          title='Richard Wilson'>
                          <img className='img-fluid' alt='avatar' src={IMG02} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point Of Contact */}
              <div className='card flex-fill ctm-border-radius shadow-sm'>
                <div className='card-header'>
                  <h4 className='card-title mb-0'>My Hr Contact</h4>
                </div>
                <div className='card-body'>
                  <div className='media mb-4'>
                    <img
                      className='rounded mr-3 img-fluid'
                      src={IMG02}
                      alt='avatar'
                      width='50'
                      height='50'
                    />
                    <div className='media-body'>
                      <Link
                        to='employment'
                        className='text-dark text-ellipsis'>
                        Richard Wilson
                      </Link>
                      <p className='ctm-text-sm mb-0 text-ellipsis'>
                        richardwilson@example.com
                      </p>
                    </div>
                  </div>
                  <div className='text-center'></div>
                </div>
              </div>


              {/* row */}
              {/* <div className='row'>
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Point Of Contact</h4>
                    </div>
                    <div className='card-body'>
                      <div className='media mb-4'>
                        <img
                          className='rounded mr-3 img-fluid'
                          src={IMG02}
                          alt='avatar'
                          width='50'
                          height='50'
                        />
                        <div className='media-body'>
                          <Link
                            to='employment'
                            className='text-dark text-ellipsis'>
                            Richard Wilson
                          </Link>
                          <p className='ctm-text-sm mb-0 text-ellipsis'>
                            richardwilson@example.com
                          </p>
                        </div>
                      </div>
                      <div className='text-center'></div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12 d-flex'>
                  <div className='card add-team flex-fill ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>
                        Who Reports to Employee
                      </h4>
                    </div>
                    <div className='card-body'>
                      <Link to='employment'>
                        <span
                          className='avatar'
                          data-toggle='tooltip'
                          data-placement='top'
                          title='John Gibbs'>
                          <img className='img-fluid' alt='avatar' src={IMG01} />
                        </span>
                      </Link>
                      <Link to='employment'>
                        <span
                          className='avatar'
                          data-toggle='tooltip'
                          data-placement='top'
                          title='Richard Wilson'>
                          <img className='img-fluid' alt='avatar' src={IMG02} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*row*/}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employment;
