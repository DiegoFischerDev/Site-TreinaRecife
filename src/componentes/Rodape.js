import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../contexts";

const Rodape = () => {

  const { handleClick, active, modoEditCurso } = useContext(globalContext)

  return (
    <div className="container" style={{position: "relative"}}>

      {modoEditCurso && <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "black", width: "100%", height: "100%", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>Você está no BackEnd da Treina Recife</div>}

      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-white" >

          <li className="nav-item">
            <Link style={{ textDecoration: "none", marginLeft: 20, color: "black" }} name="home" className={active == "home" ? 'RodapeText active' : 'RodapeText'} onClick={handleClick} to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: "none", marginLeft: 20, color: "black" }} name="cursos" className={active == "cursos" ? 'RodapeText active' : 'RodapeText'} onClick={handleClick} to="/cursos">Cursos</Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: "none", marginLeft: 20, color: "black" }} name="consultoria" className={active == "consultoria" ? 'RodapeText active' : 'RodapeText'} onClick={handleClick} to="/consultoria">Consultoria</Link>
          </li>


        </ul>
        <p style={{ textAlign: "center", marginBottom: 0 }} className="RodapeText RodapeEnd">&copy; 2023 Treina Recife</p>
        <p style={{ textAlign: "center", marginTop: 0 }} className="RodapeText RodapeEnd">Desenvolvido por &nbsp;<a href="https://diegofischer.dev" target="_blank">DiegoFischer.dev</a></p>
      </footer>
    </div>
  )
}

export default Rodape;