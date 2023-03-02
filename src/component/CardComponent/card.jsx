import React from "react";
import {
  Grid,
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import { MoreVert, Share, Favorite } from "@mui/icons-material";
import MenuComponent from "./CardMenu";
import { getText } from "../../hooks";

export default function CardComponent({ List }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Grid key={List.id} xs={12} sm={6} md={4} sx={{ marginBottom: "20px" }}>
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                {List.Nom.substr(0, 1)}
              </Avatar>
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <MoreVert />
              </IconButton>
            }
            title={List.Nom}
            subheader={List.Date.substr(0, 25)}
          />
          <CardContent>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "512",
                fontStyle: "italic",
                textAlign: "center",
              }}>
              {List.Titre}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="194"
            image={`${process.env.REACT_APP_API_URL}/${List.Image}`}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {getText(List.Description.substr(0, 100) + "...")}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <MenuComponent
        List={List}
        anchorEl={anchorEl}
        open={open}
        setAnchorEl={setAnchorEl}
      />
    </Grid>
  );
}
