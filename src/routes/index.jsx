import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ListaPoliticos from "../pages/ListaPoliticos";
import DeputadoDetail from "../pages/DeputadoDetail";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ListaPoliticos />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/deputado/:id" element={<DeputadoDetail />} />
        </Routes>
    )
}