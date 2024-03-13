
import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import 'react-phone-input-2/lib/style.css';

export default function LabelAndInputField({
    mdValue,
    smValue,
    xsValue,
    lgValue,

    controlId,
    labelText,
    isCompulsary,
    placeholder,
    inputType,
    value,
    handleInputChange,
    errorMessage,
    isReadOnly,
    minDate,
    isRequired,
}) {
    return (
        <Col md={mdValue ? mdValue : 12} sm={smValue ? smValue : 12} xs={xsValue ? xsValue : 12} lg={lgValue ? lgValue : 12}>
            <Form.Group controlId={controlId}>
                <Form.Label>{labelText}{isCompulsary && <span className="text-danger">*</span>}</Form.Label>
                <Form.Control
                    type={inputType ? inputType : "text"}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={value || ''}
                    readOnly={isReadOnly}
                    min={minDate}
                    required={isRequired}
                />
                {errorMessage && <span className="text-danger small">{errorMessage}</span>}
            </Form.Group>
        </Col>
    );
}