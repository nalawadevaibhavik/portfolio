import { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

export default function Portfolio() {
  const [from, setFrom] = useState("2019-01-01");
  const [to, setTo] = useState("2024-04-24");

  // Dummy normalized values for equity curve
  const labels = [
    "2019", "2020", "2021", "2022", "2023", "2024"
  ];

  const focused = [100, 95, 130, 150, 210, 320];
  const nifty = [100, 92, 120, 135, 170, 215];

  const drawdown = nifty.map((_, i) => nifty[i] - focused[i]);

  const equityData = {
    labels,
    datasets: [
      {
        label: "Focused",
        data: focused,
        borderColor: "#16a34a",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
      {
        label: "NIFTY50",
        data: nifty,
        borderColor: "#1d4ed8",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const drawdownData = {
    labels,
    datasets: [
      {
        label: "Drawdown",
        data: drawdown,
        borderColor: "#f87171",
        backgroundColor: "#fecaca",
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="px-10 py-10 bg-white min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Trailing Returns
      </h1>

      {/* Trailing Returns TABLE */}
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2">NAME</th>
              <th className="py-2">YTD</th>
              <th>1D</th>
              <th>1W</th>
              <th>1M</th>
              <th>3M</th>
              <th>6M</th>
              <th>1Y</th>
              <th>3Y</th>
              <th>SI</th>
              <th>DD</th>
              <th>MAXDD</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2 font-medium">Focused</td>
              <td>-1.7%</td>
              <td>0.1%</td>
              <td>2.9%</td>
              <td>7.6%</td>
              <td>2.2%</td>
              <td>10.1%</td>
              <td>43.5%</td>
              <td>23.9%</td>
              <td>22.5%</td>
              <td>-2.8%</td>
              <td>-40.3%</td>
            </tr>

            <tr>
              <td className="py-2 font-medium">NIFTY50</td>
              <td>3.1%</td>
              <td>0.1%</td>
              <td>1.1%</td>
              <td>1.4%</td>
              <td>4.4%</td>
              <td>16.2%</td>
              <td>26.2%</td>
              <td>16.0%</td>
              <td>14.5%</td>
              <td>-1.5%</td>
              <td>-38.4%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Date Filters */}
      <div className="flex items-center gap-6 mb-4">
        <div>
          <label className="text-gray-600 text-sm block mb-1">From date</label>
          <input
            type="date"
            className="border rounded px-3 py-1 text-sm"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div>
          <label className="text-gray-600 text-sm block mb-1">To date</label>
          <input
            type="date"
            className="border rounded px-3 py-1 text-sm"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </div>

      {/* Equity Curve Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-10">
        Equity curve
      </h2>
      <p className="text-green-600 text-sm mb-6">Live since 2019-01-01</p>

      {/* Equity Line Chart */}
      <div className="bg-white">
        <Line data={equityData} options={{ responsive: true, maintainAspectRatio: false }} height={250} />
      </div>

      {/* Drawdown Chart */}
      <div className="mt-12">
        <Line data={drawdownData} options={{ responsive: true, maintainAspectRatio: false }} height={200} />
      </div>
    </div>
  );
}
