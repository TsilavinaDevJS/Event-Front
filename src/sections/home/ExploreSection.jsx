import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import Conference from "../../assets/Conference.png";

export default function ExploreSection() {
  return (
    <Box sx={{ display: "grid", justifyContent: "center" }}>
      <Box sx={{ width: "90vw" }}>
        <Typography variant="h5" sx={{ color: "#05055e", fontWeight: "550" }}>
          Explore by category
        </Typography>
        <Box sx={{ marginTop: "22px" }}>
          <Grid container justifyContent={"center"}>
            <Grid xs={12} sm={6} md={3} sx={{ marginBottom: "20px" }}>
              <Card
                sx={{
                  width: 200,
                  display: "grid",
                  justifyContent: "center",
                  padding: "1rem",
                }}>
                <CardMedia
                  component="img"
                  sx={{ width: "10rem", height: "auto" }}
                  image={Conference}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#05055e", fontWeight: "550" }}>
                    Conference
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#05055e" }}>
                    The width CSS property
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={3} sx={{ marginBottom: "20px" }}>
              <Card
                sx={{
                  width: 200,
                  display: "grid",
                  justifyContent: "center",
                  padding: "1rem",
                }}>
                <CardMedia
                  component="img"
                  sx={{ width: "10rem", height: "auto" }}
                  image={Conference}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#05055e", fontWeight: "550" }}>
                    Conference
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#05055e" }}>
                    The width CSS property
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={3} sx={{ marginBottom: "20px" }}>
              <Card
                sx={{
                  width: 200,
                  display: "grid",
                  justifyContent: "center",
                  padding: "1rem",
                }}>
                <CardMedia
                  component="img"
                  sx={{ width: "10rem", height: "auto" }}
                  image={Conference}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#05055e", fontWeight: "550" }}>
                    Conference
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#05055e" }}>
                    The width CSS property
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
