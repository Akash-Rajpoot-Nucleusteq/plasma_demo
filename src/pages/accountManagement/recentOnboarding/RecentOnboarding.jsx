import React, { useState } from "react";
import SideBar from "./../../../components/layout/SideBar";
import ButtonComponent from "../../../components/uiElements/ButtonComponent.jsx";
import CommonTable from "../../../components/uiElements/CommonTable";
import CommonModal from "../../../components/uiElements/CommonModal";
import LabelAndInputField from "../../../components/uiElements/LabelAndInputField";
import LabelAndDropdownField from "../../../components/uiElements/LabelAndDropdownField";
import InputValidator from "../../../validations/InputValidator";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import { HEADER_ACCOUNT } from "../../../assets/common/constants.js";
import Header from "../../../components/layout/Header.jsx";

export const RecentOnboarding = () => {
  const allocationTypeList = ["Billable", "Investment"];

  const [showEmployeeDetailModal, setShowEmployeeDetailModal] = useState(false);
  const [showAssignClientModal, setShowAssignClientModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [formData, setFormData] = useState({
    customerName: "",
    businessUnit: "",
    project: "",
    hiringManager: "",
    positionName: "",
    skill: "",
    rate: "",
    customerBillingRate: "",
    margin: "",
    allocationType: "",
    teamLead: "",
  });

  const [formError, setFormError] = useState({
    errorCustomerName: "",
    errorBusinessUnit: "",
    errorProject: "",
    errorHiringManager: "",
    errorPositionName: "",
    errorSkill: "",
    errorRate: "",
    errorCustomerBillingRate: "",
    errorMargin: "",
    errorAllocationType: "",
    errorTeamLead: "",
  });

  const dummyData = [
    {
      Sno: 1,
      firstName: "Diksha",
      lastName: "Mandal",
      clientName: "--",
      clientManager: "--",
      clientPartner: "--",
      engagementManager: "HRM",
      joiningDate: "17 July 2023",
      status: "Active",
    },
    {
      Sno: 2,
      firstName: "Ashish",
      lastName: "Sahu",
      clientName: "--",
      clientManager: "--",
      clientPartner: "--",
      engagementManager: "HRM",
      joiningDate: "12 December 2023",
      status: "Active",
    },
    {
      Sno: 3,
      firstName: "Akash",
      lastName: "Rajpoot",
      clientName: "--",
      clientManager: "--",
      clientPartner: "--",
      engagementManager: "HRM",
      joiningDate: "17 July 2023",
      status: "Active",
    },
    {
      Sno: 4,
      firstName: "Anushree",
      lastName: "Das",
      clientName: "--",
      clientManager: "--",
      clientPartner: "--",
      engagementManager: "HRM",
      joiningDate: "10 January 2024",
      status: "Active",
    },
    {
      Sno: 5,
      firstName: "Priya",
      lastName: "Dubey",
      clientName: "--",
      clientManager: "--",
      clientPartner: "--",
      engagementManager: "HRM",
      joiningDate: "23 September 2023",
      status: "Active",
    },
  ];

  const column = [
    {
      title: "S No",
      dataIndex: "Sno",
      key: "Sno",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Client Manager",
      dataIndex: "clientManager",
      key: "clientManager",
    },
    {
      title: "Client Partner",
      dataIndex: "clientPartner",
      key: "clientPartner",
    },
    {
      title: "Engagement Manager",
      dataIndex: "engagementManager",
      key: "engagementManager",
    },
    {
      title: "Joining Date",
      dataIndex: "joiningDate",
      key: "joiningDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ButtonComponent
          buttonText={"Assign"}
          variant={"primary"}
          className={"btn btn-theme button-1 text-white ctm-border-radius "}
          onClickHandler={() => handleApproveClick(record)}
        />
      ),
    },
  ];

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
    setShowEmployeeDetailModal(true);
  };

  const handleApproveClick = (employee) => {
    setSelectedEmployee(employee);
    setShowAssignClientModal(true);
  };

  const handleEmployeeDetailModalClose = () => {
    setShowEmployeeDetailModal(false);
    setSelectedEmployee(null);
  };

  const handleApproveModalClose = () => {
    setShowAssignClientModal(false);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const checkForError = () => {
    setFormError((prevState) => ({
      ...prevState,
      errorCustomerName: InputValidator.isEmpty(formData.customerName),
      errorBusinessUnit: InputValidator.isEmpty(formData.businessUnit),
      errorProject: InputValidator.isEmpty(formData.project),
      errorHiringManager: InputValidator.isEmpty(formData.hiringManager),
      errorPositionName: InputValidator.isEmpty(formData.positionName),
      errorSkill: InputValidator.isEmpty(formData.skill),
      errorRate: InputValidator.isEmpty(formData.rate),
      errorCustomerBillingRate: InputValidator.isEmpty(
        formData.customerBillingRate
      ),
      errorMargin: InputValidator.isEmpty(formData.margin),
      errorAllocationType: InputValidator.isEmpty(formData.allocationType),
      errorTeamLead: InputValidator.isEmpty(formData.teamLead),
    }));
  };

  function handleModalSubmit() {
    checkForError();
    if (!InputValidator.isObjectEmpty(formData)) {
    } else {
      console.error("Failed from assign client modal");
    }
  }

  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails().role}
                headerName={HEADER_ACCOUNT}
                currentPageName={"Available Pool"}
              />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-12'>
              <CommonTable
                data={dummyData}
                columns={column}
                tableTitle={"Available Pool"}
              />
            </div>
          </div>
        </div>
      </div>

      {showEmployeeDetailModal && (
        <CommonModal
          fieldNames={column}
          data={selectedEmployee}
          showModal={showEmployeeDetailModal}
          modalHeading={"Employee Details"}
          handleCloseModal={handleEmployeeDetailModalClose}
        />
      )}

      {showAssignClientModal && (
        <CommonModal
          fieldNames={column}
          data={selectedEmployee}
          showModal={showAssignClientModal}
          modalHeading={"Assign client to employee"}
          handleCloseModal={handleApproveModalClose}
          extraFields={
            <>
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"customerName"}
                labelText={"Customer Name"}
                isCompulsary={true}
                placeholder={"Enter Customer Name"}
                inputType={"text"}
                value={formData.customerName}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorCustomerName}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"businessUnit"}
                labelText={"Business Unit"}
                isCompulsary={true}
                placeholder={"Enter Business Unit"}
                inputType={"text"}
                value={formData.businessUnit}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorBusinessUnit}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"project"}
                labelText={"Project"}
                isCompulsary={true}
                placeholder={"Enter Project"}
                inputType={"text"}
                value={formData.project}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorProject}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"hiringManager"}
                labelText={"Hiring Manager"}
                isCompulsary={true}
                placeholder={"Enter Hiring Manager"}
                inputType={"text"}
                value={formData.hiringManager}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorHiringManager}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"positionName"}
                labelText={"Position Name"}
                isCompulsary={true}
                placeholder={"Enter Position Name"}
                inputType={"text"}
                value={formData.positionName}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorPositionName}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"skill"}
                labelText={"Skill"}
                isCompulsary={true}
                placeholder={"Enter Skill"}
                inputType={"text"}
                value={formData.skill}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorSkill}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"rate"}
                labelText={"Rate"}
                isCompulsary={true}
                placeholder={"Enter Rate"}
                inputType={"number"}
                value={formData.rate}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorRate}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"customerBillingRate"}
                labelText={"Customer Billing Rate"}
                isCompulsary={true}
                placeholder={"Enter Customer Billing Rate"}
                inputType={"text"}
                value={formData.customerBillingRate}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorCustomerBillingRate}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"margin"}
                labelText={"Margin"}
                isCompulsary={true}
                placeholder={"Enter Margin"}
                inputType={"text"}
                value={formData.margin}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorMargin}
              />
              <LabelAndDropdownField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"allocationType"}
                labelText={"Allocation Type"}
                isCompulsary={true}
                showDefaultOption={true}
                value={formData.allocationType}
                optionList={allocationTypeList}
                handleInputChange={handleInputChange}
                errorMessage={formError.errorAllocationType}
              />
              <LabelAndInputField
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={"teamLead"}
                labelText={"Team Lead"}
                isCompulsary={true}
                placeholder={"Enter Team Lead"}
                inputType={"text"}
                value={formData.teamLead}
                handleInputChange={handleInputChange}
                isRequired={true}
                errorMessage={formError.errorTeamLead}
              />
            </>
          }
          extraButton={
            <>
              <ButtonComponent
                variant={"primary"}
                className={
                  "btn btn-theme button-1 text-white ctm-border-radius "
                }
                buttonText={"Assign"}
                onClickHandler={handleModalSubmit}
              />
            </>
          }
        />
      )}
    </>
  );
};
