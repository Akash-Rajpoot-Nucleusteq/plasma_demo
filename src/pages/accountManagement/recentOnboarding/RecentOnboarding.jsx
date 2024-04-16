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
import LabelAndDropdownFieldForObject from "../../../components/uiElements/LabelAndDropdownFieldForObject.jsx";

export const RecentOnboarding = () => {
  const allocationTypeList = ["Billable", "Investment"];

  const [showEmployeeDetailModal, setShowEmployeeDetailModal] = useState(false);
  const [showAssignClientModal, setShowAssignClientModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [formData, setFormData] = useState({
    clientId: "",
    positionName: "",
    skill: "",
    rate: "",
    customerBillingRate: "",
    margin: "",
    allocationType: "",
  });

  const [selectedClient, setSelectedClient] = useState({
    clientName: "",
    businessUnit: "",
    project: "",
    teamLead: '',
    hiringManager: '',
  })


  const [formError, setFormError] = useState({
    errorClient: '',
    errorPositionName: "",
    errorSkill: "",
    errorRate: "",
    errorCustomerBillingRate: "",
    errorMargin: "",
    errorAllocationType: "",
  });

  const dummyData = [
    {
      employeeId: 'N0011',
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
      employeeId: 'N0012',
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
      employeeId: 'N0013',
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
      employeeId: 'N0014',
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
      employeeId: 'N0015',
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
      title: "Employee Id",
      dataIndex: "employeeId",
      key: "employeeId",
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

  const clientList = [
    {
      clientId: 1,
      clientName: "Amex",
      businessUnit: "Finance",
      project: "Financial Reporting System",
      hiringManager: "John Doe",
      teamLead: "Alice Smith"
    },
    {
      clientId: 2,
      clientName: "AAA",
      businessUnit: "Marketing",
      project: "Advertising Campaign",
      hiringManager: "Jane Smith",
      teamLead: "Bob Johnson"
    },
    {
      clientId: 3,
      clientName: "Kava",
      businessUnit: "IT",
      project: "Website Redesign",
      hiringManager: "David Brown",
      teamLead: "Emily Davis"
    }
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

  const clearData = () => {
    setFormData({
      ...formData,
      clientId: "",
      hiringManager: "",
      positionName: "",
      skill: "",
      rate: "",
      customerBillingRate: "",
      margin: "",
      allocationType: "",
      teamLead: "",
    })
    setSelectedClient({
      ...selectedClient,
      clientName: "",
      businessUnit: "",
      project: "",
    })
  };

  const handleApproveModalClose = () => {
    clearData();
    setShowAssignClientModal(false);
  };

  // Used to return variable name with error prefix.
  const giveNameWithError = (name) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const nameWithError = "error" + capitalizedName;
    return nameWithError;
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const errorId = giveNameWithError(id);
    setFormData((prevState) => ({ ...prevState, [id]: value }));
    setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
  };

  const checkForError = () => {
    setFormError((prevState) => ({
      ...prevState,
      errorClient: InputValidator.isObjectEmpty(selectedClient) ? "Select a Client" : '',
      errorPositionName: InputValidator.isEmpty(formData.positionName),
      errorSkill: InputValidator.isEmpty(formData.skill),
      errorRate: InputValidator.isEmpty(formData.rate),
      errorCustomerBillingRate: InputValidator.isEmpty(
        formData.customerBillingRate
      ),
      errorMargin: InputValidator.isEmpty(formData.margin),
      errorAllocationType: InputValidator.isEmpty(formData.allocationType),
    }));
  };

  function handleModalSubmit() {
    checkForError();
    if (!InputValidator.isObjectEmpty(formData)) {
      console.log('modal submitted: ', formData);
      setShowAssignClientModal(false);
    } else {
      console.error("Failed from assign client modal");
      console.log(formError);
    }
  }

  function setClientFromDropdown(value, controlId) {
    console.log('selected client is : ', value);
    console.log('selected controlId is : ', controlId);
    const errorId = giveNameWithError(controlId);
    setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
    setFormData({
      ...formData,
      clientId: value.clientId
    })
    setSelectedClient({
      ...selectedClient,
      clientName: value.clientName,
      businessUnit: value.businessUnit,
      project: value.project,
      teamLead: value.teamLead,
      hiringManager: value.hiringManager,

    })
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
              <LabelAndDropdownFieldForObject
                mdValue={6}
                lgValue={6}
                smValue={12}
                xsValue={12}
                controlId={'client'}
                labelText={'Client'}
                isCompulsary={true}
                optionList={clientList.map((client) => ({
                  label: `${client.clientName}`,
                  value: client,
                }))}
                handleInputChange={setClientFromDropdown}
                errorMessage={formError.errorClient}
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
                value={selectedClient.businessUnit}
                isReadOnly={true}
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
                value={selectedClient.project}
                isReadOnly={true}
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
                value={selectedClient.hiringManager}
                handleInputChange={handleInputChange}
                isReadOnly={true}
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
                value={selectedClient.teamLead}
                handleInputChange={handleInputChange}
                isReadOnly={true}
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
                formatOption={true}
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
