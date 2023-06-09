import { createContext, useEffect, useState } from "react";
import { buscarCursos, buscarProfessores } from '../server/ServerFunctions';
import { cursoPadrao } from '../mocks/cursos'

export const globalContext = createContext();

const GlobalVariables = ({ children }) => {

  const [active, setActive] = useState("home");
  const handleClick = (event) => { setActive(event.target.name); document.querySelector('.dropdown-menu').classList.remove("show") };

  const [userName, setUserName] = useState('Login');
  const [modoEditCurso, setModoEditCurso] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState("BwcKtuaIEGGC1fTeqluO");
  const [cursos, setCursos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [cursoInfo, setCursoInfo] = useState(cursoPadrao);
  const [CadastrarOuEditar, setCadastrarOuEditar] = useState("Cadastrar");
  const [modalExcluirCurso, setModalExcluirCurso] = useState(false);
  const [modalExcluirProfessor, setModalExcluirProfessor] = useState('hidden');

  useEffect(() => {
    buscarCursos(setCursos);
    buscarProfessores(setProfessores);
  }, [])

  // ****************** Ordena Cursos Por Data ******************* ///

  let array;
  let listaDeCursos = cursos;
  listaDeCursos.map((curso) => {
    array = curso.proximaTurma.split('/')
    curso.DataDaProximaTurma = new Date(`${array[2]}-${array[1]}-${array[0]}`)
  })

  let cursosOrdenadosPorData = listaDeCursos.sort(function (a, b) {
    if (a.DataDaProximaTurma > b.DataDaProximaTurma) return 1;
    if (a.DataDaProximaTurma < b.DataDaProximaTurma) return -1;
    if (a.DataDaProximaTurma == b.DataDaProximaTurma) return 0;
  })

  return (
    <globalContext.Provider value={{ handleClick, active, setActive, userName, setUserName, cursoSelecionado, setCursoSelecionado, cursos, modoEditCurso, setModoEditCurso, setCursos, cursosOrdenadosPorData, professores, setProfessores, cursoInfo, setCursoInfo, CadastrarOuEditar, setCadastrarOuEditar, modalExcluirCurso, setModalExcluirCurso, modalExcluirProfessor, setModalExcluirProfessor }}>
      {children}
    </globalContext.Provider>
  )
}

export default GlobalVariables;