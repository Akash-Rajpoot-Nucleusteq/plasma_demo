import React from 'react';
import { Form, Col } from 'react-bootstrap';
import Label from './Label'
import ReactSelect from 'react-select';

export default function LabelAndDropdownFieldForObject({
    mdValue,
    smValue,
    xsValue,
    lgValue,

    controlId,
    labelText,
    placeholder,
    value,
    optionList,
    handleInputChange,
    errorMessage,
    isRequired,
    isCompulsary,
}) {
    return (
        <Col md={mdValue ? mdValue : 12} sm={smValue ? smValue : 12} xs={xsValue ? xsValue : 12} lg={lgValue ? lgValue : 12}>
            <Form.Group controlId={controlId}>
            <Form.Label>{labelText}{isCompulsary && <span className="text-danger">*</span>}</Form.Label>
                <ReactSelect
                    options={optionList}
                    value={value}
                    onChange={(selectedOption) => {
                        const selectedValue = selectedOption ? selectedOption.value : null;
                        handleInputChange(selectedValue, controlId);
                    }}
                    isClearable
                    components={{
                        ClearIndicator: null,
                    }}
                    placeholder={placeholder}
                    required={isRequired}
                />
                {errorMessage && <span className="text-danger small">{errorMessage}</span>}
            </Form.Group>
        </Col>
    );
}
