import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import Data from "./Data.json";
//import NewComponent from "./newComponent";
import HeroBanner from "./heroBanner";
import Banner from "./2-in-1 Banner";
import PromotionalBanner from "./promotionalBanner";
import InstantBookingBanner from "./instantBookingBanner";
import QuickBookingBanner from "./quickBookingBanner";

const componentTypeList = {
  "Hero Banner": <HeroBanner />,
  "2-in-1 Banner": <Banner />,
  "Promotional Banner": <PromotionalBanner />,
  QuickBookingBanner: <QuickBookingBanner />,
  InstantBookingBanner: <InstantBookingBanner />,
};

const Pagination = ({ submited, active, filter, setBannerEdit, setBannerEditData, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedComponentType, setSelectedComponentType] = useState(null);

  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  console.log(filter);
  let filterRecords =
    active === "All" ? Data : Data.filter((each) => each.submition === active);

  filterRecords = filter.componentType && filter.componentType !== 'All'
    ? filterRecords.filter(
        (banner) => filter.componentType === banner.componentType && filter.createdBy===banner.createdBy 
      )
    : filterRecords;
  filterRecords = searchQuery
    ? filterRecords.filter(
        (banner) => banner.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filterRecords;
  
    

  const currentItems = filterRecords.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filterRecords.length / itemsPerPage);
  const sidePaginationNumbers = 4;

  const startRange = Math.max(1, currentPage - sidePaginationNumbers);
  const endRange = Math.min(totalPages, startRange + sidePaginationNumbers);

  const pageNumbers = [];
  for (let i = startRange; i <= endRange; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleListItemClick = (componentType, banner) => {
    setSelectedComponentType(componentType);
    setBannerEdit(componentType);
    setBannerEditData(banner);
  };

  return (
    <>
      {filterRecords.length === 0 ? (
        <div className="No_data_found">
          <p>No data found.</p>
        </div>
      ) : (
        <>
          {selectedComponentType ? (
            <div>{componentTypeList[selectedComponentType]}</div>
          ) : (
            <>
              <ul className="listTable">
                {currentItems.map((d) => (
                  <li className="listGroup" key={d.id}>
                    <div
                      className="list"
                      onClick={() => handleListItemClick(d.componentType, d)}
                    >
                      <span>{d.spanText}</span>
                      <div className="text">
                        <p>{d.title}</p>
                        <div className="created">
                          {d.rejectedOn ? (
                            <h6>
                              Rejected on: <p>{d.rejectedOn}</p>
                            </h6>
                          ) : d.publishedOn ? (
                            <h6>
                              Published on: <p>{d.publishedOn}</p>
                            </h6>
                          ) : (
                            <h6>
                              Created on: <p>{d.createdOn}</p>
                            </h6>
                          )}
                          {d.rejectedBy ? (
                            <h6>
                              Rejected by: <p>{d.rejectedBy}</p>
                            </h6>
                          ) : d.publishedBy ? (
                            <h6>
                              Published by: <p>{d.publishedBy}</p>
                            </h6>
                          ) : (
                            <h6>
                              Created by: <p>{d.createdBy}</p>
                            </h6>
                          )}
                          <h6>
                            Component type: <p>{d.componentType}</p>
                          </h6>
                        </div>
                      </div>
                      <div className="record">
                        <div className={d.filterClass}>{d.submition}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

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

                    {submited ? "Slide deleted successfully" : ""}
                  </label>
                </div>
              )}
              <br />
              <br />
              <br />
              <br />
              <footer>
                {filterRecords.length > 0 && (
                  <>
                    <div className="leftFt">
                      <p>
                        Showing <span>{currentItems.length}</span> Out of{" "}
                        <span>{Data.length}</span> Records
                      </p>
                    </div>
                    <div className="pagination">
                      <span className="Is" onClick={() => handlePageClick(5)}>
                        <FirstPageIcon />
                      </span>
                      <span
                        className="Is"
                        onClick={() => handlePageClick(currentPage - 1)}
                      >
                        <KeyboardArrowLeftIcon />
                      </span>
                      {pageNumbers.map((page) => (
                        <span
                          key={page}
                          className={`Is ${
                            currentPage === page ? "Active" : ""
                          }`}
                          onClick={() => handlePageClick(page)}
                        >
                          {page}
                        </span>
                      ))}
                      {endRange < totalPages && <span>...</span>}
                      <span
                        className="Is"
                        onClick={() => handlePageClick(currentPage + 1)}
                      >
                        <KeyboardArrowRightIcon />
                      </span>
                      <span
                        className="Is"
                        onClick={() => handlePageClick(totalPages)}
                      >
                        <LastPageIcon />
                      </span>
                    </div>
                  </>
                )}
              </footer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Pagination;
