import { Box, Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import Layout from '../../components/Layout'
import useStyles from "../../styles/checkout.styles";

function Checkout() {
    const classes = useStyles();
    return (
        <Layout>
            <Box className={classes.root}>
                <Card className={classes.cardContent}>
                    <CardContent>
                    <Typography variant="h1" align="center" className={classes.text}>
                        Checkout
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.text1}>
                        Thank you for your order.
                    </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Layout>
    )
}

export default Checkout;
