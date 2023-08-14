import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/shonzi-high-resolution-logo-white-on-transparent-background (1).png";

const Footer = () => (
  <Box
    
    bgcolor="#E32430"
    borderTop="4px solid #FF2625"
    paddingY="20px"
    width="100%"       // Set width to 100%
    marginLeft={0}     // Set left margin to 0
    marginRight={0}    // Set right ma
  >
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "auto" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{  fontSize: { lg: "18px", md: "14px", xs: "12px" }, color: "#fff" }}
      mt="24px"
      textAlign="center"
      pb="20px"
    >
      © 2023 • Developed by Shoneel Kumar⚡• All rights reserved •
    </Typography>
  </Box>
);

export default Footer;
