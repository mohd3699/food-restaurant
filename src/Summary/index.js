import { Avatar, Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from "../styles/order.summary.styles";
import Layout from '../components/Layout';
import { FoodMenusContext } from '../context/foodMenus.context';
import { useHistory } from "react-router-dom";
import { pagePaths } from "../utils/constants";

function Summary() {
    const classes = useStyles();
    const history = useHistory();
    const { cartItems, clearCartItems } = useContext(FoodMenusContext);
    let totalPrice = 0;
    const placeOrder = () => {
        clearCartItems();
        history.push(pagePaths.checkout);
    }
    const renderCartItems = (m, k) => {
        totalPrice += (m.quantity * m.price);
        return <Grid item key={k} lg={4} md={4} sm={6} xs={12}>
            <Card>
                <CardContent className={classes.cardContent}>
                    <Box>
                        <Typography variant="h5" className={classes.name}>{m.name}</Typography>
                        <Typography variant="subtitle1" className={classes.price}>Price: {m.price}</Typography>
                        <Typography variant="subtitle1" className={classes.total}>Total: {m.quantity}</Typography>
                        <Typography variant="subtitle1" className={classes.cost}> Cost (INR): {m.quantity * m.price}</Typography>

                    </Box>
                    <Box><Avatar variant="square" src={`/assets/${m.image}`} alt={m.name} className={classes.avatar} /></Box>
                </CardContent>
            </Card>
        </Grid>
    }
    return (
        <Layout>
            <Box className={classes.root}>
            <Grid container spacing={1} className={classes.gridContainer}>
                {cartItems.map((m, k) => renderCartItems(m, k)
                )}
            </Grid>
            <Box  height="50px" />
            <Box className={classes.footer}>
                <Box>   
                    <Typography varaint="h6" className={classes.totalPrice}>Total (INR): {totalPrice} /-</Typography>
                </Box>
                <Button variant="contained" color="primary" size="small" className={classes.btn} onClick={placeOrder}>Place Order</Button>
            </Box>
            </Box>
        </Layout>
    )
}

export default Summary;
