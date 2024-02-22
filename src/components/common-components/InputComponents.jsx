
import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputValidator from '../../validations/InputValidator';
export function DocumentAttachmentField({
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
                                onClick={() => downloadDocument(documentState.document, `${fileName}.pdf`)}
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

export function LabelAndInputField({
    mdValue,
    controlId,
    labelText,
    isCompulsary,
    placeholder,
    inputType,
    value,
    handleInputChange,
    errorMessage,
    isReadOnly,

}) {
    return (
        <Col md={mdValue ? mdValue : 12}>
            <Form.Group controlId={controlId}>
                <Form.Label>{labelText}{isCompulsary && <span className="text-danger">*</span>}</Form.Label>
                <Form.Control type={inputType ? inputType : "text"} placeholder={placeholder} onChange={handleInputChange} value={value || ''} readOnly={isReadOnly} />
                {errorMessage && <span className="text-danger small">{errorMessage}</span>}
            </Form.Group>
        </Col>
    );
}

export function LabelAndDropdownField({
    mdValue,
    controlId,
    labelText,
    isCompulsary,
    showDefaultOption,
    value,
    optionList,
    handleInputChange,
    errorMessage,
    isReadOnly,

}) {
    return (
        <Col md={mdValue ? mdValue : 12}>
            <Form.Group controlId={controlId}>
                <Form.Label>{labelText}{isCompulsary && <span className="text-danger">*</span>}</Form.Label>
                <Form.Control as="select" onChange={handleInputChange} value={value} readOnly={isReadOnly} disabled={isReadOnly}>
                    {showDefaultOption && <option value="">Select Option</option>}
                    {optionList.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}
                </Form.Control>
                {errorMessage && <span className="text-danger small">{errorMessage}</span>}
            </Form.Group>
        </Col>
    )
}

export function SubmitButton({
    buttonText,
    className
}) {
    return (
        <Button
            variant="primary"
            type="submit"
            className={`btn btn-theme button-1 text-white ctm-border-radius ${className}`}
        >
            {buttonText}
        </Button>
    )
}

export function RejectButton({
    buttonText,
    onClick,
}) {
    return (
        <Button
            variant="danger"
            className='btn btn-danger ctm-border-radius text-center'
            onClick={onClick}
        >
            {buttonText}
        </Button>
    )
}

export function BackButton({
    buttonText,
    onClick,
}) {
    return (
        <Button
            variant="primary"
            className='btn bg-secondary ctm-border-radius text-center '
            onClick={onClick}
        >
            {buttonText}
        </Button>
    )
}

export function PasswordInputWithToggle({ name, placeholder, onBlur, error }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='form-group'>
            <div className="input-group">
                <input
                    className='form-control'
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    name={name}
                    onBlur={onBlur}
                />
                <div className="input-group-append">
                    <span className="input-group-text">
                        <i
                            className={`lnr ${showPassword ? 'lnr-cross' : 'lnr-eye'}`}
                            onClick={togglePasswordVisibility}
                        ></i>
                    </span>
                </div>
            </div>
            {error && (
                <span className='text-danger small'>
                    {error}
                </span>
            )}
        </div>
    );
};

export function InputFieldWithValidation({ type, name, placeholder, onBlur, error }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='form-group'>
            {type === 'password' ? (
                <div className="input-group">
                    <input
                        className='form-control'
                        type={showPassword ? 'text' : 'password'}
                        placeholder={placeholder}
                        name={name}
                        onBlur={onBlur}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>
            ) : (
                <input
                    className='form-control'
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onBlur={onBlur}
                />
            )}
            {error && (
                <span className='text-danger small'>
                    {error}
                </span>
            )}
        </div>
    );
};
