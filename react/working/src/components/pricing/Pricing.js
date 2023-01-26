import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PriceOption from "./PriceOption";
import products from "../data/products";
const Pricing = () => {
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
          <PriceOption key={product.ser} product={product}></PriceOption>
        ))}
      </Box>
    </Stack>
  );
};

export default Pricing;
