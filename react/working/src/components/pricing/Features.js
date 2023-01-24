import React from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Features = ({ feature }) => {
  return (
    <Stack>
      <Typography sx={{ fontSize: "20px" }}>
        {" "}
        <CheckCircleIcon></CheckCircleIcon>
        {feature}
      </Typography>
    </Stack>
  );
};

export default Features;
