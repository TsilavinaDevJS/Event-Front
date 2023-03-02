import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation";
import Footer from "./footer";
import React from "react";

export function HomeLayout() {
  const theme = useTheme();
  React.useEffect(() => {
    console.log(theme);
  }, []);
  return (
    <>
      <Navigation />
      <Box sx={{ paddingTop: { xs: "6rem", md: "8rem" } }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
