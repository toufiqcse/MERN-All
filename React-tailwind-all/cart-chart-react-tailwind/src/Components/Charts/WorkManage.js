import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import AxiosChart from "./AxiosChart";

const WorkManage = () => {
  const data = [
    {
      name: "Reading",
      time: 240,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sleeping",
      time: 480,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Working",
      time: 600,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Rest",
      time: 200,
      pv: 3908,
      amt: 2000,
    },
  ];
  return (
    <div className="mt-4 mx-6 grid grid-cols-3">
      <div>
        <LineChart width={400} height={500} data={data}>
          <CartesianGrid></CartesianGrid>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Line type="monotone" dataKey="time" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div>
        <BarChart width={400} height={500} data={data}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Bar dataKey="time" fill="red"></Bar>
        </BarChart>
      </div>
      <div>
        <AxiosChart></AxiosChart>
      </div>
    </div>
  );
};

export default WorkManage;
