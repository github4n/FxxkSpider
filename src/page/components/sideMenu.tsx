import * as React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { autobind } from "core-decorators";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";
import List from "@material-ui/core/List";
import { Divider, ListItem, ListItemIcon, ListItemText, withStyles, StyleRulesCallback, Theme } from "@material-ui/core";

const styles: StyleRulesCallback = (theme) => ({
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: 240,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
});

@autobind
class SideMenu extends React.Component<{ classes: any, open: boolean, onDrawerClose: any, theme: Theme }> {
    constructor(args) {
        super(args);
        this.state = {
            open: false,
        };
    }

    public render() {
        const { classes, open, onDrawerClose, theme } = this.props;

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}>
                <div className={classes.toolbar}>
                    <IconButton onClick={onDrawerClose}>
                        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText>新增任务单</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SideMenu);
