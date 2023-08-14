import React from "react";
import { Typography, Stack, Button } from "@mui/material";

// Importing images for icons
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

// This component displays details about an exercise.
const Detail = ({ exerciseDetail }) => {
  // Extracting details from the exerciseDetail object
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  // Creating an array of extra details with their icons and names
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    // Container for the exercise detail, with spacing and alignment
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      {/* Displaying the GIF image of the exercise */}
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      {/* Stack for text details */}
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        {/* Displaying the exercise name */}
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        {/* Displaying a description of the exercise */}
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong. {/* Highlighting the exercise name */}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {/* Mapping over extra details to display icons and names */}
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            {/* Button containing the icon */}
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            {/* Displaying the name of the extra detail */}
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
