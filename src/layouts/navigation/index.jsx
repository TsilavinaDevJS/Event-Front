import React from "react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Button,
  styled,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";
import { motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
import NavDrawer from "./drawer";
import { useDimensions } from "./drawer/use-dimensions";
import { useNavigate } from "react-router-dom";
import { Notifications, Home, Share } from "@mui/icons-material";
import Team from "../../assets/team-1-800x800.jpg";

const navStyles = {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  width: "98vw",
  left: "0",
  alignContent: "center",
};

const StyleButton = styled(Button)({
  height: "2.7rem",
  width: "10rem",
  marginLeft: "12px",
});

export function Navigation() {
  const theme = useTheme();
  const { scrollY } = useViewportScroll();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const [path, setPath] = React.useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [window.location.pathname]);

  return (
    <motion.div
      className="nav"
      custom={height}
      ref={containerRef}
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      style={{
        ...navStyles,
        height: isMobile ? "4rem" : "5rem",
        width: isMobile ? "98vw" : "100vw",
        background: "#fff",
        boxShadow: "3px 3px 3px #eaeaea",
        padding: isMobile ? "4px 0px 0px 20px" : "4px 0px 0px 20px",
      }}>
      <Box sx={{ marginLeft: "-12px" }}>
        <NavDrawer />
      </Box>
      <Box
        sx={{
          position: "relative",
          left: "-32px",
          display: { xs: "none", md: path ? "block" : "none" },
        }}>
        <StyleButton variant="outlined" onClick={() => navigate("/signIn")}>
          signIn
        </StyleButton>
        <StyleButton variant="contained" onClick={() => navigate("/signUp")}>
          signUp
        </StyleButton>
      </Box>
      <Box
        sx={{
          position: "relative",
          left: "-32px",
          display: { xs: "none", md: path ? "none" : "flex" },
          justifyContent: "center",
        }}>
        <IconButton
          onClick={() => navigate("/")}
          sx={{ height: "2.5rem", color: "blue" }}>
          <Home />
        </IconButton>
        <IconButton
          sx={{ height: "2.5rem", marginLeft: "12px", color: "blue" }}>
          <Notifications />
        </IconButton>
        <IconButton
          onClick={() => navigate("/share")}
          sx={{ height: "2.5rem", marginLeft: "12px", color: "blue" }}>
          <Share />
        </IconButton>
        <Button size="small" sx={{ display: "flex", marginLeft: "12px" }}>
          <Avatar></Avatar>
          <Grid container>
            <Grid xs={12}>
              <Typography
                variant="h6"
                sx={{
                  color: "#05055e",
                  fontSize: "0.75rem",
                  textTransform: "full-size-kana",
                }}>
                Personnaly name
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography
                variant="body2"
                sx={{
                  color: "#8e8a8a",
                  fontSize: "0.6rem",
                  textTransform: "full-size-kana",
                }}>
                Profil
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </Box>
    </motion.div>
  );
}
