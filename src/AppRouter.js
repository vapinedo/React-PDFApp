import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsuarioNuevo from "./components/Usuarios/UsuarioNuevo";
import UsuarioAdmin from "./components/Usuarios/UsuarioAdmin";
import Navbar from "./components/UI/Navbar";

const AppRouting = () => {
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<UsuarioAdmin />} />
                        <Route path="/usuario-nuevo" element={<UsuarioNuevo />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
};

export default AppRouting;