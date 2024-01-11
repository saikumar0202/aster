import React, { useState } from "react";
import ImageUpload from "./imagesUpload";
import tick from "../images/tick.svg";


export default function Card({selectedImage}) {

    const [isMobileImageSelected, setMobileImageSelected] = useState(false);
    const [isWebImageSelected, setWebImageSelected] = useState(false);
    // console.log("PROP", dimensionsTextProp)

  return (
    <div className="fileUpload_Main">
      <div className="fileUploadMob-Web">
        <div className="fileUploadLt">
            <div className="update_tick">
            <img src={tick} alt=""  style={{ display: isMobileImageSelected ? "block" : " none" }} />
          <p>Image for mobile*</p>
          </div>
          <ImageUpload  onImageSelect={setMobileImageSelected} />
          <div className="InputLinkMobile">
            <h4>Link for mobile</h4>
            <input
              type="text"
              className="PopUpInput"
              placeholder=" Please enter the link for the slide"
            />
          </div>
        </div>

        <div className="fileUploadRt">
        <div className="update_tick">
            <img src={tick} alt=""  style={{ display: isWebImageSelected ? "block" : " none" }} />
          <p>Image for web*</p>
          </div>
          <ImageUpload  onImageSelect={setWebImageSelected}/>
          <div className="InputLinkWeb">
            <h4>Link for web</h4>
            <input
              type="text"
              className="PopUpInput"
              placeholder=" Please enter the link for the slide"
            />
          </div>
        </div>
      </div>
      <div className="BottomInput">
        <div className="RightSelect">
          <p>alt text</p>
          <input
            type="text"
            className="PromotionalInput"
            placeholder="Please enter your Alt Text for the slide"
          />
        </div>
      </div>
    </div>
  );
}
