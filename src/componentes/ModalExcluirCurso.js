import { excluirCurso } from '../server/ServerFunctions'
import { globalContext } from "../contexts";
import { useContext } from 'react';

function ModalExcluirCurso() {

  const { setCursos, cursoInfo, setModalExcluirCurso} = useContext(globalContext);

  function RemoveBackGroundBlur() {
    document.querySelector('#PerfilDoUsuario').classList.remove('blur');
  }

  return (
      <div id="ModalExcluirCurso" className='shadown modalExcluirCurso' style={{filter: "blur(0)"}}>
        <div><h4>BackEnd</h4></div>
        <span>Tem Certeza que deseja excluir o curso</span>
        <span><strong style={{ fontSize: 20 }}>{cursoInfo.titulo}</strong>?</span>
        <div>
          <button className='botaoNeutro' style={{ paddingInline: 18 }} onClick={() => { excluirCurso(cursoInfo.id, setCursos); setModalExcluirCurso(false); RemoveBackGroundBlur() }} >Excluir</button>
          <button className='botaoNeutro' onClick={() => { setModalExcluirCurso(false); RemoveBackGroundBlur() }}>Cancelar</button>
        </div>
      </div>
  )
}

export default ModalExcluirCurso;