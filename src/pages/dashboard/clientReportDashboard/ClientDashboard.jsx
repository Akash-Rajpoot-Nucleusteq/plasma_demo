import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import SideBar from "../../../components/SideBar";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import ChartSalary from "./chartsalary";
import { handleDownloadPage } from "../../../commonFunctions/CommonFunctions";
import { HEADER_DASHBOARD } from "../../../assets/common/constants";
import { getCurrentUserDetails } from "../../../authentication/auth";

export const ClientDashboard = () => {
  const contentRef = useRef(null);

  const handleSelectChange = (value) => {};

  const generateRandomData = () => {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
  };

  const chartTitles = [
    "Revenue",
    "On/Off Site Ratio",
    "Margin",
    "Employment Nature",
    "Visa BreakUp",
    "Visa Status",
    "Skill",
    "Billable/Non-Billable",
  ];
  const chartOptions = {
    legend: {
      display: true,
      position: "right",
    },
  };

  const clientName = ["Client A", "Client B", "Client C"];
  const onShoreOffShoreOptions = ["OnShore", "OffShore"];
  const visaStatusOptions = ["Visa Status A", "Visa Status B", "Visa Status C"];
  const businessUnit = ["OnShore", "OffShore"];
  const employmentNatureOptions = ["Nature A", "Nature B", "Nature C"];
  const skillOptions = ["Skill A", "Skill B", "Skill C"];
  const project = ["Visa Status A", "Visa Status B", "Visa Status C"];
  const clientManagerFirstName = ["Nature A", "Nature B", "Nature C"];
  const ClientManagerLastName = ["Skill A", "Skill B", "Skill C"];
  const billableOptions = ["YES", "NO"];
  const revenueOptions = ["YES", "NO"];

  const pieChartData1 = {
    labels: ["Qtr 1", "Qtr 2", "Qtr 3", "Qtr 4"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#ff6384", "#3e007c", "#ffce56", "#4bc0c0"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#175000", "#003350"],
        data: generateRandomData(),
      },
    ],
  };

  const pieChartData2 = {
    labels: ["Qtr 1", "Qtr 2"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#ff6384", "#3e007c", "#ffce56", "#4bc0c0"],
        hoverBackgroundColor: ["#501800", "#4B5000"],
        data: generateRandomData(),
      },
    ],
  };
  const pieChartData3 = {
    labels: ["Qtr 1", "Qtr 2", "Qtr 3", "Qtr 4"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#ff6384", "#3e007c", "#ffce56", "#4bc0c0"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#175000", "#003350"],
        data: generateRandomData(),
      },
    ],
  };
  const pieChartData4 = {
    labels: ["Qtr 1", "Qtr 2", "Qtr 3", "Qtr 4", "Qtr 5"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#ff6384",
          "#3e007c",
          "#ffce56",
          "#4bc0c0",
          "#ff9f40",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: generateRandomData(),
      },
    ],
  };
  const pieChartData5 = {
    labels: ["Qtr 1", "Qtr 2", "Qtr 3", "Qtr 4"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#ff6384",
          "#3e007c",
          "#ffce56",
          "#4bc0c0",
          "#ff9f40",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: generateRandomData(),
      },
    ],
  };
  const pieChartData6 = {
    labels: ["Qtr 1", "Qtr 2", "Qtr 3", "Qtr 4", "Qtr 5"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#ff6384",
          "#3e007c",
          "#ffce56",
          "#4bc0c0",
          "#ff9f40",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: generateRandomData(),
      },
    ],
  };

  const generateData = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startDate = new Date(currentYear, 0, 1); // Start date: January 1st of the current year
    const endDate = currentDate; // End date: Current date

    const data = [];

    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      // Generate random value for testing
      const randomValue = Math.floor(Math.random() * 100);

      data.push({
        date: new Date(date),
        value: randomValue,
      });
    }

    return data;
  };

  const randomData = generateData();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const ytdData = randomData.filter(
    (item) => new Date(item.date).getFullYear() === currentYear
  );

  const chartData = {
    labels: ytdData.map((item) => item.date.toISOString().split("T")[0]),
    datasets: [
      {
        label: "YTD Data",
        data: ytdData.map((item) => item.value),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
      },
    ],
  };

  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            <SideBar
              userRole={getCurrentUserDetails().role}
              currentPageName={"Report"}
            />
          </div>
          <div className='col-xl-9 col-lg-8 col-md-12' ref={contentRef}>
            <div className='card shadow-sm ctm-border-radius talent-dashboard-card p-2'>
              <div className='card-body d-flex flex-wrap align-items-center justify-content-between'>
                <Select
                  className='mr-2 mb-2'
                  defaultValue='Client Name'
                  onChange={handleSelectChange}>
                  {clientName.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                <Select
                  className='mr-2 mb-2'
                  defaultValue='OnShore/OffShore'
                  onChange={handleSelectChange}>
                  {onShoreOffShoreOptions.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                <Select
                  className='mr-2 mb-2'
                  defaultValue='Visa Status'
                  onChange={handleSelectChange}>
                  {visaStatusOptions.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                <Select
                  className='mr-2 mb-2'
                  defaultValue='Employment Nature'
                  onChange={handleSelectChange}>
                  {employmentNatureOptions.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                <Select
                  className='mr-2 mb-2'
                  defaultValue='Skill'
                  onChange={handleSelectChange}>
                  {skillOptions.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                <Select
                  className='mr-2 mb-2'
                  defaultValue='Billable'
                  onChange={handleSelectChange}>
                  {billableOptions.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                <Button
                  type='primary'
                  onClick={() =>
                    handleDownloadPage(contentRef, "ClientDashboard")
                  }>
                  Download
                </Button>
              </div>
              <div className='mt-3 p-3'>
                <div className='row'>
                  {Array.from({ length: 6 }, (_, index) => (
                    <div className='col-md-4' key={index}>
                      <h5>{chartTitles[index]}</h5>
                      <Pie
                        data={
                          index === 0
                            ? pieChartData1
                            : index === 1
                            ? pieChartData2
                            : pieChartData3
                        }
                        options={chartOptions}
                        width={400}
                        height={300}
                      />
                    </div>
                  ))}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <div>
                      <Line width={500} height={300} data={chartData} />
                    </div>
                    <div>
                      <ChartSalary />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
