import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DoneIcon from "@mui/icons-material/Done";
import Card from "./card";

export default function PromotionalBanner({ setSelectedComponent }) {
    
    
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
            <button className="saveBtn" onClick={() => {}}>
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
                placeholder="Please enter a component name"
              />
            </div>
            <div className="heroBanner">
              <p>Component Type</p>
              <span>Promotional Banner</span>
            </div>
          </div>
          <div className="uploadBannerHead">
            <p>Promotional Banner</p>
            <span>
              Used primarily to publicise the advertisers products or services &
              for promotion of brands, events & products.
            </span>
          </div>
          <div className="uploadBanner">
          
          <Card
            dimensionsText={{
                mobile: ["Image dimension: 764x376", "Size: Less than 200kb"],
                web: ["Custom web dimension 1", "Custom web dimension 2"] }}               
          />
          </div>
        </div>
      </div>
    </>
  );
}
