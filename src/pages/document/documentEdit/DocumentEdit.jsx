import React, { useState } from "react";
import SideBar from "../../../components/layout/SideBar";
import { HEADER_DOCUMENT } from "../../../assets/common/constants";
import { Row } from "antd";
import LabelAndDropdownField from "../../../components/uiElements/LabelAndDropdownField";
import {
  AdharPopUpUpload,
  CommonPopUpUpload,
  PanPopUpUpload,
  PassportPopUpUpload,
  WorkAuthorizationPopUpUpload,
} from "../../../components/uiElements/PopUpForDocuments";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import Header from "../../../components/layout/Header";

export default function EditDocument() {
  const [adharCard, setAdharCard] = useState({
    showAttachmentModal: false,
    adharAttachment: null,
    isDataAvailable: false,
    adharNumber: "",
    adharDob: "",
  });
  const [passport, setPassport] = useState({
    showAttachmentModal: false,
    passportAttachment: null,
    isDataAvailable: false,
    passportCountry: "",
    passportIssueDate: "",
    passportNumber: "",
    passportExpDate: "",
  });
  const [workAuthorization, setWorkAuthorization] = useState({
    showAttachmentModal: false,
    workAuthorizationAttachment: null,
    isDataAvailable: false,
    workAuthorizationNumber: "",
    workAuthorizationValidTill: "",
  });
  const [pan, setPan] = useState({
    showAttachmentModal: false,
    panAttachment: null,
    isDataAvailable: false,
    panNumber: "",
  });
  const [photo, setPhoto] = useState({
    showAttachmentModal: false,
    isDataAvailable: false,
    document: null,
  });
  const [resume, setResume] = useState({
    showAttachmentModal: false,
    isDataAvailable: false,
    document: null,
  });
  const [i94TravelHistory, setI94TravelHistory] = useState({
    showAttachmentModal: false,
    isDataAvailable: false,
    document: null,
  });
  const [photoId, setPhotoId] = useState({
    showAttachmentModal: false,
    isDataAvailable: false,
    document: null,
  });
  const [rentalAgreememt, setRentalAgreememt] = useState({
    showAttachmentModal: false,
    isDataAvailable: false,
    document: null,
  });
  const [educationDetails, setEducationDetails] = useState({
    showAttachmentModal: false,
    isDataAvailable: false,
    document: null,
  });
  const [i9Copy, setI9Copy] = useState({
    showAttachmentModal: false,
    isDataAvailable: false,
    document: null,
  });

  //For adhar Card
  function showAdharAttachment() {
    setAdharCard((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  function handleSubmitCustomAdhar(adhar) {
    console.log(adhar);
  }
  //End for adhar card

  //Starting for attach Passport
  function showPassportAttachment() {
    setPassport((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach Passport

  //Starting for attach Work Autorization
  function showWorkAuthorizationAttachment() {
    setWorkAuthorization((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach Work Autorization

  //Starting for attach Pan card.
  function showPanAttachment() {
    setPan((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach Pan card.

  //Starting for attach photo
  function showPhotoAttachment() {
    setPhoto((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach photo

  //Starting for attach Resume
  function showResumeAttachment() {
    setResume((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach Resume

  //Starting for attach I94 Travel History
  function showI94TravelHistoryAttachment() {
    setI94TravelHistory((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach I94 Travel History

  //Starting for attach Photo id.
  function showPhotoIdAttachment() {
    setPhotoId((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach Photo id

  //Starting for attach Rental Agreement.
  function showRentalAgreememtAttachment() {
    setRentalAgreememt((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach Rental Agreement

  //Starting for attach Education Details.
  function showEducationDetailsAttachment() {
    setEducationDetails((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach Education Details.

  //Starting for attach I9 copy.
  function showI9CopyAttachment() {
    setI9Copy((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }));
  }
  //End for attach I9 copy.

  const documentList = [
    "Adhar Card",
    "Pan Card",
    "Rental Agreement",
    "Education Certificate",
    "Photo Id",
    "I94 Travel",
    "I9 Copy",
    "Passport",
    "Work Authorization",
  ];

  function handleInputChange(event) {
    const navigationData = {
      [documentList[0]]: showAdharAttachment,
      [documentList[1]]: showPanAttachment,
      [documentList[2]]: showRentalAgreememtAttachment,
      [documentList[3]]: showEducationDetailsAttachment,
      [documentList[4]]: showPhotoIdAttachment,

      [documentList[5]]: showI94TravelHistoryAttachment,
      [documentList[6]]: showI9CopyAttachment,
      [documentList[7]]: showPassportAttachment,
      [documentList[8]]: showWorkAuthorizationAttachment,
    };
    documentList.includes(event.target.value) &&
      navigationData[event.target.value]();
  }

  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails()?.role}
                headerName={HEADER_DOCUMENT}
                currentPageName={"Document"}
              />
            </div>

            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='card shadow-sm ctm-border-radius'>
                <div className='card-body align-center'>
                  <div className='tab-content' id='v-pills-tabContent'>
                    <Row>
                      <LabelAndDropdownField
                        mdValue={12}
                        lgValue={12}
                        smValue={12}
                        xsValue={12}
                        controlId={"Select Document"}
                        labelText={"Select Document"}
                        showDefaultOption={true}
                        optionList={documentList}
                        handleInputChange={handleInputChange}
                      />
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Adhar*/}
      {adharCard.showAttachmentModal && (
        <AdharPopUpUpload
          adharCard={adharCard}
          setAdharCard={setAdharCard}
          handleSubmitCustom={handleSubmitCustomAdhar}
        />
      )}
      {/* Upload Passport*/}
      {passport.showAttachmentModal && (
        <PassportPopUpUpload passport={passport} setPassport={setPassport} />
      )}
      {/* Upload Work Authorization*/}
      {workAuthorization.showAttachmentModal && (
        <WorkAuthorizationPopUpUpload
          workAuthorization={workAuthorization}
          setWorkAuthorization={setWorkAuthorization}
        />
      )}
      {/* Upload Pan card*/}
      {pan.showAttachmentModal && <PanPopUpUpload pan={pan} setPan={setPan} />}

      {/* Upload Photo*/}
      {photo.showAttachmentModal && (
        <CommonPopUpUpload
          data={photo}
          setData={setPhoto}
          heading={"Upload Photo"}
        />
      )}
      {/* Upload Resume*/}
      {resume.showAttachmentModal && (
        <CommonPopUpUpload
          data={resume}
          setData={setResume}
          heading={"Upload Resume"}
        />
      )}

      {/* Upload I94 Travel History*/}
      {i94TravelHistory.showAttachmentModal && (
        <CommonPopUpUpload
          data={i94TravelHistory}
          setData={setI94TravelHistory}
          heading={"Upload I94 Travel History"}
        />
      )}
      {/* Upload Photo id*/}
      {photoId.showAttachmentModal && (
        <CommonPopUpUpload
          data={photoId}
          setData={setPhotoId}
          heading={"Upload Photo Id"}
        />
      )}
      {/* Upload Rental Agreeement*/}
      {rentalAgreememt.showAttachmentModal && (
        <CommonPopUpUpload
          data={rentalAgreememt}
          setData={setRentalAgreememt}
          heading={"Upload Rental Agreement"}
        />
      )}
      {/* Upload Education Details*/}
      {educationDetails.showAttachmentModal && (
        <CommonPopUpUpload
          data={educationDetails}
          setData={setEducationDetails}
          heading={"Upload Education Detail"}
        />
      )}
      {/* Upload I9 Copy*/}
      {i9Copy.showAttachmentModal && (
        <CommonPopUpUpload
          data={i9Copy}
          setData={setI9Copy}
          heading={"Upload I9 Copy"}
        />
      )}
    </>
  );
}
