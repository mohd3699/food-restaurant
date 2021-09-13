import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    root: {
        padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
    },
    cardContent: {
        padddig: "20px",
        width: "300px"
    },
    text: {
        fontSize: "2rem",
        color: "#494949",
        [theme.breakpoints.down("xs")]: {
            fontSize: "2.5rem"
        }
    },
    text1: {
        marginTop: "10px",
        fontSize: "1rem"
    },
}))