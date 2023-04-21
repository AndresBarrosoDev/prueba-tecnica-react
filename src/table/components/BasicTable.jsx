import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Actions = () => {
  return (
    <>
      <button>X</button>
      <button>O</button>
    </>
  );
};
const createData = (name, calories, fat, carbs) => ({
  name,
  calories,
  fat,
  carbs,
});

const rows = [
  createData("Abramo", "Sayton", "asaytonnd@istockphoto.com", "male"),
  createData("Abramo", "Sayton", "asaytonnd@istockphoto.com", "male"),
  createData("Abramo", "Sayton", "asaytonnd@istockphoto.com", "male"),
  createData("Abramo", "Sayton", "asaytonnd@istockphoto.com", "male"),
  createData("Abramo", "Sayton", "asaytonnd@istockphoto.com", "male"),
];

export const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#777777" }}>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Nombre</TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Apellido
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Email
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Genero
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                <Actions></Actions>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
