import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import DrowerComp from "./DrowerComp";
import { Typography, Tab, Tabs, Toolbar,useMediaQuery,
  useTheme } from "@mui/material";
  import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
function Sidebar() {
  const [value, setValue] = useState();

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar >
      <Toolbar>
          
          {isMatch ? (
            <>
             
              <DrowerComp />
            </>
          ) : (
            <>
              <Tabs
                
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Prepare" />
                <Tab label="Apply" />
                <Tab label="Profile" />
                <Tab label="Contact" />
                <Tab label="Contact" />
                <Tab label="Contact" />
                <Tab label="Contact" />
              </Tabs>
             
            </>
          )}




        </Toolbar>
      </AppBar>
      </>
  );
}; export default Sidebar;


