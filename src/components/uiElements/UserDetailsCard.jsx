import React, { useEffect, useState } from "react";
import { getCurrentUserDetails } from "../../utility/authentication/auth";
import {
  CLIENT_MANAGER,
  EMPLOYEE,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
} from "../../assets/common/constants";
import PROFILE_PHOTO from "../../assets/images/Profile Photo.jpg";
import RECRUITER_IMAGE from "../../assets/images/Prachi.png";
import RECRUITER_MANAGER_IMAGE from "../../assets/images/Ankita.png";
import CLIENT_MANAGER_IMAGE from "../../assets/images/Vishesh.png";
import MANAGER_IMAGE from "../../assets/images/Archit.png";
import DUMMY_IMAGE from "../../assets/images/img-1.jpg";
import moment from "moment";

export default function UserDetailsCard({ userRole }) {
  const today = new Date();
  const formattedDate = moment().format("dddd, MMMM D, YYYY");

  const [employeeData, seetEmployeeData] = useState({
    profilePhoto: null,
    employeeName: null,
    employeeId: null,
  });
  useEffect(() => {
    switch (userRole) {
      case EMPLOYEE:
        {
          seetEmployeeData({
            ...employeeData,
            profilePhoto: PROFILE_PHOTO,
            employeeName: "Ashish",
            employeeId: "N0005",
          });
        }
        break;
      case MANAGER:
        {
          seetEmployeeData({
            ...employeeData,
            profilePhoto: MANAGER_IMAGE,
            employeeName: "Archit",
            employeeId: "N0004",
          });
        }
        break;
      case RECRUITER:
        {
          seetEmployeeData({
            ...employeeData,
            profilePhoto: RECRUITER_IMAGE,
            employeeName: "Prachi",
            employeeId: "N0003",
          });
        }
        break;
      case RECRUITER_MANAGER:
        {
          seetEmployeeData({
            ...employeeData,
            profilePhoto: RECRUITER_MANAGER_IMAGE,
            employeeName: "Ankita",
            employeeId: "N0002",
          });
        }
        break;
      case CLIENT_MANAGER:
        {
          seetEmployeeData({
            ...employeeData,
            profilePhoto: CLIENT_MANAGER_IMAGE,
            employeeName: "Vishesh",
            employeeId: "N0001",
          });
        }
        break;
      default:
        {
          seetEmployeeData({
            ...employeeData,
            profilePhoto: DUMMY_IMAGE,
            employeeName: "Dummy",
            employeeId: "N0000",
          });
        }
        break;
    }
  }, []);

  return (
    <div className='user-card card shadow-sm bg-white text-center ctm-border-radius'>
      <div className='user-info card-body'>
        <div className='user-avatar mb-4'>
          <img
            src={employeeData.profilePhoto}
            alt='User Avatar'
            className='img-fluid rounded-circle'
            width='100'
          />
        </div>
        <div className='user-details'>
          <h4>
            <b>Welcome {employeeData.employeeName}</b>
          </h4>
          <p>Employee Id - {employeeData.employeeId}</p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
