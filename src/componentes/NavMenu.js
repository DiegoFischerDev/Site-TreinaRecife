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

      <div className='menu-itens-web'>
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
                <li key={curso.id}><Link name={curso.titulo} className="dropdown-item" to="/outros" onClick={() => { setCursoSelecionado(curso.id); setActive("outros"); document.querySelector('.dropdown-menu').classList.remove("show") }}><p style={{ color: "#889996", margin: 0, padding: 0 }}>{curso.titulo}</p></Link></li>
              )
            })}
          </ul>
        </div>
        <div className="NavMenu-Login">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Treina Recife Logo" />
          <Link name="perfildousuario" className="navbar-brand" to="/perfildousuario" onClick={handleClick}>{userName}</Link>
        </div>
      </div>

      <div className='menu-itens-mobile'>
        <div className="item dropdown">
          <Link className={active == "outros" ? 'link dropdown-toggle active' : 'link dropdown-toggle'} role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</Link>
          <ul className="dropdown-menu bg-dark">
            <li>
              <Link name="home" className={(active == "home" || !active) ? 'link active' : 'link'} onClick={handleClick} to="/" >Home</Link></li>
            <li>
              <Link name="cursos" className={active == "cursos" ? 'link active' : 'link'} onClick={handleClick} to="/cursos">Cursos</Link>
            </li>
            <li>
              <Link name="consultoria" className={active == "consultoria" ? 'link active' : 'link'} onClick={handleClick} to="/consultoria">Consultoria</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavMenu;