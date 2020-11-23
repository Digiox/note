import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom'
const useStyles = makeStyles({
    titleSection: {
        backgroundColor: '#6B9ED1',
        position: 'relative',
        height: '50vh',
    },
    headerNavLinkTitle: {
        fontFamily: "ArimaMadurai",
        color: "black",
        textDecoration: "none",
    },
    navTitle: {
        padding: "2%"
    },
    headerElement: {
        
    }
});

const HeaderBar = () => {
    const classes = useStyles();
    return (
        <header className={classes.headerElement}>
            <NavLink className={classes.headerNavLinkTitle} to="/" ><h2 className={classes.navTitle}>IZZY</h2></NavLink>
        </header>);
}

export default HeaderBar;