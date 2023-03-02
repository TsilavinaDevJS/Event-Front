import { Box, Stack, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Facebook, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <Box mt={"6rem"}>
        <motion.footer>
          <Stack
            height={200}
            justifyContent="space-between"
            sx={{
              backgroundColor: "#05055e",
              position: "relative",
              height: "auto",
              paddingBottom: { xs: "0", md: "0" },
            }}>
            <Box
              p={2}
              sx={{
                paddingTop: "42px",
                paddingBottom: "4rem",
              }}>
              <Grid container>
                <Grid xs={3}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "560",
                      fontStyle: "italic",
                    }}>
                    <Box
                      component={"span"}
                      sx={{
                        color: "blue",
                        fontSize: { xs: "20px", md: "25px" },
                      }}>
                      E
                    </Box>
                    -vent
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <IconButton sx={{ border: "1px solid #0909e3" }}>
                      <Facebook sx={{ color: "#0909e3", fontSize: "1.6rem" }} />
                    </IconButton>
                    <IconButton
                      sx={{ border: "1px solid #0909e3", marginLeft: "6px" }}>
                      <LinkedIn sx={{ color: "#0909e3", fontSize: "1.6rem" }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={2}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "560",
                      fontStyle: "italic",
                    }}>
                    A propos
                  </Typography>
                  <Box component={"ul"} sx={{ padding: "0" }}>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Publication
                    </Box>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Generete site auto
                    </Box>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Facile a utiliser
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={2}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "560",
                      fontStyle: "italic",
                    }}>
                    Suivre
                  </Typography>
                  <Box component={"ul"} sx={{ padding: "0" }}>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Publication
                    </Box>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Generete site auto
                    </Box>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Facile a utiliser
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={2}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "560",
                      fontStyle: "italic",
                    }}>
                    Tuto
                  </Typography>
                  <Box component={"ul"} sx={{ padding: "0" }}>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Publication
                    </Box>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Generete site auto
                    </Box>
                    <Box
                      component={"li"}
                      sx={{ fontWeight: "500", color: "white" }}>
                      Facile a utiliser
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </motion.footer>
      </Box>
    </>
  );
}
