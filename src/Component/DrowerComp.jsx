import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText } from "@mui/material";
   const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
function DrowerComp(){
    const [openDrawer, setOpenDrawer] = useState(false);
 
    return(
      <>
      <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>
        {pages.map((page, index) => (
          <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
            <ListItemIcon>
              <ListItemText>{page}</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
    <IconButton
      sx={{ color: "white", marginLeft: "auto" }}
      onClick={() => setOpenDrawer(!openDrawer)}
    >
      <MenuIcon color="white" />
    </IconButton>

        </>
    )
}export default DrowerComp;