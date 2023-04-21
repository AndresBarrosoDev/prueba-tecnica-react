import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Inicia sesión">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Usuario"
              type="email"
              placeholder="usuario@nectia.com"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button sx={{ color: "white" }} variant="contained" fullWidth>
                <Link sx={{ textDecoration: "none" }} component={RouterLink} color="inherit" to="/">
                  Iniciar Sesión
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button sx={{ color: "white" }} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
