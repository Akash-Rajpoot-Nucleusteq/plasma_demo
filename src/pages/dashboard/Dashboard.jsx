import React, { useEffect } from "react";
import SideBar from "../../components/layout/SideBar";
import Abhay from "../../assets/images/Abhay.png";
import Vivek from "../../assets/images/Vivek.png";
import Krishna from "../../assets/images/Krishna.png";
import CEO from "../../assets/images/CEO.png";
import {
  TodayCard,
  CardSection,
} from "../../components/dashboard/DashboardComponents";
import { HEADER_DASHBOARD } from "../../assets/common/constants";
import { getCurrentUserDetails } from "../../utility/authentication/auth";
import Header from "../../components/layout/Header";

function Dashboard() {
  const todayData = [
    { icon: "2", message: "Krishna is off sick", profile: Krishna },
    { icon: "3", message: "Abhay Gupta is on parenting leave", profile: Abhay },
    { icon: "4", message: "Vivek Dubey is away", profile: Vivek },
    { icon: "5", message: "Hemant is working from home", profile: Abhay },
  ];
  const actionCenterData = [
    { message: "Current week timesheet.", status: "Pending" },
    { message: "Akshit leave approval.", status: "Pending" },
  ];
  const informationCenter = [
    { message: "Your leave request have been approved." },
    { message: "Congratulation your referral got selected." },
  ];
  const communicationCenterData = [
    { profilePhoto: CEO, message: "Message from CEO" },
    { profilePhoto: Vivek, message: "Org Announcement" },
    { profilePhoto: Abhay, message: "Festival wishes" },
    { profilePhoto: Vivek, message: "Calling for referral" },
  ];

  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySideBar'>
              <SideBar
                headerName={HEADER_DASHBOARD}
                userRole={getCurrentUserDetails()?.role}
                currentPageName={"Dashboard"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='row'>
                <CardSection
                  title={"Information Center"}
                  cardData={informationCenter}
                  cardType={"Information"}
                />
                <CardSection
                  title={"Action Center"}
                  cardData={actionCenterData}
                  cardType={"Action"}
                />
                <CardSection
                  title={"Communication Center"}
                  cardData={communicationCenterData}
                  cardType={"Communication"}
                />
                <TodayCard title={"Today"} todayData={todayData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
