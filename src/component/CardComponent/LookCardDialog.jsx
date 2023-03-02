import React from "react";
import {
  Dialog,
  Typography,
  Box,
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
} from "@mui/material";
import { getText } from "../../hooks";
import { Close } from "@mui/icons-material";

export default function LookCardDialog({ dialog, setDialog, List }) {
  return (
    <Dialog fullWidth maxWidth="md" open={dialog}>
      <DialogTitle sx={{ paddingTop: "1.2rem", marginBottom: "1rem" }}>
        <Typography
          variant="h7"
          sx={{
            fontWeight: "512",
            textAlign: "center",
            display: "block",
            color: "#05055e",
          }}>
          {List.Titre}
        </Typography>
        <DialogActions
          sx={{ position: "absolute", float: "right", right: "2%", top: "2%" }}>
          <IconButton
            onClick={(e) => setDialog(false)}
            sx={{
              boxShadow: "1px 0px 1px 1px #eaeaea",
              marginRight: "0.6rem",
            }}>
            <Close size="small" sx={{ color: "#0f0f80" }} />
          </IconButton>
        </DialogActions>
      </DialogTitle>
      <DialogContent sx={{ padding: "3rem" }}>
        <Box
          className="Image"
          sx={{
            display: "grid",
            justifyContent: "center",
            marginBottom: "20px",
          }}>
          <Box
            component={"img"}
            sx={{ height: "200px", width: "auto" }}
            src={`${process.env.REACT_APP_API_URL}/${List.Image}`}
          />
        </Box>
        <Box className="Description">
          <Typography variant="body2" color="text.secondary">
            {getText(List.Description)}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
