import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Typography,
} from "@mui/material";
import React from "react";

export const Abonnement = () => {
  let value = window.localStorage.uid;
  return (
    <>
      <Dialog open={true} fullWidth maxWidth={"sm"}>
        <DialogTitle>
          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", fontWeight: "512", color: "blue" }}>
            Publication Abonnement
          </Typography>
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              <RadioGroup
                value={value}
                onChange={handleChange}
                aria-labelledb="demo-radio-buttons-group-label"
                defaulyValue="female"
                name="radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormLabel>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button>Ok</Button>
          <Button>Plus Tards</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
