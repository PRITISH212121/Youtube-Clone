import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import SearchDetail from "./Components/SearchDetail";
import ChannelDetail from "./Components/ChannelDetail";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
