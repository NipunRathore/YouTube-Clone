import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";
// renders a list of categories as buttons 
// takes two props , which are state variables to track currently selected category 
const Categories = ({ selectedCategory, setSelectedCategory }) => (
  // stack component to render the categories as horizontal rows 
  <Stack
    direction="row"
    //sx is an MUI prop used to add custom CSS 
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {/* categories constant imported from constants file which contains an array of objects representing each category  */}
    {/* map function used to iterate over categories array  */}
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        {/* each button consists of two span elements containing icon and name  */}
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
