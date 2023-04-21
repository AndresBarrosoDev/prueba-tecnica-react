import { TableLayout } from "../layout/TableLayout";
import { BasicTable } from "../components/BasicTable";
import { Box, Button, Grid } from "@mui/material";
import { RowsPerPage, SearchData } from "../components";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

export const TablePage = () => {
  return (
    <TableLayout>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <RowsPerPage></RowsPerPage>
        <SearchData></SearchData>
      </Box>
      <BasicTable></BasicTable>
      <Button
        sx={{ color: "white", backgroundColor: "#777777" }}
        variant="contained"
        fullWidth
      >
        Crear nuevo registro
      </Button>
      <Grid sx={{mt:1}} container direction="row" justifyContent="end">
        <Link component={RouterLink} color="inherit" to="/auth/login">
          Cerrar sesión
        </Link>
      </Grid>
    </TableLayout>
  );
};
