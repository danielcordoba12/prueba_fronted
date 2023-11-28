import { Route, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import ListarMuestra from "./pages/ListarMuestras";
import RegistrarMuestra from "./pages/RegistrarMuestra";
import EditarMuestra from "./pages/EditarMuestra";
import Contactenos from "./pages/Contactenos";

function App() {

  return (
    <>
      <Routes>Nosotros
        <Route path="/" element={<Menu/>}>
        <Route path="/" element={<ListarMuestra/>}/>
        <Route path="/ListarMuestra" element={<ListarMuestra/>}/>
        <Route path="/RegistrarMuestra" element={<RegistrarMuestra/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/EditarMuestra/:id" element={<EditarMuestra/>}/>
        <Route path="/Contactenos" element={<Contactenos/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
