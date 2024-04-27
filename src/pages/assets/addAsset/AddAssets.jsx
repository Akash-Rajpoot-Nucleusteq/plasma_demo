import React, { useState } from "react";
import SideBar from "../../../components/layout/SideBar";
import LabelAndInputField from "../../../components/uiElements/LabelAndInputField";
import LabelAndDropdownField from "../../../components/uiElements/LabelAndDropdownField";
import ButtonComponent from "../../../components/uiElements/ButtonComponent";
import { Row } from "react-bootstrap";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import { HEADER_ASSET } from "../../../assets/common/constants";
import Header from "../../../components/layout/Header.jsx";
import { getNameWithErrorPrefix } from "../../../utility/commonFunctions/CommonFunctions.jsx";
import InputValidator from "../../../validations/InputValidator.jsx";

export const AddAssets = () => {
  const [formData, setFormData] = useState({
    assetName: "",
    serialNo: "",
    allocationDate: "",
    provider: "",
    clientPartner: "",
    clientName: "",
    workLocation: "",
    assetType: "",
  });
  const [formError, setFormError] = useState({
    errorAssetName: "",
    errorSerialNo: "",
    errorAllocationDate: "",
    errorProvider: "",
    errorClientPartner: "",
    errorClientName: "",
    errorWorkLocation: "",
    errorAssetType: "",
  });

  const assetTypeList = ["Laptop", "Desktop", "Printer"];

  const handleChangeById = (e) => {
    const { id, value } = e.target;
    const errorId = getNameWithErrorPrefix(id);
    setFormData({
      ...formData,
      [id]: value,
    });
    setFormError((prevState) => ({ ...prevState, [errorId]: "" }));
  };

  const checkForError = () => {
    setFormError((prevState) => ({
      ...prevState,
      errorAssetName: InputValidator.isEmpty(formData.assetName),
      errorSerialNo: InputValidator.isEmpty(formData.serialNo),
      errorAllocationDate: InputValidator.isEmpty(formData.allocationDate),
      errorProvider: InputValidator.isEmpty(formData.provider),
      errorClientPartner: InputValidator.isEmpty(formData.clientPartner),
      errorClientName: InputValidator.isEmpty(formData.clientName),
      errorWorkLocation: InputValidator.isEmpty(formData.workLocation),
      errorAssetType: InputValidator.isEmpty(formData.assetType),
    })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForError();
    if (InputValidator.isFormErrorEmpty(formError)
      && !InputValidator.isObjectEmpty(formData)) {
    } else {
      console.error('error while submitting adding asset');
    }
  };

  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails().role}
                headerName={HEADER_ASSET}
                currentPageName={"Add Asset"}
              />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-12'>
              <div className='card shadow-sm ctm-border-radius'>
                <div className='card-header align-center'>
                  <h4 className='card-title mb-0'>Add Assets</h4>
                </div>
                <div className='card-body'>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"assetName"}
                        labelText={"Asset Name"}
                        //isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Asset Name"}
                        value={formData.assetName}
                        handleInputChange={handleChangeById}
                        errorMessage={formError.errorAssetName}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"serialNo"}
                        labelText={"Serial Number"}
                        //isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Serial Number"}
                        value={formData.serialNo}
                        handleInputChange={handleChangeById}
                        errorMessage={formError.errorSerialNo}
                      />
                    </Row>
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"allocationDate"}
                        labelText={"Allocation Date"}
                        //isCompulsary={true}
                        inputType={"date"}
                        placeholder={"Enter Allocation Date"}
                        value={formData.allocationDate}
                        handleInputChange={handleChangeById}
                        errorMessage={formError.errorAllocationDate}
                      />
                    </Row>
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"provider"}
                        labelText={"Provider"}
                        //isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Provider"}
                        value={formData.provider}
                        handleInputChange={handleChangeById}
                        errorMessage={formError.errorProvider}
                      />
                      <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"assetType"}
                        labelText={"Asset Type"}
                        //isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.assetType}
                        optionList={assetTypeList}
                        handleInputChange={handleChangeById}
                        formatOption={true}
                        errorMessage={formError.errorAssetType}
                      />
                    </Row>
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"clientName"}
                        labelText={"Client Name"}
                        //isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Client Name"}
                        value={formData.clientName}
                        handleInputChange={handleChangeById}
                        errorMessage={formError.errorClientName}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"clientPartner"}
                        labelText={"Client Partner"}
                        //isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Client Partner"}
                        value={formData.clientPartner}
                        handleInputChange={handleChangeById}
                        errorMessage={formError.errorClientPartner}
                      />
                    </Row>
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"workLocation"}
                        labelText={"Work Location"}
                        //isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Work Location"}
                        value={formData.workLocation}
                        handleInputChange={handleChangeById}
                        errorMessage={formError.errorWorkLocation}
                      />
                    </Row>
                    <ButtonComponent
                      variant={"primary"}
                      type={"submit"}
                      className={
                        "btn btn-theme button-1 text-white ctm-border-radius "
                      }
                      buttonText={"Submit"}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
