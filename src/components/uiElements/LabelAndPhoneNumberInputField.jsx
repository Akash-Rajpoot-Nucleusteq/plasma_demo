
import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function LabelAndPhoneNumberInputField({
    mdValue,
    smValue,
    xsValue,
    lgValue,

    controlId,
    labelText,
    isCompulsary,
    value,
    onChange,
    isReadOnly,
    error
}) {
    return (
        <Col md={mdValue ? mdValue : 12} sm={smValue ? smValue : 12} xs={xsValue ? xsValue : 12} lg={lgValue ? lgValue : 12}>
            <Form.Group controlId={controlId}>
                <Form.Label>{labelText}{isCompulsary && <span className="text-danger">*</span>}</Form.Label>
                <PhoneInput
                    country={'in'}
                    value={value || ''}
                    onChange={onChange}
                    inputProps={{
                        required: true,
                        disabled: isReadOnly,
                    }}
                    className='form-control'
                    inputClass='border-0'
                    buttonClass='border-0 bg-transparent'
                />
                {error && <span className="text-danger small">{error}</span>}
            </Form.Group>
        </Col>
    );
};