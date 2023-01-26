import {
  Box,
  CardMedia,
  Grid,
  Card,
  Typography,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import React from "react";
import { PhotoCamera } from "@mui/icons-material";

export default function Share() {
  const [value, setValue] = React.useState("yes");
  return (
    <Box sx={{ padding: "0px 40px 0px 40px" }}>
      <Grid container>
        <Grid xs={3}>
          <Card
            sx={{
              height: 250,
              width: 250,
              display: "grid",
              justifyItems: "center",
              borderRadius: "8px",
              alignItems: "center",
              backgroundColor: "#eaeaea",
            }}>
            {/* <CardMedia component="img" image={PhotoCamera} /> */}
            <PhotoCamera />
          </Card>
        </Grid>
        <Grid xs={7}>
          <Box sx={{ marginBottom: "12px" }}>
            <Typography variant="body1">Title Event</Typography>
            <TextField type="text" fullWidth label="Title Event" />
          </Box>
          <Box sx={{ marginBottom: "12px" }}>
            <Typography variant="body1">Description Event</Typography>
            <TextField type="text" fullWidth label="Description Event" />
          </Box>
          <Box sx={{ marginBottom: "12px" }}>
            <Typography variant="body1">have you the website ?</Typography>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="survey" name="survey" value={value}>
                <FormControlLabel
                  onClick={() => setValue("yes")}
                  value="yes"
                  control={<Radio />}
                  label="YES"
                  labelPlacement="YES"
                />
                <FormControlLabel
                  onClick={() => setValue("no")}
                  value="no"
                  control={<Radio />}
                  label="NO"
                  labelPlacement="NO"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          {value === "yes" ? (
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="body1">Write your url here!</Typography>
              <TextField type="text" fullWidth label="url" />
            </Box>
          ) : (
            <></>
          )}
          <Box sx={{ marginBottom: "12px" }}>
            <Button
              variant="outlined"
              sx={{ position: "relative", float: "right" }}>
              submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
