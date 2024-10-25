import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { HomeTitle } from "../../molecules/homeTitle/homeTitle";

export const Products: FC = () => {
  return (
      <Box pt={1} pb={8} id="products" sx={{backgroundColor: '#eaedf7', scrollMarginTop: '100px'}}>
        <HomeTitle text='Products' />
        <Typography pl={4}>
          coming soon
        </Typography>
      </Box>
  )
}