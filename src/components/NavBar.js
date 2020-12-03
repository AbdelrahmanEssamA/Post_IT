import React from "react";

import { MenuItem, Menu, Grid } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MiniNavBar from "./MiniNavBar";

const useStyles = makeStyles((theme) => ({
  ul: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAnchor = Boolean(anchorEl);
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid className={classes.ul} item xs={3} md={12}>
        <img
          className="logo"
          src={
            "https://seeklogo.com/images/P/post-it_3m-logo-2FC29EB97B-seeklogo.com.png"
          }
          alt="Smiley face"
        />
        <ul className="nav-bar">
          <li>Home</li>
          <li>Page2</li>
          <li>Page3</li>
          <li>Page4</li>
          {
            <div className="profile-icon">
              <IconButton onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appBar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openAnchor}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          }
        </ul>
      </Grid>
      <MiniNavBar className={classes.MobileUL} />
    </div>
  );
}
