import * as React from "react";
import { Typography, Box } from "@mui/material";
import "./index.css";

const NavDrawer = () => {
  const [change, setChange] = React.useState(true);

  const openNav = () => {
    if (change) {
      document.getElementById("myNav").style.height = "100%";
      document.getElementById("logo-path").style.fill = "white";
      // document.getElementById("baroverlay").style.transform =
      //   "rotate(-45deg) translate(50px, 300px)";
      setChange(!change);
    }

    if (!change) {
      document.getElementById("myNav").style.height = "0%";
      document.getElementById("logo-path").style.fill = "#1E1E1E";
      // document.getElementById("baroverlay").style.transform =
      //   "rotate(-45deg) translate(0px, -3000px)";
      setChange(!change);
    }
  };

  return (
    <>
      <Box
        sx={{
          alignContent: "center",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div id="myNav" className="overlay">
          {/* <div className="overlay-bar" id="baroverlay"></div> */}
        </div>
        <Box
          sx={{ display: { xs: "block", md: "none" } }}
          id="bar"
          className={change ? "nav-container" : "change"}
          onClick={() => openNav()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </Box>

        <div className="logo-container">
          <p id="logo-path">
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.6rem", md: "2rem" },
                color: "#05055e",
                fontWeight: "560",
                fontStyle: "italic",
                marginLeft: "12px",
              }}>
              <Box
                component={"span"}
                sx={{
                  color: "blue",
                  fontSize: { xs: "30px", md: "35px" },
                }}>
                E
              </Box>
              -vent
            </Typography>
          </p>
        </div>
      </Box>
    </>
  );
};

export default NavDrawer;
