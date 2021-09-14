import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import Layout from '../../components/Layout'
import useStyles from "../../styles/foodmenus.styles";
import axios from "axios";
import { Add, Remove } from '@material-ui/icons';
import { FoodMenusContext } from "../../context/foodMenus.context";

function FoodMenus() {
    const classes = useStyles();
    const [menus, setMenus] = useState([])
    const { cartItems, addCartItem,
        removeItemFromCart, } = useContext(FoodMenusContext);

    const getCartItemFromCartItems = (item) => {
        return cartItems.find(c => c.name === item.name)
    }
    const renderMenuCard = (m, k) => {
        const cartItem = getCartItemFromCartItems(m);
        return <Grid item key={k} lg={4} md={4} sm={6} xs={12}>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={`/assets/${m.image}`}
                    title={m.name}
                />
                <CardContent>
                    <Typography variant="h5" className={classes.name}>{m.name}</Typography>
                    <Typography variant="subtitle1">Price: {m.price}</Typography>
                    {cartItem && <React.Fragment>
                        <Typography variant="subtitle1">Total: {cartItem.quantity}</Typography>
                        <Typography variant="subtitle1">Cost (INR): {cartItem.quantity * cartItem.price}</Typography>
                    </React.Fragment>}

                    <Box marginTop="20px">
                        <Button variant="contained" color="primary" size="small" onClick={() => addCartItem(m)}>
                            <Add />
                        </Button>
                        <Button varaint="contained" color="default" size="small" onClick={() => removeItemFromCart(m)}>
                            <Remove />
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    }


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const resp = await axios.get("./data/feeds.json");
        setMenus(resp.data || [])
    }

    return (
        <Layout>
            <Grid container spacing={1} className={classes.gridContainer}>
                {menus.map((m, k) => renderMenuCard(m, k)
                )}
            </Grid>
        </Layout>
    )
}

export default FoodMenus
