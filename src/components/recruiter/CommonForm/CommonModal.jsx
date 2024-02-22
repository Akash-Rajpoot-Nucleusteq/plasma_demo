import React from 'react';
import { Modal, Form, Row } from 'react-bootstrap';
import { LabelAndInputField, RejectButton } from '../../common-components/InputComponents'

export default function CommonModal({ data, fieldNames, showModal, handleCloseModal, modalHeading, extraFields, extra }) {
    if (!data || !fieldNames) {
        console.log('returning from if of vendor modal statement.');
        return null;
    }
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            {console.log('from inside vendor modal')}
            <Modal.Header closeButton>
                <Modal.Title>{modalHeading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        {fieldNames && data && fieldNames.map((fieldName, index) => (
                            <LabelAndInputField
                                key={index}
                                mdValue={6}
                                labelText={fieldName.title}
                                value={data[fieldName.dataIndex]}
                                isReadOnly={true}
                            />


                        ))}
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <RejectButton buttonText={'Close'} onClick={handleCloseModal} />
            </Modal.Footer>
        </Modal>
    );
}
