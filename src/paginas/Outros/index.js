import React, { useContext } from "react";
import DetalhesDoCurso from "../../componentes/DetalhesDoCurso";
import { globalContext } from "../../contexts";
import { cursosFrontEnd, cursosBackEnd, cursosOutros  } from "../../mocks/cursos";

function Outros(){

  const { cursoSelecionado } = useContext(globalContext);

  let cursoInfo = {
    id: 0,
    titulo: "",
    professor: "",
    imagem: "",
    descricao: "",
    publicoAlvo: "",
    preRequisitos: "",
    ementa: "",
    preco: 0,
    desconto: 0,
    dias: "",
    horario: "",
    totalDeSemanas: 0,
    proximaTurma: ""
  };

  cursosFrontEnd.map((curso)=>{
    if(curso.id == cursoSelecionado){
      cursoInfo = curso;
    }
  })

  cursosBackEnd.map((curso)=>{
    if(curso.id == cursoSelecionado){
      cursoInfo = curso;
    }
  })

  cursosOutros.map((curso)=>{
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