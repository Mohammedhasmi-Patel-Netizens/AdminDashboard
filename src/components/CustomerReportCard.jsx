import React from "react";

const CustomerReportCard = ({cardTitle,visitorNum,fatArrowClass,currentTimeValue,lastTimeValue}) => {
  return (
    <div className="card">
      <div className="card-header border-0">
        <div className="d-flex justify-content-between">
            {/* cardTitle,visitorNum,fatArrowClass,currentTimeValue,lastTimeValue */}
          <h3 className="card-title">{cardTitle}</h3> 
          <a href="javascript:void(0);">View Report</a>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex">
          <p className="d-flex flex-column">
            <span className="text-bold text-lg mt-5">{visitorNum}</span>
            <span>Visitors Over Time</span>
          </p>
          <p className="ml-auto d-flex flex-column text-right">
            <span className={`text-${fatArrowClass === "fas fa-arrow-down" ? "danger":"success"} mt-5`}>
              <i className={`${fatArrowClass}`}></i> 12.5%
            </span>
            <span className="text-muted text-sm">Since last week</span>
          </p>
        </div>
        {/* <!-- /.d-flex --> */}

        <div className="position-relative mb-4">
          <canvas id="visitors-chart" height="200"></canvas>
        </div>

        <div className="d-flex flex-row justify-content-end">
          <span className="mr-2">
            <i className="fas fa-square text-primary"></i> {`${currentTimeValue}`}
          </span>

          <span>
            <i className="fas fa-square text-gray"></i> {`${lastTimeValue}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerReportCard;
