import { useState } from 'react';
import { editarCurso, cadastrarCurso } from '../server/ServerFunctions'

function DetalhesDoCursoModoEdit(props) {

  const idDoCurso = props.cursoInfo.id;
  const [newTitulo, setNewTitulo] = useState(props.cursoInfo.titulo);
  const [newProfessor, setNewProfessor] = useState(props.cursoInfo.professor);
  const [newImagem, setNewImagem] = useState(props.cursoInfo.imagem);
  const [newDescricao, setNewDescricao] = useState(props.cursoInfo.descricao);
  const [newPublicoAlvo, setNewPublicoAlvo] = useState(props.cursoInfo.publicoAlvo);
  const [newPreRequisitos, setNewPreRequisitos] = useState(props.cursoInfo.preRequisitos);
  const [newEmenta, setNewEmenta] = useState(props.cursoInfo.ementa);
  const [newPreco, setNewPreco] = useState(props.cursoInfo.preco);
  const [newDesconto, setNewDesconto] = useState(props.cursoInfo.desconto);
  const [newDias, setNewDias] = useState(props.cursoInfo.dias);
  const [newHorario, setNewHorario] = useState(props.cursoInfo.horario);
  const [newTotalDeSemanas, setNewTotalDeSemanas] = useState(props.cursoInfo.totalDeSemanas);
  const [newProximaTurma, setNewProximaTurma] = useState(props.cursoInfo.proximaTurma);

  const [showModalEditarImagem, setShowModalEditarImagem] = useState(false);


  function HandleEnviar() {
    if(props.CadastrarOuEditar == "Editar"){
      editarCurso(props.setCursos, idDoCurso, newImagem, newTitulo, newProfessor, newPreco, newDesconto, newDias, newHorario, newTotalDeSemanas, newProximaTurma, newDescricao, newPublicoAlvo, newPreRequisitos, newEmenta);
    }
    if(props.CadastrarOuEditar == "Cadastrar"){
      cadastrarCurso(props.setCursos, newImagem, newTitulo, newProfessor, newPreco, newDesconto, newDias, newHorario, newTotalDeSemanas, newProximaTurma, newDescricao, newPublicoAlvo, newPreRequisitos, newEmenta);
    }
    props.setModoEditCurso(false);
  }

  let TextDesconto = "";

  if (newDesconto > 0) {
    TextDesconto = `De R$${props.cursoInfo.preco} por`;
  }


  return (
    <div>

      <div className="container py-3">
        <header>

          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <input style={{width: "100%"}} className="display-4 fw-normal" onChange={(e) => { setNewTitulo(e.target.value) }} value={newTitulo} />
            {/* <h1 className="display-4 fw-normal">{props.cursoInfo.titulo}</h1> */}
            <textarea style={{ width: "100%", height: 100, marginTop: 40 }} className="s-5 text-muted" onChange={(e) => { setNewDescricao(e.target.value) }} value={newDescricao} />
          </div>
        </header>

        <main>
          <div className="row row-cols-1 row-cols-md-1 mb-1 text-center" style={{ justifyContent: "center" }} >
            <div className="col" style={{ maxWidth: 400 }}>
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Curso {newTitulo}</h4>
                </div>
                <div className="card-body">
                  <img src={newImagem} style={{ width: 300, borderRadius: 20, margin: 10 }} />

                  {!showModalEditarImagem &&
                  <button onClick={() => { setShowModalEditarImagem(true) }} style={{ position: "absolute", top: 150, left: 40, backgroundColor: "#f8d0b2", padding: 7, borderRadius: 10 }} >EDITAR IMAGEM</button>
                  }

                  {showModalEditarImagem && 
                  <div>
                    <textarea value={newImagem} onChange={(e) => { setNewImagem(e.target.value) }} style={{width: 500}}></textarea>
                    <button onClick={()=>{setShowModalEditarImagem(false)}} style={{ position: "absolute", top: 150, left: 40, backgroundColor: "greenyellow", padding: 7, borderRadius: 10 }}>SALVAR IMAGEM</button>
                  </div>
                  }

                  <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <div>
                      <label>Preço: R$ </label>
                      <input onChange={(e)=>{setNewPreco(e.target.value)}} value={newPreco}/>
                    </div>
                    <div>
                      <label>Desconto: R$ </label>
                      <input onChange={(e)=>{setNewDesconto(e.target.value)}} value={newDesconto}/>
                    </div>
                  </div>

                  <p className="card-title pricing-card-title" style={{ color: "red" }}>{TextDesconto}</p>
                  <h1 className="card-title pricing-card-title">R${newPreco - newDesconto}</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Professor <input value={newProfessor} onChange={(e)=>{setNewProfessor(e.target.value)}}></input></li>
                    <li><input value={newDias} onChange={(e)=>{setNewDias(e.target.value)}}></input></li>
                    <li><input value={newHorario} onChange={(e)=>{setNewHorario(e.target.value)}}></input></li>
                    <li>Total de <input style={{width: 30}} value={newTotalDeSemanas} onChange={(e)=>{setNewTotalDeSemanas(e.target.value)}}></input> semanas</li>
                    <li>Próxima turma início <input style={{width: 100}} value={newProximaTurma} onChange={(e)=>{setNewProximaTurma(e.target.value)}}></input></li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-primary">Matricule-se agora!</button>
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>

      <div className="container px-4" >
        <div className="row g-4 row-cols-1 row-cols-lg-3" style={{height: 300}}>
          <div style={{marginTop: 40}}>
            <h3 className="fs-2">Público Alvo</h3>
            <textarea style={{width: '100%', height: "100%"}} value={newPublicoAlvo} onChange={(e)=>{setNewPublicoAlvo(e.target.value)}}></textarea>
          </div>

          <div style={{marginTop: 40}}>
            <h3 className="fs-2">Pre-Requisitos</h3>
            <textarea style={{width: '100%', height: "100%"}} value={newPreRequisitos} onChange={(e)=>{setNewPreRequisitos(e.target.value)}}></textarea>
          </div>

          <div style={{marginTop: 40}}>
            <h3 className="fs-2">Ementa</h3>
            <textarea style={{width: '100%', height: "100%"}} value={newEmenta} onChange={(e)=>{setNewEmenta(e.target.value)}}></textarea>
          </div>
        </div>
      </div>
      <div style={{ width: 400, display: "flex", justifyContent: "space-evenly", marginTop: 150, marginInline: "auto" }}>
        <button onClick={HandleEnviar} style={{ padding: 20, backgroundColor: "greenyellow", borderRadius: 15 }}>{props.CadastrarOuEditar == "Editar" && "Editar Curso"}{props.CadastrarOuEditar == "Cadastrar" && "Cadastrar Curso"}</button>
        <button onClick={() => { props.setModoEditCurso(false) }} style={{ padding: 20, backgroundColor: "#f8d0b2", borderRadius: 15 }}>Cancelar</button>
      </div>
    </div>
  )
}

export default DetalhesDoCursoModoEdit;