import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/Constants";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card sx={{ width: { md: "320px", xs: "100%" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#3d3930", height: "106px" }}>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle1" fontWeight="Bold" color="#fff">
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="Bold" color="#5b79a8">
            {snippet?.channelTitle.slice(0, 50) ||
              demoChannelTitle.slice(0, 50)}
            <CheckCircle sx={{ fontSize: 12, color: "#eef0f4", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
