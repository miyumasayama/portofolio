import { Box, Grid2 } from "@mui/material";
import { FC } from "react";
import { HomeTitle } from "../../molecules/homeTitle/homeTitle";
import { Card } from "./fragments/card";
import { products } from "./fragments/products";

export const Products: FC = () => {
  return (
    <Box
      pt={1}
      pb={8}
      id="products"
      sx={{ backgroundColor: "#eaedf7", scrollMarginTop: "100px" }}
    >
      <HomeTitle text="Products" />
      <Box mx={4}>
        <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map(({ name, path, description, image }) => {
            return (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={name}>
                <Card
                  name={name}
                  path={path}
                  description={description}
                  image={image}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
};
