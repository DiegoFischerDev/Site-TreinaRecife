import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../contexts";

const CardCursos = (props) => {

  const { setCursoSelecionado, setActive } = useContext(globalContext)

  return (
    <section>
      <div className="card" style={{ padding: 10, marginInline: 10}}>
        <div style={{border: '1px solid #E4E2E2', borderRadius: 10}}><img src={props.imagem} className="card-img-top" alt="Imagem do Curso" style={{height: 150, borderWidth: 2, borderRadius: 10}}/></div>
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p style={{margin: 0}}>Professor {props.professor}</p>
          <p style={{margin: 0}}>{props.dias}</p>
          <p style={{margin: 0}}>{props.horario}</p>
          <p style={{margin: 0}}>Total {props.totalDeSemanas} semanas</p>
          <p style={{margin: 0}}>Próxima turma {props.proximaTurma}</p>
          <Link onClick={()=>{setCursoSelecionado(props.id); setActive("outros")}} style={{marginTop: 20}} to="/curso" className="btn btn-primary">Saiba mais</Link>
        </div>
      </div>

    </section>
  )
}

export default CardCursos;