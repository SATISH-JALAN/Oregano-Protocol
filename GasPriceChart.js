import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function GasPriceChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchGasData() {
      const response = await fetch("https://api.gasstation.io/gas");
      const gasData = await response.json();
      setData(gasData.history);
    }
    fetchGasData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center">Gas Price Trends</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="gasPrice" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
