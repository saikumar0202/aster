import React from "react";
import logo from "../images/logo.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeIcon from "@mui/icons-material/Home";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import CollectionsIcon from "@mui/icons-material/Collections";
import Settings from "../components/settings";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTeleconsultation: false,
      showHomecare: false,
      showPharmacy: false,
      showElab: false,
    };
  }

  toggleSection = (section) => {
    this.setState((prevState) => ({
      [section]: !prevState[section],
    }));
  };

  render() {
    return (
      <>
        <div className="sideNav_panal">
          <div style={{ padding: "15px 20px" }}>
            <img src={logo} alt="img" />
            <h4>Super Admin</h4>
            <div className="sideNavigation">
              <label onClick={() => this.toggleSection("showTeleconsultation")}>
                Teleconsultation
                {this.state.showTeleconsultation ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </label>
              {this.state.showTeleconsultation && (
                <div className="sidenavIcon">
                  <div className="side_Label">
                    <label>
                      <HomeIcon style={{ marginRight: "8px" }} />
                      homepages
                    </label>
                  </div>
                  <div className="side_Label">
                    <label>
                      <ViewCarouselIcon style={{ marginRight: "8px" }} />
                      Components
                    </label>
                  </div>
                  <div className="side_Label">
                    <label>
                      <CollectionsIcon style={{ marginRight: "8px" }} />
                      Media library
                    </label>
                  </div>
                </div>
              )}

              <label onClick={() => this.toggleSection("showHomecare")}>
                Homecare
                {this.state.showHomecare ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </label>
              {this.state.showHomecare && (
                <div className="sidenavIcon">
                  <div className="side_Label">
                    <label>
                      <HomeIcon style={{ marginRight: "8px" }} />
                      homepages
                    </label>
                  </div>
                  <div className="side_Label">
                    <label>
                      <ViewCarouselIcon style={{ marginRight: "8px" }} />
                      Components
                    </label>
                  </div>
                  <div className="side_Label">
                    <label>
                      <CollectionsIcon style={{ marginRight: "8px" }} />
                      Media library
                    </label>
                  </div>
                </div>
              )}

              <label onClick={() => this.toggleSection("showPharmacy")}>
                Pharmacy
                {this.state.showPharmacy ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </label>
              {this.state.showPharmacy && (
                <div className="sidenavIcon">
                  <div className="side_Label">
                    <label>
                      <HomeIcon style={{ marginRight: "8px" }} />
                      homepages
                    </label>
                  </div>
                  <div className="side_Label">
                    <label>
                      <ViewCarouselIcon style={{ marginRight: "8px" }} />
                      Components
                    </label>
                  </div>
                  <div className="side_Label">
                    <label>
                      <CollectionsIcon style={{ marginRight: "8px" }} />
                      Media library
                    </label>
                  </div>
                </div>
              )}

              <label onClick={() => this.toggleSection("showElab")}>
                E lab
                {this.state.showElab ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </label>
              {this.state.showElab && (
                <div className="sidenavIcon">
                  <div className="side_Label">
                    <label>
                      <HomeIcon style={{ marginRight: "8px" }} />
                      homepages
                    </label>
                  </div>
                  <div className="side_Label">
                    <label>
                      <ViewCarouselIcon style={{ marginRight: "8px" }} />
                      Components
                    </label>
                  </div>
                  <div className="side_Label">
                    <label>
                      <CollectionsIcon style={{ marginRight: "8px" }} />
                      Media library
                    </label>
                  </div>
                </div>
              )}
            </div>
            <Settings />
          </div>
        </div>
      </>
    );
  }
}

export default SideNavBar;
