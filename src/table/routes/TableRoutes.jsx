import { Navigate, Route, Routes } from "react-router-dom"
import { TablePage } from "../pages/TablePage"

export const TableRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ < TablePage /> } />
        <Route path="/*" element={ < Navigate to="/" /> } />
    </Routes>
  )
}
