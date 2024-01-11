import React, { useState } from "react";
import { Button, Box, Modal } from "@mui/material";
import Carousel from "../images/Carousel.svg";
import Bannersimg from "../images/Banners.svg";
import Banners from "../images/Banners 2.svg";
import SearchIcon from "@mui/icons-material/Search";
import { HERO_BANNER, INSTANT_BOOKING_BANNER, PROMOTIONAL_BANNER, QUICK_BOOKING_BANNER, TWO_IN_ONE_BANNER } from "../constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 854,
  height: 470,
  bgcolor: "#F9FAFB",
  boxShadow: 24,
  pt: 3,
  px: 3,
  pb: 3,
  py: 3,
};
export default function PopUp({
  open,
  handleClose,
  setSelectedComponent,
}) {
  const buttonClickHandler = (e) => {
    const a = document.getElementsByClassName("box");
    console.log(typeof a);
    Array.from(a).map((ele) => {
      ele.classList.remove("btnopen");
      return null;
    });
    e.currentTarget.classList.add("btnopen");
  };

  const [selectedOption, setSelectedOption] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCreateComponent = () => {
    console.log(selectedOption);
    setSelectedComponent(selectedOption);
  };
  const bannerInfo = [
    {
      img: Carousel,
      title: "Hero Banner",
      description: "Top banner carousel user sees arriving on the website, it displays mostly offers categories, etc.",
      type: HERO_BANNER,
    },
    {
      img: Bannersimg,
      title: "Promotional Banner",
      description: "Used primarily to publicise the advertisers products or services & for promotion of brands, events & products.",
      type: PROMOTIONAL_BANNER,
    },
    {
      img: Banners,
      title: "2-in-1 Banner",
      description: "Banner is used for the promotion of brands, events, categories, products and more.",
      type: TWO_IN_ONE_BANNER,
    },
    {
      img: Bannersimg,
      title: "Quick Booking Banner",
      description: "Wizard to recommend doctors based on user profile, choice of speciality and mode of consultation",
      type: QUICK_BOOKING_BANNER,
    },
    {
      img: Bannersimg,
      title: "Instant Booking Banner",
      description: "Provides user the option to book an immediate Video Consultation with a General Practitioner.",
      type: INSTANT_BOOKING_BANNER,
    },
  ]
  return (
    <>
      <React.Fragment>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, borderRadius: "10px" }}>
            <center>
              <div className="popUpBox">
                <div className="popUpHead">
                  <div className="popUpLeft">
                    <h2>choose Component</h2>
                  </div>
                  <div className="popUpRight">
                    <span className="material-symbols-outlined">
                      <SearchIcon />
                    </span>
                    <input
                      type="text"
                      className="PopUpInput"
                      placeholder=" Search by component type"
                    />
                  </div>
                </div>
                <div className="containerBox">
                  {bannerInfo.map((banner, index) => (
                    <label key={banner.type} className={`box ${selectedOption === banner.type ? 'btnopen' : ''}`}>
                    <input
                      type="radio"
                      value={banner.type}
                      checked={selectedOption === banner.type}
                      onChange={handleRadioChange}
                    />
                    <div className="boxView">
                      <div className="img">
                        <img src={Carousel} alt="" />
                      </div>
                      <h4>{banner.title}</h4>
                      <p>{banner.description}</p>
                    </div>
                  </label>
                  ))}
                  {/* <label className="box" onClick={buttonClickHandler}>
                    <input
                      type="radio"
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={handleRadioChange}
                    />
                    <div className="boxView">
                      <div className="img">
                        <img src={Carousel} alt="" />
                      </div>
                      <h4>Hero Banner</h4>
                      <p>
                        Top banner carousel user sees arriving on the website,
                        it displays mostly offers categories, etc.
                      </p>
                    </div>
                  </label>
                  <div className="box" onClick={buttonClickHandler}>
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption === "option2"}
                      onChange={handleRadioChange}
                    />
                    <div className="boxView">
                      <div className="img">
                        <img src={Bannersimg} alt="" />
                      </div>
                      <h4>Promotional Banner</h4>
                      <p>
                        Used primarily to publicise the advertisers products or
                        services & for promotion of brands, events & products.
                      </p>
                    </div>
                  </div>
                  <div className="box" onClick={buttonClickHandler}>
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption === "option3"}
                      onChange={handleRadioChange}
                    />
                    <div className="boxView">
                      <div className="img">
                        <img src={Banners} alt="" />
                      </div>
                      <h4>2-in-1 Banner</h4>
                      <p>
                        Banner is used for the promotion of brands, events,
                        categories, products and more.
                      </p>
                    </div>
                  </div>
                  <div className="box" onClick={buttonClickHandler}>
                    <input
                      type="radio"
                      value="option4"
                      checked={selectedOption === "option4"}
                      onChange={handleRadioChange}
                    />
                    <div className="boxView">
                      <div className="img">
                        <img src={Bannersimg} alt="" />
                      </div>
                      <h4>Quick Booking Banner</h4>
                      <p>
                        Wizard to recommend doctors based on user profile,
                        choice of speciality and mode of consultation
                      </p>
                    </div>
                  </div>
                  <div className="box" onClick={buttonClickHandler}>
                    <input
                      type="radio"
                      value="option5"
                      checked={selectedOption === "option5"}
                      onChange={handleRadioChange}
                    />
                    <div className="boxView">
                      <div className="img">
                        <img src={Bannersimg} alt="" />
                      </div>
                      <h4>Instant Booking Banner</h4>
                      <p>
                        Provides user the option to book an immediate Video
                        Consultation with a General Practitioner.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </center>
            <div className="btn">
              <Button onClick={handleClose}>Cancel</Button>
              <button className="createBtn" onClick={handleCreateComponent}>
                Create a component
              </button>
            </div>
          </Box>
        </Modal>
      </React.Fragment>
    </>
  );
}
