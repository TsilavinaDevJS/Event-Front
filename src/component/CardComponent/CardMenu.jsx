import { Menu, MenuItem, ListItemIcon, Divider, Box } from "@mui/material";
import { ModeEdit, NearMe, Delete, RemoveRedEye } from "@mui/icons-material";
import React from "react";
import { deletePost } from "../../Action";
import LookCardDialog from "./LookCardDialog";
import UpdateCardDialog from "./UpdateCardDialog";

export default function MenuComponent({ List, anchorEl, open, setAnchorEl }) {
  const [lookDialog, setLookDialog] = React.useState(false);
  const [updateDialog, setUpdateDialog] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <MenuItem onClick={(e) => setLookDialog(true)}>
          <ListItemIcon>
            <RemoveRedEye fontSize="small" />
          </ListItemIcon>
          See More
        </MenuItem>
        <MenuItem onClick={(e) => setUpdateDialog(true)}>
          <ListItemIcon>
            <ModeEdit fontSize="small" />
          </ListItemIcon>
          To modify
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <NearMe fontSize="small" />
          </ListItemIcon>
          Visit the Site
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            if (window.confirm("Are you sure that you want to delete here?")) {
              deletePost(List.id);
            }
          }}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
      <Box className="List-Function-Card">
        <LookCardDialog
          List={List}
          dialog={lookDialog}
          setDialog={setLookDialog}
        />
        <UpdateCardDialog
          List={List}
          dialog={updateDialog}
          setDialog={setUpdateDialog}
        />
      </Box>
    </>
  );
}
