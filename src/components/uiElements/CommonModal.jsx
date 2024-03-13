import React from "react";
import { Modal, Form, Row } from "react-bootstrap";
import LabelAndInputField from "./LabelAndInputField";
import ButtonComponent from "./ButtonComponent";

export default function CommonModal({
  data,
  fieldNames,
  showModal,
  handleCloseModal,
  modalHeading,
  extraFields,
  extraButton,
}) {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {fieldNames && data && (
            <Row>
              {fieldNames.map((fieldName, index) => (
                <LabelAndInputField
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  key={index}
                  labelText={fieldName.title}
                  value={data[fieldName.dataIndex]}
                  isReadOnly={true}
                />
              ))}
            </Row>
          )}

          {extraFields && <Row>{extraFields}</Row>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {extraButton && extraButton}
        <ButtonComponent
          variant={"danger"}
          className={"btn btn-danger ctm-border-radius text-center"}
          buttonText={"Close"}
          onClickHandler={handleCloseModal}
        />
      </Modal.Footer>
    </Modal>
  );
}
