import React, { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DoneIcon from "@mui/icons-material/Done";
import PopUp from "./popUp";
import Banner from "./2-in-1 Banner";
import QuickBookingBanner from "./quickBookingBanner";
import PromotionalBanner from "./promotionalBanner";
import InstantBookingBanner from "./instantBookingBanner";
import HeroBanner from "./heroBanner";
import {
  HERO_BANNER,
  INSTANT_BOOKING_BANNER,
  PROMOTIONAL_BANNER,
  QUICK_BOOKING_BANNER,
  TWO_IN_ONE_BANNER,
} from "../constants";

function NewComponent({ setNewComponent, optionValue }) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const [open, setOpen] = useState(false);

  ///useEffect(() => {
  // Update selectedComponent when option changes
  //   setSelectedComponent(optionValue);
  // }, [optionValue]);
  const getBanner = () => {
    switch (selectedComponent) {
      case HERO_BANNER:
        return <HeroBanner setSelectedComponent={setSelectedComponent} />;
      case PROMOTIONAL_BANNER:
        return (
          <PromotionalBanner setSelectedComponent={setSelectedComponent} />
        );
      case TWO_IN_ONE_BANNER:
        return <Banner setSelectedComponent={setSelectedComponent} />;
      case QUICK_BOOKING_BANNER:
        return (
          <QuickBookingBanner setSelectedComponent={setSelectedComponent} />
        );
      case INSTANT_BOOKING_BANNER:
        return (
          <InstantBookingBanner setSelectedComponent={setSelectedComponent} />
        );
      default:
        return null;
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="addNew_Component">
        {selectedComponent === null ? (
          <>
            <div className="topSection">
              <div className="newLeft">
                <button className="back" onClick={() => setNewComponent(false)}>
                  <KeyboardArrowLeftIcon />
                  Back
                </button>
                <button className="saveDisable">
                  <DoneIcon />
                  Save
                </button>
              </div>
              <div className="newRight">
                <button className="btn">
                  <TelegramIcon />
                  Submit for approval
                </button>
              </div>
            </div>
            <div className="promotionalBanner">
              <div className="allComponents">
                <p>All components</p>
                <span> / </span>
                <p>New component</p>
              </div>
              <div className="addComponent">
                <h4>Component Type*</h4>
                <p>Please select a Component Type to begin</p>
                <button onClick={handleOpen}>
                  <span>+</span>Add New Component
                </button>
                <PopUp
                  open={open}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                  setSelectedComponent={setSelectedComponent}
                />
              </div>
            </div>
          </>
        ) : (
          <div>{getBanner()}</div>
        )}
      </div>
    </>
  );
}

export default NewComponent;
