import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // function to close navigation menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // click handler for profile link
  const clickProfile = () =>{
    history.push('/user');
    handleClose();
  }

  // click handler for symptom tracker link
  const clickTracker = () =>{
    history.push('/tracker');
    handleClose();
  }

  // click handler for about link
  const clickAbout = () =>{
    history.push('/about');
    handleClose();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={clickProfile}>Profile</MenuItem>
            <MenuItem onClick={clickTracker}>Symptom Tracker</MenuItem>
            <MenuItem onClick={clickAbout}>About</MenuItem>
            <MenuItem onClick={() => dispatch({ type: "LOGOUT" })}>Logout</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Symptom Tracker
          </Typography>
          <Button color="inherit">
            <img src="../../../doctor.png"/>
         </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
