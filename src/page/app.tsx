import * as React from "react";
import { NavBar, SideMenu } from "./components";
import { autobind } from "core-decorators";
import { StyleRulesCallback, withStyles } from "@material-ui/core";

const styles: StyleRulesCallback = (theme) => ({
    root: {
        flexGrow: 1,
        height: 440,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
    },
});

@autobind
class App extends React.Component<any, { sideMenuOpen: boolean }> {
    constructor(args) {
        super(args);
        this.state = {
            sideMenuOpen: false,
        };
    }

    public handleDrawerClose() {
        this.setState({ sideMenuOpen: false });
    }

    public handleDrawerOpen() {
        this.setState({ sideMenuOpen: true });
    }

    public render() {
        const { sideMenuOpen: open } = this.state;
        const { classes } = this.props;
        return (
            <section className={classes.root}>
                <NavBar open={open} onDrawerOpen={this.handleDrawerOpen}/>
                <SideMenu open={open} onDrawerClose={this.handleDrawerClose} />
            </section>
        );
    }
}

export default withStyles(styles)(App);
