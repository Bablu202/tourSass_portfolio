import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div>
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value=""
          onChange={() => {}}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "#5b79a8" }}>
          <FiSearch />
        </IconButton>
      </Paper>
    </div>
  );
}
