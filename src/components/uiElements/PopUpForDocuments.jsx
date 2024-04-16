import React, { useEffect, useRef, useState } from "react";
import { Modal, Form, Col, Button } from "react-bootstrap";
import InputValidator from "../../validations/InputValidator";
import { getCountryList } from "../../utility/commonFunctions/CommonFunctions.jsx";
import LabelAndDropdownField from "./LabelAndDropdownField.jsx";

//popup to upload adhar.
export function AdharPopUpUpload({ adharCard, setAdharCard, handleSubmitCustom }) {
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [documentView, setDocumentView] = useState(null);

  let isGettingRealData = false;

  useEffect(() => {
    checkForHavingRealData();
  }, [adharCard.showAttachmentModal])

  function checkForHavingRealData() {
    isGettingRealData = adharCard.adharAttachment ? true : false;
  }

  function handleClose() {
    setAdharCard({
      ...adharCard,
      showAttachmentModal: false,
    });
  }
  function showDocumentView(file) {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;
        setDocumentView(selectedDocument);
      };
      reader.readAsDataURL(file);
    }
  }
  function handleCloseButton() {
    if (isGettingRealData) {
      handleClose();
    } else
      if (InputValidator.isObjectEmpty(adharCard)) {
        setAdharCard((prevState) => ({
          ...prevState,
          showAttachmentModal: false,
          commingFromBackend: false,
          adharAttachment: null,
          adharNumber: "",
          adharDob: "",
        }));
      } else {
        setAdharCard((prevState) => ({
          ...prevState,
          commingFromBackend: false,
          adharAttachment: null,
          adharNumber: "",
          adharDob: "",
        }));
      }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;

        setAdharCard((prevState) => ({
          ...prevState,
          commingFromBackend: false,
          adharAttachment: file,
        }));
      };
      reader.readAsDataURL(file);
    }
    setErrorMessage("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (InputValidator.isObjectEmpty(adharCard)) {
      setErrorMessage(
        "Please ensure that you select a document, and that no fields are left empty."
      );
    } else {
      setAdharCard({
        ...adharCard,
        showAttachmentModal: false,
      });
      handleSubmitCustom && handleSubmitCustom(adharCard)
    }
  }
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setAdharCard({
      ...adharCard,
      [id]: value,
    });
    setErrorMessage("");
  };
  const show = adharCard.showAttachmentModal;
  return (
    <>
      {" "}
      {!adharCard.commingFromBackend &&
        showDocumentView(adharCard.adharAttachment)}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h4 className='modal-title mb-3'>Upload Adhar Card</h4>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Form.Group controlId='adharNumber'>
              <Form.Label>
                Adhar Number<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                pattern='[0-9]*'
                placeholder='Enter Aadhaar Number'
                value={adharCard.adharNumber}
                onChange={handleInputChange}
                maxLength='12'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='adharDob'>
              <Form.Label>
                DOB<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='date'
                value={adharCard.adharDob}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>
              Select Document (pdf only)<span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              ref={fileInputRef}
              className='form-control date-enter'
              type='file'
              accept='.pdf'
              onChange={handleFileChange}
            />
          </Col>
          {adharCard.adharAttachment && (
            <div style={{ padding: "10px" }}>
              <div style={{ padding: "10px" }}>
                {adharCard.commingFromBackend ? (
                  <embed
                    src={`data:application/pdf;base64,${adharCard.adharAttachment}`}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                ) : (
                  <embed
                    src={documentView}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                )}
              </div>
            </div>
          )}

          {errorMessage && (
            <Col>
              <span className='text-danger small'>{errorMessage}</span>
            </Col>
          )}

          <Col className='mt-3'>
            <button
              type='button'
              className='btn btn-danger ctm-border-radius float-right ml-3'
              onClick={handleCloseButton}>
              Cancel
            </button>
            <button
              type='submit'
              className='btn btn-theme button-1 text-white ctm-border-radius float-right'
              onClick={handleSubmit}>
              Save Document
            </button>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}

