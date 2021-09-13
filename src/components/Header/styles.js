import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        height: "64px"
    },

    title: {
        whiteSpace: "nowrap"
    },
    fullGrow: {
        width: "100%"
    },
    badge: {
        cursor: "pointer"
    }
}
));