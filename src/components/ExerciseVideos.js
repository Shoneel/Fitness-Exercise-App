import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

// This component displays exercise videos and their details.
const ExerciseVideos = ({ exerciseVideos, name }) => {
  // If there are no exercise videos available, display a loading spinner.
  if (!exerciseVideos.length) return <Loader />;

  return (
    // The main container for the component, with styling and padding.
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      {/* Heading displaying the name and the purpose of the videos */}
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        {/* Highlighting the name with a specific color and text transformation */}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      {/* Stack component to display videos in a row, with spacing */}
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {/* Mapping over exerciseVideos to display each video */}
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            {/* Displaying the video thumbnail */}
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              {/* Displaying the video title */}
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              {/* Displaying the video's channel name */}
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
