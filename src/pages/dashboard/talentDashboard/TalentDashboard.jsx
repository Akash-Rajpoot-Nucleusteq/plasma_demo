import React from "react";
import { Button } from "react-bootstrap";
import SideBar from "../../../components/layout/SideBar";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import { Pie } from "react-chartjs-2";
import { getCurrentUserDetails } from "../../../utility/authentication/auth";
import Header from "../../../components/layout/Header";

export const TalentDashboard = () => {
  const handleSelectChange = (value) => {};

  const handleDownloadClick = () => {};

  const clientOptions = ["Client A", "Client B", "Client C"];
  const onShoreOffShoreOptions = ["OnShore", "OffShore"];
  const visaStatusOptions = ["Visa Status A", "Visa Status B", "Visa Status C"];
  const employmentNatureOptions = ["Nature A", "Nature B", "Nature C"];
  const skillOptions = ["Skill A", "Skill B", "Skill C"];

  const generateRandomData = () => {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
  };

  const chartOptions = {
    legend: {
      display: true,
      position: "right",
    },
  };

  const chartTitles = [
    "Visa Status",
    "On/Off Site Ratio",
    "Margin",
    "Employment Nature",
    "Visa Status",
    "Skill",
  ];
  const pieChartData1 = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
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

  const pieChartData2 = {
    labels: ["Category 1", "Category 2"],
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
  const pieChartData3 = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
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
  const pieChartData4 = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
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
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
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
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
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
  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails().role}
                currentPageName={"Report"}
              />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-12'>
              <div className='card shadow-sm ctm-border-radius talent-dashboard-card p-2'>
                <div className='card-body d-flex flex-wrap align-items-center justify-content-between'>
                  <Select
                    className='mr-2 mb-2'
                    defaultValue='Client Name'
                    onChange={handleSelectChange}>
                    {clientOptions.map((option) => (
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

                  <Button type='primary' onClick={handleDownloadClick}>
                    Download
                  </Button>
                </div>
                <div className=' mt-3 p-3'>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
