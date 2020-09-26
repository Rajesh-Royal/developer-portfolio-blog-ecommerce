import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Roboto",
            "Lato",
            "-apple-system",
            "BlinkMacSystemFont",
            "\"Segoe UI\"",
            "\"Helvetica Neue\"",
            "Arial",
            "sans-serif",
            "\"Apple Color Emoji\"",
            "\"Segoe UI Emoji\"",
            "\"Segoe UI Symbol\"",
        ].join(","),
        color: "#ebebeb",
    },
    palette: {
        type: "dark",
        primary: {
            // Purple and green play nicely together.
            main: "#df691a",
        },
        secondary: {
            // This is green.A700 as hex.
            main: "#4e5d6c",
            light: "#ebebeb",
        },
        error: {
            // This is green.A700 as hex.
            main: "#d9534f",
        },
        warning: {
            // This is green.A700 as hex.
            main: "#f0ad4e",
        },
        info: {
            // This is green.A700 as hex.
            main: "#5bc0de",
        },
        success: {
            // This is green.A700 as hex.
            main: "#5cb85c",
        },
        text: {
            primary: "#ebebeb",
            secondary: "#4e5d6c",
            disabled: "#adb5bd"
        }
    },
});

export default Theme;