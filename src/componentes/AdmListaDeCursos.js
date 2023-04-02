import React, { useContext } from 'react';
import { globalContext } from "../contexts";
import { cursoPadrao } from '../mocks/cursos'

function AdmListaDeCursos(props) {

  const { setModoEditCurso, cursosOrdenadosPorData } = useContext(globalContext);

  return (
    <div className='admListaDeCursos'>
      <h2 >Lista de Cursos Abertos</h2>
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
                <button className='botaoNeutro' onClick={() => { setModoEditCurso(true); props.setCadastrarOuEditar("Editar"); props.setCursoInfo(curso) }}>Editar</button>
                <button className='botaoNeutro' onClick={() => { props.setCursoInfo(curso); props.setModalExcluirCurso(true); props.AddBackGroundBlur() }}>Excluir</button>
                <button className='botaoNeutro' onClick={() => { }}>Ver Alunos</button>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ width: 400, display: "flex", justifyContent: "space-evenly", margin: "auto" }}>
        <button className='botaoNeutro' onClick={() => { setModoEditCurso(true); props.setCadastrarOuEditar("Cadastrar"); props.setCursoInfo(cursoPadrao) }}>Cadastrar Novo Curso</button>
      </div>
    </div>
  )
}

export default AdmListaDeCursos;