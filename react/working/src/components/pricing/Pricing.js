import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PriceOption from "./PriceOption";

const Pricing = () => {
  const products = [
    {
      id: 11,
      name: "Free",
      price: 0,
      features: ["Awosome Features", "Everything is free"],
    },
    {
      id: 20,
      name: "Premium",
      price: 30.44,
      features: ["Awosome Features", "Everything is free"],
    },
    {
      id: 30,
      name: "Paid",
      price: 23.65,
      features: ["Awosome Features", "Everything is free"],
    },
    {
      id: 40,
      name: "Post Paid",
      price: 60.56,
      features: ["Awosome Features", "Everything is free"],
    },
  ];
  return (
    <Stack>
      <Typography
        sx={{
          typography: "h3",
          marginTop: "64px",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#2C3639",
          color: "#FFFFFF",
          fontWeight: "bold",
        }}
      >
        Best Deal of the Town
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(4, 1fr)",
          },
          columnGap: "3",
          rowGap: "1",
        }}
      >
        {products.map((product) => (
          <PriceOption key={product.id} product={product}></PriceOption>
        ))}
      </Box>
    </Stack>
  );
};

export default Pricing;
