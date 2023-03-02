import React from "react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Button,
  styled,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useDimensions } from "./drawer/use-dimensions";
import { useNavigate } from "react-router-dom";
import { UidContext } from "../../config/AppContext";
import { Notifications, Search } from "@mui/icons-material";
import Team from "../../assets/team-1-800x800.jpg";
import MenuProfil from "../../component/ProfilComponent/MenuProfil";

const navStyles = {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  width: "98vw",
  left: "0",
  alignContent: "center",
  zIndex: "200",
};

const StyleButton = styled(Button)({
  height: "2.5rem",
  width: "9rem",
  marginLeft: "8px",
  textTransform: "initial",
});

export function Navigation() {
  const uid = React.useContext(UidContext);
  const theme = useTheme();
  const { scrollY } = useViewportScroll();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
      <Box sx={{ width: "30%" }}>
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
      </Box>
      <Box sx={{ width: "40%" }}>
        <Button
          sx={{
            fontSize: "1.1rem",
            width: "7rem",
            textTransform: "initial",
            color: "#0f0f80",
            fontWeight: "507",
          }}
          onClick={(e) => navigate("/")}>
          Home
        </Button>
        <Button
          sx={{
            fontSize: "1.1rem",
            width: "7rem",
            textTransform: "initial",
            color: "#0f0f80",
            fontWeight: "507",
          }}
          onClick={(e) => navigate("/component")}>
          Event
        </Button>
        <Button
          onClick={(e) => navigate("/share")}
          sx={{
            fontSize: "1.1rem",
            width: "7rem",
            textTransform: "initial",
            color: "#0f0f80",
            fontWeight: "507",
          }}>
          Share
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          left: "-32px",
          float: "right",
          display: {
            xs: "none",
            md: uid?.length === 0 || !uid ? "block" : "none",
          },
        }}>
        <StyleButton variant="outlined" onClick={() => navigate("/signIn")}>
          Login
        </StyleButton>
      </Box>
      <Box
        sx={{
          position: "relative",
          left: "-32px",
          float: "right",
          display: {
            xs: "none",
            md: uid?.length === 0 || !uid ? "none" : "block",
          },
        }}>
        <IconButton
          sx={{ boxShadow: "1px 0px 1px 1px #eaeaea", marginRight: "0.6rem" }}>
          <Search sx={{ color: "#0f0f80" }} />
        </IconButton>
        <IconButton
          sx={{ boxShadow: "1px 0px 1px 1px #eaeaea", marginRight: "0.6rem" }}>
          <Notifications sx={{ color: "#0f0f80" }} />
        </IconButton>
        <IconButton onClick={handleClick}>
          <Avatar size="small">
            <Box
              component={"img"}
              sx={{
                width: "2.46rem",
                height: "2.46rem",
                borderRadius: "100%",
              }}
              src={Team}
              alt=""
            />
          </Avatar>
        </IconButton>
      </Box>
      <Box className="MenuProfil">
        <MenuProfil open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      </Box>
    </motion.div>
  );
}
