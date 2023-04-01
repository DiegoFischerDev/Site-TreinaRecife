import {excluirCurso} from '../server/ServerFunctions'

function ModalExcluirCurso(props) {
  return(
    <div className='shadown modalExcluirCurso'>
    <div><h4>BackEnd</h4></div>
    <span>Tem Certeza que deseja excluir o curso</span>
    <span><strong style={{ fontSize: 20 }}>{props.titulo}</strong>?</span>
    <div>
      <button className='botaoNeutro' style={{ paddingInline: 18 }} onClick={()=>{excluirCurso(props.id, props.setCursos); props.setModalExcluirCurso(false)}} >Excluir</button>
      <button className='botaoNeutro' onClick={() => { props.setModalExcluirCurso(false) }}>Cancelar</button>
    </div>
  </div>
  )
}

export default ModalExcluirCurso;