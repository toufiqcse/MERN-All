import React from "react";
import { Stack } from "@mui/material";
import { LineChart, ResponsiveContainer, Line } from "recharts";

const Marks = () => {
  const data = [
    {
      name: "Page A",
      marks: 400,
      quiz: 90,
      amt: 2400,
    },
    {
      name: "Page B",
      marks: 450,
      quiz: 95,
      amt: 2210,
    },
    {
      name: "Page C",
      marks: 350,
      quiz: 98,
      amt: 2290,
    },
    {
      name: "Page D",
      marks: 200,
      quiz: 50,
      amt: 2000,
    },
    {
      name: "Page E",
      marks: 190,
      quiz: 70,
      amt: 2181,
    },
    {
      name: "Page F",
      marks: 390,
      quiz: 65,
      amt: 2500,
    },
    {
      name: "Page G",
      Marks: 90,
      quiz: 46,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={600} data={data}>
        <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Marks;
