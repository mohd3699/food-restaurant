import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useStyles from "./styles";
import { Restaurant, ShoppingCart } from '@material-ui/icons';
import { FoodMenusContext } from "../../context/foodMenus.context";
import { Badge, Box } from '@material-ui/core';
import { useHistory } from 'react-router';
import { pagePaths } from '../../utils/constants';

export default function Header() {
    const classes = useStyles();
    const history = useHistory();

    const { cartItems } = useContext(FoodMenusContext);
    let totalQuantity = 0;
    cartItems.forEach((i) => {
        totalQuantity += i.quantity;
    });

    const placeOrder = () => {
        history.push(pagePaths.orderSummary)
    }
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <Restaurant />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        Food's Restaurant
                    </Typography>
                    <Box display="flex" justifyContent="flex-end" className={classes.fullGrow}>
                        {totalQuantity > 0 && <Badge badgeContent={totalQuantity} className={classes.badge} onClick={placeOrder}>
                            <ShoppingCart />
                        </Badge>}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
