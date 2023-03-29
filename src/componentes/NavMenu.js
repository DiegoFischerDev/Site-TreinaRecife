import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../contexts";

function NavMenu() {

  const { handleClick, active, userName, setCursoSelecionado, setActive, cursos } = useContext(globalContext)

  return (
    <div className='NavMenu-container'>
      <div className='logo'>
        <img src="https://res.cloudinary.com/di9oiqvom/image/upload/v1678321594/download_srp5sa.png" />
        <Link name="home" className={active == "home" ? 'link active' : 'link'} onClick={handleClick} to="/" ><h2>Treina Recife</h2></Link>
      </div>
      <nav className='menu-itens'>
        <Link name="home" className={(active == "home" || !active) ? 'link active' : 'link'} onClick={handleClick} to="/" >Home</Link>
        <Link name="cursos" className={active == "cursos" ? 'link active' : 'link'} onClick={handleClick} to="/cursos">Cursos</Link>
        <Link name="consultoria" className={active == "consultoria" ? 'link active' : 'link'} onClick={handleClick} to="/consultoria">Consultoria</Link>
        <div className="item dropdown">
          <Link className={active == "outros" ? 'link dropdown-toggle active' : 'link dropdown-toggle'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Outros
          </Link>
          <ul className="dropdown-menu bg-dark">
            {cursos.map((curso) => {
              return (
                <li key={curso.id}><Link name={curso.titulo} className="dropdown-item" to="/outros" onClick={() => { setCursoSelecionado(curso.id); setActive("outros") }}><p style={{ color: "#889996", margin: 0, padding: 0 }}>{curso.titulo}</p></Link></li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavMenu;