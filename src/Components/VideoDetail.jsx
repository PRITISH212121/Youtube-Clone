import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchAPI } from "../utils/fetchAPI";

const VideoDetail = () => {
  return <Box minHeight="95vh"></Box>;
};

export default VideoDetail;
