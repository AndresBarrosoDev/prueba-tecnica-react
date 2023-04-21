import { Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { TableRoutes } from "../table/routes/TableRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* Prueba Tecnica Nectia */}
        <Route path="/*" element={ <TableRoutes /> } />
    
    </Routes>
  )
}
