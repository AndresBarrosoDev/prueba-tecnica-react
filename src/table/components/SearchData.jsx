import { Container } from "@mui/material";

export const SearchData = () => {
  return (
    <Container sx={{ m: 1 , display: "flex", justifyContent: "end"}}>
      <span className="ml-1" >Buscar: </span>
      <input type="text" />
    </Container>
  );
};
