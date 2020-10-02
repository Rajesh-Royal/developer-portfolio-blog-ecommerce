import { createMuiTheme } from "@material-ui/core/styles";

export const darkTheme = createMuiTheme({
    themeName: "Rajesh Royal Dark 2020",
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
            // primary orange color
            main: "#df691a",
        },
        secondary: {
            // This is green.A700 as hex.
            main: "#4e5d6c",
            dark: "#2b3e50",
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

export const lightTheme = createMuiTheme({
    themeName: "Rajesh Royal Light 2020",
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
        type: "light",
        primary: {
            main: "#df691a",
        },
        secondary: {
            // whitesmoke and white color
            main: "#f5f5f5",
            dark: "f0f0f0",
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
            // white color
            primary: "#2f2f2f",
            secondary: "#4e5d6c",
            disabled: "#adb5bd"
        }
    },
});