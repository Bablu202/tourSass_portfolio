import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { useParams } from "react-router";

export default function ChannelDetail() {
  const ChannelDetail = () => {
    const { id } = useParams();
  };
  ChannelDetail();
  return <div>ChannelDetail</div>;
}
