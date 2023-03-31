import React, { useContext, useEffect, useState } from 'react';
import LoginForm from '../../componentes/LoginForm';
import DetalhesDoCursoModoEdit from '../../componentes/DetalhesDoCursoModoEdit';
import { globalContext } from "../../contexts";
import { cursoPadrao } from '../../mocks/cursos'

const PerfilDoUsuario = () => {

  const { userName, cursos, modoEditCurso, setModoEditCurso, setCursos, cursoSelecionado } = useContext(globalContext);

  const [CadastrarOuEditar, setCadastrarOuEditar] = useState("Cadastrar");
  const [cursoInfo, setCursoInfo] = useState(cursoPadrao);
  const [modalExcluirCurso, setModalExcluirCurso] = useState(false);

  return (
    <div>
      {!modoEditCurso && userName == 'Login' && <LoginForm />}

      {!modoEditCurso && userName == 'Admin' &&
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", margin: "auto", marginBottom: 150, width: "100%" }}>

          <h1>Bem Vindo {userName}</h1>

          <h2 style={{marginTop: 40}}>Lista de Cursos</h2>
          <div>
            {cursos?.map((curso) => {
              return (
                <div key={curso.id} style={{ border: "solid", borderRadius: 10, margin: 3, backgroundColor: "#E8F0FE" }}>
                  <button className='botaoNeutro botaoPequeno' onClick={() => { setModoEditCurso(true); setCadastrarOuEditar("Editar"); setCursoInfo(curso) }}>Editar</button>
                  <button className='botaoNeutro botaoPequeno' onClick={() => { setCursoInfo(curso); setModalExcluirCurso(true) }}>Excluir</button>
                  <button className='botaoNeutro botaoPequeno' onClick={() => { }}>Ver Alunos</button>
                  <img style={{ marginLeft: 15, width: 50, height: 30 }} src={curso.imagem} />
                  <span style={{ marginInline: 10, fontSize: 18 }}><strong>{curso.titulo}</strong></span>
                  <span style={{ marginInline: 10, fontSize: 18 }}>{curso.proximaTurma}</span>
                  <span style={{ marginInline: 10, fontSize: 18 }}>{curso.horario}</span>
                  <br />
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
            <div className='shadown modalExcluirCurso'>
              <div><h4>BackEnd</h4></div>
              <span>Tem Certeza que deseja excluir o curso</span>
              <span><strong style={{ fontSize: 20 }}>{cursoInfo.titulo}</strong>?</span>
              <div>
                <button className='botaoNeutro' style={{ paddingInline: 18 }} >Excluir</button>
                <button className='botaoNeutro' onClick={() => { setModalExcluirCurso(false) }}>Cancelar</button>
              </div>
            </div>
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