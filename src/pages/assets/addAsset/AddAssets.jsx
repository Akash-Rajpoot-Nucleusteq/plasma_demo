import React, { useState } from "react";
import SideBar from "../../../components/layout/SideBar";
import LabelAndInputField from "../../../components/uiElements/LabelAndInputField";
import LabelAndDropdownField from "../../../components/uiElements/LabelAndDropdownField";
import ButtonComponent from "../../../components/uiElements/ButtonComponent";
import { Row } from "react-bootstrap";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import { HEADER_ASSET } from "../../../assets/common/constants";
import Header from "../../../components/layout/Header.jsx";

export const AddAssets = () => {
  const [formData, setFormData] = useState({
    assetName: "",
    serialNo: "",
    modelNo: "",
    allocationDate: "",
    provider: "",
    clientPartner: "",
    clientName: "",
    workLocation: "",
    workType: "",
    assetType: "",
  });

  const assetTypeList = ["Laptop", "Desktop", "Printer"];

  const handleChangeById = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
                        isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Asset Name"}
                        value={formData.assetName}
                        handleInputChange={handleChangeById}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"serialNo"}
                        labelText={"Serial Number"}
                        isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Serial Number"}
                        value={formData.serialNo}
                        handleInputChange={handleChangeById}
                      />
                    </Row>
                    <Row>
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"modelNo"}
                        labelText={"Model Number"}
                        isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Model Number"}
                        value={formData.modelNo}
                        handleInputChange={handleChangeById}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"allocationDate"}
                        labelText={"Allocation Date"}
                        isCompulsary={true}
                        inputType={"date"}
                        placeholder={"Enter Allocation Date"}
                        value={formData.allocationDate}
                        handleInputChange={handleChangeById}
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
                        isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Provider"}
                        value={formData.provider}
                        handleInputChange={handleChangeById}
                      />
                      <LabelAndDropdownField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"assetType"}
                        labelText={"Asset Type"}
                        isCompulsary={true}
                        showDefaultOption={true}
                        value={formData.assetType}
                        optionList={assetTypeList}
                        handleInputChange={handleChangeById}
                        formatOption={true}
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
                        isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Client Name"}
                        value={formData.clientName}
                        handleInputChange={handleChangeById}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"clientPartner"}
                        labelText={"Client Partner"}
                        isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Client Partner"}
                        value={formData.clientPartner}
                        handleInputChange={handleChangeById}
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
                        isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Work Location"}
                        value={formData.workLocation}
                        handleInputChange={handleChangeById}
                      />
                      <LabelAndInputField
                        mdValue={6}
                        lgValue={6}
                        smValue={12}
                        xsValue={12}
                        controlId={"workType"}
                        labelText={"Work Type"}
                        isCompulsary={true}
                        inputType={"text"}
                        placeholder={"Enter Work Type"}
                        value={formData.workType}
                        handleInputChange={handleChangeById}
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
