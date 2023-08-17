import React from "react";

import { categories } from "../utils/Constants";
import { Stack, selectClasses } from "@mui/material";
export default function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((e) => (
        <button
          onClick={() => setSelectedCategory(e.name)}
          className="category-btn"
          style={{
            background: e.name === selectedCategory && "#5b79a8",
            color: "black",
          }}
          key={e.name}
        >
          <span
            style={{
              color: e.name === selectedCategory ? "#eef0f4" : "#5b79a8",
              marginRight: "8px",
            }}
          >
            {e.icon}
          </span>
          <span
            style={{
              color: e.name === selectedCategory ? "#eef0f4" : "#5b79a8",
              marginRight: "8px",
            }}
          >
            {e.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}
