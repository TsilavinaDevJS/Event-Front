import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export default function SignUp() {
  const navigate = useNavigate();
  const [count, setCount] = React.useState(0);

  let Tab = [
    <TakeName />,
    <TakeFirstName />,
    <TakeEmail />,
    <TakePassword />,
    <TakeConfirmationPassword />,
  ];

  return (
    <Box sx={{ display: "grid", justifyContent: "center" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "40vw" },
          height: "auto",
          padding: "2rem",
          boxShadow: "1px 1px 5px 1px #eaeaea",
        }}>
        {Tab[count]}
        {count === 4 ? (
          <Button
            variant="contained"
            sx={{ position: "relative", float: "right" }}>
            Submit
          </Button>
        ) : (
          <Button
            onClick={() => setCount(count + 1)}
            variant="contained"
            sx={{ position: "relative", float: "right" }}>
            Next
          </Button>
        )}
        {count !== 0 ? (
          <Button
            onClick={() => setCount(count - 1)}
            variant="outlined"
            sx={{ position: "relative", float: "left" }}>
            Prev
          </Button>
        ) : (
          <></>
        )}
        <Box mt={"5rem"}>
          <Button variant="outlined" onClick={() => navigate("/")}>
            {" "}
            <ArrowBack /> Back
          </Button>
        </Box>
      </Box>
      <Button
        sx={{ width: "150px", marginTop: "20px" }}
        onClick={() => navigate("/signIn")}>
        exist account
      </Button>
    </Box>
  );
}

function TakeName() {
  return (
    <>
      <Box sx={{ marginBottom: "12px" }}>
        <Typography variant="body1">Nom</Typography>
        <TextField type="text" fullWidth label="Nom" />
      </Box>
    </>
  );
}
function TakeFirstName() {
  return (
    <>
      <Box sx={{ marginBottom: "12px" }}>
        <Typography variant="body1">First Name</Typography>
        <TextField type="text" fullWidth label="First Name" />
      </Box>
    </>
  );
}

function TakeEmail() {
  return (
    <>
      <Box sx={{ marginBottom: "12px" }}>
        <Typography variant="body1">Email</Typography>
        <TextField type="text" fullWidth label="Email" />
      </Box>
    </>
  );
}

function TakePassword() {
  return (
    <>
      <Box sx={{ marginBottom: "12px" }}>
        <Typography variant="body1">Password</Typography>
        <TextField type="password" fullWidth label="Password" />
      </Box>
    </>
  );
}

function TakeConfirmationPassword() {
  return (
    <>
      <Box sx={{ marginBottom: "12px" }}>
        <Typography variant="body1">Confirmation password</Typography>
        <TextField type="password" fullWidth label="Confirmation password" />
      </Box>
    </>
  );
}
