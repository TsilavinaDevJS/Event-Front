import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

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
            <Box p={2} sx={{ paddingTop: "42px" }}></Box>
          </Stack>
        </motion.footer>
      </Box>
    </>
  );
}
