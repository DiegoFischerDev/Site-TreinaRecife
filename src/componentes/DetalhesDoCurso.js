import { useContext, useState } from 'react';
import { globalContext } from "../contexts";

function DetalhesDoCurso(props) {

  const { professores } = useContext(globalContext);

  let desconto = "";

  if (props.cursoInfo.desconto > 0) {
    desconto = `De R$${props.cursoInfo.preco} por`;
  }

  let dadosDoProfessor = {
    id: '',
    nome: '',
    imagem: '',
    biografia: ''
  }

  professores.map((professor)=>{
    if (professor.id == props.cursoInfo.professor){
      dadosDoProfessor = professor;
    }
  })

  return (
    <div>

      <div className="container py-3">
        <header>

          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">{props.cursoInfo.titulo}</h1>
            <p className="fs-5 text-muted" style={{textAlign: "justify", marginTop: 30}}>{props.cursoInfo.descricao}</p>
          </div>
        </header>

        <main>
          <div className="row row-cols-1 row-cols-md-1 mb-1 text-center" style={{ justifyContent: "center"}} >
            <div className="col" style={{ maxWidth: 400 }}>
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Curso {props.cursoInfo.titulo}</h4>
                </div>
                <div className="card-body">
                  <img src={props.cursoInfo.imagem} style={{ width: 300, borderRadius: 20, margin: 10 }} />
                  <p className="card-title pricing-card-title" style={{ color: "red" }}>{desconto}</p>
                  <h1 className="card-title pricing-card-title">R${props.cursoInfo.preco - props.cursoInfo.desconto}</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Professor {dadosDoProfessor.nome}</li>
                    <li>{props.cursoInfo.dias}</li>
                    <li>{props.cursoInfo.horario}</li>
                    <li>Total de {props.cursoInfo.totalDeSemanas} semanas</li>
                    <li>Próxima turma início <span style={{ fontWeight: "bold" }}>{props.cursoInfo.proximaTurma}</span></li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-primary">Matricule-se agora!</button>
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>

      <div className="container px-4">
          <div className="row g-4 py-2 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              </div>
              <h3 className="fs-2">Público Alvo</h3>
              <p>{props.cursoInfo.publicoAlvo}</p>

            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              </div>
              <h3 className="fs-2">Pre-Requisitos</h3>
              <p>{props.cursoInfo.preRequisitos}.</p>

            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              </div>
              <h3 className="fs-2">Ementa</h3>
              <p>{props.cursoInfo.ementa}</p>

            </div>
          </div>
        </div>
    </div>
  )
}

export default DetalhesDoCurso;