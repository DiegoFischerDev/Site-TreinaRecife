import React, { useContext, useState } from "react";
import DetalhesDoCurso from "../../componentes/DetalhesDoCurso";
import DetalhesDoCursoModoEdit from "../../componentes/DetalhesDoCursoModoEdit";
import { globalContext } from "../../contexts";

function Outros(){

  const { cursoSelecionado, cursos, admLogado, modoEdit, setModoEdit, setCursos } = useContext(globalContext);

  let cursoInfo = {};

  cursos.map((curso)=>{
    if(curso.id == cursoSelecionado){
      cursoInfo = curso;
    }
  })

  return(
    <div>
      {modoEdit && <DetalhesDoCursoModoEdit cursoInfo={cursoInfo} setModoEdit={setModoEdit} setCursos={setCursos} />}
      {!modoEdit && <DetalhesDoCurso cursoInfo={cursoInfo} />}
      {(admLogado && !modoEdit) &&       <div style={{width: 400, display: "flex", justifyContent: "space-evenly", margin: "auto"}}>
        <button onClick={()=>{setModoEdit(true)}} style={{padding: 20, backgroundColor: "#f8d0b2", borderRadius: 15}}>Editar Curso (Admin)</button>
      </div>}

    </div>
  )
}

export default Outros;