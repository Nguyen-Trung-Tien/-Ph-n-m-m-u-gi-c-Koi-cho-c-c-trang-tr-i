// src/admin/ReportingAnalytics.js
import React, { useState, useEffect } from "react";

const ReportingAnalytics = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    // Fetch report data here
    setReport([
      { label: "Total Users", value: 120 },
      { label: "Total Products", value: 50 },
      { label: "Total Sales", value: 1000 },
    ]);
  }, []);

  return (
    <div>
      <h2>Reporting & Analytics</h2>
      <ul>
        {report.map((data, index) => (
          <li key={index}>
            {data.label}: ${data.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportingAnalytics;
