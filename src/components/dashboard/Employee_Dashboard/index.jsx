import React, { Component } from "react";
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';

import IMG01 from '../../../assets/images/img-2.jpg';
import PROFILE_PHOTO from '../../../assets/images/Profile Photo.jpg'
import Abhay from '../../../assets/images/Abhay.png'
import Vivek from '../../../assets/images/Vivek.png'
import Krishna from '../../../assets/images/Krishna.png'
import RECRUITER from '../../../assets/images/Prachi.png'
import RECRUITER_MANAGER from '../../../assets/images/Ankita.png'
import CLIENT_MANAGER from '../../../assets/images/Vishesh.png'
import MANAGER from '../../../assets/images/Jitendra.png'
import CEO from '../../../assets/images/CEO.png'
import { InformationCenter, ActionCenter, CommunicationCenter, TodayCard, CardSection } from '../../common-components/DashboardComponents'

class EmployeeDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todayData: [
        { icon: '2', message: 'Krishna is off sick', profile: Krishna },
        { icon: '3', message: 'Abhay Gupta is on parenting leave', profile: Abhay },
        { icon: '4', message: 'Vivek Dubey is away', profile: Vivek },
        { icon: '5', message: 'Hemant is working from home', profile: Abhay },
      ],
      actionCenterData: [
        { message: 'Current week timesheet.', status: 'Pending' },
        { message: 'Akshit leave approval.', status: 'Pending' },
      ],
      informationCenter: [
        { message: 'Your leave request have been approved.' },
        { message: 'Congratulation your referral got selected.' },
      ],
      communicationCenterData: [
        { profilePhoto: CEO, message: 'Message from CEO' },
        { profilePhoto: Vivek, message: 'Org Announcement' },
        { profilePhoto: Abhay, message: 'Festival wishes' },
        { profilePhoto: Vivek, message: 'Calling for referral' },

      ],

      storedData: JSON.parse(localStorage.getItem('data')) || {},
    }
  }

  render() {
    const data = this.props.location.pathname;
    console.log('data: ', data);

    const { role } = this.state.storedData;
    let sidebarComponent;

    switch (role) {
      case 'Employee':
        sidebarComponent = <Sidebar url={data} employeeRole={'Employee'} employeeName={'Ashish'} profilePhoto={PROFILE_PHOTO} employeeId={'N0005'} />;
        break;
      case 'Recruiter':
        sidebarComponent = <Sidebar url={data} employeeRole={'Recruiter'} employeeName={'Prachi'} profilePhoto={RECRUITER} employeeId={'N0003'} />;
        break;
      case 'Recruiter Manager':
        sidebarComponent = <Sidebar url={data} employeeRole={'Recruiter Manager'} employeeName={'Ankita'} profilePhoto={RECRUITER_MANAGER} employeeId={'N0001'} />;
        break;
      case 'Client Manager':
        sidebarComponent = <Sidebar url={data} employeeRole={'Client Manager'} employeeName={'Vishesh'} profilePhoto={CLIENT_MANAGER} employeeId={'N0002'} />;
        break;
      case 'Manager':
        sidebarComponent = <Sidebar url={data} employeeRole={'Manager'} employeeName={'Jitendra'} profilePhoto={MANAGER} employeeId={'N0004'} />;
        break;
      default:
        sidebarComponent = <Sidebar url={data} employeeRole={'Employee'} employeeName={'User'} profilePhoto={IMG01} />;
    }

    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              {sidebarComponent}
            </div>

            <div className="col-xl-9 col-lg-8  col-md-12">
              <div className="row">
                {/* INFORMATION CENTER */}
                {/* <InformationCenter title={'Information Center'} information={this.state.informationCenter} /> */}
                {/* ACTION CENTER */}
                {/* <ActionCenter title={'Action Center'} actionCenterData={this.state.actionCenterData} /> */}
                {/* COMMUNICATION CENTER */}
                {/* <CommunicationCenter title={'Communication Center'} communicationCenterData={this.state.communicationCenterData} /> */}
                {/* TODAY CARD */}
                {/* <TodayCard title={'Today'} todayData={this.state.todayData} /> */}


                <CardSection title={'Information Center'} cardData={this.state.informationCenter} cardType={'Information'} />
                <CardSection title={'Action Center'} cardData={this.state.actionCenterData} cardType={'Action'} />
                <CardSection title={'Communication Center'} cardData={this.state.communicationCenterData} cardType={'Communication'} />
                <TodayCard title={'Today'} todayData={this.state.todayData} />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default EmployeeDashboard;