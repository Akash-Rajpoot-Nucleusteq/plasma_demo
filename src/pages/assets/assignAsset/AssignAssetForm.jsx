import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import InputValidator from "../../../validations/InputValidator";
import moment from "moment";
import ReactSelect from "react-select";
import LabelAndInputField from "../../../components/uiElements/LabelAndInputField";
import ButtonComponent from "../../../components/uiElements/ButtonComponent";
import Label from "../../../components/uiElements/Label";
import { getCurrentDate } from "../../../utility/commonFunctions/CommonFunctions.jsx";
import LabelAndDropdownFieldForObject from "../../../components/uiElements/LabelAndDropdownFieldForObject.jsx";

export default function AssignAssetForm(
  { assetData }
) {

  const [formData, setFormData] = useState({
    assetType: "",
    assetProvidedBy: "",
    assetOs: "",
    assetId: "",

    employeeClientPartner: "",
    employeeFirstName: "",
    employeeLastName: "",
    employeeId: "",
    employeeWorkLocation: "",
    employeeWorkType: "",

    allocationDate: getCurrentDate(),
  });

  const [formError, setFormError] = useState({
    errorEmployee: "",
  });

  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const [value, setValue] = useState();
  const [valueWithName, setValueWithName] = useState(null);
  const [valueWithEmployeeId, setValueWithEmployeeId] = useState(null);

  const employeeList = [
    {
      employeeFirstName: "Ashish",
      employeeLastName: "Sahu",
      employeeId: "N0008",
      employeeClientPartner: "NucleusTeq",
      employeeWorkLocation: "Raipur",
      employeeWorkType: "Fulltime",
    },
    {
      employeeFirstName: "John",
      employeeLastName: "Doe",
      employeeId: "N0001",
      employeeClientPartner: "ABC Corp",
      employeeWorkLocation: "New York",
      employeeWorkType: "Part-time",
    },
    {
      employeeFirstName: "Jane",
      employeeLastName: "Smith",
      employeeId: "N0002",
      employeeClientPartner: "XYZ Ltd",
      employeeWorkLocation: "London",
      employeeWorkType: "Fulltime",
    },
    {
      employeeFirstName: "Alice",
      employeeLastName: "Johnson",
      employeeId: "N0003",
      employeeClientPartner: "Tech Innovators",
      employeeWorkLocation: "San Francisco",
      employeeWorkType: "Fulltime",
    },
    {
      employeeFirstName: "Bob",
      employeeLastName: "Williams",
      employeeId: "N0004",
      employeeClientPartner: "Global Solutions",
      employeeWorkLocation: "Berlin",
      employeeWorkType: "Remote",
    },
    {
      employeeFirstName: "Ashish",
      employeeLastName: "Kumar",
      employeeId: "N0005",
      employeeClientPartner: "Infinite Systems",
      employeeWorkLocation: "Mumbai",
      employeeWorkType: "Contractor",
    },
    {
      employeeFirstName: "Michael",
      employeeLastName: "Brown",
      employeeId: "N0006",
      employeeClientPartner: "Unified Services",
      employeeWorkLocation: "Sydney",
      employeeWorkType: "Fulltime",
    },
    {
      employeeFirstName: "David",
      employeeLastName: "Clark",
      employeeId: "N0007",
      employeeClientPartner: "Globex Corporation",
      employeeWorkLocation: "Tokyo",
      employeeWorkType: "Fulltime",
    },
    {
      employeeFirstName: "Ashish",
      employeeLastName: "Patel",
      employeeId: "N0009",
      employeeClientPartner: "Tech Geniuses",
      employeeWorkLocation: "Bangalore",
      employeeWorkType: "Part-time",
    },
    {
      employeeFirstName: "Eva",
      employeeLastName: "Taylor",
      employeeId: "N0010",
      employeeClientPartner: "Innovate Solutions",
      employeeWorkLocation: "Toronto",
      employeeWorkType: "Remote",
    },
  ];

  useEffect(() => {
    if (assetData) {
      setFormData((prevData) => ({
        ...prevData,
        assetType:
          assetData.assetType !== undefined &&
            assetData.assetType !== null &&
            assetData.assetType !== ""
            ? assetData.assetType
            : "",
        assetOs:
          assetData.assetOs !== undefined &&
            assetData.assetOs !== null &&
            assetData.assetOs !== ""
            ? assetData.assetOs
            : "",
        assetProvidedBy:
          assetData.assetProvidedBy !== undefined &&
            assetData.assetProvidedBy !== null &&
            assetData.assetProvidedBy !== ""
            ? assetData.assetProvidedBy
            : "",
        assetId:
          assetData.assetId !== undefined &&
            assetData.assetId !== null &&
            assetData.assetId !== ""
            ? assetData.assetId
            : "",
      }));
    }
  }, [assetData]);

  function checkForError() {
    setFormError({
      ...formError,
      errorEmployee:
        InputValidator.isObjectEmpty(formData) && "Select Employee",
    });
  }

  function setEmployeeFromDropdown(value, controlId) {
    setSelectedEmployeeId(value.employeeId);
    setValue(`${value.employeeFirstName} ${value.employeeLastName}`);
    setValueWithName({
      ...valueWithName,
      label: `${value.employeeFirstName} ${value.employeeLastName}`,
      value: value,
    })
    setValueWithEmployeeId({
      ...valueWithEmployeeId,
      label: `${value.employeeId}`,
      value: value,
    })
    const selectedEmpData = value;
    setFormData((prevData) => ({
      ...prevData,
      employeeClientPartner:
        selectedEmpData.employeeClientPartner !== undefined &&
          selectedEmpData.employeeClientPartner !== null
          ? selectedEmpData.employeeClientPartner
          : "",
      employeeFirstName:
        selectedEmpData.employeeFirstName !== undefined &&
          selectedEmpData.employeeFirstName !== null
          ? selectedEmpData.employeeFirstName
          : "",
      employeeLastName:
        selectedEmpData.employeeLastName !== undefined &&
          selectedEmpData.employeeLastName !== null
          ? selectedEmpData.employeeLastName
          : "",
      employeeId:
        selectedEmpData.employeeId !== undefined &&
          selectedEmpData.employeeId !== null
          ? selectedEmpData.employeeId
          : "",
      employeeWorkLocation:
        selectedEmpData.employeeWorkLocation !== undefined &&
          selectedEmpData.employeeWorkLocation !== null
          ? selectedEmpData.employeeWorkLocation
          : "",
      employeeWorkType:
        selectedEmpData.employeeWorkType !== undefined &&
          selectedEmpData.employeeWorkType !== null
          ? selectedEmpData.employeeWorkType
          : "",
    }));
    setShowOptions(false);
    setFormError({
      ...formError,
      errorEmployee: "",
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await checkForError();
    if (!InputValidator.isObjectEmpty(formData)) {
    } else {
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className='card-header'>
        <h5 className='card-title text-primary mb-0'>Asset Details</h5>
      </div>
      <div className='card-body'>
        <div className='row'>
          <div className='col-12'>
            <div className='document-up'>
              <Row>
                <LabelAndInputField
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={"assetType"}
                  labelText={"Asset Type"}
                  placeholder={"Enter Asset Type"}
                  value={formData.assetType}
                  isReadOnly={true}
                />
                <LabelAndInputField
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={"assetId"}
                  labelText={"Asset ID"}
                  placeholder={"Enter Asset Id"}
                  value={formData.assetId}
                  isReadOnly={true}
                />
              </Row>
              <Row>
                <LabelAndInputField
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={"assetOs"}
                  labelText={"Asset OS"}
                  placeholder={"Enter Asset OS"}
                  value={formData.assetOs}
                  isReadOnly={true}
                />
                <LabelAndInputField
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={"assetProvidedBy"}
                  labelText={"Asset Provided By"}
                  placeholder={"Enter Asset Provided By"}
                  value={formData.assetProvidedBy}
                  isReadOnly={true}
                />
              </Row>
            </div>
          </div>
        </div>
      </div>

      <div className='card-header'>
        <h5 className='card-title text-primary mb-0'>Employee Details</h5>
      </div>
      <div className='card-body'>
        <div className='row'>
          <div className='col-12'>
            <div className='document-up'>
              <Row>
                <LabelAndDropdownFieldForObject
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={'employeeName'}
                  labelText={'Select Employee'}
                  value={valueWithName}
                  optionList={employeeList.map((emp) => ({
                    label: `${emp.employeeFirstName} ${emp.employeeLastName}`,
                    value: emp,
                  }))}
                  handleInputChange={setEmployeeFromDropdown}
                />
                <LabelAndDropdownFieldForObject
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={'employeeId'}
                  labelText={'Employee Id'}
                  value={valueWithEmployeeId}
                  optionList={employeeList
                    .sort((a, b) =>
                      a.employeeId.localeCompare(b.employeeId)
                    ).map((emp) => ({
                      label: `${emp.employeeId}`,
                      value: emp,
                    }))}
                  handleInputChange={setEmployeeFromDropdown}
                />
              </Row>

              <Row>
                <LabelAndInputField
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={"employeeClientPartner"}
                  labelText={"Employee Client Partner"}
                  placeholder={"Enter Employee Client Partner"}
                  value={formData.employeeClientPartner}
                  isReadOnly={true}
                />
                <LabelAndInputField
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={"employeeWorkLocation"}
                  labelText={"Employee Work Location"}
                  placeholder={"Enter Employee Work Location"}
                  value={formData.employeeWorkLocation}
                  isReadOnly={true}
                />
              </Row>

              <Row>
                <LabelAndInputField
                  mdValue={6}
                  lgValue={6}
                  smValue={12}
                  xsValue={12}
                  controlId={"employeeWorkType"}
                  labelText={"Employee Work Type"}
                  placeholder={"Enter Employee Work Type"}
                  value={formData.employeeWorkType}
                  isReadOnly={true}
                />
              </Row>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <ButtonComponent
              variant={"primary"}
              type={"submit"}
              className={"btn btn-theme button-1 text-white ctm-border-radius "}
              buttonText={"Assign"}
            />
          </div>
        </div>
      </div>
    </Form>
  );
}
