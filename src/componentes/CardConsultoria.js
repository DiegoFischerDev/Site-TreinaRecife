
import { Link } from "react-router-dom";

const CardConsultoria = (props) => {


  return (
    <section>
      <div className="card" style={{ width: "90vw", maxWidth: "400px", padding: 10, marginInline: 10, marginBottom: "30px"}}>
        <div style={{border: '1px solid #E4E2E2', borderRadius: 10}}><img src={props.imagem} className="card-img-top" alt="Imagem do Curso" style={{height: 150, borderWidth: 2, borderRadius: 10}}/></div>
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p style={{margin: 0}}>{props.descricao}</p>
          <Link style={{marginTop: 20}} className="btn btn-primary">Saiba mais</Link>
        </div>
      </div>

    </section>
  )
}

export default CardConsultoria;