import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DoneIcon from "@mui/icons-material/Done";
import Card from "./card";

//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 4,
// };

export default function QuickBookingBanner({ setSelectedComponent }) {
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
            <span>Quick Booking Banner</span>
          </div>
        </div>
        <div className="uploadBannerHead">
          <p>Quick Booking Banner</p>
          <span>
            Wizard to recommend doctors based on user profile, choice of
            speciality and mode of consultation
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
