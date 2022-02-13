import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "../styles";
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <PhotoCamera className={classes.icon} />
        <Typography variant="h6">Kiarash Photo Album</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
