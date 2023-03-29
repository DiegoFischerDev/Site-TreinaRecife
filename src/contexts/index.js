import { createContext, useEffect, useState } from "react";
import { buscarCursos } from '../server/ServerFunctions';

export const globalContext = createContext();

const GlobalVariables = ({ children }) => {

  const [active, setActive] = useState("home");
  const handleClick = event => setActive(event.target.name);
  const [userName, setUserName] = useState('Admin');
  const [cursoSelecionado, setCursoSelecionado] = useState(1);

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    buscarCursos(setCursos)
  }, [])

  return (
    <globalContext.Provider value={{ handleClick, active, setActive, userName, setUserName, cursoSelecionado, setCursoSelecionado, cursos }}>
      {children}
    </globalContext.Provider>
  )
}

export default GlobalVariables;