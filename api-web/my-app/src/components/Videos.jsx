import { Stack, Box } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

export default function Videos({ videos }) {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((e, i) => (
        <Box key={i}>
          {e.id.videoId && <VideoCard video={e} />}
          {e.id.channelId && <ChannelCard channelDetail={e} />}
        </Box>
      ))}
    </Stack>
  );
}
