import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  CardMedia,
  MenuItem,
} from "@mui/material";
import React, { useRef } from "react";
import { PhotoCamera } from "@mui/icons-material";
import Test from "../assets/team-1-800x800.jpg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { PostEvent } from "../Action";
import { UidContext } from "../config/AppContext";
import { Error } from "@mui/icons-material";
import { isValidUrl } from "../hooks";

export default function Share(params) {
  const [error, setError] = React.useState({
    Titre: false,
    Description: false,
    Url: false,
  });
  const uid = React.useContext(UidContext);
  const ref = useRef();
  const [value, setValue] = React.useState("yes");
  const [Description, setDescription] = React.useState("");
  const [display, setDisplay] = React.useState(null);
  const PersonalProps = React.useContext(UidContext);
  const [array, setArray] = React.useState({
    Title: "",
    Url: "",
    Image: "",
  });

  const handleSubmit = () => {
    console.log(isValidUrl(array.Url));
    PostEvent(array, Description, PersonalProps);
  };

  React.useEffect(() => {
    console.log(params);
  }, [params]);

  React.useEffect(() => {
    if (array.Image !== "") {
      var reader = new FileReader();
      reader.readAsDataURL(array.Image);
      reader.onloadend = function (e) {
        setDisplay(e.target.result);
      };
    }
  }, [display, array.Image]);

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          position: "absolute",
          top: "5.3rem",
          background: "#f2f2b8",
          fontWeight: "501",
          display: uid?.length === 0 || !uid ? "block" : "none",
          justifyContent: "center",
          width: "100%",
        }}>
        <Error size="small" sx={{ marginBottom: "-6px" }} />
        Veuiller d'abord vous connecter
      </Typography>
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
              <input
                ref={ref}
                type="file"
                name="Image"
                onChange={(e) =>
                  setArray((prev) => ({ ...prev, Image: e.target.files[0] }))
                }
                style={{ display: "none" }}
              />
              <CardMedia
                className="Image"
                component="img"
                image={display === null ? Test : display}
                sx={{
                  width: "16rem",
                  height: "16rem",
                  objectFit: "contain",
                }}
              />
              <Button
                onClick={(e) => ref.current.click()}
                variant="contained"
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "23.7rem",
                  width: "15.5rem",
                }}>
                <PhotoCamera />
                Ajouter un Photo
              </Button>
            </Card>
          </Grid>
          <Grid xs={7}>
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
              <Typography variant="body1">have you the website ?</Typography>
              <TextField
                id="filled-start-adorment"
                select
                value={value}
                sx={{ width: "200px" }}
                onChange={(e) => setValue(e.target.value)}>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Box>
            {value === "yes" ? (
              <Box sx={{ marginBottom: "12px" }}>
                <Typography variant="body1">Write your url here!</Typography>
                <TextField
                  error={error.Url}
                  type="text"
                  fullWidth
                  value={array.Url}
                  name="Url"
                  label="https://www.xxxxxxxx.com"
                  onChange={(e) =>
                    setArray((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </Box>
            ) : (
              <></>
            )}

            <Box sx={{ marginBottom: "12px" }}>
              <Button
                // disabled={uid?.length === 0 || !uid ? true : false}
                onClick={handleSubmit}
                variant="outlined"
                sx={{ position: "relative", float: "right" }}>
                submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
