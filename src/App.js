import "./App.css";
import SideNavBar from "./components/SideNavBar";
import MainHeader from "./components/MainHeader";
import ProjectContent from "./components/project_content";
import NewComponent from "./components/newComponent";
import { useState } from "react";
import {
  HERO_BANNER,
  INSTANT_BOOKING_BANNER,
  PROMOTIONAL_BANNER,
  QUICK_BOOKING_BANNER,
  TWO_IN_ONE_BANNER,
} from "./constants";
import HeroBanner from "./components/heroBanner";
import PromotionalBanner from "./components/promotionalBanner";
import Banner from "./components/2-in-1 Banner";
import QuickBookingBanner from "./components/quickBookingBanner";
import InstantBookingBanner from "./components/instantBookingBanner";



// import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [newComponent, setNewComponent] = useState(false);
  const [bannerEdit, setBannerEdit] = useState(false);
  const [bannerEditData, setBannerEditData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };
 

  const getBanner = () => {
    switch (bannerEdit) {
      case HERO_BANNER:
        return <HeroBanner setSelectedComponent={setBannerEdit} bannerEditData={bannerEditData}/>;
      case PROMOTIONAL_BANNER:
        return <PromotionalBanner setSelectedComponent={setBannerEdit} />;
      case TWO_IN_ONE_BANNER:
        return <Banner setSelectedComponent={setBannerEdit} />;
      case QUICK_BOOKING_BANNER:
        return <QuickBookingBanner setSelectedComponent={setBannerEdit} />;
      case INSTANT_BOOKING_BANNER:
        return <InstantBookingBanner setSelectedComponent={setBannerEdit} />;
      default:
        return null;
    }
  };


  if (newComponent) {
    return (
      <>
        <SideNavBar />
        <NewComponent setNewComponent={setNewComponent} />;
      </>
    );
  }
  if (bannerEdit) {
    return (
      <>
        <SideNavBar />
        <div className="addNew_Component">{getBanner()}</div>
      </>
    );
  }
  return (
    <div>
      <SideNavBar />
      <MainHeader setNewComponent={setNewComponent} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <ProjectContent setBannerEdit={setBannerEdit} setBannerEditData={setBannerEditData}  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </div>
  );
}

export default App;
