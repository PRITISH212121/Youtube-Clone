import React, { useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import SideBar from "./SideBar";
import { useState } from "react";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
const SearchDetail = () => {
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setvideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflow: "auto",
        flex: 2,
        background: "BLACK",
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="white">
        <span
          style={{
            color: "#FC1053",
          }}
        >
          Search results for {searchTerm}
        </span>{" "}
        Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchDetail;
