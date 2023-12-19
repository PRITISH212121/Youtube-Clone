import React, { useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import SideBar from "./SideBar";
import { useState } from "react";
import Videos from "./Videos";
import { fetchAPI } from "../utils/fetchAPI";
const Feed = () => {
  const [selectedcategory, setselectedcategory] = useState();
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedcategory}`).then((data) => {
      setvideos(data.items);
    });
  }, [selectedcategory]);

  return (
    <Stack
      sx={{
        bgcolor: "#000",
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "#000",
          px: {
            sx: "2",
            md: "4",
          },
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d ",
        }}
      >
        <SideBar
          selectedcategory={selectedcategory}
          setselectedcategory={setselectedcategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            color: "white",
            mt: "1.5",
          }}
        >
          Copyright @2024
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflow: "auto",
          flex: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="white">
          {`${selectedcategory} `}
          <span
            style={{
              color: "#FC1053",
            }}
          >
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
