import React, { useContext, useEffect, useState } from 'react';
import LoginForm from '../../componentes/LoginForm';
import DetalhesDoCursoModoEdit from '../../componentes/DetalhesDoCursoModoEdit';
import { globalContext } from "../../contexts";
import { cursoPadrao } from '../../mocks/cursos'
import ModalExcluirCurso from '../../componentes/ModalExcluirCurso';

const PerfilDoUsuario = () => {

  const { userName, cursos, modoEditCurso, setModoEditCurso, setCursos, cursoSelecionado, cursosOrdenadosPorData } = useContext(globalContext);

  const [CadastrarOuEditar, setCadastrarOuEditar] = useState("Cadastrar");
  const [cursoInfo, setCursoInfo] = useState(cursoPadrao);
  const [modalExcluirCurso, setModalExcluirCurso] = useState(false);

  return (
    <div>
      {!modoEditCurso && userName == 'Login' && <LoginForm />}

      {!modoEditCurso && userName == 'Admin' &&
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", margin: "auto", marginBottom: 150, width: "100%" }}>

          <h1>Bem Vindo {userName}</h1>

          <h2 style={{marginTop: 40}}>Lista de Cursos Abertos</h2>
          <div>
          {cursosOrdenadosPorData?.map((curso) => {
            return (
              <div className='agendaDeCursosCard' key={curso.id} >
                <div className='agendaCursosImgTituloContainer'>
                  <img style={{ width: 100, height: 60, padding: 5 }} src={curso.imagem} />
                  <span style={{ marginInline: 10, fontSize: 18 }}><strong>{curso.titulo}</strong></span>
                </div>
                  <span style={{ marginInline: 10, fontSize: 18 }}>Início: <strong>{curso.proximaTurma}</strong></span>
                  <span style={{ marginInline: 10, fontSize: 18 }}>{curso.dias} {curso.horario}</span>
                  <div>
                    <button className='botaoNeutro' onClick={() => { setModoEditCurso(true); setCadastrarOuEditar("Editar"); setCursoInfo(curso) }}>Editar</button>
                    <button className='botaoNeutro' onClick={() => { setCursoInfo(curso); setModalExcluirCurso(true) }}>Excluir</button>
                    <button className='botaoNeutro' onClick={() => { }}>Ver Alunos</button>
                  </div>
              </div>
            )
          })}
          </div>
          <div style={{ width: 400, display: "flex", justifyContent: "space-evenly", margin: "auto" }}>
            <button className='botaoNeutro' onClick={() => { setModoEditCurso(true); setCadastrarOuEditar("Cadastrar"); setCursoInfo(cursoPadrao) }}>Cadastrar Novo Curso (Admin)</button>
          </div>

          <h2 style={{marginTop: 40}}>Lista de Professores</h2>
          <h2 style={{marginTop: 40}}>Lista de Alunos</h2>

          {modalExcluirCurso &&
            <ModalExcluirCurso titulo={cursoInfo.titulo} id={cursoInfo.id} setModalExcluirCurso={setModalExcluirCurso} setCursos={setCursos} />
          }

        </div>
      }

      {modoEditCurso &&
        <DetalhesDoCursoModoEdit CadastrarOuEditar={CadastrarOuEditar} cursoInfo={cursoInfo} setModoEditCurso={setModoEditCurso} setCursos={setCursos} />
      }

    </div>
  )
}

export default PerfilDoUsuario;