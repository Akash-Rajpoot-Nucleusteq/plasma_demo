
import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { formatDropdownOption } from '../../utility/commonFunctions/CommonFunctions';

export default function LabelAndDropdownField({
    mdValue,
    smValue,
    xsValue,
    lgValue,

    controlId,
    labelText,
    isCompulsary,
    showDefaultOption,
    value,
    optionList,
    handleInputChange,
    errorMessage,
    isReadOnly,
    defaultOptionName,
    formatOption
}) {
    return (
        <Col md={mdValue ? mdValue : 12} sm={smValue ? smValue : 12} xs={xsValue ? xsValue : 12} lg={lgValue ? lgValue : 12}>
            <Form.Group controlId={controlId}>
                <Form.Label>{labelText}{isCompulsary && <span className="text-danger">*</span>}</Form.Label>
                <Form.Control as="select" onChange={handleInputChange} value={value} readOnly={isReadOnly} disabled={isReadOnly}>
                    {showDefaultOption && <option value="">Select {defaultOptionName || 'Option'}</option>}
                    {optionList.map((value, index) => (
                        <option key={index} value={value}>
                            {formatOption ? formatDropdownOption(value) : value}
                        </option>
                    ))}
                </Form.Control>
                {errorMessage && <span className="text-danger small">{errorMessage}</span>}
            </Form.Group>
        </Col>
    )
}