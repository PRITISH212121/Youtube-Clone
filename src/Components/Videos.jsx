import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos }) => {
  return (
    <Stack
      flexDirection={"row"}
      gap={2}
      justifyContent={"flex - start"}
      flexWrap={"wrap"}
    >
      {videos.map((video, id) => (
        <Box key={id}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
