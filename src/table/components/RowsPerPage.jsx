import { Container } from "@mui/material";

export const RowsPerPage = () => {
  return (
    <Container sx={{ m: 1}}>
      <span>Mostrar: </span>
      <select>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <span> registros</span>
    </Container>
  );
};
