import * as React from "react";
import classNames from "classnames";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

const styles: StyleRulesCallback = (theme) => ({
    root: {
        flexGrow: 1,
        height: 440,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    grow: {
        flexGrow: 1,
    },
});

class NavBar extends React.Component<{ classes: any, notificationNum?: number, open: boolean, onDrawerOpen: any }> {
    public render() {
        const { classes, notificationNum = 0, open, onDrawerOpen } = this.props;
        return (
            <AppBar position="absolute" color="primary" className={classNames(classes.appBar, open && classes.appBarShift)}>
                <Toolbar disableGutters={!open}>
                    <IconButton color="inherit" aria-label="Menu" className={classNames(classes.menuButton, open && classes.hide)} onClick={onDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.grow}>
                        Awesome Spider
                        </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={notificationNum} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(NavBar);
