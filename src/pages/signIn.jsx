import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "grid", justifyContent: "center" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "40vw" },
          height: "auto",
          padding: "2rem",
          boxShadow: "1px 1px 5px 1px #eaeaea",
        }}>
        <Box sx={{ marginBottom: "12px" }}>
          <Typography variant="body1">email</Typography>
          <TextField type="text" fullWidth label="email || numeros telephone" />
        </Box>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="body1">password</Typography>
          <TextField type="password" fullWidth label="password" />
        </Box>
        <Grid container>
          <Grid xs={6}>
            <Button onClick={() => navigate("/ForgetPassword")}>
              Forget password?
            </Button>
          </Grid>
          <Grid xs={6}>
            <Button
              variant="contained"
              sx={{ position: "relative", float: "right" }}>
              Submit
            </Button>
          </Grid>
          <Box mt={"5rem"}>
            <Button variant="outlined" onClick={() => navigate("/")}>
              {" "}
              <ArrowBack /> Back
            </Button>
          </Box>
        </Grid>
      </Box>
      <Button
        sx={{ width: "150px", marginTop: "20px" }}
        onClick={() => navigate("/signUp")}>
        create account
      </Button>
    </Box>
  );
}
