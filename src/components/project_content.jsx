import { useEffect, useState } from "react";
import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DescriptionIcon from "@mui/icons-material/Description";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Pagination from "./pagination";
import ArrowUpIcon from "@mui/icons-material/ArrowDropUp";
import Data from "./Data.json";


export default function ProjectContent({setBannerEdit, setBannerEditData,searchQuery}) {
  const [activeTab, setActiveTab] = useState("All");

  const [filter, setFilter] = useState({
    createdBy: "",
    componentType: "",
  });



  const [filterToggle, setFilterToggle] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  const [clearVisible, setClearVisible] = useState(false);

  useEffect(() => {
    if (filter.createdBy && filter.componentType) {
      setFilterCount(2);
      setClearVisible(true);
    } else if (filter.createdBy || filter.componentType) {
      setFilterCount(1);
      setClearVisible(true);
    } else {
      setFilterCount(0);
      setClearVisible(false);
    }
  }, [filter]);

  const clearFilters = () => {
    setFilterCount(0);
    setFilter({ createdBy: "", componentType: "" });
    setFilterToggle(false);
    setClearVisible(false);
  };

  const records = (tab) => {
    setActiveTab(tab);
  };
  const createdByValues = [...new Set(Data.map(item => item.createdBy))];
const componentTypeValues = [...new Set(Data.map(item => item.componentType))];

  return (
    <>
      {console.log(filterCount)}
      <div className="main">
        <div className="submition_records">
          <div className="headStart">
            <ul>
              <li
                onClick={() => records("All")}
                className={activeTab === "All" ? "lvl-active" : ""}
              >
                <InsertDriveFileIcon />
                <p>All Components</p>
                <span>{Data.length}+etenties </span>
              </li>
              <li
                onClick={() => records("Draft")}
                className={activeTab === "Draft" ? "lvl-active" : ""}
              >
                <EventNoteIcon />
                <p>Drafts</p>
                <span>{Data.filter(item => item.componentType === "Draft").length} etenties</span>
              </li>
              <li
                onClick={() => records("Submitted")}
                className={activeTab === "Submitted" ? "lvl-active" : ""}
              >
                <DescriptionIcon />
                <p>submited</p>
                <span>{Data.filter(item => item.submition === "Draft").length}etenties</span>
              </li>
              <li
                onClick={() => records("Rejected")}
                className={activeTab === "Rejected" ? "lvl-active" : ""}
              >
                <ReportIcon />
                <p>reported</p>
                <span>{Data.filter(item => item.submition === "Reported").length}etenties</span>
              </li>
              <li
                onClick={() => records("Published")}
                className={activeTab === "Published" ? "lvl-active" : ""}
              >
                <CheckCircleIcon />
                <p>published</p>
                <span>{Data.filter(item => item.submition=== "Published").length}etenties</span>
              </li>
            </ul>
          </div>
          <div className="clear_Filter">
            <div
              className="clearFilters"
              onClick={clearFilters}
              style={{ display: clearVisible ? "block" : "none" }}
            >
              <p>Clear Filters</p>
            </div>
            <div
              className={`sideFilter ${filterCount > 0 ? 'active' : ''}`}
              onClick={() => setFilterToggle(!filterToggle)}
            >
              <p>
                Filters
                {filterCount > 0 && <span>({filterCount})</span>}
                {filterToggle ? <ArrowUpIcon /> : <ArrowDropDownIcon />}
              </p>
            </div>
          </div>
          {filterToggle && (
            <>
              <div className="popup">
                <div className="popupFilter">
                  <p>Author</p>
                  <select
                    className="author"
                    value={filter.createdBy}
                    onChange={(e) =>
                      setFilter({ ...filter, createdBy: e.target.value })
                    }
                  >
                    <option value="All">All</option>
                    {createdByValues?.map((value,index) => (
                      <option key={`${index}`} value={value}>{value}</option>
                    ))}
                  </select>

                  <div>
                    <p>Component Type</p>
                  </div>
                  <select
                    className="component"
                    value={filter.componentType}
                    onChange={(e) =>
                      setFilter({ ...filter, componentType: e.target.value })
                    }
                  >
                    <option value="All">All</option>
                    {componentTypeValues?.map((type,index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
        <>
          <Pagination  active={activeTab} filter={filter} setBannerEdit={setBannerEdit} setBannerEditData={setBannerEditData} searchQuery={searchQuery}/>
        </>
        </div>

        {/* <div className="listTable">
          <div className="list">
            <span>HB</span>
            <div className="text">
              <p>HeroBanner_Campaign-01</p>
              <div className="created">
                <a>
                  rejected on: <p>24 April</p>
                </a>
                <a>
                  Rejected by: <p>Nadeem Zafar</p>
                </a>
                <a>
                  Component type: <p>Hero banner</p>
                </a>
              </div>
            </div>
            <div className="filter filterRed">
              <a>rejected</a>
            </div>
          </div>
          {Data.map((d, i) =>
            <div key={i}>
              <div className='list'>
                <span>{d.spanText}</span>
                <div className='text'>
                  <p>{d.title}</p>
                  <div className='created'>
                    <a>Created on: <p>{d.createdOn}</p></a>
                    <a>Created by: <p>{d.createdBy}</p></a>
                    <a>Component type: <p>{d.componentType}</p></a>
                  </div>
                </div>
                <div className='filterAsh'>
                  <a>draft
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="list">
            <span>2B</span>
            <div className="text">
              <p>2-in-1Banner_Campaign-01</p>
              <div className="created">
                <a>
                  Created on: <p>24 April</p>
                </a>
                <a>
                  Created by: <p>Khitam Jabirah Srour</p>
                </a>
                <a>
                  Component type: <p>2-in-1 Banner</p>
                </a>
              </div>
            </div>
            <div className="filterAsh">
              <a>draft</a>
            </div>
          </div>
          <div className="list">
            <span>QB</span>
            <div className="text">
              <p>QuickBookingBanner_Campaign-01</p>
              <div className="created">
                <a>
                  Published on: <p>24 April</p>
                </a>
                <a>
                  Published by: <p>Nadeem Zafar</p>
                </a>
                <a>
                  Component type: <p>Quick Booking Banner</p>
                </a>
              </div>
            </div>
            <div className="filterGreen">
              <a>published</a>
            </div>
          </div>
          <div className="list">
            <span>PB</span>
            <div className="text">
              <p>PromotionalBanner_Campaign-01</p>
              <div className="created">
                <a>
                  rejected on: <p>24 April</p>
                </a>
                <a>
                  Rejected by: <p>Nadeem Zafar</p>
                </a>
                <a>
                  Component type: <p>Promotional Banner</p>
                </a>
              </div>
            </div>
            <div className="filterRed">
              <a>rejected</a>
            </div>
          </div>
          <div className="list">
            <span>HB</span>
            <div className="text">
              <p>HeroBanner_Campaign-02</p>
              <div className="created">
                <a>
                  Created on: <p>24 April</p>
                </a>
                <a>
                  Created by: <p>Khitam Jabirah Srour</p>
                </a>
                <a>
                  Component type: <p>Hero banner</p>
                </a>
              </div>
            </div>
            <div className="filterAsh">
              <a>draft</a>
            </div>
          </div>
          <div className="list">
            <span>2B</span>
            <div className="text">
              <p>2-in-1Banner_Campaign-02</p>
              <div className="created">
                <a>
                  Published on: <p>24 April</p>
                </a>
                <a>
                  Published by: <p>Nadeem Zafar</p>
                </a>
                <a>
                  Component type: <p>2-in-1 Banner</p>
                </a>
              </div>
            </div>
            <div className="filterGreen">
              <a>published</a>
            </div>
          </div>
          <div className="list">
            <span>QB</span>
            <div className="text">
              <p>QuickBookingBanner_Campaign-02</p>
              <div className="created">
                <a>
                  rejected on: <p>24 April</p>
                </a>
                <a>
                  Rejected by: <p>Nadeem Zafar</p>
                </a>
                <a>
                  Component type: <p>Quick Booking Banner</p>
                </a>
              </div>
            </div>
            <div className="filterRed">
              <a>rejected</a>
            </div>
          </div>
          <div className="list">
            <span>PB</span>
            <div className="text">
              <p>PromotionalBanner_Campaign-08</p>
              <div className="created">
                <a>
                  Created on: <p>24 April</p>
                </a>
                <a>
                  Created by: <p>Khitam Jabirah Srour</p>
                </a>
                <a>
                  Component type: <p>Promotional Banner</p>
                </a>
              </div>
            </div>
            <div className="filterAsh">
              <a>draft</a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <footer>
          <div className="leftFt">
            <p>
              Showing<span>8</span>Out of<span>59</span>Records
            </p>
          </div>
          <div className="pagination">
            <span className="Is" onClick={pagination}>
              <FirstPageIcon />
            </span>
            <span className="Is" onClick={pagination}>
              <KeyboardArrowLeftIcon />
            </span>
            <span className="Is Active" onClick={pagination}>
              1
            </span>
            <span className="Is" onClick={pagination}>
              2
            </span>
            <span className="Is" onClick={pagination}>
              3
            </span>
            <span className="Is" onClick={pagination}>
              4
            </span>
            <span className="Is" onClick={pagination}>
              5
            </span>
            <span>...</span>
            <span className="Is" onClick={pagination}>
              10
            </span>
            <span className="Is" onClick={pagination}>
              <KeyboardArrowRightIcon />
            </span>
            <span className="Is" onClick={pagination}>
              <LastPageIcon />
            </span>
          </div>
        </footer> */}
      
    </>
  );
}