//popup to upload passport.
export function PassportPopUpUpload({ passport, setPassport, handleSubmitCustom }) {
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [documentView, setDocumentView] = useState(null);
  const countryList = getCountryList();

  let isGettingRealData = false;

  useEffect(() => {
    checkForHavingRealData();
  }, [passport.showAttachmentModal])

  function checkForHavingRealData() {
    isGettingRealData = passport.passportAttachment ? true : false;
  }

  function handleClose() {
    setPassport({
      ...passport,
      showAttachmentModal: false,
    });
  }

  function showDocumentView(file) {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;
        setDocumentView(selectedDocument);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleCloseButton() {
    if (isGettingRealData) {
      handleClose();
    } else
      if (InputValidator.isObjectEmpty(passport)) {
        setPassport((prevState) => ({
          ...prevState,
          showAttachmentModal: false,
          commingFromBackend: false,
          passportAttachment: null,
          passportCountry: "",
          passportIssueDate: "",
          passportNumber: "",
          passportExpDate: "",
        }));
      } else {
        setPassport((prevState) => ({
          ...prevState,
          commingFromBackend: false,
          passportAttachment: null,
          passportCountry: "",
          passportIssueDate: "",
          passportNumber: "",
          passportExpDate: "",
        }));
      }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;

        setPassport((prevState) => ({
          ...prevState,
          commingFromBackend: false,
          // passportAttachment: selectedDocument,
          passportAttachment: file,
        }));
      };
      reader.readAsDataURL(file);
    }
    setErrorMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (InputValidator.isObjectEmpty(passport)) {
      setErrorMessage(
        "Please ensure that you select a document, and that no fields are left empty."
      );
    } else {
      setPassport({
        ...passport,
        showAttachmentModal: false,
      });
      handleSubmitCustom && handleSubmitCustom(passport)
    }
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setPassport({
      ...passport,
      [id]: value,
    });
    setErrorMessage("");
  };

  const show = passport.showAttachmentModal;

  return (
    <>
      {!passport.commingFromBackend &&
        showDocumentView(passport.passportAttachment)}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h4 className='modal-title mb-3'>Upload Passport</h4>
        </Modal.Header>
        <Modal.Body>
          <LabelAndDropdownField
            controlId={"passportCountry"}
            labelText={"Country"}
            isCompulsary={true}
            optionList={countryList}
            value={passport.passportCountry}
            showDefaultOption={true}
            handleInputChange={handleInputChange}
          />
          <Col>
            <Form.Group controlId='passportIssueDate'>
              <Form.Label>
                Issue Date<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='date'
                placeholder='Enter Employment Company'
                value={passport.passportIssueDate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='passportExpDate'>
              <Form.Label>
                Expiry Date<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='date'
                placeholder='Enter Employment Company'
                value={passport.passportExpDate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='passportNumber'>
              <Form.Label>
                Passport Number<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                placeholder='Enter Passport Number'
                value={passport.passportNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>
              Select Document (pdf only)<span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              ref={fileInputRef}
              className='form-control date-enter'
              type='file'
              accept='.pdf'
              onChange={handleFileChange}
            />
          </Col>

          {passport.passportAttachment && (
            <div style={{ padding: "10px" }}>
              <div style={{ padding: "10px" }}>
                {passport.commingFromBackend ? (
                  <embed
                    src={`data:application/pdf;base64,${passport.passportAttachment}`}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                ) : (
                  <embed
                    src={documentView}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                )}
              </div>
            </div>
          )}

          {errorMessage && (
            <Col>
              <span className='text-danger small'>{errorMessage}</span>
            </Col>
          )}

          <Col className='mt-3'>
            <button
              type='button'
              className='btn btn-danger ctm-border-radius float-right ml-3'
              onClick={handleCloseButton}>
              Cancel
            </button>
            <button
              type='submit'
              className='btn btn-theme button-1 text-white ctm-border-radius float-right'
              onClick={handleSubmit}>
              Save Document
            </button>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}

//popup to attach work authorization
export function WorkAuthorizationPopUpUpload({
  workAuthorization,
  setWorkAuthorization,
  handleSubmitCustom
}) {
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [documentView, setDocumentView] = useState(null);
  let isGettingRealData = false;

  useEffect(() => {
    checkForHavingRealData();
  }, [workAuthorization.showAttachmentModal])

  function checkForHavingRealData() {
    isGettingRealData = workAuthorization.workAuthorizationAttachment ? true : false;
  }

  function handleClose() {
    if (InputValidator.isObjectEmpty(workAuthorization)) {
      setWorkAuthorization({
        ...workAuthorization,
        showAttachmentModal: false,
      });
    }
  }

  function showDocumentView(file) {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;
        setDocumentView(selectedDocument);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleCloseButton() {
    if (isGettingRealData) {
      handleClose();
    } else
      if (InputValidator.isObjectEmpty(workAuthorization)) {
        setWorkAuthorization((prevState) => ({
          ...prevState,
          showAttachmentModal: false,
          commingFromBackend: false,
          workAuthorizationAttachment: null,
          workAuthorizationNumber: "",
          workAuthorizationValidTill: "",
        }));
      } else {
        setWorkAuthorization((prevState) => ({
          ...prevState,
          commingFromBackend: false,
          workAuthorizationAttachment: null,
          workAuthorizationNumber: "",
          workAuthorizationValidTill: "",
        }));
      }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;

        setWorkAuthorization((prevState) => ({
          ...prevState,
          // workAuthorizationAttachment: selectedDocument,
          commingFromBackend: false,
          workAuthorizationAttachment: file,
        }));
      };
      reader.readAsDataURL(file);
    }
    setErrorMessage("");
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setWorkAuthorization({
      ...workAuthorization,
      [id]: value,
    });
    setErrorMessage("");
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (InputValidator.isObjectEmpty(workAuthorization)) {
      setErrorMessage(
        "Please ensure that you select a document, and that no fields are left empty."
      );
    } else {
      setWorkAuthorization({
        ...workAuthorization,
        showAttachmentModal: false,
      });
      handleSubmitCustom && handleSubmitCustom(workAuthorization)
    }
  }

  const show = workAuthorization.showAttachmentModal;

  return (
    <>
      {!workAuthorization.commingFromBackend &&
        showDocumentView(workAuthorization.workAuthorizationAttachment)}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h4 className='modal-title mb-3'>Upload Work Authorization</h4>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Form.Group controlId='workAuthorizationNumber'>
              <Form.Label>
                Work Authorization Number<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                placeholder='Enter Work Authorization Number'
                value={workAuthorization.workAuthorizationNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='workAuthorizationValidTill'>
              <Form.Label>
                Work Authorization Valid Till
                <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='date'
                value={workAuthorization.workAuthorizationValidTill}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>
              Select Document (pdf only)<span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              ref={fileInputRef}
              className='form-control date-enter'
              type='file'
              accept='.pdf'
              onChange={handleFileChange}
            />
          </Col>

          {workAuthorization.workAuthorizationAttachment && (
            <div style={{ padding: "10px" }}>
              <div style={{ padding: "10px" }}>
                {workAuthorization.commingFromBackend ? (
                  <embed
                    src={`data:application/pdf;base64,${workAuthorization.workAuthorizationAttachment}`}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                ) : (
                  <embed
                    src={documentView}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                )}
              </div>
            </div>
          )}

          {errorMessage && (
            <Col>
              <span className='text-danger small'>{errorMessage}</span>
            </Col>
          )}

          <Col className='mt-3'>
            <button
              type='button'
              className='btn btn-danger ctm-border-radius float-right ml-3'
              onClick={handleCloseButton}>
              Cancel
            </button>
            <button
              type='submit'
              className='btn btn-theme button-1 text-white ctm-border-radius float-right'
              onClick={handleSubmit}>
              Save Document
            </button>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}

//popup to upload pan card.
export function PanPopUpUpload({ pan, setPan, handleSubmitCustom }) {
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [documentView, setDocumentView] = useState(null);
  let isGettingRealData = false;

  useEffect(() => {
    checkForHavingRealData();
  }, [pan.showAttachmentModal])

  function checkForHavingRealData() {
    isGettingRealData = pan.panAttachment ? true : false;
  }

  function handleClose() {
    setPan({
      ...pan,
      showAttachmentModal: false,
    });
  }

  function showDocumentView(file) {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;
        setDocumentView(selectedDocument);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleCloseButton() {
    if (isGettingRealData) {
      handleClose();
    } else
      if (InputValidator.isObjectEmpty(pan)) {
        setPan((prevState) => ({
          ...prevState,
          showAttachmentModal: false,
          commingFromBackend: false,
          panNumber: "",
          panAttachment: null,
        }));
      } else {
        setPan((prevState) => ({
          ...prevState,
          panNumber: "",
          panAttachment: null,
          commingFromBackend: false,
        }));
      }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;

        setPan((prevState) => ({
          ...prevState,
          // panAttachment: selectedDocument,
          panAttachment: file,
          commingFromBackend: false,
        }));
      };
      reader.readAsDataURL(file);
    }
    setErrorMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (InputValidator.isObjectEmpty(pan)) {
      setErrorMessage(
        "Please ensure that you select a document, and that no fields are left empty."
      );
    } else {
      setPan({
        ...pan,
        showAttachmentModal: false,
      });
      handleSubmitCustom && handleSubmitCustom(pan)
    }
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setPan({
      ...pan,
      [id]: value,
    });
    setErrorMessage("");
  };

  const handleClearButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    handleCloseButton();
  };

  const show = pan.showAttachmentModal;

  return (
    <>
      {!pan.commingFromBackend && showDocumentView(pan.panAttachment)}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h4 className='modal-title mb-3'>Upload Pan Card</h4>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Form.Group controlId='panNumber'>
              <Form.Label>
                Pan Number<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                placeholder='Enter Adhar Number'
                value={pan.panNumber}
                onChange={handleInputChange}
                maxLength='10'
                ref={fileInputRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>
              Select Document (pdf only)<span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              ref={fileInputRef}
              className='form-control date-enter'
              type='file'
              accept='.pdf'
              onChange={handleFileChange}
            />
          </Col>
          {pan.panAttachment && (
            <div style={{ padding: "10px" }}>
              <div style={{ padding: "10px" }}>
                {pan.commingFromBackend ? (
                  <embed
                    src={`data:application/pdf;base64,${pan.panAttachment}`}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                ) : (
                  <embed
                    src={documentView}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                )}
              </div>
            </div>
          )}

          {errorMessage && (
            <Col>
              <span className='text-danger small'>{errorMessage}</span>
            </Col>
          )}

          <Col className='mt-3'>
            <button
              type='button'
              className='btn btn-danger ctm-border-radius float-right ml-3'
              onClick={handleClearButton}>
              Cancel
            </button>
            <button
              type='submit'
              className='btn btn-theme button-1 text-white ctm-border-radius float-right'
              onClick={handleSubmit}>
              Save Document
            </button>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}

//popup to upload pan card.
export function CommonPopUpUpload({ data, setData, heading, handleSubmitCustom }) {
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);
  const [documentView, setDocumentView] = useState(null);
  let isGettingRealData = false;

  useEffect(() => {
    checkForHavingRealData();
  }, [data.showAttachmentModal])

  function checkForHavingRealData() {
    isGettingRealData = data.document ? true : false;
  }

  function handleClose() {
    setData((prevState) => ({
      ...prevState,
      showAttachmentModal: false,
    }));
  }

  function showDocumentView(file) {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;
        setDocumentView(selectedDocument);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleFileChange(event) {
    data.commingFromBackend = false;
    const file = event.target.files[0];
    setData((prevState) => ({
      ...prevState,
      document: file,
      commingFromBackend: false,
    }));
    setErrorMessage("");
  }

  function handleCloseButton() {
    if (isGettingRealData) {
      handleClose();
    } else {
      if (InputValidator.isObjectEmpty(data)) {
        setData({
          ...data,
          showAttachmentModal: false,
          commingFromBackend: false,
          document: null,
        });
      } else {
        setData({
          ...data,
          commingFromBackend: false,
          document: null,
        });
      }
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (InputValidator.isObjectEmpty(data)) {
      setErrorMessage("Please ensure that you select a document.");
    } else {
      setData({
        ...data,
        showAttachmentModal: false,
      });
      handleSubmitCustom && handleSubmitCustom(data)
    }
  }

  const show = data.showAttachmentModal;
  return (
    <>
      {!data.commingFromBackend && showDocumentView(data.document)}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h4 className='modal-title mb-3'>{heading || "Header"}</h4>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Form.Label>
              Select Document (pdf only)<span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              ref={fileInputRef}
              className='form-control date-enter'
              type='file'
              accept='.pdf'
              onChange={handleFileChange}
            />
          </Col>

          {data.document && (
            <div style={{ padding: "10px" }}>
              <div style={{ padding: "10px" }}>
                {data.commingFromBackend ? (
                  <embed
                    src={`data:application/pdf;base64,${data.document}`}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                ) : (
                  <embed
                    src={documentView}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                )}
              </div>
            </div>
          )}

          {errorMessage && (
            <Col>
              <span className='text-danger small'>{errorMessage}</span>
            </Col>
          )}
          <Col className='mt-3'>
            <Button
              variant='danger'
              className='ctm-border-radius float-right ml-3'
              onClick={handleCloseButton}>
              Cancel
            </Button>
            <Button
              variant='theme'
              className='button-1 text-white ctm-border-radius float-right'
              onClick={handleSubmit}>
              Save Document
            </Button>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}



//popup to view document.
export function ViewDocument({ data, setData, heading }) {
  const [documentView, setDocumentView] = useState(null);

  function handleClose() {
    setData((prevState) => ({
      ...prevState,
      showAttachmentModal: false,
    }));
  }

  function showDocumentView(file) {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedDocument = reader.result;
        setDocumentView(selectedDocument);
      };
      reader.readAsDataURL(file);
    }
  }

  const show = data.showAttachmentModal;
  return (
    <>
      {!data.isDataAvailable && showDocumentView(data.document)}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h4 className='modal-title mb-3'>{heading || "Header"}</h4>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Form.Label>
              Your Document
            </Form.Label>
          </Col>

          {data.document && (
            <div style={{ padding: "10px" }}>
              <div style={{ padding: "10px" }}>
                {data.isDataAvailable ? (
                  <embed
                    src={`data:application/pdf;base64,${data.document}`}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                ) : (
                  <embed
                    src={documentView}
                    type='application/pdf'
                    width='100%'
                    height='500px'
                  />
                )}
              </div>
            </div>
          )}

          <Col className='mt-3'>
            <Button
              variant='danger'
              className='ctm-border-radius float-right ml-3'
              onClick={handleClose}>
              Cancel
            </Button>

          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}