import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({

    name: {
        color: "#494949",
        fontSize: "1rem",
        fontWeight: "600"
    },
    price: {
        fontSize: "14px",
        fontWeight: "500"
    },
    total: {
        fontSize: "14px",
    },
    cost: {
        fontSize: "14px",
    },
    root: {
        display: 'flex',
        flexDirection: "column",

    },
    gridContainer: {
        width: "100%",
        paddingTop: "10px",
        flexGrow: 1,

    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

    },
    avatar: {
        width: '100%',
        height: "80px",
    },
    footer: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50px",
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
        padding: "5px 20px",
        boxShadow: `0px -2px 5px 3px rgba(209,209,209,0.75)`
    },
    totalPrice: {
        fontSize: "16px",
        fontWeight: "600",
        color: "#494949"
    },
    btn: {
        height: "40px",
        whiteSpace: "nowrap",
        fontSize: "14px"
    }
}))