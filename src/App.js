import {
  AppBar,
  Divider,
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
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Main, Section } from "./components/Main";
import MenuIcon from "@mui/icons-material/Menu";
import heroImg from "./assets/hero.png";
import logo from "./assets/Logo.png";
import { Link } from "react-router-dom";
import { navigation } from "./utils/navigation";

/*TOdo
//TODAY (if possible)
1. Remove Toolbar underneath appbar and add new dynamic padding +
2. Make Toolbar responsive from docs +
3. Add background image and make appbar elevate and turn white on scroll+
4. build out hero section
//Tommorow
1. add values to select +
2.customize card component
*/
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function App(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [Navbar, setNavbar] = useState(false);

  const [tab, setTab] = useState(0);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 700) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Toolbar
        sx={{
          // backgroundColor: "transparent",
          // backdropFilter: "blur(10px)",
          minHeight: { sm: "70px", lg: "90px" },
        }}
      />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
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

                  // "& a": {
                  //   color: "white",
                  // },
                }}
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Main sx={{ minHeight: "300vh" }}>
      <AppBar
        elevation="0"
        sx={{
          // backgroundColor: "transparent",
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
            // backgroundColor: "transparent",
            // backdropFilter: "blur(10px)",
            minHeight: { sm: "70px", lg: "90px" },
            borderBottom: { xs: "", md: !Navbar && "0.5px solid #fff" },
            "&.MuiToolbar-root": {
              paddingInline: "0px",
            },
            display: "flex",
            justifyContent: { xs: "space-between", sm: "" },
            // transition: "border-bottom 2.5s",
          }}
        >
          <Box
            sx={{
              "& .logo": {
                width: "120px",
                // filter:
                //   "invert(360%) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(100%) contrast(102%)",
              },
              "@media  (min-width: 600px)": {
                "& .logo": { width: "150px" },
              },
            }}
            flexBasis="30%"
          >
            <img
              src={logo}
              alt="logo"
              className="logo"
              // style={{
              //   width: "100px",
              //   "@media  (min-width: 600px)": {
              //     width: "300px",
              //   },
              // }}
            />
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
                    // textTransform: "capitalize",
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
          anchor="right"
          container={window.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          hideBackdrop="true"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(0,0,0,50%)",
              // { sm: "70px", lg: "90px" }
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
      {/* <Toolbar
        sx={{
          // backgroundColor: "black",
          minHeight: { sm: "70px", lg: "90px" },
        }}
      /> */}
      <Section
        sx={{
          pt: { xs: "80px", sm: "94px", md: "130px", lg: "170px" },
          backgroundImage: `url(${heroImg})`,
          minHeight: "100vh",
          objectFit: "center",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          postion: "relative",
          "&::before": {
            content: "''",
            height: "100%",
            pt: { xs: "80px", sm: "94px", md: "130px", lg: "170px" },
            // width: "100vw",
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
            backgroundColor: "rgb(0,0,0,20%)",
            // zIndex: "99",
          },
        }}
      >
        Hello
      </Section>
      {/* Hello */}
    </Main>
  );
}

export default App;
