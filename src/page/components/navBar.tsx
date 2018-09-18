import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

class NavBar extends React.Component<{ classes: any, notificationNum?: number }> {
    public render() {
        const { classes, notificationNum= 0 } = this.props;
        return (
            <main className={classes.root}>
                <AppBar position="fixed" color="inherit">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            Awesome Spider
                        </Typography>
                        <IconButton >
                            <Badge badgeContent={notificationNum} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </main>
        );
    }
}

export default withStyles(styles)(NavBar);
