import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
const SideBar = ({ selectedcategory, setselectedcategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        pr: "20px",
        flexDirection: {
          md: "column",
          sx: "row",
        },
        OverflowY: {
          md: "auto",
          sx: "hidden",
        },

        height: {
          sx: "auto",
          md: "95%",
        },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            onClick={() => setselectedcategory(category.name)}
            className="category-btn"
            style={{
              background:
                category.name === selectedcategory ? "#FC1503" : "#000",
              color: "white",
            }}
            key={category.name}
          >
            <span
              style={{
                marginRight: "10px",
                color: category.name === selectedcategory ? "white" : "#FC1053",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedcategory ? "1" : "0.8",
              }}
            >
              {category.name}{" "}
            </span>
          </button>
        );
      })}
      ;
    </Stack>
  );
};

export default SideBar;
