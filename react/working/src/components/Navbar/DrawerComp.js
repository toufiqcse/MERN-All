import React, { useState } from "react";
import {
  Drawer,
  Button,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const pages = [
    { idNo: 14, name: "Home", path: "" },
    { idNo: 33, name: "Products", path: "" },
    { idNo: 42, name: "Orders", path: "" },
    { idNo: 55, name: "About", path: "" },
  ];
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ width: "200px", paddingTop: "30px" }}>
          {pages.map((page) => (
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              key={page.idNo}
            >
              <ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Login
          </Button>
          <Button sx={{ marginLeft: "10px" }} variant="contained">
            Log Out
          </Button>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#fff", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
