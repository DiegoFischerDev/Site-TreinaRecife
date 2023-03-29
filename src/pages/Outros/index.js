import React, { useContext } from "react";
import DetalhesDoCurso from "../../componentes/DetalhesDoCurso";
import { globalContext } from "../../contexts";

function Outros(){

  const { cursoSelecionado, cursos } = useContext(globalContext);

  let cursoInfo = {};

  cursos.map((curso)=>{
    if(curso.id == cursoSelecionado){
      cursoInfo = curso;
    }
  })

  return(
    <div>
      <DetalhesDoCurso cursoInfo={cursoInfo} />
    </div>
  )
}

export default Outros;