import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation";
import Footer from "./footer";

export function HomeLayout() {
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
