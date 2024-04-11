import React, { Component, useState } from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Form, Col, Row, Button, Modal } from 'react-bootstrap';

import { handleDownload } from '../../commonFunctions/CommonFunctions'
import InputValidator from "../../validations/InputValidator";
import { AdharPopUpUpload, CommonPopUpUpload, PanPopUpUpload, PassportPopUpUpload } from "../../components/PopUpForDocuments";
import DocumentAttachmentField from "../../components/DocumentAttachmentField";


export default function Document() {

  const [adharCard, setAdharCard] = useState({
    showAttachmentModal: false,
    adharAttachment: null,
    commingFromBackend: false,
    adharNumber: '',
    adharDob: '',
  })
  const [passport, setPassport] = useState({
    showAttachmentModal: false,
    passportAttachment: null,
    commingFromBackend: false,
    passportCountry: '',
    passportIssueDate: '',
    passportNumber: '',
    passportExpDate: '',
  })
  const [workAuthorization, setWorkAuthorization] = useState({
    showAttachmentModal: false,
    workAuthorizationAttachment: null,
    commingFromBackend: false,
    workAuthorizationNumber: '',
    workAuthorizationValidTill: '',
  })
  const [pan, setPan] = useState({
    showAttachmentModal: false,
    panAttachment: null,
    commingFromBackend: false,
    panNumber: '',
  })
  const [photo, setPhoto] = useState({
    showAttachmentModal: false,
    commingFromBackend: false,
    document: null,
  })
  const [resume, setResume] = useState({
    showAttachmentModal: false,
    commingFromBackend: false,
    document: null,
  })
  const [i94TravelHistory, setI94TravelHistory] = useState({
    showAttachmentModal: false,
    commingFromBackend: false,
    document: null,
  })
  const [photoId, setPhotoId] = useState({
    showAttachmentModal: false,
    commingFromBackend: false,
    document: null,
  })
  const [rentalAgreememt, setRentalAgreememt] = useState({
    showAttachmentModal: false,
    commingFromBackend: false,
    document: null,
  })
  const [educationDetails, setEducationDetails] = useState({
    showAttachmentModal: false,
    commingFromBackend: false,
    document: null,
  })
  const [i9Copy, setI9Copy] = useState({
    showAttachmentModal: false,
    commingFromBackend: false,
    document: null,
  })




  //For adhar Card
  function showAdharAttachment() {
    setAdharCard((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }))
  }
  function handleRemoveAdharCard() {
    if (InputValidator.isObjectEmpty(adharCard)) {
      setAdharCard((prevState) => ({
        ...prevState,
        showAttachmentModal: false,
        commingFromBackend: false,
        adharAttachment: null,
        adharNumber: '',
        adharDob: '',
      }))
    } else {
      setAdharCard((prevState) => ({
        ...prevState,
        commingFromBackend: false,
        adharAttachment: null,
        adharNumber: '',
        adharDob: '',
      }))
    }
  }
  //End for adhar card

  //Starting for attach Passport
  function showPassportAttachment() {
    setPassport((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }))
  }
  function handleRemovePassport() {
    if (InputValidator.isObjectEmpty(passport)) {
      setPassport((prevState) => ({
        ...prevState,
        showAttachmentModal: false,
        commingFromBackend: false,
        passportAttachment: null,
        passportCountry: '',
        passportIssueDate: '',
        passportNumber: '',
        passportExpDate: '',
      }))
    } else {
      setPassport((prevState) => ({
        ...prevState,
        commingFromBackend: false,
        passportAttachment: null,
        passportCountry: '',
        passportIssueDate: '',
        passportNumber: '',
        passportExpDate: '',
      }))
    }
  }
  //End for attach Passport

  //Starting for attach Pan card.
  function showPanAttachment() {
    setPan((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }))
  }
  function handleRemovePan() {
    if (InputValidator.isObjectEmpty(pan)) {
      setPan((prevState) => ({
        ...prevState,
        showAttachmentModal: false,
        commingFromBackend: false,
        panNumber: '',
        panAttachment: null,
      }))
    } else {
      setPan((prevState) => ({
        ...prevState,
        commingFromBackend: false,
        panNumber: '',
        panAttachment: null,
      }))
    }
  }
  //End for attach Pan card.


  //Starting for attach photo
  function showPhotoAttachment() {
    setPhoto((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }))
  }
  function handleRemovePhoto() {
    setPhoto((prevState) => ({
      ...prevState,
      showAttachmentModal: false,
      commingFromBackend: false,
      document: null,
    }))
  }
  //End for attach photo


  //Starting for attach Resume
  function showResumeAttachment() {
    setResume((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }))
  }
  function handleRemoveResume() {
    setResume((prevState) => ({
      ...prevState,
      showAttachmentModal: false,
      commingFromBackend: false,
      document: null,
    }))
  }
  //End for attach Resume

  return (
    <>
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <Sidebar />
            </div>

            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='card ctm-border-radius shadow-sm'>
                <div className='card-header'>
                  <h4 className='card-title doc d-inline-block mb-0'>
                    Documents
                  </h4>
                </div>

                <div className='card-body doc-boby'>
                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className='card-title text-primary mb-0'>Resume (pdf only)</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <DocumentAttachmentField
                              documentState={resume}
                              handleRemove={handleRemoveResume}
                              handleView={showResumeAttachment}
                              handleUpload={showResumeAttachment}
                              downloadDocument={handleDownload}
                              documentForDownload={resume.document}
                              fileName={'resume'}
                              buttonText={''}
                              controlId={'resume'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className='card-title text-primary mb-0'>Photo (pdf only)</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <DocumentAttachmentField
                              documentState={photo}
                              handleRemove={handleRemovePhoto}
                              handleView={showPhotoAttachment}
                              handleUpload={showPhotoAttachment}
                              downloadDocument={handleDownload}
                              documentForDownload={photo.document}
                              fileName={'photo'}
                              controlId={'photo'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aadhar Card */}
                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className='card-title text-primary mb-0'>Aadhaar Card (pdf only)</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <DocumentAttachmentField
                              documentState={adharCard}
                              handleRemove={handleRemoveAdharCard}
                              handleView={showAdharAttachment}
                              handleUpload={showAdharAttachment}
                              downloadDocument={handleDownload}
                              documentForDownload={adharCard.adharAttachment}
                              fileName={'AadharCard'}
                              controlId={'adhar'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pan Card */}
                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className=' text-primary card-title mb-0'>Pan Card (pdf only)</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <DocumentAttachmentField
                              documentState={pan}
                              handleRemove={handleRemovePan}
                              handleView={showPanAttachment}
                              handleUpload={showPanAttachment}
                              downloadDocument={handleDownload}
                              documentForDownload={pan.panAttachment}
                              fileName={'PanCard'}
                              controlId={'panCard'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Passport */}
                  <div className='card shadow-none'>
                    <div className='card-header'>
                      <h5 className=' text-primary card-title mb-0'>Passport (pdf only)</h5>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='document-up'>
                            <DocumentAttachmentField
                              documentState={passport}
                              handleRemove={handleRemovePassport}
                              handleView={showPassportAttachment}
                              handleUpload={showPassportAttachment}
                              downloadDocument={handleDownload}
                              documentForDownload={passport.passportAttachment}
                              fileName={'Passport'}
                              controlId={'passport'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='add-doc text-center'>
                    <Link
                      href='#0'
                      className='btn btn-theme  button-1 ctm-border-radius text-white text-center'
                    >
                      Submit Documents
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Upload Adhar*/}
      <AdharPopUpUpload
        adharCard={adharCard}
        setAdharCard={setAdharCard}
        handleCloseButton={handleRemoveAdharCard}
      />
      {/* Upload Passport*/}
      <PassportPopUpUpload
        passport={passport}
        setPassport={setPassport}
        handleCloseButton={handleRemovePassport}
      />

      {/* Upload Pan card*/}
      <PanPopUpUpload
        pan={pan}
        setPan={setPan}
        handleCloseButton={handleRemovePan}
      />

      {/* Upload Photo*/}
      <CommonPopUpUpload
        data={photo}
        setData={setPhoto}
        heading={"Upload Photo"}
      />
      {/* Upload Resume*/}
      <CommonPopUpUpload
        data={resume}
        setData={setResume}
        heading={"Upload Resume"}
      />
    </>
  );
}

