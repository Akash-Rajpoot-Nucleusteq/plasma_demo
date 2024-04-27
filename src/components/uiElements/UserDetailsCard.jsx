import React, { useEffect, useState } from "react";
import { getCurrentUserDetails } from "../../utility/authentication/auth";
import {
  CLIENT_MANAGER,
  EMPLOYEE,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
  SUPER_ADMIN,
} from "../../assets/common/constants";
import PROFILE_PHOTO from "../../assets/images/Profile Photo.jpg";
import RECRUITER_IMAGE from "../../assets/images/Prachi.png";
import RECRUITER_MANAGER_IMAGE from "../../assets/images/Ankita.png";
import CLIENT_MANAGER_IMAGE from "../../assets/images/Manjunath.png";
import MANAGER_IMAGE from "../../assets/images/Archit.png";
import SUPER_ADMIN_IMAGE from "../../assets/images/CEO.png";
import DUMMY_IMAGE from "../../assets/images/img-1.jpg";
import moment from "moment";

export default function UserDetailsCard({ userRole }) {
  const today = new Date();
  const formattedDate = moment().format("dddd, MMMM D, YYYY");

  const [employeeData, seetEmployeeData] = useState({
    profilePhoto: null,
    employeeName: null,
    employeeId: null,
    designation: null,
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
            designation: 'Engineer',
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
            designation: 'Technical Product Manager',
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
            designation: 'Recruiter',
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
            designation: 'Recruiter Manager',
          });
        }
        break;
      case CLIENT_MANAGER:
        {
          seetEmployeeData({
            ...employeeData,
            profilePhoto: CLIENT_MANAGER_IMAGE,
            employeeName: "Manjunath",
            employeeId: "N0001",
            designation: 'Senior Director',
          });
        }
        break;
      case SUPER_ADMIN:
        {
          seetEmployeeData({
            ...employeeData,
            profilePhoto: SUPER_ADMIN_IMAGE,
            employeeName: "Ashish",
            employeeId: "N0001",
            designation: 'CEO',
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
          <p>{employeeData.designation}</p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
