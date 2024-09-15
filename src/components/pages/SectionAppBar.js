import React, { useEffect, useState } from 'react';
import { Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ImageIcon from "@mui/icons-material/Image";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Link } from "react-router-dom";
import MainCard from './MainCard';

const SectionAppBar = ({ onClick }) => {
  const [choices, setChoices] = useState(null);

  const handleChange = (event) => {
    setChoices(event.target.value);
  };

  // Function to render the appropriate component based on the choice
  const renderComponent = () => {
    switch (choices) {
      case "Short answer":
        return <MainCard />;
      default:
        return null;
    }
  };




  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom of the page
        behavior: 'smooth' // Smooth scroll behavior
      });
    };

    // Call the handleScroll function every 5 seconds (or adjust as needed)
    const interval = setInterval(handleScroll, 5000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <Box
      sx={{
        position: "fixed", // Fixed position to stay on the screen while scrolling
        right: '13%', // Adjust position relative to container
        top: '50%', // Center vertically relative to its container
        transform: 'translateY(-50%)', // Adjust for vertical center alignment
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60px", // Width of the sidebar
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        borderRadius: 3,
        marginTop: 2, // Add some margin at the top if needed
        zIndex: 1200, // Ensure it appears above other content
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column", // Column layout for vertical alignment
          alignItems: "center", // Center icons horizontally in the column
          gap: 2, // Gap between icons
          padding: 0, // Remove default padding
        }}
      >
        <Tooltip title="Add question">
          
            <IconButton onClick={onClick}>
              <AddCircleOutlineRoundedIcon />
            </IconButton>
                </Tooltip>
        <Tooltip title="Import question">
          <IconButton>
            <UploadFileIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add title and description">
          <IconButton>
            <FormatSizeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add image">
          <IconButton>
            <ImageIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add video">
          <IconButton>
            <SlideshowIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add section">
          <IconButton>
            <DragHandleIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </Box>
  );
};

export default SectionAppBar;
