import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cursos from "./pages/Cursos";
import Home from "./pages/Home";
import Consultoria from "./pages/Consultoria";
import Rodape from "./componentes/Rodape";
import GlobalVariables from "./contexts";
import Outros from "./pages/Outros";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./pages/Error";
import NavMenu from "./componentes/NavMenu";
import PerfilDoUsuario from "./pages/PerfilDoUsuario";

const App = () => {
  return (
    <GlobalVariables>
    <BrowserRouter>
      <NavMenu />
      <div style={{paddingTop: 0}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/perfildousuario" element={<PerfilDoUsuario />} />
          <Route path="/outros" element={<Outros />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Rodape />
    </BrowserRouter>
    </GlobalVariables>
  );
}

export default App;
