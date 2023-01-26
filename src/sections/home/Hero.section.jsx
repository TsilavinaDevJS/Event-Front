import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Agence from "../../assets/agence-web.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid xs={12} md={6} sx={{ justifyContent: "center", display: "grid" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#05055e",
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: "0.75rem", md: "1rem" },
              height: { xs: "auto", md: "20px" },
              marginBottom: { xs: "0", md: "-27px" },
            }}>
            Agence d'event web
            <Box component={"span"} sx={{ color: "blue" }}>
              {" "}
              Event-management
            </Box>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#05055e",
              fontWeight: "532",
              width: { xs: "100%", md: "60%" },
              marginBottom: "8px",
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: "2.4rem", md: "3rem" },
              height: { xs: "auto", md: "100px" },
              marginBottom: { xs: "auto", md: "-57px" },
              marginTop: { xs: "auto", md: "-30px" },
            }}>
            Start
            <Box component={"span"} sx={{ color: "blue" }}>
              {" "}
              Your Event
            </Box>{" "}
            from Here
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#05055e",
              marginBottom: "20px",
              width: { xs: "100%", md: "60%" },
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: "0.85rem", md: "1rem" },
            }}>
            The border CSS property is shorthand for the CSS properties
            border-width, border-style, and border-color. It sets an element's
            border.
          </Typography>
          <Box
            sx={{
              display: "grid",
              justifyContent: { xs: "center", md: "start" },
              marginBottom: { xs: "22px", md: "0" },
              height: "35px",
              marginTop: { xs: "-50px", md: "0" },
            }}>
            <Button
              onClick={() => navigate("/CardComponent")}
              variant="outlined"
              sx={{
                color: "orange",
                border: "1px block orange",
                width: "160px",
              }}>
              Get start
            </Button>
          </Box>
        </Grid>
        <Grid xs={5} sx={{ display: { xs: "none", md: "block" } }}>
          <Box component={"img"} src={Agence} alt="" />
        </Grid>
      </Grid>
    </>
  );
}
