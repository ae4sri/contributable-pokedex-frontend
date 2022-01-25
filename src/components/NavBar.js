import React from "react";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">

      <CssBaseline />

      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          OpenDex
        </Typography>

        <div className={classes.navlinks}>

          <Link to="/" className={classes.link}>
            Home
          </Link>
          
          <Link to="/create" className={classes.link}>
            Create A Pokemon
          </Link>
          
          <Link to="/search" className={classes.link}>
            Search
          </Link>

        </div>
      </Toolbar>

    </AppBar>
  );
}
