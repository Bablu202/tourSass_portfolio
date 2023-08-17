import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";

export default function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
