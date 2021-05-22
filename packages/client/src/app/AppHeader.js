import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { RoutePaths } from '../routes/RoutePaths';
import { useHistory } from 'react-router-dom';
import BugReportIcon from '@material-ui/icons/BugReport';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: '20%',
  },
}));

export const AppHeader = () => {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            RPG Project
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            {/*TODO we should add routes to take user to profile*/}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        style={{ width: '20%' }}
        anchor="left"
        open={isOpenDrawer}
        onClose={toggleDrawer}
      >
        <div onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            <ListItem
              button
              key={0}
              onClick={() => history.push(`/${RoutePaths.MONSTERS}`)}
            >
              {/*TODO change icon of MONSTERS*/}
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>

              <ListItemText primary="Monsters" />
            </ListItem>

            {/*TODO change icon of FEATURES*/}
            <ListItem button key={1}>
              <ListItemIcon
                onClick={() => history.push(`/${RoutePaths.FEATURES}`)}
              >
                <FeaturedPlayListIcon />
              </ListItemIcon>

              <ListItemText primary="Features" />
            </ListItem>

            {/*TODO change icon of SPELLS*/}
            <ListItem button key={2}>
              <ListItemIcon
                onClick={() => history.push(`/${RoutePaths.SPELLS}`)}
              >
                <AllInclusiveIcon />
              </ListItemIcon>

              <ListItemText primary="Spells" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};
