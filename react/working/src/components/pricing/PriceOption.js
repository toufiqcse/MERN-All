import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Features from "./Features";

const PriceOption = (props) => {
  const { name, price, features } = props.product;

  return (
    <Stack sx={{ mt: 2, p: 2 }}>
      <Stack
        sx={{
          backgroundColor: "#576F72",
          p: 6,
          borderRadius: "10px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Stack sx={{ display: "flex" }}>
          <h3>
            <span className="text-6xl">{price}</span>
            <span className="text-xl">/mon</span>
          </h3>
        </Stack>
        <h3 className="mt-3 text-3xl text-blue-400 font-bold">{name}</h3>
        <Stack sx={{ mt: 2, textAlign: "left" }}>
          {features.map((feature, index) => (
            <Features key={index} feature={feature}></Features>
          ))}
        </Stack>
        <Button sx={{ mt: 4 }} variant="contained">
          Subscribe
        </Button>
      </Stack>
    </Stack>
  );
};

export default PriceOption;
