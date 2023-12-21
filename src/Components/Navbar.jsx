import React from "react";
import { Link } from "react-router-dom";
import { Stack, Paper } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        background: "#000",
        position: "sticky",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to={"./"}>
        {" "}
        <img src={logo} height={45} alt="logo" />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
