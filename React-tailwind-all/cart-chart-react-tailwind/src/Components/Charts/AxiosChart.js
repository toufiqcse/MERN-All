import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
const AxiosChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        // console.log(data.data.data);
        const phoneLoaded = data.data.data;
        const phoneData = phoneLoaded.map((phone) => {
          //   console.log(phone);
          const parts = phone.slug.split("-");
          //   console.log(parts);
          const price = parseInt(parts[1]);
          //   console.log(price);
          const singlePhone = {
            name: phone.phone_name,
            price: price,
          };
          //   console.log(singlePhone);
          return singlePhone;
        });
        // console.log(phoneData);
        setPhones(phoneData);
      });
  }, []);
  return (
    <div>
      <BarChart width={500} height={500} data={phones}>
        <Bar dataKey="price" fill="green" />
        <XAxis dataKey="name"></XAxis>
        <CartesianGrid></CartesianGrid>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default AxiosChart;
