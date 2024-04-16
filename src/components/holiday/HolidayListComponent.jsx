import React, { useState } from "react";
import Holiday from "./Holiday";
import ButtonComponent from "../uiElements/ButtonComponent";
import CommonModal from "../uiElements/CommonModal";

export default function HolidayListComponent() {
  const [showHolidayModal, setShowHolidayModal] = useState(false);

  const handleShowHolidayModal = () => {
    setShowHolidayModal(true);
  };

  const handleCloseHolidayModal = () => {
    setShowHolidayModal(false);
  };
  return (
    <>
      <div className='card ctm-border-radius shadow-sm mt-4'>
        <div className='card-body py-4'>
          <h5 className='card-title'>Holiday List</h5>
          <Holiday upcomingCount={3} />
          <br></br>
          <ButtonComponent
            variant={"primary"}
            onClickHandler={handleShowHolidayModal}
            buttonText={"Show Holiday List"}
          />

          <CommonModal
            modalHeading={"Holiday List"}
            showModal={showHolidayModal}
            extraFields={
              <div class='container'>
                <Holiday />
              </div>

            }
            handleCloseModal={handleCloseHolidayModal}
          />
        </div>
      </div>
    </>
  );
}
