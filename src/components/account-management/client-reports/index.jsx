import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SideBar from "../sideBar";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import { Pie } from "react-chartjs-2";


const ClientReport = () => {

    const [selectedReport, setSelectedReport] = useState(null);

    const handleDownloadClick = () => {
        console.log("Download clicked");
    };
    const generateRandomData = () => {
        return Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    };

    const handleClick = () => {

    };
    const chartTitles = [
        " Talent Acquisition Report",
        " Montly Billing",
        " Assets Report",
        " Leave Report",
        "Assignment Report",
        
    ];
    const chartOptions = {
        legend: {
            display: true,
            position: "right",
        },
    };

    const getChartData = (index) => {
        return {
          labels: [
            "Category 1",
            "Category 2",
            "Category 3",
            "Category 4",
            "Category 5",
          ],
          datasets: [
            {
              label: "Rainfall",
              backgroundColor: [
                "#FF6384",
                "#3E007C",
                "#FFCE56",
                "#4BC0C0",
                "#FF9F40",
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
      };
    
      const handleReportClick = (index) => {
        setSelectedReport(index);
      };

    return (
        <div className='page-wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
                        <SideBar />
                    </div>
                    <div className='col-xl-9 col-lg-8 col-md-12'>
                        <div className='card shadow-sm ctm-border-radius talent-dashboard-card p-2'>
                            <div className='card-body d-flex flex-wrap align-items-center justify-content-between'>
                                {chartTitles.map((title, index) => (
                                    <Button
                                        type='primary'
                                        key={index}
                                        onClick={() => handleReportClick(index)}
                                    >
                                        {title}
                                    </Button>
                                ))}
                                <Button type='primary' onClick={handleDownloadClick}>
                                    Download
                                </Button>
                            </div>
                        </div>
                        <div className='ctm-border-radius shadow-sm card mt-3 p-3'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    {selectedReport !== null && (
                                        <>
                                            <h5>{chartTitles[selectedReport]}</h5>
                                            <Pie
                                                data={getChartData(selectedReport)}
                                                options={chartOptions}
                                                width={400}
                                                height={300}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReport;