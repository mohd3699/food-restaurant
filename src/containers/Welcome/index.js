import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';
import Layout from '../../components/Layout'
import { pagePaths } from '../../utils/constants';
import useStyles from "../../styles/welcome.styles";

function Welcome() {
    const classes = useStyles();
    const history = useHistory();
    const goToMenu = () => {
        history.push(pagePaths.foodMenus);
    }
    return (
        <Layout>
            <Box className={classes.root}>
                <Typography variant="h1" align="center" className={classes.text}>
                    Welcome to foods kitchen
                </Typography>

                <Button variant="contained" color="primary" onClick={goToMenu} className={classes.button}>Go to menu</Button>
            </Box>
        </Layout>
    )
}

export default Welcome
