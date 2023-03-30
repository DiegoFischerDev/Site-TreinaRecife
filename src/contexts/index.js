import { createContext, useEffect, useState } from "react";
import { buscarCursos } from '../server/ServerFunctions';

export const globalContext = createContext();

const GlobalVariables = ({ children }) => {

  const [active, setActive] = useState("home");
  const handleClick = (event) => {setActive(event.target.name); document.querySelector('.dropdown-menu').classList.remove("show")};
  const [userName, setUserName] = useState('Login');
  const [admLogado, setAdmLogado] = useState(true);
  const [cursoSelecionado, setCursoSelecionado] = useState("BwcKtuaIEGGC1fTeqluO");

  const [modoEdit, setModoEdit] = useState(true)

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    buscarCursos(setCursos)
  }, [])

  return (
    <globalContext.Provider value={{ handleClick, active, setActive, userName, setUserName, cursoSelecionado, setCursoSelecionado, cursos, admLogado, setAdmLogado, modoEdit, setModoEdit, setCursos }}>
      {children}
    </globalContext.Provider>
  )
}

export default GlobalVariables;