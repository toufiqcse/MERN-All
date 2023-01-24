import { Tab, Tabs } from "@mui/material";
import React from "react";

const Link = (props) => {
  const { name, path } = props.route;
  return <Tab label={name} href={path}></Tab>;
};

export default Link;
