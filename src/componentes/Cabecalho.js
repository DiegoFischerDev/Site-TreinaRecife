import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../contexts";
import { cursosFrontEnd, cursosBackEnd, cursosOutros } from "../mocks/cursos";

function Cabecalho() {

  const { handleClick, active, userName, setCursoSelecionado, setActive } = useContext(globalContext)

  return (
    <>
      <Navbar bg="dark" variant="dark" Navbar fixed="top">
        <Container>
        <img src="https://res.cloudinary.com/di9oiqvom/image/upload/v1678321594/download_srp5sa.png" style={{ width: 50, marginRight: 10, borderRadius: "50%" }} alt="Treina Recife Logo" />
        <Link name="home" className="navbar-brand Link" onClick={handleClick} to="/" style={{ color: "white"}}>Treina Recife</Link>
          <Nav className="me-auto">
            <ul style={{display: "flex", flexDirection: "row", alignItems: "center", margin: 0, listStyle: "none"}}>
            <li className="nav-item">
                <Link name="home" className={active == "home" ? 'nav-link active' : 'nav-link'} onClick={handleClick} to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link name="cursos" className={active == "cursos" ? 'nav-link active' : 'nav-link'} onClick={handleClick} to="/cursos">Cursos</Link>
              </li>
              <li className="nav-item">
                <Link name="consultoria" className={active == "consultoria" ? 'nav-link active' : 'nav-link'} onClick={handleClick} to="/consultoria">Consultoria</Link>
              </li>
            </ul>
            <li className="nav-item dropdown">
                <Link className={active == "outros" ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Outros
                </Link>
                <ul className="dropdown-menu bg-dark">
  
                  {cursosFrontEnd.map((curso) => {
                    return (
                      <li key={curso.id}><Link name={curso.titulo} className="dropdown-item" to="/outros" onClick={() => { setCursoSelecionado(curso.id); setActive("outros") }}><p style={{color:"#889996", margin: 0, padding: 0}}>{curso.titulo}</p></Link></li>
                    )
                  })}
  
                  {cursosBackEnd.map((curso) => {
                    return (
                      <li key={curso.id}><Link name={curso.titulo} className="dropdown-item" to="/outros" onClick={() => { setCursoSelecionado(curso.id); setActive("outros") }}><p style={{color:"#889996", margin: 0, padding: 0}}>{curso.titulo}</p></Link></li>
                    )
                  })}
  
                  {cursosOutros.map((curso) => {
                    return (
                      <li key={curso.id}><Link name={curso.titulo} className="dropdown-item" to="/outros" onClick={() => { setCursoSelecionado(curso.id); setActive("outros") }}><p style={{color:"#889996", margin: 0, padding: 0}}>{curso.titulo}</p></Link></li>
                    )
                  })}
  
                </ul>
              </li>
          </Nav>
          <div className="cabecalhoLogin">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" style={{ width: 50, marginRight: 10 }} alt="Treina Recife Logo" />
            <Link name="login" className="navbar-brand" to="/login" onClick={handleClick}>{userName}</Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabecalho;