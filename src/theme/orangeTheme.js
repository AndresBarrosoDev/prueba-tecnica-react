import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const orangeTheme = createTheme({
    palette: {
        primary: {
            main: '#FC9E14'
        },
        secondary: {
            main: '#FF017F'
        },
        error: {
            main: red.A400
        }
    }
})