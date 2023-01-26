import { Box } from "@mui/material";
import React from "react";
import HeroSection from "../sections/home/Hero.section";
import ExploreSection from "../sections/home/ExploreSection";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ExploreSection />
    </Box>
  );
}
