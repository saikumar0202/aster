import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DoneIcon from "@mui/icons-material/Done";
import Card from "./card";

export default function InstantBookingBanner({ setSelectedComponent }) {
  return (
    <>
      <div className="header_DashBord">
        <div className="DashBordSection">
          <div className="Left">
            <button
              className="Dashbtn"
              onClick={() => setSelectedComponent(null)}
            >
              <KeyboardArrowLeftIcon /> Back
            </button>
            <button className="saveBtn" onClick={{}}>
              <DoneIcon />
              Save
            </button>
          </div>
          <div className="Right">
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
        <div className="addInput">
          <div className="InputBanner">
            <h4>Component Name*</h4>
            <input
              type="text"
              className="PopUpInput"
              placeholder=" Please enter a component name"
            />
          </div>
          <div className="heroBanner">
            <p>Component Type</p>
            <span>Instant Booking Banner</span>
          </div>
        </div>
        <div className="uploadBannerHead">
          <p>Instant Booking Banner</p>
          <span>
            Provides user the option to book an immediate Video Consultation
            with a General Practitioner.
          </span>
        </div>
        <div className="uploadBanner">
          <Card />
        </div>
        </div>
      </div>
    </>
  );
}
