import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cursos from "./paginas/Cursos";
import Home from "./paginas/Home";
import Consultoria from "./paginas/Consultoria";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Login from "./paginas/Login";
import GlobalVariables from "./contexts";
import Outros from "./paginas/Outros";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./paginas/Error";

const App = () => {
  return (
    <GlobalVariables>
    <BrowserRouter>
      <Cabecalho />
      <div style={{paddingTop: 65}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/login" element={<Login />} />
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
