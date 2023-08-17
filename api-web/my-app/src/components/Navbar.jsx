import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SiYoutubestudio } from "react-icons/si";

import { logo } from "../utils/Constants";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#5b79a8",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <SiYoutubestudio style={{ color: "#EEF0F4" }} />
      </Link>
      <SearchBar />
    </Stack>
  );
}
