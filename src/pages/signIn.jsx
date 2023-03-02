import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorTwoTone, Person, Lock } from "@mui/icons-material";
import axios from "axios";
import useLocalStorageState from "../config/useLocalStorage";
import Image from "../assets/signin-image.jpg";

export default function SignIn() {
  const [uid, setUid] = useLocalStorageState("uid", null);
  const navigate = useNavigate();
  //  const [Error, setError] = React.useState({
  //     Prenom: "none",
  //     Password: "none",
  //   });
  //   const [input, setInput] = React.useState({
  //     Prenom: "",
  //     Password: "",
  //   });

  const handleSubmit = () => {
    {
      /*    axios
      .post(`${process.env.REACT_APP_API_URL}/api/userConnect`, {
        Prenom: input.Prenom,
        Password: input.Password,
      })
      .then((res) => {
        setUid(res.data[0].id);
        window.location = "/";
      })
      .catch((err) => {
        if (err.response.data === "users not found") {
          setError((prev) => ({ ...prev, Prenom: "block" }));
        } else {
          setError((prev) => ({ ...prev, Password: "block" }));
        }
      });
  */
    }
  };

  return (
    <Box sx={{ display: "grid", justifyContent: "center" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "50vw" },
          height: "auto",
          padding: "2rem",
          boxShadow: "1px 1px 5px 1px #eaeaea",
        }}>
        <Grid container>
          <Grid xs={6}>
            <Box
              component={"img"}
              src={Image}
              sx={{ width: "280px", height: "auto" }}
              alt=""
            />
          </Grid>
          <Grid xs={6}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "612",
                fontSize: "1.3rem",
                marginBottom: "22px",
              }}>
              Sign Up
            </Typography>

            <TextField
              sx={{
                marginBottom: "32px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment disableTypography position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              size="small"
              id="standard-basic"
              variant="standard"
              type="text"
              placeholder="john Doe"
              onChange={(e) => console.log(e.target.value)}
            />

            <TextField
              sx={{
                marginBottom: "32px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment disableTypography position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              size="small"
              id="standard-basic"
              variant="standard"
              type="password"
              placeholder="Password"
              onChange={(e) => console.log(e.target.value)}
            />
            <Button variant="contained">Log In</Button>
            <Typography
              onClick={(e) => navigate("/signUp")}
              variant="body2"
              sx={{
                marginTop: "52px",
                cursor: "pointer",
                borderBottom: "1px solid",
                display: "inline",
                float: "right",
              }}>
              create on account
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
