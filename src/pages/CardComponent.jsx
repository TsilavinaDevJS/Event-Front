import React from "react";
import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import Team from "../assets/team-1-800x800.jpg";
import { MyLocationOutlined, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Shadow =
  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

export default function CardComponent() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ padding: "0px 40px 0px 40px" }}>
        <Typography
          variant="h5"
          sx={{
            color: "#05055e",
            fontWeight: "550",
            fontStyle: "Italic",
            display: "inline",
          }}>
          The Event
        </Typography>
        <Box sx={{ marginTop: "25px" }}>
          <Card
            sx={{
              height: "400px",
              width: 300,
              display: "grid",
              justifyItems: "center",
              borderRadius: "8px",
              boxShadow: "none",
            }}>
            <CardMedia
              component="img"
              image={Team}
              sx={{ boxShadow: Shadow }}
            />
            <CardContent
              sx={{
                borderRadius: "12px",
                marginTop: "-74px",
                width: "250px",
                background: "#ffffff52",
              }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "562",
                  fontStyle: "italic",
                  marginTop: "-9px",
                  color: "black",
                }}>
                Title Event
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                marginTop: "-34px",
                borderRadius: "12px",
                background: "#fff",
                width: "250px",
                height: "80px",
                position: "static",
                zIndex: "99",
                boxShadow: Shadow,
              }}>
              <Typography variant="body2" sx={{ height: "35px" }}>
                Decription event
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  height: "20px",
                  display: "flex",
                  fontWeight: "512",
                  fontSize: "0.75rem",
                  justifyItems: "center",
                }}>
                <MyLocationOutlined
                  sx={{ height: "1.3rem", marginTop: "-2px" }}
                />{" "}
                room event
              </Typography>
              <CardActions>
                <Button size="small"> Learn More</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        <Box mt={"1.5rem"}>
          <Button variant="outlined">Prev</Button>
          <Button
            variant="outlined"
            sx={{ position: "relative", float: "right" }}>
            next
          </Button>
        </Box>
      </Box>
      <Box mt={"3rem"} p={2}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          {" "}
          <ArrowBack /> Back Home
        </Button>
      </Box>
    </>
  );
}
