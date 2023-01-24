// @ts-nocheck
import React, { useState } from "react";
import {
  AppBar,
  Button,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import DrawerComp from "../Navbar/DrawerComp";
const Navbar = () => {
  const navRoutes = [
    { id: 10, name: "Home", path: "" },
    { id: 31, name: "Products", path: "" },
    { id: 41, name: "Orders", path: "" },
    { id: 51, name: "About", path: "" },
    { id: 51, name: "Contact US", path: "" },
  ];
  const [value, setValue] = useState();
  // for responsive menu items
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970", position: "fixed" }}>
        <Toolbar>
          <AddHomeWorkIcon></AddHomeWorkIcon>
          <Typography
            sx={{ marginLeft: "10px", color: "#fff" }}
            variant="h5"
            href="/home"
          >
            {" "}
            SHOPPE
          </Typography>

          {isMatch ? (
            <>
              <DrawerComp></DrawerComp>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {navRoutes.map((route) => (
                  <Tab
                    sx={{ fontSize: "19px" }}
                    key={route.id}
                    label={route.name}
                    href={route.path}
                  ></Tab>
                  //   <NavLink key={route.id} route={route}></NavLink>
                ))}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                Log Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
