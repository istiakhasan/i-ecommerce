import React from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PaidIcon from "@mui/icons-material/Paid";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReactApexChart from "react-apexcharts";
// import ReactApexChart from 'apexcharts'
const DashboardLanding = () => {
  const state = {
    toolbar: {
      show: false,
    },
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "100%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      colors: ["#F44336", "#E91E63", "#9C27B0"],
      fill: {
        opacity: 0.8,
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };

  const pieState = {
    series: [
      {
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar:{
            show:false
        }
      },
      stroke: {
        curve: "stepline",
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        // text: "Stepline Chart",
        // align: "left",
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      colors: ["#9C27B0"],


    },
  };
  return (
    <div className="dashboard_landing">
      <section className= "container-fluid row mx-0 px-0">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <div className="dashboard_card">
            <div className="d-flex align-items-center justify-content-between flex-row-reverse">
              <figure className="d-flex align-items-end m-0">
                <GroupAddIcon sx={{ fontSize: "40px" }} />
              </figure>
              <p className="dashboard_card_title">Users</p>
            </div>
            <span className="count">300</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <div className="dashboard_card">
            <div className="d-flex align-items-start justify-content-between flex-row-reverse">
              <figure className="d-flex align-items-end m-0">
                <GroupAddIcon sx={{ fontSize: "40px" }} />
              </figure>
              <p className="dashboard_card_title">Total order</p>
            </div>
            <span className="count">1000</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <div className="dashboard_card">
            <div className="d-flex align-items-center justify-content-between flex-row-reverse">
              <figure className="d-flex align-items-end m-0">
                <GroupAddIcon sx={{ fontSize: "40px" }} />
              </figure>
              <p className="dashboard_card_title"> queue</p>
            </div>
            <span className="count">300</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <div className="dashboard_card">
            <div className="d-flex align-items-center justify-content-between flex-row-reverse">
              <figure className="d-flex align-items-end m-0">
                <GroupAddIcon sx={{ fontSize: "40px" }} />
              </figure>
              <p className="dashboard_card_title"> review</p>
            </div>
            <span className="count">300</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <div className="dashboard_card">
            <div className="d-flex align-items-center justify-content-between flex-row-reverse">
              <figure className="d-flex align-items-end m-0">
                <GroupAddIcon sx={{ fontSize: "40px" }} />
              </figure>
              <p className="dashboard_card_title">Running Ad</p>
            </div>
            <span className="count">300</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <div className="dashboard_card">
            <div className="d-flex align-items-center justify-content-between flex-row-reverse">
              <figure className="d-flex align-items-end m-0">
                <PaidIcon sx={{ fontSize: "40px" }} />
              </figure>
              <p className="dashboard_card_title">Amount</p>
            </div>
            <span className="count">$102455300</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <div className="dashboard_card">
            <div className="d-flex align-items-center justify-content-between flex-row-reverse">
              <figure className="d-flex align-items-end m-0">
                <InventoryIcon sx={{ fontSize: "40px" }} />
              </figure>
              <p className="dashboard_card_title">Products</p>
            </div>
            <span className="count">5300 PCS</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <div className="dashboard_card">
            <div className="d-flex align-items-center justify-content-between flex-row-reverse">
              <figure className="d-flex align-items-end m-0">
                <GroupAddIcon sx={{ fontSize: "40px" }} />
              </figure>
              <p className="dashboard_card_title">Expense</p>
            </div>
            <span className="count">$5300</span>
          </div>
        </div>

        <div className="col-md-6">
          <div id="chart">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height={550}
            />
          </div>
        </div>
        <div className="col-md-6 ">
          <div id="chart">
            <ReactApexChart
              options={pieState.options}
              series={pieState.series}
              type="line"
              height={550}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardLanding;
