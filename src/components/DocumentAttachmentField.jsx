import React from 'react'
import InputValidator from '../validations/InputValidator';
import { Form, Col, Button } from 'react-bootstrap'

export default function DocumentAttachmentField({
    mdValue,
    controlId,
    labelText,
    isCompulsary,
    documentState,
    handleUpload,
    handleView,
    handleRemove,
    fileName,
    downloadDocument,
    documentForDownload,
    buttonText,
    errorMessage,
}) {
    return (
        <Col md={mdValue ? mdValue : 12}>
            <Form.Group controlId={controlId}>
                {labelText && <Form.Label>{labelText} {isCompulsary && <span className="text-danger">*</span>}</Form.Label>}
                <div className='document-up col-12'>
                    <i className='mr-2 text-primary fa fa-file-pdf-o' aria-hidden='true'></i>
                    {documentState.document ? 'View Your Document' : 'Select Document'}

                    {!InputValidator.isObjectEmpty(documentState) && !documentState.showAttachmentModal ? (
                        <>
                            <Button
                                type='button'
                                className='float-right btn bg-danger text-white ctm-border-radius'
                                onClick={handleRemove}
                            >
                                Remove
                            </Button>
                            <Button
                                type='button'
                                className='float-right ml-2 btn bg-success text-white ctm-border-radius'
                                onClick={handleView}
                            >
                                View
                            </Button>
                            <Button
                                type='button'
                                className='float-right ml-2 btn bg-info text-white ctm-border-radius'
                                onClick={() => downloadDocument(documentForDownload)}
                            >
                                <i className="lnr lnr-download mr-1"></i>
                            </Button>
                        </>
                    ) : (
                        <Button
                            variant="info"
                            type='button'
                            className='float-right btn btn-info text-white ctm-border-radius'
                            onClick={handleUpload}
                        >
                            Upload
                        </Button>
                    )}
                </div>
                {errorMessage && <span className="text-danger small">{errorMessage}</span>}
            </Form.Group>
        </Col>
    );
};
