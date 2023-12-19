import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { IconButton, Paper } from "@mui/material";
const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handlesubmit}
      sx={{ borderRadius: 1000, border: "1px solid #342", pl: 2 }}
    >
      <input
        className="search-bar"
        value={searchTerm}
        type="text"
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
        placeholder="Search..."
      ></input>
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
