import React, { useState, useEffect } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImageUpload from "./imagesUpload";
import tick from "../images/tick.svg";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 for generating unique IDs

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function HeroBanner({
  setnextComponent,
  setSelectedComponent,
  selectedImage,
  bannerEditData,
}) {
  const customDimensionsMobile = [
    "Image dimension: 764x376",
    "Size: Less than 200kb",
  ];

  const customDimensionsWeb = [
    "Image dimension: 1600x500",
    "Size: Less than 200kb",
  ];
  const [isMobileImageSelected, setMobileImageSelected] = useState(false);
  const [isWebImageSelected, setWebImageSelected] = useState(false);
  const[isDisabled, setFieldsDisabled]=useState(true)
  const [open, setOpen] = React.useState(false);
  const clickOpen = () => setOpen(true);
  const clickClose = () => setOpen(false);

  const [modelopen, setModelopen] = React.useState(false);
  const modelclickOpen = () => setModelopen(true);
  const modelClose = () => setModelopen(false);

  const [slides, setSlides] = useState([
    {
      id: uuidv4(),
      order: "01",
      altText: "",
      mobileLink: "",
      webLink: "",
      mobileImage: null,
      webImage: null,
      isMobileImageSelected: false,
      isWebImageSelected: false,
    },
  ]);

  const [slideOrderOptions, setSlideOrderOptions] = useState(["01"]);

  const addSlide = () => {
    const newOrder = String(slides.length + 1).padStart(2, "0");
    const newSlide = {
      id: uuidv4(), // You need to implement this function to generate a unique ID.
      order: newOrder,
      altText: "",
      mobileLink: "",
      webLink: "",
      mobileImage: null,
      webImage: null,
      isMobileImageSelected: false,
      isWebImageSelected: false,
    };
    console.log(slideOrderOptions);
    setSlides((prevSlides) => [...prevSlides, newSlide]);
    setSlideOrderOptions((prevOptions) => [...prevOptions, newOrder]);
  };

  const deleteSlide = (currentSlide) => {
    const updatedSlides = slides.filter(
      (slide) => slide.order !== currentSlide.order
    );
    setSlides(updatedSlides);

    const deletedOrder = slides.find(
      (slide) => slide.order === currentSlide.order
    )?.order;
    const updatedOptions = slideOrderOptions.filter(
      (order) => order !== deletedOrder
    );
    setSlideOrderOptions(updatedOptions);

    setOpen(false);
  };

  const [isContentVisible, setContentVisible] = useState(false);
  const [saveBtnClicked, setSaveBtnClicked] = useState(false);
  const [submited, setSubmited] = useState(false);

  // ... (other functions)

  const saveSlides = () => {
    setContentVisible(true);
    setSaveBtnClicked(true);

    setTimeout(() => {
      setContentVisible(false);
      setSaveBtnClicked(false);
    }, 30000);
  };

  const submitedRecord = () => {
    setSubmited(true);

    setTimeout(() => {
      setSubmited(false);
    }, 10000);
  };

  useEffect(() => {
    if (isContentVisible === "delete") {
      const timeOut = setTimeout(() => {
        setContentVisible("");
      }, 10000);

      // Clear the timeout if the component unmounts or the dependency changes
      return () => clearTimeout(timeOut);
    }
  }, [isContentVisible])

  const handleEdit=()=>{
    setFieldsDisabled(false)

  }

  return (
    <div className="header_DashBord">
      <div className="DashBordSection">
        {!isDisabled ? (
          <div className="Left">
            <button className="Dashbtn" onClick={clickOpen}>
              <KeyboardArrowLeftIcon />
              Discard & Go Back
            </button>
            <button className="saveBtn" onClick={saveSlides}>
              <DoneIcon />
              Save
            </button>
          </div>
        ) : (
          <div className="Left">
            <button className="Dashbtn" onClick={clickOpen}>
              <KeyboardArrowLeftIcon />
              Back
            </button>
            <button className="Dashbtn" onClick={handleEdit}>
              <EditIcon />
              Edit
            </button>
            <button className="saveBtn" onClick={saveSlides}>
              <DoneIcon />
              Save
            </button>
          </div>
        )}

        <Modal
          open={open}
          onClose={clickClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="boxModal">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Discard Changes?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Your changes will not be saved. Are you sure you want to Discard
              the changes?
            </Typography>
            <div className="btn">
              <button onClick={clickClose} className="Canclebtn">
                Cancle
              </button>
              <button
                className="discardBtn"
                onClick={() => setSelectedComponent(null)}
              >
                Discard
              </button>
            </div>
          </Box>
        </Modal>
        {!isDisabled ? (
          <div className="Right">
            <button className="btn" onClick={submitedRecord}>
              <TelegramIcon />
              Submit for approval
            </button>
          </div>
        ) : null}
        <div className="promotionalBanner">
          <div className="allComponents">
            <p>All components</p>
            <span> / </span>
            {bannerEditData ? (
              <p>{bannerEditData.title}</p>
            ) : (
              <p>New component</p>
            )}
          </div>
          <div className="addInput">
            <div className="InputBanner">
              <h4>Component Name*</h4>
              <input
                type="text"
                className="PopUpInput"
                placeholder=" HeroBanner_Campaign-03"
                disabled={isDisabled}

                value={bannerEditData ? bannerEditData.title : ""}
              />
            </div>
            <div className="heroBanner">
              <p>Component Type</p>
              <span>hero Banner</span>
            </div>
          </div>
          <div className="uploadBannerHead">
            <div>
              <p>hero Banner</p>
              <span>
                Top banner carousel user sees arriving on the website, it
                displays mostly offers categories, etc.
              </span>
            </div>
            <div className="createdView">
              <h6>
                Created by: <p> Khitam Jabirah Srour</p>
              </h6>
              <h6>
                Created on: <p> Apr 13, 4:45 pm</p>
              </h6>
            </div>
          </div>

          {slides.map((slide, index) => (
            <div className="uploadBanner">
              <p>{`Slide ${index + 1}`}</p>
              <div className="fileUpload">
                <div className="fileUploadMob-Web">
                  <div className="fileUploadLt">
                    <div className="update_tick">
                      <img
                        src={tick}
                        alt=""
                        style={{
                          display: isMobileImageSelected ? "block" : " none",
                        }}
                      />
                      <p>Image for mobile*</p>
                    </div>
                    <ImageUpload
                      dimensionsText={customDimensionsMobile}
                      onImageSelect={setMobileImageSelected}
                      isImageSelected={isMobileImageSelected}
                      saveBtnClicked={saveBtnClicked}
                    />
                    <div className="InputLinkMobile">
                      <h4>Link for mobile</h4>
                      <input
                        type="text"
                        className={`PopUpInput ${
                          saveBtnClicked && !selectedImage ? "error" : ""
                        }`}
                        placeholder=" Please enter the link for the slide"
                      />
                    </div>
                  </div>

                  <div className="fileUploadRt">
                    <div className="update_tick">
                      <img
                        src={tick}
                        alt=""
                        style={{
                          display: isWebImageSelected ? "block" : " none",
                        }}
                      />
                      <p>Image for web*</p>
                    </div>
                    <ImageUpload
                      dimensionsText={customDimensionsWeb}
                      onImageSelect={setWebImageSelected}
                      isImageSelected={isWebImageSelected}
                      saveBtnClicked={saveBtnClicked}
                    />
                    <div className="InputLinkWeb">
                      <h4>Link for web</h4>
                      <input
                        type="text"
                        className={`PopUpInput ${
                          saveBtnClicked && !selectedImage ? "error" : ""
                        }`}
                        placeholder=" Please enter the link for the slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="BottomInput">
                  <div className="LeftSelect">
                    <p>slide order*</p>
                    <select defaultValue={slide.order}>
                      {slideOrderOptions.map((order) => (
                        <option key={order} value={order}>
                          {order}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="RightSelect">
                    <p>alt text</p>
                    <input
                      type="text"
                      placeholder="Please enter your Alt Text for the slide"
                    />
                  </div>
                </div>
                <div className="DltBtn">
                  <button onClick={modelclickOpen}>
                    <DeleteIcon />
                    Delete slide
                  </button>
                </div>
                <Modal
                  open={modelopen}
                  onClose={modelClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className="boxModal">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Delete slide?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Are you sure you want to permanently delete this slide?
                    </Typography>
                    <div className="btn">
                      <button onClick={modelClose} className="Canclebtn">
                        Cancle
                      </button>
                      <button
                        className="discardBtn"
                        onClick={() => {
                          deleteSlide(slide);
                          modelClose();
                          setContentVisible("delete");
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          ))}
          <div className="AddSlide">
            <button onClick={addSlide}>
              <span>+</span>Add New Slide
            </button>
            {isContentVisible && (
              <div className="recordSave">
                <label>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.19629 14.0371C6.24382 14.0371 5.34603 13.8548 4.50293 13.4902C3.66439 13.1257 2.92383 12.6221 2.28125 11.9795C1.63867 11.3369 1.13509 10.5964 0.770508 9.75781C0.405924 8.91471 0.223633 8.01693 0.223633 7.06445C0.223633 6.11198 0.405924 5.21647 0.770508 4.37793C1.13509 3.53483 1.63639 2.79199 2.27441 2.14941C2.91699 1.50684 3.65755 1.00326 4.49609 0.638672C5.33919 0.274089 6.23698 0.0917969 7.18945 0.0917969C8.14193 0.0917969 9.03971 0.274089 9.88281 0.638672C10.7259 1.00326 11.4688 1.50684 12.1113 2.14941C12.7539 2.79199 13.2575 3.53483 13.6221 4.37793C13.9867 5.21647 14.1689 6.11198 14.1689 7.06445C14.1689 8.01693 13.9867 8.91471 13.6221 9.75781C13.2575 10.5964 12.7539 11.3369 12.1113 11.9795C11.4688 12.6221 10.7259 13.1257 9.88281 13.4902C9.04427 13.8548 8.14876 14.0371 7.19629 14.0371ZM6.43066 10.4004C6.54915 10.4004 6.65625 10.373 6.75195 10.3184C6.84766 10.2637 6.93197 10.1816 7.00488 10.0723L10.2178 5.00684C10.2588 4.93848 10.2975 4.86556 10.334 4.78809C10.3704 4.71061 10.3887 4.63314 10.3887 4.55566C10.3887 4.39616 10.3294 4.27083 10.2109 4.17969C10.0924 4.08398 9.96029 4.03613 9.81445 4.03613C9.61393 4.03613 9.44987 4.14095 9.32227 4.35059L6.40332 9.04004L5.01562 7.24902C4.92904 7.13509 4.84473 7.05762 4.7627 7.0166C4.68522 6.97559 4.59635 6.95508 4.49609 6.95508C4.34115 6.95508 4.21126 7.01204 4.10645 7.12598C4.00163 7.23535 3.94922 7.36751 3.94922 7.52246C3.94922 7.59993 3.96289 7.67741 3.99023 7.75488C4.02214 7.8278 4.06315 7.89844 4.11328 7.9668L5.8291 10.0723C5.92025 10.1908 6.01367 10.2751 6.10938 10.3252C6.20508 10.3753 6.31217 10.4004 6.43066 10.4004Z"
                      fill="#00CD08"
                    />
                  </svg>

                  {isContentVisible === "delete"
                    ? "Slide deleted successfully"
                    : "Your record is saved successfully"}
                </label>
              </div>
            )}
            {submited && (
              <div className="recordSave">
                <label>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.19629 14.0371C6.24382 14.0371 5.34603 13.8548 4.50293 13.4902C3.66439 13.1257 2.92383 12.6221 2.28125 11.9795C1.63867 11.3369 1.13509 10.5964 0.770508 9.75781C0.405924 8.91471 0.223633 8.01693 0.223633 7.06445C0.223633 6.11198 0.405924 5.21647 0.770508 4.37793C1.13509 3.53483 1.63639 2.79199 2.27441 2.14941C2.91699 1.50684 3.65755 1.00326 4.49609 0.638672C5.33919 0.274089 6.23698 0.0917969 7.18945 0.0917969C8.14193 0.0917969 9.03971 0.274089 9.88281 0.638672C10.7259 1.00326 11.4688 1.50684 12.1113 2.14941C12.7539 2.79199 13.2575 3.53483 13.6221 4.37793C13.9867 5.21647 14.1689 6.11198 14.1689 7.06445C14.1689 8.01693 13.9867 8.91471 13.6221 9.75781C13.2575 10.5964 12.7539 11.3369 12.1113 11.9795C11.4688 12.6221 10.7259 13.1257 9.88281 13.4902C9.04427 13.8548 8.14876 14.0371 7.19629 14.0371ZM6.43066 10.4004C6.54915 10.4004 6.65625 10.373 6.75195 10.3184C6.84766 10.2637 6.93197 10.1816 7.00488 10.0723L10.2178 5.00684C10.2588 4.93848 10.2975 4.86556 10.334 4.78809C10.3704 4.71061 10.3887 4.63314 10.3887 4.55566C10.3887 4.39616 10.3294 4.27083 10.2109 4.17969C10.0924 4.08398 9.96029 4.03613 9.81445 4.03613C9.61393 4.03613 9.44987 4.14095 9.32227 4.35059L6.40332 9.04004L5.01562 7.24902C4.92904 7.13509 4.84473 7.05762 4.7627 7.0166C4.68522 6.97559 4.59635 6.95508 4.49609 6.95508C4.34115 6.95508 4.21126 7.01204 4.10645 7.12598C4.00163 7.23535 3.94922 7.36751 3.94922 7.52246C3.94922 7.59993 3.96289 7.67741 3.99023 7.75488C4.02214 7.8278 4.06315 7.89844 4.11328 7.9668L5.8291 10.0723C5.92025 10.1908 6.01367 10.2751 6.10938 10.3252C6.20508 10.3753 6.31217 10.4004 6.43066 10.4004Z"
                      fill="#00CD08"
                    />
                  </svg>

                  {submited ? "Your record is submitted successfully" : ""}
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
