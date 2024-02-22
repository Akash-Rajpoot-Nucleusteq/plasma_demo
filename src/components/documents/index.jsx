import React, { Component, useState } from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Form, Col, Row, Button, Modal } from 'react-bootstrap';

import { DocumentAttachmentField } from '../common-components/InputComponents'
import { downloadDocument } from '../common-functions/CommonFunctions'
import {
  AdharPopUpUpload,
  PassportPopUpUpload,
  PanPopUpUpload, CommonPopUpUpload
} from '../recruiter/CommonForm/PopUpForDocuments';


export default function Document() {

  //Starting for attach photo
  const [photo, setPhoto] = useState({
    showAttachmentModal: false,
    document: null,
  })
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
      document: null,
    }))
  }
  //End for attach photo

  //Starting for attach Resume
  const [resume, setResume] = useState({
    showAttachmentModal: false,
    document: null,
  })
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
      document: null,
    }))
  }
  //End for attach Resume

  //For adhar Card
  const [adharCard, setAdharCard] = useState({
    showAttachmentModal: false,
    showViewModal: false,
    document: null,
    adharNumber: '',
    dob: '',
  })
  function showAdharAttachment() {
    setAdharCard((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }))
  }
  function handleRemoveAdharCard() {
    setAdharCard((prevState) => ({
      ...prevState,
      showAttachmentModal: false,
      showViewModal: false,
      document: null,
      adharNumber: '',
    }))
  }
  //End for adhar card

  //Starting for attach Pan card.
  const [pan, setPan] = useState({
    showAttachmentModal: false,
    document: null,
    panNumber: '',
  })
  function showPanAttachment() {
    setPan((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }))
  }
  function handleRemovePan() {
    setPan((prevState) => ({
      ...prevState,
      showAttachmentModal: false,
      document: null,
    }))
  }
  //End for attach Pan card.

  //Starting for attach Passport
  const [passport, setPassport] = useState({
    showAttachmentModal: false,
    document: null,
    country: '',
    issueDate: '',
    passportNumber: '',
    expDate: '',
  })
  function showPassportAttachment() {
    setPassport((prevState) => ({
      ...prevState,
      showAttachmentModal: true,
    }))
  }
  function handleRemovePassport() {
    setPassport((prevState) => ({
      ...prevState,
      showAttachmentModal: false,
      document: null,
      country: '',
      issueDate: '',
      passportNumber: '',
      expDate: '',
    }))
  }
  //End for attach Passport

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
                              downloadDocument={downloadDocument}
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
                              downloadDocument={downloadDocument}
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
                              downloadDocument={downloadDocument}
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
                              downloadDocument={downloadDocument}
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
                              downloadDocument={downloadDocument}
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

