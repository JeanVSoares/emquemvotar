import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ListaPoliticos from "../pages/ListaPoliticos";
import DeputadoDetail from "../pages/DeputadoDetail";
import Home from "../pages/Home";

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lista_deputado" element={<ListaPoliticos />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/deputado/:id" element={<DeputadoDetail />} />
            </Routes>
        </div>
    )
}
