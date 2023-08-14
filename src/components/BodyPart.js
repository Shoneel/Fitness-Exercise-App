// Import React and necessary components/styles from Material-UI library
import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";


// Functional component called BodyPart that receives props
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      // Define the component as a button element
      type="button"
      // Align child elements along the center and middle of the Stack
      alignItems="center"
      justifyContent="center"
      // Apply styles for the card appearance
      className="bodyPart-card"
      sx={{
        // Set a top border with color based on selection status
        borderTop: bodyPart === item ? "4px solid #FF2625" : " ",
        background: "#fff", // Set background color
        borderBottomLeftRadius: "20px", // Rounded border on bottom left
        width: "270px", // Set width of the card
        height: "282px", // Set height of the card
        cursor: "pointer", // Change cursor to pointer on hover
        gap: "47px", // Set spacing between child elements
      }}
      // Handle click event on the card
      onClick={() => {
        // Update the selected body part using setBodyPart function
        setBodyPart(item);
        // Scroll the window to a specific position with smooth animation
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      {/* Display an image icon */}
      <img
        src={Icon} // Source of the image
        alt="dumbbell" // Alternative text for accessibility
        style={{ width: "40px", height: "40px" }} // Inline styles for the image
      />
      {/* Display the body part name */}
      <Typography
        fontSize="24px" // Set font size
        fontWeight="bold" // Set font weight
        fontFamily="Alegreya" // Set font family
        color="#3A1212" // Set font color
        textTransform="capitalize" // Capitalize the text
      >
        {item} {/* Display the body part name from the props */}
      </Typography>
    </Stack>
  );
};

// Export the BodyPart component as the default export
export default BodyPart;
