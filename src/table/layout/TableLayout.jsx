import { Box } from "@mui/material"

export const TableLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            { children }
        </Box>
    </Box>
  )
}
