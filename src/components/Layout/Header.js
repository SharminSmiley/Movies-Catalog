import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/movieweblogo.jpg";
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import LoginButton from "../../pages/LoginButton";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"250px"} width="250" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/Movies"}>Movies</NavLink>
        </li> */}
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
       
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black",}}>
        <Toolbar>
  <IconButton sx={{ mr: 2 }} aria-label="open drawer">
    <MenuIcon />
  </IconButton>
  <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1 }}>
    <img src={Logo} alt="logo" height={"40"} width="180" />
  </Typography>
  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
    <ul className="navigation-menu">
      <li>
        <NavLink activeClassName="active" to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/Movies">Movies</NavLink>
      </li> */}
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <LoginButton/>
     
    </ul>
  </Box>
  <Box sx={{ display: { xs: 'none', sm: 'block' } ,backgroundColor:'white' }}>
    <TextField label="Search Movies" variant="outlined" size="small"  />
  </Box>
  <Box sx={{ display: { xs: 'block', sm: 'none', } ,backgroundColor:'black'}}>
    <TextField label="Search Movies" variant="outlined" size="small"  />
  </Box>
  <div style={{marginLeft:'20px'}}>
  <AccountCircleIcon/>
  </div>
</Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
                backgroundColor:"yellow"
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
