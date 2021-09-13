import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    root: {
        padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
    },
    text: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "2.5rem"
        }
    },
    button: {
        marginTop: "30px", width: "fit-content", whiteSpace: "nowrap"
    },
}))