import React from "react";
import CustomerReportCard from "../components/CustomerReportCard";
import CustomerReportCardData from "../common/CustomerReportCardData";

const Dashboard = () => {
  // <!-- Main content -->

  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div className="d-flex gap-8">
              {/* <div class="card">
                <div class="card-header border-0">
                  <div class="d-flex justify-content-between">
                    <h3 class="card-title">Online Store Visitors</h3>
                    <a href="javascript:void(0);">View Report</a>
                  </div>
                </div>
                <div class="card-body">
                  <div class="d-flex">
                    <p class="d-flex flex-column">
                      <span class="text-bold text-lg">820</span>
                      <span>Visitors Over Time</span>
                    </p>
                    <p class="ml-auto d-flex flex-column text-right">
                      <span class="text-success">
                        <i class="fas fa-arrow-up"></i> 12.5%
                      </span>
                      <span class="text-muted">Since last week</span>
                    </p>
                  </div>

                  <div class="position-relative mb-4">
                    <canvas id="visitors-chart" height="200"></canvas>
                  </div>

                  <div class="d-flex flex-row justify-content-end">
                    <span class="mr-2">
                      <i class="fas fa-square text-primary"></i> This Week
                    </span>

                    <span>
                      <i class="fas fa-square text-gray"></i> Last Week
                    </span>
                  </div>
                </div>
              </div>
              <CustomerReportCard
              cardTitle = "sales Report"
              visitorNum = {910}
              fatArrowClass = "fas fa-arrow-down"
              currentTimeValue = "current Year"
              lastTimeValue = "last year"
              /> */}

              {CustomerReportCardData.map((item) => (
                <CustomerReportCard
                  cardTitle={item.cardTitle}
                  visitorNum={item.visitorNum}
                  fatArrowClass={item.fatArrowClass}
                  currentTimeValue={item.currentTimeValue}
                  lastTimeValue={item.lastTimeValue}
                />
              ))}

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  {
    /* <!-- /.card --> */
  }
};

export default Dashboard;
