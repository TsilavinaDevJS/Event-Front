import React from "react";
import {
  Dialog,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UpdatePost } from "../../Action";

export default function UpdateCardDialog({ List, dialog, setDialog }) {
  const ref = React.useRef();
  const [array, setArray] = React.useState({
    Title: List.Titre,
    Url: List.Url,
    Image: "",
  });
  const [Description, setDescription] = React.useState(List.Description);
  const [display, setDisplay] = React.useState("");

  React.useEffect(() => {
    if (array.Image !== "") {
      var reader = new FileReader();
      reader.readAsDataURL(array.Image);
      reader.onloadend = function (e) {
        setDisplay(e.target.result);
      };
    }
  }, [display, array.Image]);

  const handleSubmit = () => {
    UpdatePost(List.id, array, Description);
  };

  return (
    <Dialog fullWidth maxWidth="md" open={dialog}>
      <DialogTitle>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: "512", fontStyle: "italic" }}>
          Modification du Card
        </Typography>
      </DialogTitle>
      <Grid container p={2}>
        <Grid xs={3}>
          <Box
            component={"img"}
            sx={{
              height: "150px",
              width: "200px",
              borderRadius: "7px",
              boxShadow: "1px 0px 1px 1px #eaeaea",
              objectFit: "contain",
            }}
            src={
              display === ""
                ? `${process.env.REACT_APP_API_URL}/${List.Image}`
                : display
            }
          />
          <input
            ref={ref}
            type="file"
            name="Image"
            onChange={(e) =>
              setArray((prev) => ({ ...prev, Image: e.target.files[0] }))
            }
            style={{ display: "none" }}
          />
          <Button
            variant="contained"
            sx={{ fontSize: "0.75rem", width: "13rem" }}
            onClick={(e) => ref.current.click()}>
            {" "}
            <PhotoCamera
              size="small"
              sx={{ fontSize: "1.3rem", marginRight: "2px", marginTop: "-2px" }}
            />
            Modifier la photo
          </Button>
        </Grid>
        <Grid xs={9}>
          <Box sx={{ marginBottom: "12px" }}>
            <Typography variant="body1">Title Event</Typography>
            <TextField
              type="text"
              fullWidth
              label="Title Event"
              name="Title"
              value={array.Title}
              onChange={(e) =>
                setArray((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Box>
          <Box sx={{ marginBottom: "12px" }}>
            <Typography variant="body1">Description Event</Typography>
            <ReactQuill
              className="editor"
              theme="snow"
              value={Description}
              onChange={setDescription}
            />
          </Box>

          <Box sx={{ marginBottom: "12px" }}>
            <Typography variant="body1">Modification de l'url</Typography>
            <TextField
              type="text"
              fullWidth
              label="url"
              value={array.Url}
              name="Url"
              onChange={(e) =>
                setArray((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Box>
        </Grid>
      </Grid>
      <DialogActions>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={(e) => setDialog(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
