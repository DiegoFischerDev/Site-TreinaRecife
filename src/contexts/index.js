import { createContext, useEffect, useState } from "react";

export const globalContext = createContext();

const GlobalVariables = ({ children }) => {

  const [active, setActive] = useState("home");
  const handleClick = event => setActive(event.target.name);
  const [userName, setUserName] = useState('Login');
  const [cursoSelecionado, setCursoSelecionado] = useState(1);

  return (
    <globalContext.Provider value={{ handleClick, active, setActive, userName, setUserName, cursoSelecionado, setCursoSelecionado }}>
      {children}
    </globalContext.Provider>
  )
}

export default GlobalVariables;