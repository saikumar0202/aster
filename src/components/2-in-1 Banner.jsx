import React ,{ useState } from "react";
import Upload from "../images/Upload.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DoneIcon from "@mui/icons-material/Done";
import ImageUpload from "./imagesUpload";
import tick from "../images/tick.svg";
import Input from "./input";

export default function Banner({ setbannerComponent, setSelectedComponent ,saveBtnClicked , setMobileImageSelected}) {

  // const [isMobileImageSelected, setMobileImageSelected] = useState(false);
      const [isWebImageSelected, setWebImageSelected] = useState(false);
  return (
    <div className="Banner">
      <div className="DashBordSection">
        <div className="Left">
          <button
            className="Dashbtn"
            onClick={() => setSelectedComponent(null)}
          >
            <KeyboardArrowLeftIcon />
            Back
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
          <span>2-in-1 Banner</span>
        </div>
      </div>
      <div className="uploadBannerHead">
        <p>2-in-1 banner</p>
        <span>
          Banner is used for the promotion of brands, events, categories,
          products and more.
        </span>
      </div>
      <div className="uploadBannerImg">
        <div className="BannerLeft">
          <p>Left Banner</p>
          <div className="fileUploadBanner">
            <div className="BannerileUploadMob-Web">
              <div className="BannerFileUploadLt">
                <p>Image for mobile*</p>
                {/* <div className="BannerFileUpload">
                  <div className="BannerFileUploadLt-mobile">
                    <div className="uploadImg">
                      <img src={Upload} alt="img" />
                      <h4>Upload</h4>
                    </div>
                    <div className="uploadeDimentions">
                      <p>Image dimension: 764x376</p>
                      <p>Size: Less than 200kb</p>
                    </div>
                  </div>
                </div> */}
                <ImageUpload  onImageSelect={setMobileImageSelected} saveBtnClicked={saveBtnClicked}/>
                <div className="update_tick">
                <img src={tick} alt=""  style={{ display: isWebImageSelected ? "block" : " none" }} />
                <p>Image For web*</p>
                </div>
                {/* <div className="fileUploadLt-mobile">
                  <div className="uploadImg">
                    <img src={Upload} alt="img" />
                    <h4>Upload</h4>
                  </div>
                  <div className="uploadeDimentions">
                    <p>Image dimension: 764x376</p>
                    <p>Size: Less than 200kb</p>
                  </div>
                </div> */}
                <ImageUpload  onImageSelect={setWebImageSelected}
  isImageSelected={isWebImageSelected} saveBtnClicked={saveBtnClicked}/>
              </div>
            </div>

            <div className="BannerFields">
              <div className="BannerInput">
                <h4>alt text</h4>
                <Input/>
                <h4>Link for mobile</h4>
                <Input/>
                <h4>Link for web</h4>
                <Input/>
              </div>
            </div>
          </div>
        </div>
        <div className="BannerLeft">
          <p>Right Banner</p>
          <div className="fileUploadBanner">
            <div className="BannerileUploadMob-Web">
              <div className="BannerFileUploadLt">
                <p>Image for mobile*</p>
                <div className="BannerFileUpload">
                  <div className="BannerFileUploadLt-mobile">
                    <div className="uploadImg">
                      <img src={Upload} alt="img" />
                      <h4>Upload</h4>
                    </div>
                    <div className="uploadeDimentions">
                      <p>Image dimension: 764x376</p>
                      <p>Size: Less than 200kb</p>
                    </div>
                  </div>
                </div>
                <div className="update_tick">
                <img src={tick} alt=""  style={{ display: isWebImageSelected ? "block" : " none" }} />
                <p>Image For web*</p>
                </div>
                {/* <div className="fileUploadLt-mobile">
                  <div className="uploadImg">
                    <img src={Upload} alt="img" />
                    <h4>Upload</h4>
                  </div>
                  <div className="uploadeDimentions">
                    <p>Image dimension: 764x376</p>
                    <p>Size: Less than 200kb</p>
                  </div>
                </div> */}
                <ImageUpload  onImageSelect={setWebImageSelected}
  isImageSelected={isWebImageSelected} saveBtnClicked={saveBtnClicked}/>
              </div>
            </div>

            <div className="BannerFields">
              <div className="BannerInput">
                <h4>alt text</h4>
                <Input/>
                <h4>Link for mobile</h4>
                <Input/>
                <h4>Link for web</h4>
                <Input/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
