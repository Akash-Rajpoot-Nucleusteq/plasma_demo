import React, { useState } from "react";
import SideBar from "./../../components/layout/SideBar";
import { getCurrentUserDetails } from "../../utility/authentication/auth";
import LabelAndInputField from "../../components/uiElements/LabelAndInputField";
import LabelAndDropdownField from "../../components/uiElements/LabelAndDropdownField";
import LabelAndTextarea from "../../components/uiElements/LabelAndTextarea";
import ButtonComponent from "../../components/uiElements/ButtonComponent";
import CommonModal from "../../components/uiElements/CommonModal";
import InputValidator from "../../validations/InputValidator";
import { Row } from "antd";
import Leavedetails from "./leaveDetails/LeaveDetails";
import ApprovedLeaves from "./approvedLeave/ApprovedLeaves";
import LeavesToBeApproved from "./leavesToBeApproved/LeaveToBeApproved";
import { getCurrentDate } from "../../utility/commonFunctions/CommonFunctions";
import {
  CLIENT_MANAGER,
  MANAGER,
  RECRUITER_MANAGER,
} from "../../assets/common/constants";
import { HEADER_LEAVE } from "../../assets/common/constants";
import { Form } from "react-bootstrap";
import Header from "../../components/layout/Header";

const Leave = () => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    leaveType: "",
    halfDay: "No",
    reason: "",
  });

  const [formError, setFormError] = useState({
    errorFromDate: "",
    errorToDate: "",
    errorLeaveType: "",
    errorReason: "",
  });

  const [showApplyLeaveConfirmationModal, setShowApplyLeaveConfirmationModal] =
    useState(false);

  const userDetails = getCurrentUserDetails();

  const leaveOptions = [
    "Sick Leave",
    "Paid Leave",
    "Casual Leave",
    "Comp Off",
    "Sabotical Leave",
    "Maternity Leave",
  ];
  const halfDayOptions = ["Yes", "No"];

  function handleShowApplyLeaveModal() {
    setShowApplyLeaveConfirmationModal(true);
  }
  function handleApplyLeaveSubmitButtonHandle() {
    setShowApplyLeaveConfirmationModal(false);
  }
  function handleCloseApplyLeaveModal() {
    setShowApplyLeaveConfirmationModal(false);
  }

  const giveNameWithError = (name) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const nameWithError = "error" + capitalizedName;
    return nameWithError;
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const errorId = giveNameWithError(id);
    if (id === "halfDay") {
      setFormData((prevState) => ({ ...prevState, [id]: value }));
    } else {
      setFormData((prevState) => ({ ...prevState, [id]: value }));
      setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
    }
  };

  const checkForError = () => {
    setFormError((prevState) => ({
      ...prevState,
      errorFromDate: InputValidator.isEmpty(formData.fromDate),
      errorToDate: InputValidator.isEmpty(formData.toDate),
      errorLeaveType: InputValidator.isEmpty(formData.leaveType),
      errorReason: InputValidator.isEmpty(formData.reason),
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    checkForError();
    if (InputValidator.isObjectEmpty(formData)) {
      console.error("error while submit data: ", formData);
    } else {
      handleShowApplyLeaveModal();
    }
  }

  function handleClearButtonClick() {
    setFormData({
      ...formData,
      fromDate: "",
      toDate: "",
      leaveType: "",
      reason: "",
      halfDay: "No",
    });
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
                headerName={HEADER_LEAVE}
                currentPageName={"Leave"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card ctm-border-radius shadow-sm'>
                    <div className='card-header'>
                      <h4 className='card-title mb-0'>Apply Leave</h4>
                    </div>
                    <div className='ctm-border-radius p-4 col-md-12'>
                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <LabelAndInputField
                            mdValue={6}
                            lgValue={6}
                            smValue={12}
                            xsValue={12}
                            controlId={"fromDate"}
                            labelText={"From Date"}
                            isCompulsary={true}
                            inputType={"date"}
                            value={formData.fromDate}
                            handleInputChange={handleInputChange}
                            minDate={getCurrentDate()}
                            errorMessage={formError.errorFromDate}
                          />
                          <LabelAndInputField
                            mdValue={6}
                            lgValue={6}
                            smValue={12}
                            xsValue={12}
                            controlId={"toDate"}
                            labelText={"To Date"}
                            isCompulsary={true}
                            inputType={"date"}
                            placeholder={"Enter To Date"}
                            value={formData.toDate}
                            handleInputChange={handleInputChange}
                            minDate={formData.fromDate}
                            errorMessage={formError.errorToDate}
                          />
                          <LabelAndDropdownField
                            mdValue={6}
                            lgValue={6}
                            smValue={12}
                            xsValue={12}
                            controlId={"leaveType"}
                            labelText={"Leave Type"}
                            isCompulsary={true}
                            showDefaultOption={true}
                            value={formData.leaveType}
                            optionList={leaveOptions}
                            handleInputChange={handleInputChange}
                            errorMessage={formError.errorLeaveType}
                          />
                          {formData.fromDate &&
                            formData.toDate &&
                            formData.fromDate === formData.toDate && (
                              <LabelAndDropdownField
                                mdValue={6}
                                lgValue={6}
                                smValue={12}
                                xsValue={12}
                                controlId={"halfDay"}
                                labelText={"Half Day"}
                                isCompulsary={true}
                                showDefaultOption={true}
                                value={formData.halfDay}
                                optionList={halfDayOptions}
                                handleInputChange={handleInputChange}
                              />
                            )}
                        </Row>
                        <LabelAndTextarea
                          mdValue={12}
                          controlId={"reason"}
                          labelText={"Reason"}
                          isCompulsary={true}
                          value={formData.reason}
                          placeholder={"Enter Your Reason"}
                          rows={4}
                          handleInputChange={handleInputChange}
                          errorMessage={formError.errorReason}
                        />
                        <div className='row justify-content-center'>
                          <div className='col-auto'>
                            <ButtonComponent
                              type={"submit"}
                              buttonText={"Apply"}
                              className={
                                "btn btn-theme button-1 text-white ctm-border-radius"
                              }
                            />

                            <ButtonComponent
                              variant={"danger"}
                              buttonText={"Clear"}
                              className={
                                "btn btn-danger ctm-border-radius text-center"
                              }
                              onClickHandler={handleClearButtonClick}
                            />
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className='col-md-12'>
                  <Leavedetails />
                </div>
                {(userDetails.role === MANAGER ||
                  userDetails.role === RECRUITER_MANAGER ||
                  userDetails.role === CLIENT_MANAGER) && (
                  <>
                    <div className='col-md-12'>
                      <LeavesToBeApproved />
                    </div>

                    <div className='col-md-12'>
                      <ApprovedLeaves />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showApplyLeaveConfirmationModal && (
        <CommonModal
          showModal={showApplyLeaveConfirmationModal}
          modalHeading={"Applying for the leave"}
          handleCloseModal={handleCloseApplyLeaveModal}
          extraFields={
            <div class='container'>
              <div class='row'>
                <div class='col'>
                  <div class='d-flex justify-content-center'>
                    <h5>Do you really want apply for the leave?</h5>
                  </div>
                </div>
              </div>
            </div>
          }
          extraButton={
            <>
              <ButtonComponent
                className={
                  "btn btn-theme button-1 ctm-border-radius text-white text-center"
                }
                variant={"primary"}
                buttonText={"Confirm"}
                onClickHandler={handleApplyLeaveSubmitButtonHandle}
              />
            </>
          }
        />
      )}
    </>
  );
};

export default Leave;
