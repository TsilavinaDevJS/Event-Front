import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Person, Email, Lock, LockClockOutlined } from "@mui/icons-material";
import axios from "axios";
import Image from "../assets/Hero.png";
import Image1 from "../assets/Email.png";

const client = axios.create({baseURL:process.env.REACT_APP_API_URL})

export default function SignUp() {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState("none");
  const [count, setCount] = React.useState(0);
  const [personalProps, setPersonalProps] = React.useState({
    Email: "",
    userName: "",
    Password: "",
    validPassword: "",
    Code: "",
  });
  const initialValue={
    ...
  }
  const formik = useFormik({initialValue,validate,onSubmit})

  function validate(value){
    let errors = {};
    
    if(value.Email === ""){
      error.Email = "email required"
    }
    return errors
  }

  let Tab = [
    <Register
      updateCount={setCount}
      count={count}
      setPersonalProps={setPersonalProps}
      personalProps={personalProps}
      setProgress={setProgress}
    />,
    <ValidationCode
      navigate={navigate}
      personalProps={personalProps}
      setPersonalProps={setPersonalProps}
    />,
  ];

  return (
    <Box sx={{ display: "grid", justifyContent: "center" }}>
      <Box
        sx={{
          display: progress,
          width: "100%",
        }}>
        <LinearProgress />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50vw" },
          padding: "2rem",
          boxShadow: "1px 1px 5px 1px #eaeaea",
          background: "white",
        }}>
        {Tab[count]}
      </Box>
    </Box>
  );
}

const api = {
  async generateCode(Email){
    const res = await client.post('....')
    return res.data
  }
}


function Register({
  navigate,
  updateCount,
  count,
  setPersonalProps,
  personalProps,
  setProgress,
}) {
  // const handleSubmit = () => {
  //   setProgress("block");
  //   clie
  //   client
  //     .post(`/api/GenerateCode`, {
  //       Email: personalProps.Email,
  //     })
  //     .then((res) => {
  //       if (res.data) {
  //         setProgress("none");
  //         updateCount(count + 1);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = async () => {
    const data = await api.generateCode(Email)
  }

  return (
    <Grid container>
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
          name="userName"
          placeholder="john Doe"
          onChange={(e) =>
            setPersonalProps((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />

        <TextField
          sx={{
            marginBottom: "32px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment disableTypography position="start">
                <Email size="small" />
              </InputAdornment>
            ),
          }}
          error={formik.errors.email}
          size="small"
          id="standard-basic"
          variant="standard"
          type="text"
          name="Email"
          placeholder="your Email"
          onChange={(e) =>
            setPersonalProps((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
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
          name="Password"
          placeholder="Password"
          onChange={(e) =>
            setPersonalProps((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />

        <TextField
          sx={{
            marginBottom: "6px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment disableTypography position="start">
                <LockClockOutlined />
              </InputAdornment>
            ),
          }}
          size="small"
          id="standard-basic"
          variant="standard"
          type="password"
          name="validPassword"
          placeholder="Repeat your password"
          onChange={(e) =>
            setPersonalProps((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <Button
          onClick={handleSubmit}
          sx={{ marginTop: "40px" }}
          variant="contained">
          Register
        </Button>
      </Grid>
      <Grid xs={6}>
        <Box
          component={"img"}
          sx={{ width: "320px", height: "auto" }}
          src={Image}
          alt=""
        />
        <Box sx={{ display: "grid", justifyContent: "center" }}>
          <Typography
            onClick={(e) => navigate("/signIn")}
            variant="body2"
            sx={{
              marginTop: "32px",
              cursor: "pointer",
              borderBottom: "1px solid",
              display: "inline",
              float: "",
              color: "#0f0f80",
            }}>
            I have account
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

function ValidationCode({ personalProps, setPersonalProps }) {
  const Subsribe = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/usersRegisters`, {
        Email: personalProps.Email,
        Password: personalProps.Password,
        Code: personalProps.Code,
        userName: personalProps.userName,
      })
      .then((res) => {
        if (res) {
          window.location = "/";
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Grid container p={2}>
      <Grid xs={6}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "612",
            fontSize: "1.3rem",
          }}>
          Check your email
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", marginBottom: "22px" }}>
          To confirm your email address .please enter the 4-digit code we sent
          admin@gmail.com
        </Typography>
        <Box sx={{ display: "grid", justifyContent: "center" }}>
          <TextField
            variant="standard"
            size="small"
            name="Code"
            placeholder="write to number"
            sx={{ marginBottom: "52px" }}
            onChange={(e) =>
              setPersonalProps((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <Button variant="contained" onClick={Subsribe}>
            Confirm Email
          </Button>
        </Box>
      </Grid>
      <Grid xs={6}>
        <Box component={"img"} src={Image1} alt="" />
      </Grid>
    </Grid>
  );
}
