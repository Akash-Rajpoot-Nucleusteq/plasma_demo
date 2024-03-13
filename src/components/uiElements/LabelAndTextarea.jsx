import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function LabelAndTextarea({
    mdValue,
    smValue,
    xsValue,
    lgValue,

    controlId,
    labelText,
    isCompulsary,
    placeholder,
    rows,
    value,
    handleInputChange,
    errorMessage,
    isReadOnly,
}) {
    return (
        <Col md={mdValue ? mdValue : 12} sm={smValue ? smValue : 12} xs={xsValue ? xsValue : 12} lg={lgValue ? lgValue : 12}>
            <Form.Group controlId={controlId}>
                <Form.Label>{labelText}{isCompulsary && <span className="text-danger">*</span>}</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={rows}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={value || ''}
                    readOnly={isReadOnly}
                />
                {errorMessage && <span className="text-danger small">{errorMessage}</span>}
            </Form.Group>
        </Col>
    )
}
