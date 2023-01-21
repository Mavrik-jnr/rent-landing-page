import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { navigation } from "../utils/navigation";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
function Header({ Navbar, window }) {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [tab, setTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawerWidth = 240;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Toolbar
        sx={{
          minHeight: { sm: "70px", lg: "90px" },
        }}
      />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",

          gap: "30px",
        }}
      >
        {navigation.map((item) => (
          <ListItem
            key={item.text}
            to={item.link}
            component={Link}
            disablePadding
          >
            <ListItemButton
              disableRipple
              sx={{
                ml: "32px",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  color: "white",
                }}
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
        elevation="0"
        sx={{
          transition: "background 2.5s",

          backgroundColor: {
            xs: "rgb(0,0,0,50%)",
            md: Navbar ? "rgb(0,0,0,70%)" : "rgb(0,0,0,1%)",
          },
          zIndex: "9999",
          backdropFilter: { xs: "blur(10px)", md: "blur(6px)" },
          paddingInline: {
            //Responsive Padding
            xs: "16px",
            sm: "clamp(16px, 8.5vw, 32px)",
            md: "clamp(32px, 8.5vw, 60px)",
            lg: "clamp(60px, 8.5vw, 120px)",
          },
          borderBottom: Navbar && "1px solid #3333",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { sm: "70px", lg: "90px" },
            borderBottom: { xs: "", md: !Navbar && "0.5px solid #fff" },
            "&.MuiToolbar-root": {
              paddingInline: "0px",
            },
            display: "flex",
            justifyContent: { xs: "space-between", sm: "" },
          }}
        >
          <Box
            sx={{
              "& .logo": {
                width: "120px",
              },
              "@media  (min-width: 600px)": {
                "& .logo": { width: "150px" },
              },
            }}
            flexBasis="30%"
          >
            <img src={logo} alt="logo" className="logo" />
          </Box>

          <Tabs
            aria-label="basic tabs example"
            value={tab}
            textColor="#fff"
            sx={{
              display: { xs: "none", md: "flex" },
              alignSelf: "flex-end",
              flexBasis: "70%",

              "& .MuiTabs-indicator": {
                backgroundColor: "white",
                // color: "white",
              },
              "& .MuiTab-root": {
                color: "white",
                paddingBottom: "21px",
                fontSize: "18px",
                textTransform: "capitalize",
              },
              "& .Mui-selected": { color: "white", fontWeight: "500" },
              "& .MuiTabs-flexContainer": { gap: "54px" },
            }}
            onChange={handleTabChange}
          >
            {navigation.map((item) => {
              return (
                <Tab
                  key={item.text}
                  sx={{
                    transition: ".4s",
                  }}
                  disableRipple
                  to={item.link}
                  label={item.text}
                  component={Link}
                />
              );
            })}
          </Tabs>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          //   hideBackdrop="true"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(0,0,0,50%)",

              height: { xs: "calc(100vh - 57px)" },
              top: "55px",
              backdropFilter: "blur(10px)",
              boxShadow: "none",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Header;
