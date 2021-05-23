import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { RoutePaths } from '../routes/RoutePaths';
import { useHistory } from 'react-router-dom';
import { COLORS } from '../index';
import { Wrapper } from '../components/Wrapper';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: '20%',
  },
  drawerPaper: {
    width: '60%',
  },
  listItem: {
    marginTop: theme.spacing(2),
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
    <div>
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
        anchor="left"
        open={isOpenDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={toggleDrawer}
      >
        <div
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          style={{ backgroundColor: COLORS.primary, flex: 1 }}
        >
          <List>
            <ListItem
              button
              key={0}
              className={classes.listItem}
              onClick={() => history.push(`/${RoutePaths.MONSTERS}`)}
            >
              <ListItemIcon>
                <Wrapper
                  img="icons/spells/monster.svg"
                  width={24}
                  height={24}
                />
              </ListItemIcon>

              <ListItemText primary="Monsters" />
            </ListItem>

            <ListItem
              button
              key={1}
              className={classes.listItem}
              onClick={() => history.push(`/${RoutePaths.FEATURES}`)}
            >
              <ListItemIcon>
                <Wrapper img="icons/spells/new.svg" width={24} height={24} />
              </ListItemIcon>

              <ListItemText primary="Features" />
            </ListItem>

            <ListItem
              button
              key={2}
              className={classes.listItem}
              onClick={() => history.push(`/${RoutePaths.SPELLS}`)}
            >
              <ListItemIcon>
                <Wrapper img="icons/spells/book.svg" width={24} height={24} />
              </ListItemIcon>

              <ListItemText primary="Spells" />
            </ListItem>

            <ListItem
              button
              key={3}
              className={classes.listItem}
              onClick={() => history.push(`/${RoutePaths.CLASSES}`)}
            >
              <ListItemIcon>
                <Wrapper img="icons/spells/assasin.svg" width={24} height={24} />
              </ListItemIcon>

              <ListItemText primary="Classes" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};
